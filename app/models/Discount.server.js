import prisma from "../db.server"

/**
 * Retrieves all discount bundles for a given session from the database
 * 
 * @param {string} sessionId - The session ID of the current user
 * @returns {Promise<Array<Object>|null>} Array of discount bundle objects ordered by priority, or null if error occurs
 * 
 * @example
 * const bundles = await getAllDiscountBundles('session123');
 * if (bundles) {
 *   bundles.forEach(bundle => console.log(bundle.name));
 * }
 */
export async function getAllDiscountBundles(sessionId) {
  // Query database to get all bundles for the shop
  return await prisma.discountBundle.findMany({
    where: {
      store: {
        sessionId
      }
    },
    orderBy: {
      priority: 'desc'
    }
  });
}

/**
 * Retrieves a specific discount bundle from the database using session ID and bundle ID
 * 
 * @param {Object} params - The parameters object
 * @param {string} params.sessionId - The session ID of the current user
 * @param {string} params.bundleId - The ID of the discount bundle to retrieve
 * @returns {Promise<Object|null>} The discount bundle object if found, null if not found or error occurs
 * 
 * @example
 * const bundle = await getDiscountBundleById({
 *   sessionId: 'session123',
 *   bundleId: '456'
 * });
 */
export async function getDiscountBundleById({storeId, bundleId}) {
  return await prisma.discountBundle.findFirst({
    where: {
      shopifyDiscountId: `gid://shopify/DiscountAutomaticNode/${bundleId}`,
      storeId: storeId
    }
  });
}

export async function createDiscountBundle({storeId, shopifyDiscountGID, data}) {
  return await prisma.discountBundle.create({
    data: {
      store: { connect: { id: storeId } },
      name: data.name,
      type: data.type,
      whichProducts: data.whichProducts,
      layout: data.layout,
      previewEnabled: data.previewEnabled ? true : false,
      active: data.active ? true : false,
      shopifyDiscountId: shopifyDiscountGID,
      selectedProducts: data.selectedProducts,
      selectedCollections: data.selectedCollections,
      excludedProducts: data.excludedProducts,
      excludedCollections: data.excludedCollections,
      volumeBundles: data.volumeBundles,
      pricingTiers: data.pricingTiers,
      discountCalculation: data.discountCalculation,
      activeDates: data.activeDates,
      specificDates: data.specificDates,
      storeDisplay: data.storeDisplay,
      designOptions: data.designOptions,
      customDesigns: data.customDesigns,
      previewOptions: data.previewOptions
    }
  });
}

/**
 * Updates a discount bundle in the database by its ID
 * 
 * @param {Object} params - The parameters object
 * @param {string} params.discountId - The ID of the discount bundle to update
 * @param {Object} params.data - The data to update
 * @param {string} params.data.type - The type of discount
 * @param {string} params.data.name - The name of the discount
 * @param {string} params.data.whichProducts - Product selection type
 * @param {string} params.data.layout - Layout configuration
 * @param {boolean} params.data.previewEnabled - Whether preview is enabled
 * @param {boolean} params.data.active - Whether the discount is active
 * @param {string} params.data.selectedProducts - JSON string of selected products
 * @param {string} params.data.selectedCollections - JSON string of selected collections
 * @param {string} params.data.excludedProducts - JSON string of excluded products
 * @param {string} params.data.excludedCollections - JSON string of excluded collections
 * @param {string} params.data.volumeBundles - JSON string of volume bundle settings
 * @param {string} params.data.pricingTiers - JSON string of pricing tier settings
 * @param {string} params.data.discountCalculation - Discount calculation method
 * @param {string} params.data.activeDates - Active dates configuration
 * @param {string} params.data.specificDates - Specific dates configuration
 * @param {string} params.data.storeDisplay - Store display settings
 * @param {string} params.data.designOptions - Design options configuration
 * @param {string} params.data.customDesigns - Custom design settings
 * @param {string} params.data.previewOptions - Preview options settings
 * @returns {Promise<{success: boolean, discountBundle: Object}>} Object containing success status and updated discount bundle
 */
export async function updateDiscountBundleById({discountId, data}) {
  return await prisma.discountBundle.update({
    where: { id: discountId },
    data: {
      type: data.type,
      name: data.name,
      whichProducts: data.whichProducts,
      layout: data.layout,
      previewEnabled: data.previewEnabled ? true : false,
      active: data.active ? true : false,
      selectedProducts: data.selectedProducts,
      selectedCollections: data.selectedCollections,
      excludedProducts: data.excludedProducts,
      excludedCollections: data.excludedCollections,
      volumeBundles: data.volumeBundles,
      pricingTiers: data.pricingTiers,
      discountCalculation: data.discountCalculation,
      activeDates: data.activeDates,
      specificDates: data.specificDates,
      storeDisplay: data.storeDisplay,
      designOptions: data.designOptions,
      customDesigns: data.customDesigns,
      previewOptions: data.previewOptions,
    }
  });
}