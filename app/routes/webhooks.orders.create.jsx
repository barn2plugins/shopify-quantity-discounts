import { findDiscountBundlesByNames } from "../services/bundle.service";
import { saveOrderAnalytics, getStoreCurrentRevenue, trackFirstOrderReceived, trackOrderReceivedOnMantle } from "../services/analytics.service";
import { authenticate } from "../shopify.server";
import { trackOrderReceiveEvent } from "../services/mixpanel.service"
import { sendUsageEventToMantle } from "../services/mantle.service";
import { setOrUpdateOption, getOptionValue } from "../services/options.service";
import { getStoreDetails } from "../services/store.service";
import { getActiveSubscriptionForCurrentSession, getPlanRevenueLimitBySubscription } from "../services/subscription.service"
import { processOrderLineItems } from "../utils/analytics";
import { getDateRangeForWebhookOrderAnalytics } from "../utils/utils";

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
    await trackFirstOrderReceived({ session, store, discountedOrderValue, getOptionValue, sendUsageEventToMantle, setOrUpdateOption });
    
    // Record every order received event in Mantle
    await trackOrderReceivedOnMantle({ session, orderId: payload.id, discountedOrderValue, sendUsageEventToMantle });
  } catch (error) {
  }

  try {
    const currentSubscription = await getActiveSubscriptionForCurrentSession({session});
    const planRevenueLimitBySubscription = await getPlanRevenueLimitBySubscription({currentSubscription});
    if (planRevenueLimitBySubscription === 0) return;

    const dateRange = getDateRangeForWebhookOrderAnalytics({subscription: currentSubscription, store});
    const storeCurrentRevenue = await getStoreCurrentRevenue({session, ...dateRange});

    if (!storeCurrentRevenue.success) return;

    const revenueThreshold75Percentage = 0.75;
    const revenueThreshold75 = planRevenueLimitBySubscription * revenueThreshold75Percentage;
    
    if (storeCurrentRevenue?.discountedMonthlyRevenue >= revenueThreshold75) {
      await sendUsageEventToMantle({
        session,
        eventName: "starter_free_75_threshold_reached",
        properties: { 'Order ID': payload.id, 'Revenue': storeCurrentRevenue?.discountedMonthlyRevenue }
      })
    }

    if (storeCurrentRevenue?.discountedMonthlyRevenue >= planRevenueLimitBySubscription) {
      await sendUsageEventToMantle({
        session,
        eventName: "starter_free_100_threshold_reached",
        properties: { 'Order ID': payload.id, 'Revenue': storeCurrentRevenue?.discountedMonthlyRevenue }
      })
    }
  } catch (error) {
  }

  return new Response();
};
