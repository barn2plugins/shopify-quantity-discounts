import { createOrderAnalytics } from "../models/OrderAnalytics.server.js";

/**
 * Saves order analytics data and handles any errors that occur
 * @param {Object} params - The parameters object
 * @param {Array} params.discountBundleLineItems - Array of cart line items with discount information
 * @param {string} params.sessionId - The session ID to associate the analytics with a store
 * @returns {Promise<Object>} Returns object with:
 *                           - success: boolean indicating if operation was successful
 *                           - error: Error message if unsuccessful
 */
export const saveOrderAnalytics = async (params) => {
  try {
    await createOrderAnalytics(params);
    return {
      success: true,
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: error.message
    };
  }
}