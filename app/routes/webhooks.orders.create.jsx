import { findDiscountBundlesByNames } from "../services/bundle.service";
import { saveOrderAnalytics, getCurrentMonthsOrderAnalytics } from "../services/analytics.service";
import { authenticate } from "../shopify.server";
import { trackOrderReceiveEvent } from "../services/mixpanel.service"
import { sendUsageEventToMantle } from "../services/mantle.service";
import { setOrUpdateOption, getOptionValue } from "../services/options.service";
import { getStoreDetails } from "../services/store.service";
import { processOrderLineItems, trackFirstOrderReceived, trackOrderReceivedOnMantle } from "../utils/analytics";

export const action = async ({ request }) => {
  const { admin, payload, session, topic } = await authenticate.webhook(request);

  if (topic !== 'ORDERS_CREATE') {
    return new Response();
  }

  // Get the store details for this session
  const store = await getStoreDetails(session.id, {id: true});

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

  return new Response();
};
