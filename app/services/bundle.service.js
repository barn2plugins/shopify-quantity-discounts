import { StoreService } from './store.service';
import { DiscountService } from './discount.service';
import { parseObjectId } from '../utils/utils';
import { createDiscountBundle, getAllDiscountBundles, getDiscountBundleById, updateDiscountBundleById } from '../models/Discount.server';

/**
 * Service class for handling bundle-related operations
 */
export class BundleService {
  
  /**
   * Gets default bundle configuration with store-specific settings
   *
   * @param {string} sessionId - Session ID for the current user
   * @returns {Promise<Object>} Default bundle configuration object
   */
  static async getDefaultBundle(sessionId) {
    const storeDetails = await StoreService.getStoreDetails(sessionId, {
      currency: true,
      timezone: true
    });
    const { currency, timezone } = storeDetails || {};
    
    return {
      discountBundleId: null,
      name: 'Bundle',
      type: 'volume_bundle',
      whichProducts: 'all_products',
      layout: 'vertical',
      previewEnabled: true,
      active: false,
      currencyCode: currency || '$',
      discountCalculation: 'individual_products',
      activeDates: 'always_available',
      timezone: timezone || 'UTC',
      designOptions: 'theme_default',
      customDesigns: {
        backgroundColor: '#cf8383',
        selectedBackgroundColor: '#2cc473',
        badgeColor: '#60a3d9',
        labelColor: '#c2c050',
        textColor: '#a3115f',
        cartNoticeBackground: '#60a3d9',
        cartNoticeText: '#59178b',
        cornerRadius: 'square'
      },
      previewOptions: {
        title: '',
        description: '',
        showOriginalPrice: true,
        amountSaved: true
      }
    }
  }

  /**
   * Retrieves all bundles from the database
   * 
   * @param {string} sessionId - Session ID for the current user
   * @returns {Promise<Array>} Array of bundle objects
   */
  static async getAllBundles(sessionId) {
    try {
      const bundles = await getAllDiscountBundles(sessionId);
      return {
        success: true,
        bundles
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
  static async getBundle({sessionId, bundleId}) {
    try {
      return await getDiscountBundleById({sessionId, bundleId});
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
   * @param {Object} params.session - Session object containing user information
   * @param {string} params.session.id - Session ID for the current user
   * @param {string} params.discountFunctionId - ID of the discount function to use
   * @param {Object} params.fetcherData - Data for creating the bundle and discount
   * @returns {Promise<Object>} Object containing:
   *                           - success: boolean indicating if operation was successful
   *                           - bundle?: created bundle data if successful
   *                           - shopifyDiscountid?: Shopify discount ID if successful
   *                           - error?: error message if operation failed
   *                           - displayError?: user-friendly error message if operation failed
   */
  static async createBundle({admin, session, discountFunctionId, fetcherData}) {
    try {
      // Create the discount function
      const shopifyDiscountGID = await DiscountService.createShopifyVolumeDiscount({admin, fetcherData, discountFunctionId});
      const shopifyDiscountid = shopifyDiscountGID.split('/').pop();

      // Create the bundle
      const bundle = await createDiscountBundle({sessionId: session.id, shopifyDiscountGID, data: fetcherData});

      return {
        success: true,
        bundle,
        shopifyDiscountid
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
  static async updateBundle({admin, fetcherData}) {
    try {
      // Get the metafield ID for the discount function
      const metafieldId = await DiscountService.getDiscountMetafieldId({admin, shopifyDiscountId: fetcherData.shopifyDiscountId});

      // Update the discount function
      await DiscountService.updateShopifyVolumeDiscount({admin, fetcherData, metafieldId});

      // Update the bundle
      const discountId = parseInt(fetcherData.id);
      const bundle = await updateDiscountBundleById({discountId, data: fetcherData});

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
  static async getEligibleProductBundle({storefront, discountBundles, productId}) {
    // Iterate through the discount bundles
    for (const bundle of discountBundles) {
      const { 
        whichProducts, 
        selectedProducts, 
        selectedCollections, 
        excludedProducts, 
        excludedCollections,
        active
      } = bundle;

      if (!active) {
        continue;
      }

      if (whichProducts === 'all_products') {
        return bundle;
      }

      if (whichProducts === 'all_products_except_selected') {
        // Check if product is in excluded collections
        const productCollections = await BundleService.getCollectionsByProductId({
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
        const productCollections = await BundleService.getCollectionsByProductId({
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
    
    return;
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
  static async getCollectionsByProductId({storefront, productId}) {
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
}