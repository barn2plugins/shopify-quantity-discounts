import prisma from "../db.server";

/**
 * Retrieves the most recent active subscription for a given session
 * @param {Object} params - The parameters object
 * @param {string} params.sessionId - The session ID to look up the subscription
 * @returns {Promise<Object|null>} The subscription object if found, null otherwise
 */
export const getCurrentSessionActiveSubscription = async ({sessionId}) => {
  return await prisma.subscription.findFirst({
    where: {
      store: {
        sessionId
      },
      active: true,
      status: 'ACTIVE'
    },
    orderBy: {
      createdAt: 'desc'
    }
  });
}

/**
 * Fetches current active subscriptions from Shopify using GraphQL API
 * @param {Function} graphql - The Shopify GraphQL client function
 * @returns {Promise<Object>} JSON response containing active subscriptions data:
 *                           - id: Subscription ID
 *                           - name: Plan name
 *                           - status: Subscription status
 *                           - createdAt: Creation date
 *                           - currentPeriodEnd: Subscription end date
 *                           - test: Whether it's a test subscription
 *                           - trialDays: Number of trial days
 *                           - lineItems: Array of subscription line items with pricing details
 */
export const shopifyCurrentActiveSubscription = async (graphql) => {
  const response = await graphql(
    `#graphql
      query GetRecurringApplicationCharges {
        currentAppInstallation {
          activeSubscriptions {
              id
              name
              status
              createdAt
              currentPeriodEnd
              test
              trialDays
              lineItems {
                  id
                  plan {
                      pricingDetails {
                          __typename
                          ... on AppRecurringPricing {
                              price {
                                  amount
                                  currencyCode
                              }
                          }
                      }
                  }
              }
          }
        }
      }
    `
  );

  return await response.json();
}

/**
 * Creates a new subscription record in the database
 * @param {Object} params - The parameters object
 * @param {Array} params.subscriptions - Array of subscription data from Shopify
 * @param {Object} params.session - The current session object
 * @param {string} params.chargeId - The Shopify charge ID
 * @returns {Promise<Object>} The created subscription record
 * @throws {Error} If subscription data is invalid or missing required fields
 */
export const createAppSubscription = async({subscriptions, session, chargeId}) => {
  const currentSubscription = subscriptions[0];
  const lineItem = currentSubscription.lineItems[0];

  return await prisma.subscription.create({
    data: {
      store: { connect: { sessionId: session.id } },
      chargeId: chargeId,
      plan: currentSubscription.name,
      price: lineItem.plan.pricingDetails.price.amount,
      currency: lineItem.plan.pricingDetails.price.currencyCode,
      status: currentSubscription.status,
      active: currentSubscription.status === 'ACTIVE',
      test: currentSubscription.test,
      trialDays: parseInt(currentSubscription.trialDays),
      billingOn: currentSubscription.createdAt,
      billingPeriodEnd: currentSubscription.currentPeriodEnd
    }
  });
}

/**
 * Deactivates all active subscriptions for a store within a transaction
 * @param {Object} params - The parameters object
 * @param {Object} params.admin - The Shopify admin client
 * @param {Object} params.session - The current session object containing store information
 * @returns {Promise<void>} Resolves when all subscriptions are deactivated
 */
export const deactivatPreviousAppSubscriptions = async ({session}) => {
  await prisma.$transaction(async (tx) => {
    // Update all active subscriptions for this store to inactive
    await tx.subscription.updateMany({
      where: {
        store: {
          sessionId: session.id
        },
        active: true,
        status: 'ACTIVE'
      },
      data: {
        active: false,
        status: 'CANCELLED'
      }
    });
  });
}