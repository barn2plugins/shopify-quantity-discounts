import {
  Page,
  BlockStack,
  Box
} from "@shopify/polaris";
import { authenticate } from "../../shopify.server";
import { useLoaderData } from "@remix-run/react";
import { useState, useEffect } from "react";
import { useFetcher } from "@remix-run/react";

// Internal components and libraries
import DiscountAnalytics from "./components/DiscountAnalytics.jsx";
import DiscountAnalyticsSkeleton from "./components/DiscountAnalyticsSkeleton.jsx";
import DiscountBundlesTable from "./components/DiscountBundlesTable";
import EmptyStateComponent from "./components/EmptyStateComponent";
import AppBlockEmbed from "../../components/Notice/AppBlockEmbed.jsx";

import { getAllBundles } from "../../services/bundle.service.js";
import { getOrderAnalytics } from "../../services/analytics.service";
import { getStoreDetails } from "../../services/store.service";
import { getStoreAnalyticsData } from "../../utils/analytics";
import { getDateRangeForAnalytics } from "../../utils/utils"
import { getMantleCustomer } from "../../services/mantle.service";

export const loader = async ({ request }) => {
  const { session } = await authenticate.admin(request);

  const page = 1;
  const limit = 20;
  const bundlesDiscountsExtensionId = process?.env?.SHOPIFY_BARN2_BUNDLES_BULK_DISCOUNTS_ID;

  const discountBundles = await getAllBundles(session.id, page, limit);
 
  if (!discountBundles.success) {
    return null;
  }

  return { 
    discountBundles: discountBundles.bundles,
    bundlesDiscountsExtensionId,
    pagination: discountBundles.pagination
  };
};

export const action = async ({ request }) => {
  const { session, billing } = await authenticate.admin(request);
  
  const formData = await request.formData();
  const fetcherData = Object.fromEntries(formData);
  
  if (fetcherData?.action === 'paginateBundlesData') {
    const page = parseInt(fetcherData?.page);
    const limit = parseInt(fetcherData?.limit);
    const discountBundles = await getAllBundles(session.id, page, limit);

    if (!discountBundles.success) {
      return null;
    }
    
    return {
      bundles: discountBundles.bundles, 
      pagination: discountBundles.pagination
    }
  }

  if (fetcherData?.action === 'getAnalyticsData') {
    // Get the store details for this session
    const store = await getStoreDetails(session.id, {
      id: true,
      createdAt: true
    });
    const mantleCustomer = await getMantleCustomer({session});
    const subscription = mantleCustomer.subscription;

    const analyticsDateRange = getDateRangeForAnalytics({subscription, store}); 

    const orderAnalyticsData = await getOrderAnalytics({
      sessionId: session.id, 
      ...analyticsDateRange
    });

    const analyticsData = getStoreAnalyticsData({orderAnalyticsData, analyticsDateRange});
    
    return {
      analyticsData
    }
  }

  return null;
}

export default function Index() {
  const fetcher = useFetcher();
  const analyticsFetcher = useFetcher();
  const storeStatusFetcher = useFetcher();
  const appEmbedFetcher = useFetcher();

  const { discountBundles, bundlesDiscountsExtensionId, pagination } = useLoaderData();
  const [ isAppEmbedDisabled, setIsAppEmbedDisabled ] = useState(false);

  const [ bundles, setBundles ] = useState(discountBundles || []);
  const [ bundlesPagination, setBundlesPagination ] = useState(pagination || {});

  const [ analyticsDataLoaded, setAnalyticsDataLoaded ] = useState(false);
  const [ analyticsData, setAnalyticsData ] = useState({});

  const [ shouldLimitFeatures, setShouldLimitFeatures ] = useState(false);

  const updatedBundles = fetcher.data?.bundles;
  const updatedPagination = fetcher.data?.pagination;

  const shouldDisplaySortIcon = bundles.length > 1;

  useEffect(() => {
    if (updatedBundles) {
      setBundles(updatedBundles);
    }
    if (updatedPagination) {
      setBundlesPagination(updatedPagination);
    }
  }, [updatedBundles, updatedPagination]);

  useEffect(() => {
    if (appEmbedFetcher.data?.appEmbedDisabled) {
      setIsAppEmbedDisabled(true);
    }
    if (analyticsFetcher.data?.analyticsData) {
      setAnalyticsDataLoaded(true);
      setAnalyticsData(analyticsFetcher.data?.analyticsData);
    }
    if (storeStatusFetcher.data?.shouldLimitFeatures) {
      setShouldLimitFeatures(storeStatusFetcher.data?.shouldLimitFeatures === true)
    }
  }, [appEmbedFetcher?.data, analyticsFetcher?.data, storeStatusFetcher?.data])

  useEffect(() => {
    const checkStoreActiveStatus = setTimeout(() => {
      // Check app embed enabled or not
      storeStatusFetcher.submit(
        {
          action: 'checkStoreActiveStatus',
        },
        {
          method: 'POST',
          action: '/app/check-app-subscription-status'
        }
      )
    }, 100);
    
    const embedTimeoutId = setTimeout(() => {
      // Check app embed enabled or not
      appEmbedFetcher.submit(
        {},
        {
          method: 'POST',
          action: '/app/check-app-embed-status'
        }
      )
    }, 200);

    // Cleanup function to clear the timeout on unmount
    return () => {
      clearTimeout(embedTimeoutId);
      clearTimeout(checkStoreActiveStatus);
    };
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      analyticsFetcher.submit(
        { 
          action: 'getAnalyticsData'
        },
        {
          method: "POST",
        }
      );
    }, 400);

    // Cleanup function to clear the timeout on unmount
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="barn2-app-home">
      <Page fullWidth={bundles.length > 0 ? true : false}>
        <Box style={{ paddingBottom: '40px' }}>
          { bundles.length <= 0 && (
            <EmptyStateComponent />
          ) }
    
          { bundles.length > 0 && (
            <BlockStack gap={500}>
              { bundles.length > 0 && isAppEmbedDisabled && <AppBlockEmbed bundlesDiscountsExtensionId={bundlesDiscountsExtensionId} />}
              {!analyticsDataLoaded && <DiscountAnalyticsSkeleton/>}
              {analyticsDataLoaded && <DiscountAnalytics analyticsData={analyticsData}/>}
              <BlockStack gap="1000">
                <DiscountBundlesTable 
                  fetcher={fetcher} 
                  discountBundles={bundles} 
                  pagination={bundlesPagination} 
                  shouldDisplaySortIcon={shouldDisplaySortIcon}
                  shouldLimitFeatures={shouldLimitFeatures}
                />
              </BlockStack>
            </BlockStack>
          ) }
        </Box>
      </Page>
    </div>
  );
}
