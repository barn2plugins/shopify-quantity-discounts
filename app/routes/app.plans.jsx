import {
  Page,
  BlockStack,
} from "@shopify/polaris";
import { useLoaderData, useFetcher } from "@remix-run/react";

import { authenticate } from "../shopify.server";
import { monthlyPlans, annualPlans, userReviews, PLANS } from "../utils/plans";

import PricingBlock from '../components/Sections/PricingBlock';
import PlansReviews from '../components/Sections/PlansReviews';
import { useState, useEffect } from "react";

export const loader = async ({ request }) => {
  const { billing, session } = await authenticate.admin(request);

  const { hasActivePayment, appSubscriptions } = await billing.check({
    plans: [PLANS.Starter_Monthly, PLANS.Growth_Monthly, PLANS.Pro_Monthly, PLANS.Starter_Annual, PLANS.Growth_Annual, PLANS.Pro_Annual],
  });

  return {
    monthlyPlans,
    annualPlans,
    reviews: userReviews,
    hasActivePayment,
    currentSubscription: appSubscriptions[0],
  };
}

export default function PlansPage() {
  const fetcher = useFetcher();
  const { monthlyPlans, annualPlans, reviews, hasActivePayment, currentSubscription } = useLoaderData();
  const [loading, setLoading] = useState(false);
  const [defaultPlans, setDefaultPlans] = useState(monthlyPlans);
  const [subscriptionType, setSubscriptionType] = useState('monthly');

  const subscription = fetcher.data?.subscription;

  useEffect(() => {
    if (subscription?.success) {
      window.open(subscription.confirmationUrl, '_top');
    } else {
      setLoading(false);
    }

  }, [subscription]);

  useEffect(() => {
    if (subscriptionType === 'monthly') {
      setDefaultPlans(monthlyPlans);
    } else {
      setDefaultPlans(annualPlans);
    }
  }, [subscriptionType]);

  useEffect(() => {
    if (hasActivePayment) {
      if (currentSubscription.name.includes('Annual')) {
        setSubscriptionType('annual');
      }
    }
  }, [])

  return (
    <div className="barn2-plans-page barn2-full-width">
      <Page
        fullWidth={true}
        backAction={{content: 'Home', url: '/app'}}
        title={ 'My plan' }
      >
        <div className="barn2-page-inner">
          <BlockStack gap={1000}>
            <PricingBlock 
              hasActivePayment={hasActivePayment}
              currentSubscription={currentSubscription}
              defaultPlans={defaultPlans} 
              fetcher={fetcher} 
              loading={loading}
              setLoading={setLoading}
              subscriptionType={subscriptionType}
              setSubscriptionType={setSubscriptionType}
            />
            <PlansReviews reviews={reviews} />
          </BlockStack>
        </div>
      </Page>
    </div>
  );
}
