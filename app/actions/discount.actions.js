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
  create: async ({ prisma, fetcherData, session, shopifyDiscountGID }) => {
    const discountBundle = await prisma.discountBundle.create({
      data: {
        name: fetcherData.name,
        type: fetcherData.type,
        whichProducts: fetcherData.whichProducts,
        layout: fetcherData.layout,
        previewEnabled: fetcherData.previewEnabled ? true : false,
        active: fetcherData.active ? true : false,
        session: { connect: { id: session.id } },
        shopifyDiscountId: shopifyDiscountGID,
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
 * Creates a new Shopify automatic discount with volume discount configuration
 * @param {Object} params - The parameters object
 * @param {Object} params.admin - Shopify Admin API client instance
 * @param {Object} params.fetcherData - Form data for the discount creation
 * @param {string} params.fetcherData.name - Name of the discount
 * @param {string} params.fetcherData.whichProducts - Product selection type
 * @param {string} params.fetcherData.selectedProducts - JSON string of selected products
 * @param {string} params.fetcherData.selectedCollections - JSON string of selected collections
 * @param {string} params.fetcherData.excludedProducts - JSON string of excluded products
 * @param {string} params.fetcherData.excludedCollections - JSON string of excluded collections
 * @param {string} params.fetcherData.volumeBundles - JSON string of volume bundle configurations
 * @param {string} params.discountFunctionId - ID of the discount function to use
 * @returns {Promise<string|null>} Created discount ID or null if creation fails
 */
export const createShopifyVolumeDiscount = async ({admin, fetcherData, discountFunctionId}) => {
  const metafieldsValue = {
    targetMode: fetcherData.whichProducts,
    selectedProductIds: JSON.parse(fetcherData.selectedProducts).map(p => p.id),
    selectedCollectionIds: fetcherData.selectedCollections !== '[]' ? JSON.parse(fetcherData.selectedCollections).map(p => p.id) : [],
    excludedProductIds: JSON.parse(fetcherData.excludedProducts).map(p => p.id),
    excludedCollectionIds: fetcherData.excludedCollections !== '[]' ? JSON.parse(fetcherData.excludedCollections).map(p => p.id) : [],
    discounts: getVolumeDiscounts(JSON.parse(fetcherData.volumeBundles)),
    discountApplicationStrategy: 'MAXIMUM'
  };

  const response = await admin.graphql(
    `#graphql
    mutation discountAutomaticAppCreate($automaticAppDiscount: DiscountAutomaticAppInput!) {
      discountAutomaticAppCreate(automaticAppDiscount: $automaticAppDiscount) {
        userErrors {
          field
          message
        }
        automaticAppDiscount {
          discountId
          title
          startsAt
          endsAt
          status
          appDiscountType {
            appKey
            functionId
          }
          combinesWith {
            orderDiscounts
            productDiscounts
            shippingDiscounts
          }
        }
      }
    }`,
    {
      variables: {
        automaticAppDiscount: {
          title: `Barn2 Discounts - ${fetcherData.name}`,
          functionId: discountFunctionId,
          startsAt: "2025-03-04T00:00:00Z",
          endsAt: "2025-12-31T23:59:59Z",
          combinesWith: {
            orderDiscounts: false,
            productDiscounts: false,
            shippingDiscounts: false
          },
          metafields: [
            {
              namespace: "$app:barn2-volume-discount",
              key: "function-configuration",
              type: "json",
              value: JSON.stringify(metafieldsValue)
            }
          ]
        }
      }
    }
  );

  const responseJson = await response.json();
  const discountId = responseJson.data.discountAutomaticAppCreate.automaticAppDiscount.discountId;

  if (responseJson.data.discountAutomaticAppCreate.userErrors.length > 0) {
    return null;
  }

  return discountId;
}

/**
 * Updates an existing Shopify automatic discount with volume discount configuration
 * @param {Object} params - The parameters object
 * @param {Object} params.admin - Shopify Admin API client instance
 * @param {Object} params.fetcherData - Form data for the discount update
 * @param {string} params.fetcherData.name - Name of the discount
 * @param {string} params.fetcherData.whichProducts - Product selection type
 * @param {string} params.fetcherData.selectedProducts - JSON string of selected products
 * @param {string} params.fetcherData.selectedCollections - JSON string of selected collections
 * @param {string} params.fetcherData.excludedProducts - JSON string of excluded products
 * @param {string} params.fetcherData.excludedCollections - JSON string of excluded collections
 * @param {string} params.fetcherData.volumeBundles - JSON string of volume bundle configurations
 * @param {string} params.fetcherData.shopifyDiscountId - ID of the Shopify discount to update
 * @param {string} params.metafieldId - ID of the metafield to update
 * @returns {Promise<Object|null>} Updated discount data or null if update fails
 */
export const updateShopifyVolumeDiscount = async ({admin, fetcherData, metafieldId}) => {
  const metafieldsValue = {
    targetMode: fetcherData.whichProducts,
    selectedProductIds: JSON.parse(fetcherData.selectedProducts).map(p => p.id),
    selectedCollectionIds: fetcherData.selectedCollections !== '[]' ? JSON.parse(fetcherData.selectedCollections).map(p => p.id) : [],
    excludedProductIds: JSON.parse(fetcherData.excludedProducts).map(p => p.id),
    excludedCollectionIds: fetcherData.excludedCollections !== '[]' ? JSON.parse(fetcherData.excludedCollections).map(p => p.id) : [],
    discounts: getVolumeDiscounts(JSON.parse(fetcherData.volumeBundles)),
    discountApplicationStrategy: 'MAXIMUM'
  };

  const response = await admin.graphql(
    `#graphql
    mutation discountAutomaticAppUpdate($automaticAppDiscount: DiscountAutomaticAppInput!, $id: ID!) {
      discountAutomaticAppUpdate(automaticAppDiscount: $automaticAppDiscount, id: $id) {
        userErrors {
          field
          message
        }
        automaticAppDiscount {
          discountId
          title
          startsAt
          endsAt
          status
          appDiscountType {
            appKey
            functionId
          }
          combinesWith {
            orderDiscounts
            productDiscounts
            shippingDiscounts
          }
        }
      }
    }`,
    {
      variables: {
        id: fetcherData.shopifyDiscountId,
        automaticAppDiscount: {
          title: `Barn2 Discounts - ${fetcherData.name}`,
          startsAt: "2025-03-04T00:00:00Z",
          endsAt: "2025-12-31T23:59:59Z",
          metafields: [
            {
              id: metafieldId,
              value: JSON.stringify(metafieldsValue)
            }
          ]
        }
      }
    }
  );

  const responseJson = await response.json();
  const discountData = responseJson.data.discountAutomaticAppUpdate.automaticAppDiscount;

  if (responseJson.data.discountAutomaticAppUpdate.userErrors.length > 0) {
    return null;
  }

  return discountData;
}

/**
 * Deletes a Shopify automatic discount
 * @param {Object} admin - Shopify Admin API client instance
 * @param {string} shopifyDiscountId - ID of the Shopify automatic discount to delete
 * @returns {Promise<boolean>} Returns true if deletion was successful, false if there were errors
 */
export const deleteShopifyVolumeDiscount = async (admin, shopifyDiscountId) => {
  const response = await admin.graphql(
    `#graphql
    mutation discountAutomaticDelete($id: ID!) {
      discountAutomaticDelete(id: $id) {
        deletedAutomaticDiscountId
        userErrors {
          field
          code
          message
        }
      }
    }`,
    {
      variables: {
        id: shopifyDiscountId
      }
    }
  );

  const responseJson = await response.json();
  const userErrors = responseJson.data.discountAutomaticDelete.userErrors;
  if (userErrors.length > 0) {
    return false;
  }

  return true;
}

/**
 * Activates a Shopify automatic discount
 * @param {Object} admin - Shopify Admin API client instance
 * @param {string} shopifyDiscountId - ID of the Shopify automatic discount to delete
 * @returns {Promise<boolean>} Returns true if deletion was successful, false if there were errors
 */
export const activateShopifyVolumeDiscount = async (admin, shopifyDiscountId) => {
  const response = await admin.graphql(
    `#graphql
    mutation discountAutomaticActivate($id: ID!) {
      discountAutomaticActivate(id: $id) {
        automaticDiscountNode {
          automaticDiscount {
            ... on DiscountAutomaticBxgy {
              status
              startsAt
              endsAt
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
        id: shopifyDiscountId
      }
    }
  );

  const responseJson = await response.json();
  const userErrors = responseJson.data.discountAutomaticActivate.userErrors;
  if (userErrors.length > 0) {
    return false;
  }

  return true;
}

/**
 * Deactivates a Shopify automatic discount
 * @param {Object} admin - Shopify Admin API client instance
 * @param {string} shopifyDiscountId - ID of the Shopify automatic discount to delete
 * @returns {Promise<boolean>} Returns true if deletion was successful, false if there were errors
 */
export const deactivateShopifyVolumeDiscount = async (admin, shopifyDiscountId) => {
  const response = await admin.graphql(
    `#graphql
    mutation discountAutomaticDeactivate($id: ID!) {
      discountAutomaticDeactivate(id: $id) {
        automaticDiscountNode {
          automaticDiscount {
            ... on DiscountAutomaticBxgy {
              status
              startsAt
              endsAt
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
        id: shopifyDiscountId
      }
    }
  );

  const responseJson = await response.json();
  const userErrors = responseJson.data.discountAutomaticDeactivate.userErrors;
  if (userErrors.length > 0) {
    return false;
  }

  return true;
}

/**
 * Retrieves the metafield ID for a given Shopify automatic discount node
 * @param {Object} params - The parameters object
 * @param {Object} params.admin - Shopify Admin API client instance
 * @param {string} params.shopifyDiscountId - ID of the Shopify automatic discount
 * @returns {Promise<string>} The metafield ID for the discount's function configuration
 */
export const getDiscountMetafieldId = async ({admin, shopifyDiscountId}) => {
  const response = await admin.graphql(
    `#graphql
    query {
      automaticDiscountNode(id: "${shopifyDiscountId}") {
        metafield(namespace: "$app:barn2-volume-discount", key: "function-configuration") {
          id
        }
      }
    }`
  );

  const responseJson = await response.json();
  return responseJson.data.automaticDiscountNode.metafield.id;
}

const getVolumeDiscounts = (volumeBundles) => {
  return volumeBundles
          .filter(d => d.discount !== "")
          .map(d => {
              let discountValue;
              
              if (d.discount_type === "percentage") {
                  discountValue = { percentage: { value: Number(d.discount) } };
              } else if (d.discount_type === "amount") {
                  discountValue = { fixedAmount: { amount: Number(d.discount) } };
              }

              return {
                  value: discountValue,
                  targets: [
                      {
                        productVariant: {
                          quantity: { min: d.quantity, max: d.quantity }
                        }
                      }
                  ]
              };
          });
}
  

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
    const bundle = await prisma.discountBundle.findFirst({
      where: {
        shopifyDiscountId: `gid://shopify/DiscountAutomaticNode/${discountId}`,
        sessionId: sessionId
      }
    });
    
    return bundle;
  } catch (error) {
    console.error('Error fetching or parsing discount bundle:', error);
    return null;
  }
}