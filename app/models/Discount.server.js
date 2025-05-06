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
      priority: 'asc'
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
 * Retrieves all active discount bundles for a given session from the database
 * 
 * @param {string} sessionId - The session ID of the current user
 * @returns {Promise<Array<Object>>} Array of active discount bundle objects, ordered by priority
 */
export async function getAllActiveDiscountBundles(sessionId) {
  return await prisma.discountBundle.findMany({
    where: {
      store: {
        sessionId
      },
      active: true,
    },
    orderBy: {
      priority: 'asc'
    }
  });
}

/**
 * Retrieves a specific discount bundle from the database using session ID and discount ID
 * 
 * @param {Object} params - The parameters object
 * @param {string} params.sessionId - The session ID of the current user
 * @param {string} params.discount - The ID of the discount bundle to retrieve
 * @returns {Promise<Object|null>} The discount bundle object if found, null if not found or error occurs
 */
export async function getBundleByDiscountId({storeId, bundleId}) {
  return await prisma.discountBundle.findFirst({
    where: {
      shopifyDiscountId: `gid://shopify/DiscountAutomaticNode/${bundleId}`,
      storeId: storeId
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
 */
export async function getBundleByBundleId({storeId, bundleId}) {
  return await prisma.discountBundle.findFirst({
    where: {
      id: bundleId,
      storeId: storeId
    }
  });
}

/**
 * Creates a new discount bundle in the database
 * 
 * @param {Object} params - The parameters object
 * @param {string} params.storeId - The ID of the store
 * @param {string} params.shopifyDiscountGID - The Shopify discount GID
 * @param {Object} params.data - The discount bundle data
 * @param {string} params.data.name - The name of the discount
 * @param {string} params.data.type - The type of discount
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
 * @returns {Promise<Object>} The created discount bundle object
 */
export async function createDiscountBundle({storeId, shopifyDiscountGID, data}) {
   // Get the highest priority discount
  const bundlesCount = await countAllDiscountBundles({storeId});
  const newPriority = bundlesCount + 1;

  return await prisma.discountBundle.create({
    data: {
      store: { connect: { id: storeId } },
      priority: newPriority,
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
      previewEnabled: data.previewEnabled === 'true' ? true : false,
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

/**
 * Retrieves the discount bundle with the highest priority for a given store
 * 
 * @param {string} storeId - The ID of the store
 * @returns {Promise<Object|null>} The discount bundle with highest priority or null if no bundles exist
 */
export const getLatestDiscount = async ({storeId}) => {
  return await prisma.discountBundle.findFirst({
    where: {
      storeId: storeId
    },
    orderBy: {
      priority: 'desc'
    }
  });
}

/**
 * Counts all discount bundles for a given store
 * 
 * @param {string} storeId - The ID of the store
 * @returns {Promise<number>} Total count of discount bundles
 */
export async function countAllDiscountBundles({storeId}) {
  return await prisma.discountBundle.count({
    where: {
      storeId: storeId
    }
  });
}
