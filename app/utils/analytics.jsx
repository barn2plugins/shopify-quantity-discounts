/**
 * Generates formatted analytics data with appropriate date range text
 *
 * @param {Object} params - The parameters object
 * @param {Object} params.orderAnalyticsData - Order analytics data containing discount metrics
 * @param {Object} [params.analyticsDateRange] - Optional date range for the analytics data
 * 
 * @returns {Object} Formatted analytics data with titles, tooltips, and values
 */
export const getStoreAnalyticsData = ({orderAnalyticsData, analyticsDateRange}) => {
  let dateRangeText = 'Data shown is for the 30-day period';

  if (analyticsDateRange && analyticsDateRange.startDate && analyticsDateRange.endDate) {
    const startDate = new Date(analyticsDateRange.startDate);
    const endDate = new Date(analyticsDateRange.endDate);
    
    // Format dates as "DD MMM" (e.g., "14 May")
    const formatDate = (date) => {
      const day = date.getDate();
      const month = date.toLocaleString('en-US', { month: 'short' });
      return `${day} ${month}`;
    };
    
    dateRangeText = `Data shown is for the 30-day period from ${formatDate(startDate)} to ${formatDate(endDate)}`;
  }
  
  return {
    discountedMonthlyOrders: {
      title: 'This month\'s discounted orders',
      tooltip: dateRangeText,
      amount: orderAnalyticsData.discountedMonthlyOrders,
      subdued: '0.00'
    },
    discountedAllTimeOrders: {
      title: 'All time discounted orders',
      amount: orderAnalyticsData.discountedAllTimeOrders,
      subdued: '0.00'
    },
    discountedMonthlyRevenue: {
      title: 'This month\'s discounted revenue',
      tooltip: dateRangeText,
      amount: orderAnalyticsData.discountedMonthlyRevenue,
      subdued: '0.00'
    },
    discountedAllTimeRevenue: {
      title: 'All time discounted revenue',
      amount: orderAnalyticsData.discountedAllTimeRevenue,
      subdued: '0.00'
    },
  }
};

/**
 * Processes order line items to calculate discount values and format for database
 * 
 * @param {Array} lineItems - The order line items to process
 * @returns {Object} Object containing parsed line items, discounted order value, and order validity
 */
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

