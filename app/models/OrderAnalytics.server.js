import prisma from "../db.server"

/**
 * Creates multiple order analytics records in a single transaction
 * @param {Object} params - The parameters object
 * @param {Array} params.discountedOrderValue - Array of cart line items with discount information
 * @param {string} params.sessionId - The session ID to associate the analytics with a store
 * @returns {Promise<Array>} Array of created OrderAnalytics records
 */
export const createOrderAnalytics = async ({orderId, parsedLineItems, discountedOrderValue, sessionId}) => {
  return await prisma.orderAnalytics.create({
    data: {
      store: { 
        connect: { 
          sessionId 
        }
      },
      orderId: parseInt(orderId),
      lineItems: JSON.stringify(parsedLineItems),
      discountedOrderValue: discountedOrderValue.toString(),
    }
  });
}

/**
 * Retrieves order analytics records for the current month
 * @param {Object} params - The parameters object
 * @param {string} params.sessionId - The session ID to retrieve analytics for
 * @returns {Promise<Array>} Array of OrderAnalytics records for the current month
 */
export const findCurrentOrdersByDateRange = async ({sessionId, startDate, endDate}) => {
  return await prisma.orderAnalytics.findMany({
    where: {
      store: {
        sessionId
      },
      createdAt: {
        gte: startDate,
        lte: endDate
      }
    }
  });
}

/**
 * Retrieves all order analytics records for a store
 * @param {Object} params - The parameters object
 * @param {string} params.sessionId - The session ID to retrieve analytics for
 * @returns {Promise<Array>} Array of all OrderAnalytics records
 */
export const getAllTimeOrderAnalytics = async ({sessionId}) => {
  return await prisma.orderAnalytics.findMany({
    where: {
      store: {
        sessionId
      }
    }
  });
}