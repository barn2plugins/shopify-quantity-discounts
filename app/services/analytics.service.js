import { 
  createOrderAnalytics, 
  getCurrentMonthsOrderNumbers,
  getAllTimeOrderNumbers,
  getCurrentMonthsOrderRevenue,
  getAllTimeOrderRevenue,
} from "../models/OrderAnalytics.server.js";

import { getOptionValue, setOrUpdateOption } from "./options.service";
import { sendUsageEventToMantle } from "./mantle.service"

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

  const { 
    discountedMonthlyOrders, 
    discountedAllTimeOrders, 
    discountedMonthlyRevenue, 
    discountedAllTimeRevenue 
  } = orderAnalyticsData;

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
    const discountedMonthlyOrders = await getCurrentMonthsOrderNumbers(params);
    const discountedAllTimeOrders = await getAllTimeOrderNumbers(params);
    const { _sum: { discountedOrderValue: discountedMonthlyRevenue } } = await getCurrentMonthsOrderRevenue(params);
    const { _sum: { discountedOrderValue: discountedAllTimeRevenue } } = await getAllTimeOrderRevenue(params);

    return {
      success: true,
      discountedMonthlyOrders,
      discountedAllTimeOrders,
      discountedMonthlyRevenue,
      discountedAllTimeRevenue
    }
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}


/**
 * Tracks the first order received event and updates the store option
 * @param {Object} params - The parameters object
 * @param {Object} params.session - The session object
 * @param {Object} params.store - The store object with id
 * @param {number} params.discountedOrderValue - The value of the discounted order
 * @returns {Promise<void>}
 */
export async function trackFirstOrderReceived({ session, store, discountedOrderValue }) {
  // Check if this is the first order received
  const firstOrderReceived = await getOptionValue({ storeId: store.id, key: 'first_order_received' });
  
  if (firstOrderReceived) {
    return;
  }

  // Send the event to Mantle
  await sendUsageEventToMantle({
    session, 
    eventName: 'first_order_received',
    properties: { revenue: discountedOrderValue }
  });

  // Record first order received in the store
  await setOrUpdateOption({
    sessionId: session.id, 
    key: 'first_order_received', 
    value: 'true'
  });
}

/**
 * Tracks order received events in Mantle analytics service
 * 
 * @param {Object} params - The parameters object
 * @param {Object} params.session - The current session object
 * @param {string} params.orderId - The ID of the received order
 * @param {number} params.discountedOrderValue - The value of the order after discounts
 * @param {Function} params.sendUsageEventToMantle - Function to send events to Mantle
 * @returns {Promise<void>} - Promise that resolves when tracking is complete
 */
export async function trackOrderReceivedOnMantle({ session, orderId, discountedOrderValue }) {
  // Send the event to Mantle
  await sendUsageEventToMantle({
    session, 
    eventName: 'order_received',
    properties: { 'Order ID': orderId, 'Revenue': discountedOrderValue }
  });
}

export const getStoreCurrentRevenue = async (params) => {
  try {
    const { _sum: { discountedOrderValue: discountedMonthlyRevenue } } = await getCurrentMonthsOrderRevenue(params);
    return {
      success: true,
      discountedMonthlyRevenue
    }
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}

export async function track75ThresholdOnMantle({
  session, 
  payload, 
  store, 
  planRevenueLimitBySubscription, 
  storeCurrentRevenue
}) {
  // Check if this 75 threshold haven't recorded
  const thresholdReached75 = await getOptionValue({ storeId: store.id, key: 'threshold_reached_75' });
  if (thresholdReached75) return;
    
  const revenueThreshold75Percentage = 0.75;
  const revenueThreshold75 = planRevenueLimitBySubscription * revenueThreshold75Percentage;
  
  if (storeCurrentRevenue?.discountedMonthlyRevenue >= revenueThreshold75) {
    await sendUsageEventToMantle({
      session,
      eventName: "threshold_reached_75",
      properties: { 'Order ID': payload.id, 'Revenue': storeCurrentRevenue?.discountedMonthlyRevenue }
    });
  }

  // Record threshold 75 order revenue
  await setOrUpdateOption({
    sessionId: session.id, 
    key: 'threshold_reached_75', 
    value: 'true'
  });
}

export async function track100ThresholdOnMantle({
  session, 
  payload, 
  store, 
  planRevenueLimitBySubscription, 
  storeCurrentRevenue
}) {
  // Check if this 100 threshold haven't recorded
  const thresholdReached100 = await getOptionValue({ storeId: store.id, key: 'threshold_reached_100' });
  if (thresholdReached100) return;
  
  if (storeCurrentRevenue?.discountedMonthlyRevenue >= planRevenueLimitBySubscription) {
    await sendUsageEventToMantle({
      session,
      eventName: "threshold_reached_100",
      properties: { 'Order ID': payload.id, 'Revenue': storeCurrentRevenue?.discountedMonthlyRevenue }
    })
  }

  // Record threshold 100 order revenue
  await setOrUpdateOption({
    sessionId: session.id, 
    key: 'threshold_reached_100', 
    value: 'true'
  });
}