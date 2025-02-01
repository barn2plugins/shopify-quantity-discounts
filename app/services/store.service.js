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
  static async getStoreDetails(sessionId) {
    try {
      return await prisma.session.findFirst({
        where: {
          id: sessionId
        },
        select: {
          currency: true,
          timezone: true
        }
      });
    } catch (error) {
      console.error('Error fetching store details:', error);
      return null;
    }
  }
}