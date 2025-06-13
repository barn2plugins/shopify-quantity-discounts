import {
  Page,
  BlockStack,
} from "@shopify/polaris";
import { useLoaderData, useFetcher } from "@remix-run/react";

import { authenticate } from "../shopify.server";
import { monthlyPlans, userReviews, PLANS } from "../utils/plans";

import PricingBlock from '../components/Sections/PricingBlock';
import PlansReviews from '../components/Sections/PlansReviews';
import { useState, useEffect } from "react";

import { useMantle } from '@heymantle/react';

export const loader = async ({ request }) => {
  const { session } = await authenticate.admin(request);

  return {
    monthlyPlans,
    reviews: userReviews,
  };
}

export default function PlansPage() {
  const { plans, customer, subscription, client, discount } = useMantle();

  const { monthlyPlans, reviews } = useLoaderData();
  const [loading, setLoading] = useState(false);
  const [defaultPlans, setDefaultPlans] = useState(monthlyPlans);
  const [currentSubscription, setCurrentSubscription] = useState({});

  useEffect(() => {
    setCurrentSubscription(subscription);
  }, [subscription])

  return (
    <div className="barn2-plans-page barn2-full-width">
      <Page
        fullWidth={true}
        backAction={{content: 'Home', url: '/app'}}
        title={ 'My plan' }
      >
        <div className="barn2-page-inner">
          { plans && plans.length > 0 && 
            <BlockStack gap={1000}>
              <PricingBlock 
                plans={plans}
                customer={customer}
                currentSubscription={currentSubscription}
                setCurrentSubscription={setCurrentSubscription}
                client={client}
                discount={discount}
                defaultPlans={defaultPlans} 
                loading={loading}
                setLoading={setLoading}
              />
              <PlansReviews reviews={reviews} />
            </BlockStack>
          }
        </div>
      </Page>
    </div>
  );
}
