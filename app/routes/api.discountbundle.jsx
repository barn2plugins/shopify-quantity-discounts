import { authenticate } from "../shopify.server";
import { getEligibleDiscountBundle, getLatestDiscountBundle } from "../services/bundle.service";
import { getStoreDetails } from "../services/store.service";
import { currentSessionHasActiveSubscription } from "../services/subscription.service";
import { getOrderAnalytics } from "../services/analytics.service";
import { getActiveSubscriptionForCurrentSession } from "../services/subscription.service";
import { convertUSDValuetoShopLocalCurrency } from "../utils/currency";
import { monthlyPlans } from "../utils/plans";
import { getMantleCustomer } from "../services/mantle.service";
import { getDateRangeForAnalytics } from "../utils/utils"

export async function action({ request }) {
  if (request.method !== 'POST') {
    return new Response();
  }
  
  const {storefront, session} = await authenticate.public.appProxy(request);

  if (!storefront) {
    return new Response();
  }

  const store = await getStoreDetails(session.id, {
    id: true,
    currency: true,
    moneyFormat: true,
    isPartnerDevelopment: true,
    ianaTimezone: true,
  });

  const mantleCustomer = await getMantleCustomer({session});

  const isPartnerDevelopment = store?.isPartnerDevelopment;
  const shouldDisableDiscounts = isPartnerDevelopment === false && !mantleCustomer.subscription;

  if (shouldDisableDiscounts) {
    return new Response(JSON.stringify({
      success: true,
      response: 'disable_discounts',
    }));
  }

  const { productId, isInEditor } = await request.json();
  const shouldSendDummyBundleData = typeof productId === 'undefined' && isInEditor;

  try {
    let eligibleProductBundle = shouldSendDummyBundleData ? 
      await getLatestDiscountBundle({storeId: store.id}) : 
      await getEligibleDiscountBundle({storefront, session, productId, store});

    if (!eligibleProductBundle) {
      return new Response(JSON.stringify({
        success: false,
        response: 'no_discounts',
        productId
      }));
    }

    const activeSubscription = mantleCustomer?.subscription;

    // If the user is a partner then we don't need to check the revenue limit
    if (isPartnerDevelopment) {
      return new Response(JSON.stringify({
        success: true,
        eligibleProductBundle,
        productId,
        store
      }));
    }

    const {name, revenueLimit} = monthlyPlans.find(p => p.name === activeSubscription?.plan?.name);
    const analyticsDateRange = getDateRangeForAnalytics(activeSubscription); 
    const {discountedMonthlyRevenue} = await getOrderAnalytics({sessionId: session.id, ...analyticsDateRange});
    const convertedRevenueLimit = convertUSDValuetoShopLocalCurrency(1000, store.currency);

    if (
      (store.currency === 'USD' && discountedMonthlyRevenue >= revenueLimit && name !== 'Pro') || 
      (store.currency !== 'USD' && discountedMonthlyRevenue >= convertedRevenueLimit && name !== 'Pro')
    ) {
      return new Response(JSON.stringify({
        success: false,
        response: 'no_discounts',
        productId
      }));
    }

    return new Response(JSON.stringify({
      success: true,
      eligibleProductBundle,
      productId,
      store
    }));
  } catch (e) {
    return new Response(JSON.stringify({
      success: false
    }));
  }
}