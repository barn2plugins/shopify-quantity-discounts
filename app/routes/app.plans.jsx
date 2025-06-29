import {
  Page,
  BlockStack,
} from "@shopify/polaris";
import { useLoaderData } from "@remix-run/react";

import { authenticate } from "../shopify.server";
import { monthlyPlans, userReviews } from "../utils/plans";
import { useAppBridge } from "@shopify/app-bridge-react";
import { getStoreDetails } from "../services/store.service.js";
import PricingBlock from '../components/Sections/PricingBlock';
import PlansReviews from '../components/Sections/PlansReviews';
import { useState, useEffect } from "react";

import { useMantle } from '@heymantle/react';

export const loader = async ({ request }) => {
  const { session } = await authenticate.admin(request);

  const store = await getStoreDetails(session.id, {
    id: true,
    isPartnerDevelopment: true,
  });

  return {
    monthlyPlans,
    reviews: userReviews,
    store
  };
}

export default function PlansPage() {
  const { plans, customer, subscription, client, discount } = useMantle();
  const shopify = useAppBridge();
  const { monthlyPlans, reviews, store } = useLoaderData();
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
                shopify={shopify}
                currentSubscription={currentSubscription}
                setCurrentSubscription={setCurrentSubscription}
                client={client}
                discount={discount}
                defaultPlans={defaultPlans} 
                loading={loading}
                setLoading={setLoading}
                isPartnerDevelopment={store.isPartnerDevelopment}
              />
              <PlansReviews reviews={reviews} />
            </BlockStack>
          }
        </div>
      </Page>
    </div>
  );
}
