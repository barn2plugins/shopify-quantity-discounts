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
import DiscountStatistics from "./components/DiscountStatistics";
import DiscountBundlesTable from "./components/DiscountBundlesTable";
import EmptyStateComponent from "./components/EmptyStateComponent";
import SupportBlock from "./components/SupportBlock";
import AppBlockEmbed from "../../components/Notice/AppBlockEmbed.jsx";
import { getAppStatisticsData } from "./actions";

import { BundleService } from "../../services/bundle.service.js";
import { StoreService } from "../../services/store.service.js";

export const loader = async ({ request }) => {
  const { admin, session } = await authenticate.admin(request);
  
  const page = 1;
  
  const limit = 20;

  const bundlesDiscountsExtensionId = process?.env?.SHOPIFY_BARN2_BUNDLES_BULK_DISCOUNTS_ID;

  const store = await StoreService.getStoreDetails(session.id, { activeThemeGid: true });

  const appEmbedDisabled = store ? await StoreService.isAppEmbedDisabled({admin, store}) : true;

  const discountBundles = await BundleService.getAllBundles(session.id, page, limit);

  if (!discountBundles.success) {
    return null;
  }

  const statisticsData = await getAppStatisticsData();

  return { 
    statisticsData,
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
    const discountBundles = await BundleService.getAllBundles(session.id, page, limit);

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
  const { statisticsData, discountBundles, appEmbedDisabled, bundlesDiscountsExtensionId, pagination } = useLoaderData();
  const [ isAppEmbedDisabled, setIsAppEmbedDisabled ] = useState(appEmbedDisabled);

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
            <BlockStack>
              { bundles.length > 0 && isAppEmbedDisabled && <AppBlockEmbed bundlesDiscountsExtensionId={bundlesDiscountsExtensionId} />}
              <DiscountStatistics statisticsData={statisticsData}/>
              <BlockStack gap="1000">
                <DiscountBundlesTable fetcher={fetcher} discountBundles={bundles} pagination={bundlesPagination} />
                <SupportBlock/>
              </BlockStack>
            </BlockStack>
          ) }
        </Box>
      </Page>
    </div>
  );
}
