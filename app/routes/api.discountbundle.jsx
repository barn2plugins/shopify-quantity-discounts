import { authenticate } from "../shopify.server";
import { BundleService } from "../services/bundle.service";
import { StoreService } from "../services/store.service.js";

export async function loader({ request }) {
    const {storefront, session} = await authenticate.public.appProxy(request);

    if (!storefront) {
      return new Response();
    }
    const store = await StoreService.getStoreDetails(session.id, {
      moneyFormat: true,
    });

    const url = new URL(request.url);
    const productId = url.searchParams.get('productId');
    
    try {
      const eligibleProductBundle = await BundleService.getEligibleDiscountBundle({storefront, session, productId});
      
      if (!eligibleProductBundle) {
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