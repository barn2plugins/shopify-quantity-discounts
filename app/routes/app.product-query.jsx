import { authenticate } from "../shopify.server";

export const action = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
  const formData = await request.formData();
  const fetcherData = Object.fromEntries(formData);

  if (fetcherData.intent === 'getProductWithVariations') {
    try {
      const response = await admin.graphql(
        `#graphql
          query getOldestProductWithVariations {
            products(first: 50, reverse: false) {
              edges {
                node {
                  id
                  title
                  handle
                  variants(first: 10) {
                    edges {
                      node {
                        id
                        title
                        price
                        availableForSale
                        selectedOptions {
                          name
                          value
                        }
                      }
                    }
                  }
                  options {
                    id
                    name
                    values
                  }
                  featuredMedia {
                    preview {
                      image {
                        url
                      }
                    }
                  }
                }
              }
            }
          }`
      );

      const responseJson = await response.json();
      
      // Filter products that have multiple variants (has variations)
      const productsWithVariations = responseJson?.data?.products?.edges?.filter(
        ({ node }) => node.variants.edges.length > 1
      );
      
      if (productsWithVariations && productsWithVariations.length > 0) {
        // Find the product with the most variations
        const productWithMostVariations = productsWithVariations.reduce((prev, current) => {
          const prevVariantCount = prev.node.variants.edges.length;
          const currentVariantCount = current.node.variants.edges.length;
          const prevOptionCount = prev.node.options.length;
          const currentOptionCount = current.node.options.length;
          
          // First compare by variant count, then by option count
          if (currentVariantCount > prevVariantCount) {
            return current;
          } else if (currentVariantCount === prevVariantCount && currentOptionCount > prevOptionCount) {
            return current;
          }
          return prev;
        });
        
        return {
          success: true,
          product: productWithMostVariations.node
        };
      } else {
        return {
          success: false,
          error: 'No products with variations found'
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        displayError: 'Failed to fetch product data'
      };
    }
  }

  return { success: false, error: 'Invalid intent' };
};