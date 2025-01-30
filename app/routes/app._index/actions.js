export const getAppStatisticsData = async () => {
  return {
    discountedMonthlyOrders: {
      title: 'This month\'s discounted orders',
      amount: '3,902',
      subdued: '0.00'
    },
    discountedAllTimeOrders: {
      title: 'All time discounted orders',
      amount: '49,021',
      subdued: '0.00'
    },
    discountedMonthlyRevenue: {
      title: 'This month\'s discounted revenue.',
      amount: '280',
      subdued: '0.00'
    },
    discountedAllTimeRevenue: {
      title: 'All time discounted revenue',
      amount: '902',
      subdued: '0.00'
    },
  }
};