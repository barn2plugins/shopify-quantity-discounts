/**
 * Collection of actions for managing discount bundles and related data
 */
export const actions = {
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
   * @param {string} params.fetcherData.discountName - Name of the discount
   * @param {string} params.fetcherData.discountType - Type of discount (volume_bundle or bulk_pricing)
   * @param {string} params.fetcherData.whichProducts - Product selection type
   * @param {boolean} params.fetcherData.preview - Preview enabled status
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
        name: fetcherData.discountName,
        type: fetcherData.discountType,
        whichProducts: fetcherData.whichProducts,
        previewEnabled: fetcherData.preview ? true : false,
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
        storeDisplay: JSON.stringify(fetcherData.storeDisplay),
        design: fetcherData.design,
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
   * @param {string} params.fetcherData.discountName - Updated name of the discount
   * @param {string} params.fetcherData.discountType - Updated type of discount
   * @param {string} params.fetcherData.whichProducts - Updated product selection type
   * @param {boolean} params.fetcherData.preview - Updated preview enabled status
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
      where: { id: parseInt(fetcherData.discountBundleId) },
      data: {
        type: fetcherData.discountType,
        name: fetcherData.discountName,
        whichProducts: fetcherData.whichProducts,
        previewEnabled: fetcherData.preview ? true : false,
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
        storeDisplay: JSON.stringify(fetcherData.storeDisplay),
        design: fetcherData.design,
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