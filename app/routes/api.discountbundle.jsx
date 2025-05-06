import { authenticate } from "../shopify.server";
import { getEligibleDiscountBundle, getLatestDiscountBundle } from "../services/bundle.service";
import { getStoreDetails } from "../services/store.service";
import { currentSessionHasActiveSubscription } from "../services/subscription.service";
import { getOrderAnalytics } from "../services/analytics.service";
import { getActiveSubscriptionForCurrentSession } from "../services/subscription.service";

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

      const currentSubscription = await getActiveSubscriptionForCurrentSession({sessionId: session.id});
      const {discountedMonthlyRevenue} = await getOrderAnalytics({sessionId: session.id});

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