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
      title: 'This month\'s discounted revenue.',
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