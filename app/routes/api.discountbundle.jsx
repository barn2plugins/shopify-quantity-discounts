import { authenticate } from "../shopify.server";
import { BundleService } from "../services/bundle.service";

export async function loader({ request }) {
    const {storefront, session} = await authenticate.public.appProxy(request);

    if (!storefront) {
      return new Response();
    }

    const url = new URL(request.url);
    const productId = url.searchParams.get('productId');
    
    const discountBundles = await BundleService.getAllBundles(session.id);
    if ( !discountBundles || discountBundles.length <= 0 ) {
      return new Response();
    }

    const eligibleProductBundle = await BundleService.getEligibleProductBundle({storefront, discountBundles, productId});

    if (!eligibleProductBundle) {
      return new Response();
    }

    return new Response(JSON.stringify({
        eligibleProductBundle,
        productId
    }));
}