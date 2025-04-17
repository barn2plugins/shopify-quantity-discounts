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
import DiscountBundlesTable from "./components/DiscountBundlesTable";
import EmptyStateComponent from "./components/EmptyStateComponent";
import SupportBlock from "./components/SupportBlock";
import AppBlockEmbed from "../../components/Notice/AppBlockEmbed.jsx";

import { getAllBundles } from "../../services/bundle.service.js";
import { getStoreDetails, isAppEmbedDisabled } from "../../services/store.service.js";
import { getOrderAnalytics } from "../../services/analytics.service";

import { getStoreAnalyticsData } from "../../utils/analytics"

export const loader = async ({ request }) => {
  const { admin, session } = await authenticate.admin(request);
  
  const page = 1;
  
  const limit = 20;

  const bundlesDiscountsExtensionId = process?.env?.SHOPIFY_BARN2_BUNDLES_BULK_DISCOUNTS_ID;

  const store = await getStoreDetails(session.id, { activeThemeGid: true });

  const appEmbedDisabled = store ? await isAppEmbedDisabled({admin, store}) : true;

  const discountBundles = await getAllBundles(session.id, page, limit);

  if (!discountBundles.success) {
    return null;
  }

  const orderAnalyticsData = await getOrderAnalytics({sessionId: session.id});
  
  if (!orderAnalyticsData.success) {
    return null;
  }

  const analyticsData = getStoreAnalyticsData(orderAnalyticsData);

  return { 
    analyticsData,
    discountBundles: discountBundles.bundles,
    appEmbedDisabled,
    bundlesDiscountsExtensionId,
    pagination: discountBundles.pagination,
  };
};

export const action = async ({ request }) => {
  const { session } = await authenticate.admin(request);
  
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

  return null;
}

export default function Index() {
  const fetcher = useFetcher();
  const { analyticsData, discountBundles, appEmbedDisabled, bundlesDiscountsExtensionId, pagination } = useLoaderData();
  const [ isAppEmbedDisabled, setIsAppEmbedDisabled ] = useState(appEmbedDisabled);
  const [ displaySupportBanner, setDisplaySupportBanner ] = useState(true);

  const [ bundles, setBundles ] = useState(discountBundles || []);
  const [ bundlesPagination, setBundlesPagination ] = useState(pagination || {});

  const updatedBundles = fetcher.data?.bundles;
  const updatedPagination = fetcher.data?.pagination;

  useEffect(() => {
    if (updatedBundles) {
      setBundles(updatedBundles);
    }
    if (updatedPagination) {
      setBundlesPagination(updatedPagination);
    }
  }, [updatedBundles, updatedPagination]);

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
              <DiscountAnalytics analyticsData={analyticsData}/>
              <BlockStack gap="1000">
                <DiscountBundlesTable fetcher={fetcher} discountBundles={bundles} pagination={bundlesPagination} />
                { displaySupportBanner && <SupportBlock setDisplaySupportBanner={setDisplaySupportBanner} /> }
              </BlockStack>
            </BlockStack>
          ) }
        </Box>
      </Page>
    </div>
  );
}
