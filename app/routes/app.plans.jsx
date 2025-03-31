import {
  Page,
  BlockStack,
} from "@shopify/polaris";
import { useLoaderData, useFetcher } from "@remix-run/react";

import { authenticate } from "../shopify.server";
import { defaultPlans, userReviews } from "../utils/plans";
import { getActiveSubscriptionForCurrentSession } from "../services/subscription.service";

import PlansPricing from '../components/Sections/PlansPricing';
import PlansReviews from '../components/Sections/PlansReviews';
import { useState, useEffect } from "react";

export const loader = async ({ request }) => {
  const { session } = await authenticate.admin(request);

  const currentSubscription = await getActiveSubscriptionForCurrentSession({sessionId: session.id});

  const appHandle = process.env.SHOPIFY_APP_HANDLE || "barn2-bundles-bulk-discounts";
  const appUrl = `https://${session?.shop}/admin/apps/${appHandle}`;

  return {
    defaultPlans,
    reviews: userReviews,
    appUrl,
    currentSubscription: currentSubscription || false,
  };
}

export default function PlansPage() {
  const fetcher = useFetcher();
  const { defaultPlans, reviews, appUrl, currentSubscription } = useLoaderData();
  const [loading, setLoading] = useState(false);
  const subscription = fetcher.data?.subscription;

  useEffect(() => {
    if (subscription?.success) {
      window.open(subscription.confirmationUrl, '_top');
    } else {
      setLoading(false);
    }

  }, [subscription]);

  return (
    <div className="barn2-plans-page barn2-full-width">
      <Page
        fullWidth={true}
        backAction={{content: 'Home', url: '/app'}}
        title={ 'My plan' }
      >
        <BlockStack gap={1000}>
          <PlansPricing 
            currentSubscription={currentSubscription}
            defaultPlans={defaultPlans} 
            fetcher={fetcher} 
            appUrl={appUrl} 
            loading={loading}
            setLoading={setLoading}
          />
          <PlansReviews reviews={reviews} />
        </BlockStack>
      </Page>
    </div>
  );
}
