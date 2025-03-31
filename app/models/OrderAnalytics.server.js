import prisma from "../db.server"

/**
 * Creates multiple order analytics records in a single transaction
 * @param {Object} params - The parameters object
 * @param {Array} params.discountBundleLineItems - Array of cart line items with discount information
 * @param {string} params.sessionId - The session ID to associate the analytics with a store
 * @returns {Promise<Array>} Array of created OrderAnalytics records
 */
export const createOrderAnalytics = async ({discountBundleLineItems, sessionId}) => {
  return await prisma.$transaction(
    discountBundleLineItems.map(item => 
      prisma.orderAnalytics.create({
        data: {
          store: { 
            connect: { 
              sessionId 
            } 
          },
          cartLineId: parseInt(item.id),
          productId: parseInt(item.product_id),
          variantId: parseInt(item.variant_id),
          productTitle: item.title,
          price: item.price,
          quantity: parseInt(item.quantity),
          totalDiscountAmount: item.totalDiscountAmount.toString()
        }
      })
    )
  );
}

/**
 * Retrieves order analytics records for the current month
 * @param {Object} params - The parameters object
 * @param {string} params.sessionId - The session ID to retrieve analytics for
 * @returns {Promise<Array>} Array of OrderAnalytics records for the current month
 */
export const getCurrentMonthsOrderAnalytics = async ({sessionId}) => {
  const firstDayOfMonth = new Date();
  firstDayOfMonth.setDate(1);
  firstDayOfMonth.setHours(0, 0, 0, 0);

  const lastDayOfMonth = new Date(firstDayOfMonth);
  lastDayOfMonth.setMonth(lastDayOfMonth.getMonth() + 1);
  lastDayOfMonth.setDate(0);
  lastDayOfMonth.setHours(23, 59, 59, 999);

  return await prisma.orderAnalytics.findMany({
    where: {
      store: {
        sessionId
      },
      createdAt: {
        gte: firstDayOfMonth,
        lte: lastDayOfMonth
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