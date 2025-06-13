import { authenticate } from "../shopify.server";
import { getEligibleDiscountBundle, getLatestDiscountBundle } from "../services/bundle.service";
import { getStoreDetails } from "../services/store.service";
import { getMantleCustomer } from "../services/mantle.service";

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