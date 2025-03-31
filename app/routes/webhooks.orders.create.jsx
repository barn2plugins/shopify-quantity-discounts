import { BundleService } from "../services/bundle.service";
import { saveOrderAnalytics } from "../services/analytics.service";
import { authenticate } from "../shopify.server";

export const action = async ({ request }) => {
  const { payload, session, topic } = await authenticate.webhook(request);

  if (topic !== 'ORDERS_CREATE') {
    return new Response();
  }

  // Check if the order has an automatic discount applied
  const hasAutomaticDiscount = payload.discount_applications.length > 0;
  if (!hasAutomaticDiscount) {
    return new Response();
  }

  const nameOfDiscountApplications = payload?.discount_applications.map((application) => application.title);

  const discountBundlesFound = await BundleService.findDiscountBundlesByNames({nameOfDiscountApplications, sessionId: session?.id});
  if (!discountBundlesFound.success) {
    return new Response();
  }

  // Find the discount bundle lineItems from the payload
  const lineItems = payload.line_items;
  const discountBundleLineItems = lineItems.map((lineItem) => {
    if (lineItem.discount_allocations.length === 0) {
      return false;
    }
    const totalDiscountAmount = lineItem.discount_allocations.reduce((sum, allocation) => {
      return sum + parseFloat(allocation.amount);
    }, 0);

    return {
      ...lineItem,
      totalDiscountAmount
    };
  }).filter(Boolean);

  /* todo: Save the discount analytics to the database */

  if (discountBundleLineItems.length === 0) {
    return new Response();
  }

  await saveOrderAnalytics({discountBundleLineItems, sessionId: session?.id});

  return new Response();
};
