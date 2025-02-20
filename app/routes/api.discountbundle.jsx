import { authenticate } from "../shopify.server";
import prisma from "../db.server";
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
      console.log('error having bundles');
      return new Response();
    }

    // const productCollections = await storefront.graphql(
    //   `#graphql
    //     query getProductCollections($productId: ID!) {
    //       product(id: $productId) {
    //         collections(first: 10) {
    //           edges {
    //             node {
    //               id
    //               title
    //               handle
    //             }
    //           }
    //         }
    //       }
    //     }
    //   `,
    //   {
    //     variables: {
    //       "productId": "gid://shopify/Product/15023314239859"
    //     },
    //   },
    // )

    // console.log(productCollections);
    
    const response = await storefront.graphql(
      `#graphql
      query productTitle {
        products(first: 1) {
          nodes {
            title
          }
        }
      }`,
    );
    const body = await response.json();
    console.log(body);
    
    await BundleService.isProductEligibleForBundle(discountBundles, productId);

    return new Response(JSON.stringify({
        discountBundles,
        productId
    }));
}