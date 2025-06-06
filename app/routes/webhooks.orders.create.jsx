import { findDiscountBundlesByNames } from "../services/bundle.service";
import { saveOrderAnalytics } from "../services/analytics.service";
import { authenticate } from "../shopify.server";
import { trackOrderReceiveEvent } from "../services/mixpanel.service"
import { sendUsageEvent } from "../services/mantle.service";
import { setOrUpdateOption, getOptionValue } from "../services/options.service";
import { getStoreDetails } from "../services/store.service";

export const action = async ({ request }) => {
  const { payload, session, topic } = await authenticate.webhook(request);

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
  
  // Trim out the lineItems to save in the database only the necessary fields
  const parsedLineItems = lineItems.map((lineItem) => {
    return {
      cartLineId: lineItem.id,
      productId: lineItem.product_id,
      variantId: lineItem.variant_id,
      title: lineItem.title,
      variantTitle: lineItem.name,
      quantity: lineItem.quantity,
      price: lineItem.price,
      discountAllocations: lineItem.discount_allocations
    };
  });

  // Calculate the discounted order value
  const discountedOrderValue = lineItems.reduce((total, lineItem) => {
    if (lineItem.discount_allocations.length === 0) {
      return total;
    }
    const totalDiscountAmount = lineItem.discount_allocations.reduce((sum, allocation) => {
      return sum + parseFloat(allocation.amount);
    }, 0);

    const originalTotal = parseFloat(lineItem.price) * parseInt(lineItem.quantity);
    const finalPrice = originalTotal - totalDiscountAmount;

    return total + finalPrice;
  }, 0);

  if (discountedOrderValue == 0) {
    return new Response();
  }

  // Save the order analytics in our database
  await saveOrderAnalytics({orderId: payload.id, parsedLineItems, discountedOrderValue, sessionId: session?.id});

  try {
    // Track the order receive event in Mixpanel
    await trackOrderReceiveEvent({session, order: { id: payload.id, revenue: discountedOrderValue }})

    // For the first order received, send the event to Mantle
    const firstOrderReceived = await getOptionValue({storeId: store.id, key: 'first_order_received'})
    if (!firstOrderReceived) {
      const eventName = 'first_order_received';
      const properties = {
        revenue: discountedOrderValue,
      }
      await sendUsageEvent({session, eventName, properties});

      // Record first order received in the store
      await setOrUpdateOption({sessionId: session.id, key: 'first_order_received', value: 'true'});
    }
  } catch (error) {
  }

  return new Response();
};
