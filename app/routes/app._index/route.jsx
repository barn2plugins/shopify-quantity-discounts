import {
  Page,
  BlockStack,
  Box
} from "@shopify/polaris";
import { authenticate } from "../../shopify.server";
import { useLoaderData } from "@remix-run/react";

// Internal components and libraries
import DiscountStatistics from "./components/DiscountStatistics";
import DiscountBundlesTable from "./components/DiscountBundlesTable";
import EmptyStateComponent from "./components/EmptyStateComponent";
import prisma from "../../db.server";
import { getAppStatisticsData } from "./actions";

export const loader = async ({ request }) => {
  const { session } = await authenticate.admin(request);

  const discountBundles = await prisma.discountBundle.findMany({
    where: { 
      'sessionId' : session.id 
    },
    orderBy: {
      priority: 'desc'
    }
  });

  let statisticsData = await getAppStatisticsData();

  return { statisticsData, discountBundles };
};

export default function Index() {
  const { statisticsData, discountBundles } = useLoaderData();

  return (
    <div className="barn2-app-home">
      <Page fullWidth={discountBundles.length > 0 ? true : false}>
        <Box style={{ paddingBottom: '40px' }}>
          { discountBundles.length <= 0 && (
            <EmptyStateComponent />
          ) }
    
          { discountBundles.length > 0 && (
            <BlockStack gap="500">
              <DiscountStatistics statisticsData={statisticsData}/>
              <DiscountBundlesTable discountBundles={discountBundles} />
            </BlockStack>
          ) }
        </Box>
      </Page>
    </div>
  );
}
