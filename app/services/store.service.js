import prisma from "../db.server";

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

  static async updateStoreMetafieldForVolumeDiscount({admin, shopifyShopId, allDiscounts}) {
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
          value: JSON.stringify(allDiscounts)
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