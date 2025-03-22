export class CollectionService {
  
  /**
   * Retrieves collections from Shopify store
   * 
   * @param {Object} params - The parameters object
   * @param {Object} params.admin - Shopify admin API instance
   * @returns {Promise<{success: boolean, collections?: Array, error?: string, displayError?: string}>} 
   */
  static async getCollections({admin}) {
    try {
      const { data: { collections: { edges } } } = await CollectionService.fetchCollectionsFromShopify({admin});
      return { success: true, collections: edges };
    } catch (error) {
      return { 
        success: false,
        error: error.message,
        displayError: 'Failed to get collections from Shopify'
      };
    }
  }

  /**
   * Fetches collections data from Shopify using GraphQL API
   * 
   * @param {Object} params - The parameters object
   * @param {Object} params.admin - Shopify admin API instance
   * @returns {Promise<Object>} Response object containing collections data with:
   */
  static async fetchCollectionsFromShopify({admin}) {
    const response = await admin.graphql(
      `#graphql
        query {
          collections(first: 30) {
            edges {
              node {
                id
                title
                handle
                productsCount {
                  count
                }
                image {
                  url
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
}