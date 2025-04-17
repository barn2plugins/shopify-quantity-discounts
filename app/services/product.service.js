/**
 * Retrieves a list of products from Shopify
 * 
 * @param {Object} params - The parameters object
 * @param {Object} params.admin - Shopify Admin API client instance
 * @returns {Promise<Object>} Object containing:
 *                           - success: boolean indicating if operation was successful
 *                           - products?: Array of product edges if successful
 *                           - error?: error message if operation failed
 *                           - displayError?: user-friendly error message if operation failed
 */
export async function getProducts({admin}) {
  try {
    const { data: { products: { edges } } } = await fetchProductsFromShopify({admin});
    return { success: true, products: edges };
  } catch (error) {
    return { 
      success: false,
      error: error.message,
      displayError: 'Failed to get products from Shopify'
    };
  }
}

/**
 * Fetches products from Shopify using the Admin GraphQL API
 * 
 * @param {Object} params - The parameters object
 * @param {Object} params.admin - Shopify Admin API client instance
 * @returns {Promise<Object>} GraphQL response containing:
 *                           - data.products.edges: Array of product nodes with:
 *                             - node.id: Product ID
 *                             - node.title: Product title
 *                             - node.handle: Product handle
 *                             - node.featuredMedia: Product featured image data
 *                             - cursor: Pagination cursor
 *                           - data.products.pageInfo: Pagination information
 */
export async function fetchProductsFromShopify({admin}) {
  const response = await admin.graphql(
    `#graphql
      query {
        products(first: 20) {
          edges {
            node {
              id
              title
              handle
              featuredMedia {
                preview {
                  image {
                    url
                  }
                }
              }
            }
            cursor
          }
          pageInfo {
            hasNextPage
          }
        }
      }`
    );
  
  const responseJson = await response.json();
  return responseJson;
}