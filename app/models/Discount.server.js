import prisma from "../db.server"

/**
 * Retrieves paginated discount bundles for a given session from the database
 * 
 * @param {string} sessionId - The session ID of the current user
 * @param {number} page - The current page number (starts from 1)
 * @param {number} limit - Number of items per page
 * @returns {Promise<Object>} Object containing bundles and pagination data
 * @returns {Object[]} .bundles - Array of discount bundle objects
 * @returns {Object} .pagination - Pagination metadata
 * @returns {number} .pagination.total - Total number of bundles
 * @returns {number} .pagination.page - Current page number
 * @returns {number} .pagination.limit - Items per page
 * @returns {number} .pagination.totalPages - Total number of pages
 */
export async function getAllDiscountBundles(sessionId, page, limit) {
  // Calculate the number of items to skip
  const skip = (page - 1) * limit;

  // Get total count for pagination
  const total = await prisma.discountBundle.count({
    where: {
      store: {
        sessionId
      }
    }
  });

  // Get paginated results
  const bundles = await prisma.discountBundle.findMany({
    where: {
      store: {
        sessionId
      }
    },
    orderBy: {
      priority: 'desc'
    },
    skip,
    take: limit
  });

  return {
    bundles,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit)
    }
  };
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
  
  const bundleCount = await prisma.discountBundle.count({
    where: {
      storeId: storeId
    }
  });

  return await prisma.discountBundle.create({
    data: {
      store: { connect: { id: storeId } },
      priority: bundleCount + 1,
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

/**
 * Duplicates an existing discount bundle with a new priority and modified settings
 * 
 * @param {Object} params - The parameters object
 * @param {string} params.sessionId - The session ID of the current user
 * @param {string} params.bundleId - The ID of the discount bundle to duplicate
 * @returns {Promise<Object>} Returns either:
 *                           - The newly created discount bundle object
 *                           - {error: string} if bundle not found
 */
export async function duplicateDiscountBundleById({sessionId, bundleId}) {

  const bundleCount = await prisma.discountBundle.count({
    where: {
      store: {
        sessionId,
      }
    }
  });

  const originalBundle = await prisma.discountBundle.findUnique({
    where: {
        id: bundleId,
    },
  });

  if (!originalBundle) {
    return { error: "Bundle not found" };
  }

  return await prisma.discountBundle.create({
    data: {
      name: `${originalBundle.name} (Copy)`,
      type: originalBundle.type,
      whichProducts: originalBundle.whichProducts,
      selectedProducts: originalBundle.selectedProducts,
      selectedCollections: originalBundle.selectedCollections,
      excludedProducts: originalBundle.excludedProducts,
      excludedCollections: originalBundle.excludedCollections,
      priority: bundleCount + 1,
      active: false,
      storeId: originalBundle.storeId,
      shopifyDiscountId: originalBundle.shopifyDiscountId,
      previewEnabled: false,
      volumeBundles: originalBundle.volumeBundles,
      pricingTiers: originalBundle.pricingTiers,
      discountCalculation: originalBundle.discountCalculation,
      activeDates: originalBundle.activeDates,
      specificDates: originalBundle.specificDates,
      storeDisplay: originalBundle.storeDisplay,
      designOptions: originalBundle.designOptions,
      customDesigns: originalBundle.customDesigns,
    },
  });
}

/**
 * Finds multiple discount bundles by their names for a given session
 * 
 * @param {Object} params - The parameters object
 * @param {string[]} params.nameOfDiscountApplications - Array of discount names to search for
 * @param {string} params.sessionId - The session ID of the current user
 * @returns {Promise<Array<Object>>} Array of matching discount bundle objects
 */
export async function finyManyByNames({nameOfDiscountApplications, sessionId}) {
  return await prisma.discountBundle.findMany({
    where: {
      name: {
        in: nameOfDiscountApplications
      },
      store: {
        sessionId: sessionId
      }
    }
  });
}