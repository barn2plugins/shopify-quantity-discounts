import {
  Page,
  BlockStack,
  Box
} from "@shopify/polaris";
import { authenticate } from "../../shopify.server";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";

// Internal components and libraries
import DiscountStatistics from "./components/DiscountStatistics";
import DiscountBundlesTable from "./components/DiscountBundlesTable";
import EmptyStateComponent from "./components/EmptyStateComponent";
import AppBlockEmbed from "../../components/Notice/AppBlockEmbed.jsx";
import { getAppStatisticsData } from "./actions";

import { BundleService } from "../../services/bundle.service.js";
import { StoreService } from "../../services/store.service.js";

export const loader = async ({ request }) => {
  const { admin, session } = await authenticate.admin(request);

  const bundlesDiscountsExtensionId = process?.env?.SHOPIFY_BARN2_BUNDLES_BULK_DISCOUNTS_ID;

  const store = await StoreService.getStoreDetails(session.id, { activeThemeGid: true });

  const appEmbedDisabled = await StoreService.isAppEmbedDisabled({admin, store});

  const discountBundles = await BundleService.getAllBundles(session.id);
  if (!discountBundles.success) {
    return null;
  }

  const statisticsData = await getAppStatisticsData();

  return { 
    statisticsData,
    discountBundles: discountBundles.bundles,
    appEmbedDisabled,
    bundlesDiscountsExtensionId
  };
};

export default function Index() {
  const { statisticsData, discountBundles, appEmbedDisabled, bundlesDiscountsExtensionId } = useLoaderData();

  const [ isAppEmbedDisabled, setIsAppEmbedDisabled ] = useState(appEmbedDisabled);

  return (
    <div className="barn2-app-home">
      <Page fullWidth={discountBundles.length > 0 ? true : false}>
        <Box style={{ paddingBottom: '40px' }}>
          { discountBundles.length <= 0 && (
            <EmptyStateComponent />
          ) }
    
          { discountBundles.length > 0 && (
            <BlockStack gap="500">
              { discountBundles.length > 0 && isAppEmbedDisabled && <AppBlockEmbed bundlesDiscountsExtensionId={bundlesDiscountsExtensionId} />}
              <DiscountStatistics statisticsData={statisticsData}/>
              <DiscountBundlesTable discountBundles={discountBundles} />
            </BlockStack>
          ) }
        </Box>
      </Page>
    </div>
  );
}
