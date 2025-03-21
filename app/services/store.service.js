import prisma from "../db.server";
import { simplifyDiscountData, isBarn2AppEmbedDisabled } from "../utils/utils";

/**
 * Service class for handling store-related operations
 */
export class StoreService {
  /**
   * Fetches store details from database
   *
   * @param {string} sessionId - Session ID for the current user
   * @returns {Promise<Object>} Store details object containing currency and timezone
   */
  static async getStoreDetails(sessionId, params) {
    try {
      return await prisma.session.findFirst({
        where: {
          id: sessionId
        },
        select: params
      });
    } catch (error) {
      console.error('Error fetching store details:', error);
      return null;
    }
  }

  /**
   * Updates the store metafield with discount data
   * 
   * @param {Object} params - The parameters object
   * @param {Object} params.admin - Shopify admin API instance
   * @param {string} params.shopifyShopId - The Shopify shop ID (format: gid://shopify/Shop/123)
   * @param {Array<Object>} params.allDiscounts - Array of discount objects to be stored in metafield
   * @returns {Promise<string|'theres error'>} Returns metafield ID if successful, or error message if failed
   * @throws {Error} When GraphQL request fails
   */
  static async updateStoreMetafieldForVolumeDiscount({admin, shopifyShopId, allDiscounts}) {
    const simplifiedDiscounts = simplifyDiscountData(allDiscounts);

    const response = await admin.graphql(
      `#graphql
      mutation SetShopMetafield($ownerId: ID!, $value: String!) {
        metafieldsSet(
          metafields: [
            {
              namespace: "barn2_bundles",
              key: "product_discount",
              ownerId: $ownerId,
              type: "json",
              value: $value
            }
          ]
        ) {
          metafields {
            id
            key
            value
          }
          userErrors {
            field
            message
          }
        }
      }`,
      {
        variables: {
          ownerId: shopifyShopId,
          value: JSON.stringify(simplifiedDiscounts)
        }
      }
    );
  
    const responseJson = await response.json();
  
    const userErrors = responseJson.data.metafieldsSet.userErrors;
    if (userErrors.length > 0) {
      return 'error';
    }
  
    return responseJson.data.metafieldsSet.metafields[0].id;
  }

  /**
   * Checks if the app embed block is disabled in the store's theme
   * 
   * @param {Object} params - The parameters object
   * @param {Object} params.admin - Shopify admin API instance
   * @param {Object} params.store - Store object containing theme information
   * @param {string} [params.store.activeThemeGid] - The active theme GID
   * @returns {Promise<boolean|null>} Returns true if disabled, false if enabled, or null if error occurs
   */
  static async isAppEmbedDisabled({admin, store}) {
    const themeConfigData = await StoreService.getThemeConfigData({admin, activeThemeGid: store?.activeThemeGid});
    if (themeConfigData === 'error') return null;

    return isBarn2AppEmbedDisabled(themeConfigData[0].body.content);
  }

  /**
   * Retrieves theme configuration data from settings_data.json file
   * 
   * @param {Object} params - The parameters object
   * @param {Object} params.admin - Shopify admin API instance
   * @param {string} params.activeThemeGid - The active theme GID
   * @returns {Promise<Array|'error'>} Array of theme file nodes or 'error' if request fails
   */
  static async getThemeConfigData({admin, activeThemeGid}) {
    const files = [
      "config/settings_data.json"
    ];
    return await StoreService.fetchThemeFiles({admin, activeThemeGid, files});
  }
  
  /**
   * Fetches theme files using Shopify Admin GraphQL API
   * 
   * @param {Object} params - The parameters object
   * @param {Object} params.admin - Shopify admin API instance
   * @param {string} params.activeThemeGid - The active theme GID
   * @param {Array<string>} params.files - Array of file paths to fetch (e.g., ["config/settings_data.json"])
   * @returns {Promise<Array|'error'>} Array of theme file nodes containing file content and metadata, or 'error' if request fails
   */
  static async fetchThemeFiles({admin, activeThemeGid, files}) {
    const response = await admin.graphql(
      `#graphql
      query ThemeFiles($themeId: ID!, $filenames: [String!]!) {
        theme(id: $themeId) {
          files(filenames: $filenames) {
            nodes {
              body {
                ... on OnlineStoreThemeFileBodyBase64 {
                  contentBase64
                }
                ... on OnlineStoreThemeFileBodyText {
                  content
                }
                ... on OnlineStoreThemeFileBodyUrl {
                  url
                }
              }
              checksumMd5
              contentType
              createdAt
              filename
              size
              updatedAt
            }
            userErrors {
              code
              filename
            }
          }
        }
      }`,
      {
        variables: {
          themeId: activeThemeGid,
          filenames: files
        }
      }
    );

    const responseJson = await response.json();
  
    const userErrors = responseJson.data.theme.files.userErrors;
    if (userErrors.length > 0) {
      return 'error';
    }
  
    return responseJson.data.theme.files.nodes;
  }
}