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