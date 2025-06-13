export const PLANS = {
  Starter_Monthly: "Starter",
  Growth_Monthly: "Growth",
  Pro_Monthly: "Pro",
  Starter_Annual: "Starter Annual",
  Growth_Annual: "Growth Annual",
  Pro_Annual: "Pro Annual"
};

export const monthlyPlans = [
  {
    id: 0,
    title: 'Free',
    name: 'Free',
    amount: 0.00,
    price: 0.00,
    features: [
      'Perfect for Development Stores',
      'Test drive all features before launch',
      'All features included',
      'Email & live chat support'
    ],
    revenueLimit: 0
  },
  {
    id: 1,
    title: 'Starter',
    name: PLANS.Starter_Monthly,
    price: 12.99,
    features: [
      'Up to <strong>$1,000/month</strong> in additional revenue',
      'All features included',
      'Unlimited bundles & discounts',
      'Email & live chat support'
    ],
    cappedAmount: 49.99,
    cappedAmountTerms: "Additional $12 charge applies when you earn additional revenue more than $1000 in your current plan. If you exceed $5000 of additonal revenue, you will be charged a total additional $37 on top of current subscription.",
    revenueLimit: 1000
  },
  {
    id: 2,
    title: 'Growth',
    name: PLANS.Growth_Monthly,
    price: 24.99,
    features: [
      'Up to <strong>$5,000/month</strong> in additional revenue',
      'All features included',
      'Unlimited bundles & discounts',
      'Email & live chat support'
    ],
    cappedAmount: 49.99,
    cappedAmountTerms: "If you exceed $5000 of additonal revenue, you will be charged a total additional $37 on top of current subscription.",
    revenueLimit: 5000
  },
  {
    id: 3,
    title: 'Pro',
    name: PLANS.Pro_Monthly,
    price: 49.99,
    features: [
      '<strong>No revenue limits</strong>',
      'All features included',
      'Unlimited bundles & discounts',
      'Email & live chat support',
      'Annual strategy consultation'
    ],
  },
];

export const annualPlans = [
  {
    id: 0,
    title: 'Free',
    name: 'Free',
    price: 0.00,
    features: [
      'Perfect for Development Stores',
      'Test drive all features before launch',
      'All features included',
      'Email & live chat support'
    ],
    revenueLimit: 0
  },
  {
    id: 1,
    title: 'Starter',
    name: PLANS.Starter_Annual,
    price: 119,
    features: [
      'Up to <strong>$1,000/month</strong> in additional revenue',
      'All features included',
      'Unlimited bundles & discounts',
      'Email & live chat support'
    ],
    revenueLimit: 1000
  },
  {
    id: 2,
    title: 'Growth',
    name: PLANS.Growth_Annual,
    price: 239,
    features: [
      'Up to <strong>$5,000/month</strong> in additional revenue',
      'All features included',
      'Unlimited bundles & discounts',
      'Email & live chat support'
    ],
    revenueLimit: 5000
  },
  {
    id: 3,
    title: 'Pro',
    name: PLANS.Pro_Annual,
    price: 479,
    features: [
      '<strong>No revenue limits</strong>',
      'All features included',
      'Unlimited bundles & discounts',
      'Email & live chat support',
      'Annual strategy consultation'
    ],
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