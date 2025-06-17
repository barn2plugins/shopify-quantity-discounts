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
      discountedOrderValue: parseFloat(discountedOrderValue),
    }
  });
}

/**
 * Counts order analytics records within a date range for a store
 * @param {Object} params - Parameters object with sessionId, startDate, and endDate
 * @returns {Promise<number>} Count of matching records
 */
export const getCurrentMonthsOrderNumbers = async ({sessionId, startDate, endDate}) => {
  return await prisma.orderAnalytics.count({
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
 * Counts all order analytics records for a store
 * @param {Object} params - Object with sessionId
 * @returns {Promise<number>} Total count of records
 */
export const getAllTimeOrderNumbers = async ({sessionId}) => {
  return await prisma.orderAnalytics.count({
    where: {
      store: {
        sessionId
      }
    }
  });
}

/**
 * Calculates total revenue from discounted orders within a date range
 * @param {Object} params - Object with sessionId, startDate, and endDate
 * @returns {Promise<Object>} Sum of discountedOrderValue for matching records
 */
export const getCurrentMonthsOrderRevenue = async ({sessionId, startDate, endDate}) => {
  return await prisma.orderAnalytics.aggregate({
    where: {
      store: {
        sessionId
      },
      createdAt: {
        gte: startDate,
        lte: endDate
      }
    },
    _sum: {
      discountedOrderValue: true
    }
  });
}
/**
 * Calculates total revenue from all order analytics records for a store
 * @param {Object} params - Object with sessionId
 * @returns {Promise<Object>} Sum of discountedOrderValue for all records
 */
export const getAllTimeOrderRevenue = async ({sessionId}) => {
  return await prisma.orderAnalytics.aggregate({
    where: {
      store: {
        sessionId
      }
    },
    _sum: {
      discountedOrderValue: true
    }
  });
}
