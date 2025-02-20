import { StoreService } from './store.service';

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
    const storeDetails = await StoreService.getStoreDetails(sessionId);
    const { currency, timezone } = storeDetails || {};
    
    return {
      discountBundleId: null,
      name: 'Bundle',
      type: 'volume_bundle',
      whichProducts: 'all_products',
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
      // Query database to get all bundles for the shop
      const bundles = await prisma.DiscountBundle.findMany({
        where: {
          sessionId
        },
        orderBy: {
          priority: 'desc'
        }
      });

      return bundles;
    } catch (error) {
      console.error('Error fetching bundles:', error);
      throw error;
    }
  }

  static isProductEligibleForBundle = (discountBundles, productId) => {

    discountBundles.forEach(bundle => {
      const { 
        whichProducts, 
        selectedProducts, 
        selectedCollections, 
        excludedProducts, 
        excludedCollections 
      } = bundle;

      if ( whichProducts === 'all_products' ) {
        return true;
      }
      if ( whichProducts === 'all_products_except_selected' ) {
        
      }

    });
    
    return;
    if (whichProducts === 'specific_products') {
      return productIds.includes(product.id);
    }
    if (whichProducts === 'specific_collections') { 
      return collectionIds.includes(product.collectionId);
    }
    return false;
  }
}