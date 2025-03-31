import { createOrderAnalytics, getCurrentMonthsOrderAnalytics, getAllTimeOrderAnalytics } from "../models/OrderAnalytics.server.js";

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

/**
 * Retrieves and calculates order analytics metrics
 * @param {Object} params - The parameters object
 * @param {string} params.sessionId - The session ID to retrieve analytics for
 * @returns {Promise<Object>} Returns object with:
 *                           - success: boolean indicating if operation was successful
 *                           - discountedMonthlyOrders: Number of orders in current month
 *                           - discountedAllTimeOrders: Total number of orders
 *                           - discountedMonthlyRevenue: Total revenue for current month
 *                           - discountedAllTimeRevenue: Total revenue for all time
 *                           - default: boolean indicating if default values were returned due to error
 */
export const getOrderAnalytics = async (params) => {
  const orderAnalyticsData = await getOrderAnalyticsData(params);

  if (!orderAnalyticsData.success) {
    return {
      success: false,
      discountedMonthlyOrders: 0,
      discountedAllTimeOrders: 0,
      discountedMonthlyRevenue: 0,
      discountedAllTimeRevenue: 0,
    };
  }

  const { currentMonthsOrderAnalytics, allTimeOrderAnalytics } = orderAnalyticsData;
  
  const discountedMonthlyOrders = currentMonthsOrderAnalytics.length;
  const discountedAllTimeOrders = allTimeOrderAnalytics.length;
  const discountedMonthlyRevenue = currentMonthsOrderAnalytics.reduce((total, order) => {
    return Number((total + (parseFloat(order.price) * order.quantity)).toFixed(2));  
  }, 0);
  const discountedAllTimeRevenue = allTimeOrderAnalytics.reduce((total, order) => {
    return Number((total + (parseFloat(order.price) * order.quantity)).toFixed(2));
  }, 0);
  
  return {
    success: true,
    discountedMonthlyOrders,
    discountedAllTimeOrders,
    discountedMonthlyRevenue,
    discountedAllTimeRevenue,
  }
}

/**
 * Retrieves both current month and all-time order analytics data
 * @param {Object} params - The parameters object
 * @param {string} params.sessionId - The session ID to retrieve analytics for
 * @returns {Promise<Object>} Returns object with:
 *                           - success: boolean indicating if operation was successful
 *                           - currentMonthsOrderAnalytics: Array of current month's order analytics
 *                           - allTimeOrderAnalytics: Array of all-time order analytics
 *                           - error: Error message if unsuccessful
 */
const getOrderAnalyticsData = async (params) => {
  try {
    const currentMonthsOrderAnalytics = await getCurrentMonthsOrderAnalytics(params);
    const allTimeOrderAnalytics = await getAllTimeOrderAnalytics(params);

    return {
      success: true,
      currentMonthsOrderAnalytics,
      allTimeOrderAnalytics,
    }
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}