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

    if (!store) return null;

    const url = new URL(request.url);
    const productId = url.searchParams.get('productId');
    
    const discountBundles = await BundleService.getAllBundles(session.id);
    if ( !discountBundles.success || discountBundles.bundles.length <= 0 ) {
      return new Response(JSON.stringify({
        response: 'no_discounts',
        productId
      }));
    }

    const eligibleProductBundle = await BundleService.getEligibleProductBundle({storefront, discountBundles, productId});

    if (!eligibleProductBundle) {
      return new Response(JSON.stringify({
        response: 'no_discounts',
        productId
      }));
    }

    return new Response(JSON.stringify({
        eligibleProductBundle,
        productId,
        store
    }));
}