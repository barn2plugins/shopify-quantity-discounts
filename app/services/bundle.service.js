import { getStoreDetails } from './store.service';
import { createShopifyVolumeDiscount, getDiscountMetafieldId, updateShopifyVolumeDiscount } from './discount.service';
import { parseObjectId, getSpecificDates } from '../utils/utils';
import { 
  createDiscountBundle, 
  getAllDiscountBundles, 
  getAllActiveDiscountBundles,
  getBundleByBundleId,
  updateDiscountBundleById, 
  finyManyByNames,
  getLatestDiscount
} from '../models/Discount.server';

/**
 * Gets default bundle configuration with store-specific settings
 *
 * @param {string} sessionId - Session ID for the current user
 * @returns {Promise<Object>} Default bundle configuration object
 */
export async function getDefaultBundle({sessionId, timezone}) {
  const storeDetails = await getStoreDetails(sessionId, {
    currency: true,
    ianaTimezone: true
  });
  const { currency, ianaTimezone } = storeDetails || {};
  
  return {
    discountBundleId: null,
    name: 'Bundle',
    type: 'volume_bundle',
    whichProducts: 'all_products',
    layout: 'horizontal',
    previewEnabled: true,
    active: false,
    currencyCode: currency || '$',
    discountCalculation: 'individual_products',
    activeDates: 'always_available',
    specificDates: JSON.stringify(getSpecificDates(timezone)),
    timezone: ianaTimezone || 'UTC',
    designOptions: 'theme_default',
    customDesigns: {
      tableColor: '#303030',
      headerTextColor: '#FDFDFD',
      backgroundColor: '#ffffff',
      textColor: '#303030',
      labelColor: '#EDEDED',
      lebelTextColor: '#002E6A',
      cartNoticeBackgroundColor: '#303030',
      cartNoticeTextColor: '#FFFFFF',
      borderColor: '#303030',
      cornerRadius: 'slightlyRounded',
      bundleTextColor: '#303030',
      highlightedTextColor: '#303030',
      bundleBorderColor: '#616161',
      highlightedBorderColor: '#616161',
      highlightedColor: '#f1f1f1',
    },
    previewOptions: {
      title: 'Buy More, Save More',
      description: 'Time-limited offer!',
      showOriginalPrice: true,
      amountSaved: true
    }
  }
}

/**
 * Retrieves paginated bundles from the database
 * 
 * @param {string} sessionId - Session ID for the current user
 * @param {number} [page=1] - Current page number (defaults to 1)
 * @param {number} [limit=20] - Number of items per page (defaults to 20)
 * @returns {Promise<Object>} Object containing:
 *                           - success: boolean indicating if operation was successful
 *                           - bundles?: Array of bundle objects if successful
 *                           - pagination?: Object containing pagination metadata:
 *                             - total: Total number of bundles
 *                             - page: Current page number
 *                             - limit: Items per page
 *                             - totalPages: Total number of pages
 *                           - error?: Error message if operation failed
 *                           - displayError?: User-friendly error message if operation failed
 */
export async function getAllBundles(sessionId, page = 1, limit = 20) {
  try {
    const {bundles, pagination} = await getAllDiscountBundles(sessionId, page, limit);
    return {
      success: true,
      bundles,
      pagination
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: error.message,
      displayError: 'Failed to get bundles'
    }
  }
}

/**
 * Retrieves all active discount bundles from the database
 * 
 * @param {string} sessionId - Session ID for the current user
 * @returns {Promise<Object>} Object containing:
 *                           - success: boolean indicating if operation was successful
 *                           - bundles?: Array of active bundle objects if successful
 *                           - error?: Error message if operation failed
 *                           - displayError?: User-friendly error message if operation failed
 */
export async function getAllActiveBundles(sessionId) {
  try {
    const bundles = await getAllActiveDiscountBundles(sessionId);
    return {
      success: true,
      bundles
    }
  } catch (error) {
    return {
      success: false,
      error: error.message,
      displayError: 'Failed to get bundles'
    }
  }
}

/**
 * Retrieves a specific discount bundle from the database
 * 
 * @param {Object} params - The parameters object
 * @param {string} params.sessionId - Session ID for the current user
 * @param {string} params.bundleId - ID of the bundle to retrieve
 * @returns {Promise<Object>} Object containing:
 *                           - success: boolean indicating if operation was successful
 *                           - error?: error message if operation failed
 *                           - displayError?: user-friendly error message if operation failed
 *                           - bundle?: the retrieved bundle data if successful
 */
export async function getBundle({storeId, bundleId}) {
  try {
    return await getBundleByBundleId({storeId, bundleId: parseInt(bundleId)});
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: error.message,
      displayError: 'Failed to get bundle'
    }
  }
}

/**
 * Retrieves a specific discount bundle from the database
 * 
 * @param {Object} params - The parameters object
 * @param {string} params.sessionId - Session ID for the current user
 * @param {string} params.bundleId - ID of the bundle to retrieve
 * @returns {Promise<Object>} Object containing:
 *                           - success: boolean indicating if operation was successful
 *                           - error?: error message if operation failed
 *                           - displayError?: user-friendly error message if operation failed
 *                           - bundle?: the retrieved bundle data if successful
 */
export async function getBundleById({storeId, bundleId}) {
  try {
    return await getBundleByBundleId({storeId, bundleId});
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: error.message,
      displayError: 'Failed to get bundle'
    }
  }
}

  /**
 * Creates a new discount bundle and its associated Shopify discount
 * 
 * @param {Object} params - The parameters object
 * @param {Object} params.admin - Shopify admin API instance
 * @param {Object} params.store - Store object containing store information
 * @param {string} params.store.id - Store ID
 * @param {string} params.store.volumeDiscountFunctionId - ID of the volume discount function
 * @param {Object} params.fetcherData - Data for creating the bundle and discount
 * @returns {Promise<Object>} Object containing:
 *                           - success: boolean indicating if operation was successful
 *                           - bundle?: created bundle data if successful
 *                           - shopifyDiscountid?: Shopify discount ID if successful
 *                           - error?: error message if operation failed
 *                           - displayError?: user-friendly error message if operation failed
 */
export async function createBundle({admin, store, fetcherData}) {
  try {
    // Create the bundle in app database
    const bundle = await createDiscountBundle({storeId: store.id, data: fetcherData});

    return {
      success: true,
      bundle
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: error.message,
      displayError: 'Failed to create bundle'
    }
  }
}

/**
 * Updates an existing discount bundle and its associated Shopify discount
 * 
 * @param {Object} params - The parameters object
 * @param {Object} params.admin - Shopify admin API instance
 * @param {Object} params.fetcherData - Data for updating the bundle and discount
 * @param {string} params.fetcherData.shopifyDiscountId - ID of the Shopify discount to update
 * @param {string} params.fetcherData.id - ID of the bundle to update
 * @returns {Promise<Object>} Object containing:
 *                           - success: boolean indicating if operation was successful
 *                           - bundle?: updated bundle data if successful
 *                           - error?: error message if operation failed
 *                           - displayError?: user-friendly error message if operation failed
 */
export async function updateBundle({admin, fetcherData}) {
  try {
    // // Get the metafield ID for the discount function
    // const metafieldId = await getDiscountMetafieldId({admin, shopifyDiscountId: fetcherData.shopifyDiscountId});

    // // Update the discount function
    // await updateShopifyVolumeDiscount({admin, fetcherData, metafieldId});

    // Update the bundle
    const bundle = await updateDiscountBundleById({data: fetcherData});

    return {
      success: true,
      bundle
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: error.message,
      displayError: 'Failed to update bundle'
    }
  }
}

/**
 * Determines if a product is eligible for any of the available discount bundles
 * 
 * @param {Object} params - The parameters object
 * @param {Object} params.storefront - Shopify Storefront API client instance
 * @param {Array<Object>} params.discountBundles - Array of discount bundle configurations
 * @param {string|number} params.productId - ID of the product to check eligibility for
 * @returns {Promise<Object|boolean|undefined>} Returns:
 *                                             - bundle object if product is eligible
 *                                             - false if product is explicitly excluded
 *                                             - undefined if no matching bundle found
 */
export async function getEligibleDiscountBundle({storefront, session, productId, store}) {
  const discountBundles = await getAllActiveBundles(session.id);
  if (!discountBundles?.success) {
    return false;
  }

  // Iterate through the discount bundles
  for (const bundle of discountBundles.bundles) {
    const { 
      whichProducts, 
      selectedProducts, 
      selectedCollections, 
      excludedProducts, 
      excludedCollections,
      active,
      activeDates,
      specificDates,
    } = bundle;

    if (!active) {
      continue;
    }

    /**
     * Checks if the discount bundle is valid for the current date based on specified date range
     * Validates bundle availability using store's timezone for accurate date comparison
     */
    if (activeDates === 'specific_dates') {
      const { start, end } = JSON.parse(specificDates);

      // Create dates in store's timezone
      const storeNow = new Date().toLocaleString('en-US', { timeZone: store.ianaTimezone });
      const storeDate = new Date(storeNow);
      const startDate = new Date(start);

      // Check if the bundle's start date is in the future
      if (startDate > storeDate) {
        continue;
      }

      // If end date exists, check if the bundle has expired
      if (end) {
        const endDate = new Date(end);
        if (storeDate > endDate) {
          continue;
        }
      }
    }


    // Check for product eligibility
    if (whichProducts === 'all_products') {
      return bundle;
    }

    if (whichProducts === 'all_products_except_selected') {
      // Check if product is in excluded collections
      const productCollections = await getCollectionsByProductId({
        storefront,
        productId
      });
      
      // Parse the JSON string if excludedProducts is a string
      const excludedProductsList = typeof excludedProducts === 'string' 
        ? JSON.parse(excludedProducts) 
        : excludedProducts;
      // Check if the current productId is in the excluded list
      if (excludedProductsList?.some(product => parseObjectId(product.id) === productId)) {
        return false;
      }

      // Parse the JSON string if excludedCollections is a string
      const excludedCollectionsList = typeof excludedCollections === 'string'
        ? JSON.parse(excludedCollections)
        : excludedCollections;

      if (excludedCollectionsList.length > 0) {
        // Check if any of the product's collections are in the excluded list
        const isInExcludedCollection = productCollections.some(collection => {
          const { title } = collection.node;
          return excludedCollectionsList.some(excludedCollection => excludedCollection.title === title);
        });

        if (isInExcludedCollection) {
          return false;
        }
      }

      return bundle;
    }

    if (whichProducts === 'selected_products') {
      // Parse the JSON string if selectedProducts is a string
      const selectedProductsList = typeof selectedProducts === 'string'
        ? JSON.parse(selectedProducts)
        : selectedProducts;
      const productGid = `gid://shopify/Product/${productId}`;
      // Check if the current productId is in the selected list
      if (selectedProductsList?.some(product => product.id === productGid)) {
        return bundle;
      }
    }

    if (whichProducts === 'selected_collections') {
      // Check if product is in excluded collections
      const productCollections = await getCollectionsByProductId({
        storefront,
        productId
      });

      // Parse the JSON string if selectedCollections is a string
      const selectedCollectionsList = typeof selectedCollections === 'string'
        ? JSON.parse(selectedCollections)
        : selectedCollections;

      // Check if any of the product's collections are in the selected collections list
      const isInSelectedCollection = productCollections.some(collection => {
        const { title } = collection.node;
        return selectedCollectionsList.some(selectedCollection => selectedCollection.title === title);
      });
      
      if (!isInSelectedCollection) {
        continue;
      }

      // Parse the JSON string if excludedProducts is a string
      const excludedProductsList = typeof excludedProducts === 'string' 
        ? JSON.parse(excludedProducts) 
        : excludedProducts;

      // Check if the current productId is in the excluded product list
      if (excludedProductsList?.some(product => product.id === productId)) {
        return false;
      }

      return bundle;
    }
  };
  
  return false;
}

/**
 * Retrieves the most recently created discount bundle for a store
 * 
 * @param {Object} params - The parameters object
 * @param {string} params.storeId - ID of the store to get the latest bundle for
 * @returns {Promise<Object>} The most recent discount bundle object
 */
export async function getLatestDiscountBundle({storeId}) {
  return await getLatestDiscount({storeId});
}

/**
 * Retrieves all collections that a product belongs to using Shopify's Storefront API
 * 
 * @param {Object} params - The parameters object
 * @param {Object} params.storefront - Shopify Storefront API client instance
 * @param {string|number} params.productId - ID of the product to get collections for
 * @returns {Promise<Array>} Array of collection edges, each containing:
 *                          - node.id: Collection ID
 *                          - node.title: Collection title
 *                          - node.handle: Collection handle
 *                          Returns empty array if no collections found
 */
export async function getCollectionsByProductId({storefront, productId}) {
  const productCollections = await storefront.graphql(
    `#graphql
      query getCollectionsByProductId($productId: ID!) {
        product(id: $productId) {
          collections(first: 10) {
            edges {
              node {
                id
                title
                handle
              }
            }
          }
        }
      }
    `,
    {
      variables: {
        productId: `gid://shopify/Product/${productId}`
      },
    },
  )

  const response = await productCollections.json();
  const collections = response?.data?.product?.collections?.edges;
  
  return collections ? collections : [];
}

/**
 * Finds discount bundles by their names
 * 
 * @param {Object} params - The parameters object
 * @param {string[]} params.nameOfDiscountApplications - Array of discount names to search for
 * @param {string} params.sessionId - Session ID for the current user
 * @returns {Promise<Object>} Object containing:
 *                           - success: boolean indicating if operation was successful
 *                           - bundles?: Array of matching discount bundles if successful
 *                           - error?: error message if operation failed
 *                           - displayError?: user-friendly error message if operation failed
 */
export async function findDiscountBundlesByNames({nameOfDiscountApplications, sessionId}) {
  try {
    const bundles = await finyManyByNames({nameOfDiscountApplications, sessionId});
    
    if ( bundles?.length > 0) {
      return {
        success: true,
        bundles
      }
    } else {
      return {
        success: false,
        error: 'No bundles found',
        displayError: 'No bundles found'
      }
    }
  } catch (error) {
    return {
      success: false,
      error: error.message,
      displayError: 'Failed to find bundles'
    }
  }
}