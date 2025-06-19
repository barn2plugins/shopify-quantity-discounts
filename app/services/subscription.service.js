import { 
  shopifyCurrentActiveSubscription, 
  deactivatPreviousAppSubscriptions,
  createAppSubscription,
  getCurrentSessionActiveSubscription
} from "../models/Subscription.server";

/**
 * Checks if the current session has an active subscription
 * @param {Object} params - The parameters object
 * @param {string} params.sessionId - The session ID to check for active subscription
 * @returns {Promise<boolean>} Returns true if an active subscription exists, false otherwise
 */
export const currentSessionHasActiveSubscription = async (params) => {
  try {
    const activeSubscription = await getCurrentSessionActiveSubscription(params);
    if (activeSubscription) {
      return true;
    }
  } catch (error) {
    return false;
  }
}

/**
 * Retrieves the active subscription for the current session
 * @param {Object} params - The parameters object
 * @param {string} params.sessionId - The session ID to retrieve the subscription for
 * @returns {Promise<Object|boolean>} Returns the subscription object if found, false otherwise
 */
export const getActiveSubscriptionForCurrentSession = async (params) => {
  try {
    return await getCurrentSessionActiveSubscription(params);
  } catch (error) {
    return false;
  }
}

/**
 * Retrieves current active subscriptions from Shopify
 * @param {Function} graphql - The Shopify GraphQL client function
 * @returns {Promise<Object>} Returns object with:
 *                           - success: boolean indicating if operation was successful
 *                           - subscriptions: Array of active subscriptions if successful
 *                           - errors: Error message if unsuccessful
 */
export const getShopifyCurrentSubscription = async (graphql) => {
  try {
    const response = await shopifyCurrentActiveSubscription(graphql);
    
    if (response.errors) {
      return {
        success: false,
        errors: 'Coudl not get current subscription' 
      }
    }
    
    return {
      success: true,
      subscriptions: response.data?.currentAppInstallation?.activeSubscriptions
    }
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}

/**
 * Records a new subscription in the application database
 * @param {Object} params - The parameters object
 * @param {Array} params.subscriptions - Array of subscription data from Shopify
 * @param {Object} params.session - The current session object
 * @param {string} params.chargeId - The Shopify charge ID
 * @returns {Promise<Object>} Returns object with:
 *                           - success: boolean indicating if operation was successful
 *                           - error: Error message if unsuccessful
 */
export const recordAppSubscription = async (params) => {
  try {
    await createAppSubscription(params);
    return {
      success: true,
    }
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}

/**
 * Deactivates all previous active subscriptions for a store
 * @param {Object} params - The parameters object
 * @param {Object} params.admin - The Shopify admin client
 * @param {Object} params.session - The current session object
 * @returns {Promise<Object>} Returns object with:
 *                           - success: boolean indicating if operation was successful
 *                           - error: Error message if unsuccessful
 */
export const deactivatePreviousAppSubscriptions = async (params) => {
  try {
    const response = await deactivatPreviousAppSubscriptions(params);
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}

/**
 * Retrieves the revenue limit based on the subscription plan.
 * 
 * @param {Object} params - The parameters object
 * @returns {Promise<number>} The revenue limit for the subscription plan (1000 for Starter, 5000 for Growth, 0 for Pro)
 */
export const getPlanRevenueLimitBySubscription = async({planName}) => {
  const plan = planName || 'Starter';
  const planRevenueLimit = {
    'Starter': 1000,
    'Growth': 5000,
    'Pro': 0
  }
  return planRevenueLimit[plan];
}