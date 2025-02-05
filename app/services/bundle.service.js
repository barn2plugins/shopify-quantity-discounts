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
      }
    }
  }
}