import { findDiscountBundlesByNames } from "../services/bundle.service";
import { saveOrderAnalytics, getStoreCurrentRevenue, trackFirstOrderReceived, trackOrderReceivedOnMantle, track75ThresholdOnMantle, track100ThresholdOnMantle } from "../services/analytics.service";
import { authenticate } from "../shopify.server";
import { trackOrderReceiveEvent } from "../services/mixpanel.service"
import { getStoreDetails } from "../services/store.service";
import { getPlanRevenueLimitBySubscription } from "../services/subscription.service"
import { processOrderLineItems } from "../utils/analytics";
import { getDateRangeForAnalytics } from "../utils/utils";
import { getMantleCustomer } from "../services/mantle.service";

export const action = async ({ request }) => {
  const { payload, session, topic } = await authenticate.webhook(request);

  if (topic !== 'ORDERS_CREATE') {
    return new Response();
  }

  // Get the store details for this session
  const store = await getStoreDetails(session.id, {
    id: true,
    createdAt: true
  });

  // Check if the order has an automatic discount applied
  const hasAutomaticDiscount = payload.discount_applications.length > 0;
  if (!hasAutomaticDiscount) {
    return new Response();
  }

  const nameOfDiscountApplications = payload?.discount_applications.map((application) => application.title);

  const discountBundlesFound = await findDiscountBundlesByNames({nameOfDiscountApplications, sessionId: session?.id});
  if (!discountBundlesFound.success) {
    return new Response();
  }

  // Find the discount bundle lineItems from the payload
  const lineItems = payload.line_items;

  const { parsedLineItems, discountedOrderValue, hasValidOrder } = processOrderLineItems(lineItems);

  if (!hasValidOrder) {
    return new Response();
  }

  // Save the order analytics in our database
  await saveOrderAnalytics({orderId: payload.id, parsedLineItems, discountedOrderValue, sessionId: session?.id});

  try {
    // Track the order receive event in Mixpanel
    await trackOrderReceiveEvent({session, order: { id: payload.id, revenue: discountedOrderValue }})

    // For the first order received, send the event to Mantle
    await trackFirstOrderReceived({ session, store, discountedOrderValue });
    
    // Record every order received event in Mantle
    await trackOrderReceivedOnMantle({ session, orderId: payload.id, discountedOrderValue });
  } catch (error) {
    console.log(error)
  }

  try {
    const mantleCustomer = await getMantleCustomer({session});
    const subscription = mantleCustomer.subscription;
    const planRevenueLimitBySubscription = await getPlanRevenueLimitBySubscription({planName: subscription?.plan?.name});
    if (planRevenueLimitBySubscription === 0) return;

    const dateRange = getDateRangeForAnalytics({subscription, store});
    const storeCurrentRevenue = await getStoreCurrentRevenue({session, ...dateRange});

    if (!storeCurrentRevenue.success) return;

    await track75ThresholdOnMantle({session, payload, store, planRevenueLimitBySubscription, storeCurrentRevenue});
    
    await track100ThresholdOnMantle({session, payload, store, planRevenueLimitBySubscription, storeCurrentRevenue});
  } catch (error) {
    console.log(error);
  }

  return new Response();
};
