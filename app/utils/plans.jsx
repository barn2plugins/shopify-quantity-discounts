export const defaultPlans = [
  {
    id: 0,
    name: 'Free',
    price: {monthly: 0.00, yearly: 0.00},
    features: [
      'Perfect for Development Stores',
      'Test drive all features before launch',
      'All features included',
      'Email & live chat support'
    ]
  },
  {
    id: 1,
    name: 'Starter',
    price: {monthly: 12.99, yearly: 119},
    features: [
      'Up to <strong>$1,000/month</strong> in additional revenue',
      'All features included',
      'Unlimited bundles & discounts',
      'Email & live chat support'
    ]
  },
  {
    id: 2,
    name: 'Growth',
    price: {monthly: 24.99, yearly: 239},
    features: [
      'Up to <strong>$5,000/month</strong> in additional revenue',
      'All features included',
      'Unlimited bundles & discounts',
      'Email & live chat support'
    ]
  },
  {
    id: 3,
    name: 'Pro',
    price: {monthly: 49.99, yearly: 479},
    features: [
      '<strong>No revenue limits</strong>',
      'All features included',
      'Unlimited bundles & discounts',
      'Email & live chat support',
      'Annual strategy consultation'
    ]
  },
];

export const userReviews = [
  {
    id: 1,
    user: {
      name: 'Larissa',
      location: 'United Kingdom',
    },
    title: 'Super helpful',
    description: 'A wonderful company that has helped me with all of my needs and has even gone the extra mile without charging extra. Special thanks to Adrian and the developers for sorting out our problems in a speedy and professional manner.',
    rating: 5,
  },
  {
    id: 2,
    user: {
      name: 'Jolanda',
      location: 'Netherlands',
    },
    title: 'Very good customer service',
    description: 'This company has really good customer support. If you face a problem they are very cooperative in finding a solution. You can feel that it\'s not only about earning money - it\'s all about satisfied customers.',
    rating: 5,
  }
];