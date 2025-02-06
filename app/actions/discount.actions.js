/**
 * Collection of actions for managing discount bundles and related data
 */
export const actions = {

    /**
     * Fetches a specific discount bundle for the current session
     * @param {Object} params - The parameters object
     * @param {Object} params.session - Session object containing user session data
     * @param {string} params.session.id - ID of the current user session
     * @param {Object} params.params - URL parameters object
     * @param {string|number} params.params.discountId - ID of the discount bundle to fetch
     * @returns {Promise<Object|null>} Discount bundle object if found, null otherwise
     */
    getDiscountBundle: async ({session, params}) => {
      return await fetchDiscount(session.id, params.discountId);
    },

    /**
     * Fetches products from Shopify Admin API
     * @param {Object} admin - Shopify Admin API client
     * @returns {Promise<{success: boolean, products: Array}>} Array of product edges
     */
    loadProducts: async (admin) => {
      const { data: { products: { edges } } } = await fetchProducts(admin);
      return { success: true, products: edges };
    },
    
    /**
     * Fetches collections from Shopify Admin API
     * @param {Object} admin - Shopify Admin API client
     * @returns {Promise<{success: boolean, collections: Array}>} Array of collection edges
     */
    loadCollections: async (admin) => {
      const { data: { collections: { edges } } } = await fetchCollections(admin);
      return { success: true, collections: edges };
    },
    
    /**
     * Creates a new discount bundle
     * @param {Object} params - The parameters for creating a discount bundle
     * @param {Object} params.prisma - Prisma client instance
     * @param {Object} params.fetcherData - Form data for the discount bundle
     * @param {string} params.fetcherData.name - Name of the discount
     * @param {string} params.fetcherData.type - Type of discount (volume_bundle or bulk_pricing)
     * @param {string} params.fetcherData.whichProducts - Product selection type
     * @param {string} params.fetcherData.layout - Discount bundle layout
     * @param {boolean} params.fetcherData.previewEnabled - Preview enabled status
     * @param {boolean} params.fetcherData.active - Active status
     * @param {string} params.fetcherData.selectedProducts - JSON string of selected products
     * @param {string} params.fetcherData.selectedCollections - JSON string of selected collections
     * @param {string} params.fetcherData.excludedProducts - JSON string of excluded products
     * @param {string} params.fetcherData.excludedCollections - JSON string of excluded collections
     * @param {string} params.fetcherData.volumeBundles - JSON string of volume bundle configurations
     * @param {string} params.fetcherData.pricingTiers - JSON string of pricing tier configurations
     * @param {Object} params.session - Session object for the current user
     * @returns {Promise<{success: boolean, discountBundle: Object}>} Created discount bundle
     */
    create: async ({ prisma, fetcherData, session }) => {
      const discountBundle = await prisma.discountBundle.create({
        data: {
          name: fetcherData.name,
          type: fetcherData.type,
          whichProducts: fetcherData.whichProducts,
          layout: fetcherData.layout,
          previewEnabled: fetcherData.previewEnabled ? true : false,
          active: fetcherData.active ? true : false,
          session: { connect: { id: session.id } },
          selectedProducts: fetcherData.selectedProducts,
          selectedCollections: fetcherData.selectedCollections,
          excludedProducts: fetcherData.excludedProducts,
          excludedCollections: fetcherData.excludedCollections,
          volumeBundles: fetcherData.volumeBundles,
          pricingTiers: fetcherData.pricingTiers,
          discountCalculation: fetcherData.discountCalculation,
          activeDates: fetcherData.activeDates,
          specificDates: fetcherData.specificDates,
          storeDisplay: fetcherData.storeDisplay,
          designOptions: fetcherData.designOptions,
          customDesigns: fetcherData.customDesigns,
          previewOptions: fetcherData.previewOptions
        }
      });
      return { success: true, discountBundle };
    },
  
    /**
     * Updates an existing discount bundle
     * @param {Object} params - The parameters for updating a discount bundle
     * @param {Object} params.prisma - Prisma client instance
     * @param {Object} params.fetcherData - Form data for the discount bundle
     * @param {number} params.fetcherData.discountBundleId - ID of the discount bundle to update
     * @param {string} params.fetcherData.name - Updated name of the discount
     * @param {string} params.fetcherData.type - Updated type of discount
     * @param {string} params.fetcherData.whichProducts - Updated product selection type
     * @param {string} params.fetcherData.layout - Discount bundle layout
     * @param {boolean} params.fetcherData.previewEnabled - Updated preview enabled status
     * @param {boolean} params.fetcherData.active - Updated active status
     * @param {string} params.fetcherData.selectedProducts - Updated JSON string of selected products
     * @param {string} params.fetcherData.selectedCollections - Updated JSON string of selected collections
     * @param {string} params.fetcherData.excludedProducts - Updated JSON string of excluded products
     * @param {string} params.fetcherData.excludedCollections - Updated JSON string of excluded collections
     * @param {string} params.fetcherData.volumeBundles - Updated JSON string of volume bundle configurations
     * @param {string} params.fetcherData.pricingTiers - Updated JSON string of pricing tier configurations
     * @returns {Promise<{success: boolean, discountBundle: Object}>} Updated discount bundle
     */
    update: async ({ prisma, fetcherData }) => {
      const discountBundle = await prisma.discountBundle.update({
        where: { id: parseInt(fetcherData.id) },
        data: {
          type: fetcherData.type,
          name: fetcherData.name,
          whichProducts: fetcherData.whichProducts,
          layout: fetcherData.layout,
          previewEnabled: fetcherData.previewEnabled ? true : false,
          active: fetcherData.active ? true : false,
          selectedProducts: fetcherData.selectedProducts,
          selectedCollections: fetcherData.selectedCollections,
          excludedProducts: fetcherData.excludedProducts,
          excludedCollections: fetcherData.excludedCollections,
          volumeBundles: fetcherData.volumeBundles,
          pricingTiers: fetcherData.pricingTiers,
          discountCalculation: fetcherData.discountCalculation,
          activeDates: fetcherData.activeDates,
          specificDates: fetcherData.specificDates,
          storeDisplay: fetcherData.storeDisplay,
          designOptions: fetcherData.designOptions,
          customDesigns: fetcherData.customDesigns,
          previewOptions: fetcherData.previewOptions,
        }
      });
      return { success: true, discountBundle };
    }
  };
  
  
  /**
   * Fetches first 30 products from Shopify Admin GraphQL API
   * 
   * @param {Object} admin - Shopify Admin API client instance
   * @returns {Promise<Object>} Response containing product data
   * @property {Object} data.products.edges - Array of product edges containing:
   * @property {Object} data.products.edges[].node - Product node with id, title, handle, and media
   * @property {string} data.products.edges[].cursor - Cursor for pagination
   * @property {Object} data.products.pageInfo - Information about pagination
   */
  const fetchProducts = async (admin) => {
      const response = await admin.graphql(
          `#graphql
            query {
              products(first: 30) {
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
  
  /**
   * Fetches first 30 collections from Shopify Admin GraphQL API
   * 
   * @param {Object} admin - Shopify Admin API client instance
   * @returns {Promise<Object>} Response containing collection data
   * @property {Object} data.collections.edges - Array of collection edges containing:
   * @property {Object} data.collections.edges[].node - Collection node with id, title, handle, and image
   * @property {Object} data.collections.edges[].node.productsCount - Object containing count of products
   * @property {string} data.collections.edges[].cursor - Cursor for pagination
   * @property {Object} data.collections.pageInfo - Information about pagination
   */
  const fetchCollections = async (admin) => {
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

  /**
   * Fetches a discount bundle from the database
   * 
   * @param {string} sessionId - Session ID for the current user
   * @param {string|number} discountId - ID of the discount bundle to fetch
   * @returns {Promise<Object|null>} Discount bundle object or null if not found
   */
  const fetchDiscount = async (sessionId, discountId) => {
    try {
      const bundle = await prisma.discountBundle.findUnique({
        where: {
          id: parseInt(discountId),
          sessionId: sessionId
        }
      });
      
      return bundle;
    } catch (error) {
      console.error('Error fetching or parsing discount bundle:', error);
      return null;
    }
  }