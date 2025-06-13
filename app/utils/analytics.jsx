export const getStoreAnalyticsData = (data) => {
  return {
    discountedMonthlyOrders: {
      title: 'This month\'s discounted orders',
      amount: data.discountedMonthlyOrders,
      subdued: '0.00'
    },
    discountedAllTimeOrders: {
      title: 'All time discounted orders',
      amount: data.discountedAllTimeOrders,
      subdued: '0.00'
    },
    discountedMonthlyRevenue: {
      title: 'This month\'s discounted revenue',
      amount: data.discountedMonthlyRevenue,
      subdued: '0.00'
    },
    discountedAllTimeRevenue: {
      title: 'All time discounted revenue',
      amount: data.discountedAllTimeRevenue,
      subdued: '0.00'
    },
  }
};

export function processOrderLineItems(lineItems) {
  // Transform line items to database format
  const parsedLineItems = lineItems.map((lineItem) => ({
    cartLineId: lineItem.id,
    productId: lineItem.product_id,
    variantId: lineItem.variant_id,
    title: lineItem.title,
    variantTitle: lineItem.name,
    quantity: lineItem.quantity,
    price: lineItem.price,
    discountAllocations: lineItem.discount_allocations,
  }));

  // Calculate total discounted order value
  const discountedOrderValue = lineItems.reduce((total, lineItem) => {
    if (lineItem.discount_allocations.length === 0) {
      return total;
    }

    const totalDiscountAmount = lineItem.discount_allocations.reduce(
      (sum, allocation) => sum + parseFloat(allocation.amount),
      0
    );

    const originalTotal =
      parseFloat(lineItem.price) * parseInt(lineItem.quantity);
    const finalPrice = originalTotal - totalDiscountAmount;

    return total + finalPrice;
  }, 0).toFixed(2);

  return {
    parsedLineItems,
    discountedOrderValue,
    hasValidOrder: discountedOrderValue > 0,
  };
}


/**
 * Tracks the first order received event and updates the store option
 * @param {Object} params - The parameters object
 * @param {Object} params.session - The session object
 * @param {Object} params.store - The store object with id
 * @param {number} params.discountedOrderValue - The value of the discounted order
 * @returns {Promise<void>}
 */
export async function trackFirstOrderReceived({ session, store, discountedOrderValue, getOptionValue, sendUsageEventToMantle, setOrUpdateOption }) {
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

export async function trackOrderReceivedOnMantle({ session, orderId, discountedOrderValue, sendUsageEventToMantle }) {
  // Send the event to Mantle
  await sendUsageEventToMantle({
    session, 
    eventName: 'order_received',
    properties: { 'Order ID': orderId, 'Revenue': discountedOrderValue }
  });
}