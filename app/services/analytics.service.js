import { createOrderAnalytics, findCurrentOrdersByDateRange, getAllTimeOrderAnalytics } from "../models/OrderAnalytics.server.js";

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
  let updatedParams = {};
  if (params?.currentSubscription) {
    updatedParams = {
      sessionId: params?.sessionId,
      startDate: params?.currentSubscription?.currentPeriodStart,
      endDate: params?.currentSubscription?.currentPeriodEnd,
    };
  } else {
    const startDate = new Date();
    startDate.setDate(1);
    startDate.setHours(0, 0, 0, 0);
  
    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + 1);
    endDate.setDate(0);
    endDate.setHours(23, 59, 59, 999);
  
    updatedParams = {
      sessionId: params?.sessionId,
      startDate,
      endDate,
    }
  }

  const orderAnalyticsData = await getOrderAnalyticsData(updatedParams);

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
    return Number(total + parseFloat(order.discountedOrderValue));
  }, 0);
  const discountedAllTimeRevenue = allTimeOrderAnalytics.reduce((total, order) => {
    return Number(total + parseFloat(order.discountedOrderValue));  
  }, 0);
  
  return {
    success: true,
    discountedMonthlyOrders,
    discountedAllTimeOrders,
    discountedMonthlyRevenue,
    discountedAllTimeRevenue,
  }
}

export const orderAnalyticsForCurrentBilling = async (sessionId, subscription) => {
  try {
    const startDate = new Date(subscription.billingOn);
    const endDate = new Date(subscription.billingPeriodEnd);
    endDate.setHours(23, 59, 59, 999);

    const params = {
      sessionId,
      startDate,
      endDate,
    }

    return await findCurrentOrdersByDateRange(params);
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: error.message
    };
  }
}

export const getCurrentMonthsOrderAnalytics = async (params) => {
  return await findCurrentOrdersByDateRange(params);
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