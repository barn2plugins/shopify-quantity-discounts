import prisma from "../db.server";
import { simplifyDiscountData } from "../utils/utils";

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
              namespace: "barn2_custom_discounts",
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
      return 'theres error';
    }
  
    return responseJson.data.metafieldsSet.metafields[0].id;
  }
}