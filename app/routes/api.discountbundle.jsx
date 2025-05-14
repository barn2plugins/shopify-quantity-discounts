import { authenticate } from "../shopify.server";
import { getEligibleDiscountBundle, getLatestDiscountBundle } from "../services/bundle.service";
import { getStoreDetails } from "../services/store.service";
import { currentSessionHasActiveSubscription } from "../services/subscription.service";
import { getOrderAnalytics } from "../services/analytics.service";
import { getActiveSubscriptionForCurrentSession } from "../services/subscription.service";
import { convertUSDValuetoShopLocalCurrency } from "../utils/currency";
import { defaultPlans } from "../utils/plans";

export async function action({ request }) {
  if (request.method !== 'POST') {
    return new Response();
  }
  console.log('request logged');
  const {storefront, session} = await authenticate.public.appProxy(request);

  if (!storefront) {
    return new Response();
  }

  const store = await getStoreDetails(session.id, {
    id: true,
    currency: true,
    moneyFormat: true,
    isPartnerDevelopment: true
  });

  const isPartnerDevelopment = store?.isPartnerDevelopment;
  const isSubscribed = await currentSessionHasActiveSubscription({sessionId: session.id});

  const shouldDisableDiscounts = isPartnerDevelopment === false && !isSubscribed;

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
      await getEligibleDiscountBundle({storefront, session, productId});

    if (!eligibleProductBundle) {
      return new Response(JSON.stringify({
        success: true,
        response: 'no_discounts',
        productId
      }));
    }

    const activeSubscription = await getActiveSubscriptionForCurrentSession({sessionId: session.id});

    // If the user is a partner and doesn't have active subscription, we don't need to check the revenue limit
    if (!activeSubscription && isPartnerDevelopment) {
      return new Response(JSON.stringify({
        success: true,
        eligibleProductBundle,
        productId,
        store
      }));
    }

    const {name, revenueLimit} = defaultPlans.find(p => p.name === activeSubscription?.plan);
    const {discountedMonthlyRevenue} = await getOrderAnalytics({sessionId: session.id});
    const convertedRevenueLimit = convertUSDValuetoShopLocalCurrency(1000, store.currency);

    if (
      (store.currency === 'USD' && discountedMonthlyRevenue >= revenueLimit && name !== 'Pro') || 
      (store.currency !== 'USD' && discountedMonthlyRevenue >= convertedRevenueLimit && name !== 'Pro')
    ) {
      return new Response(JSON.stringify({
        success: true,
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