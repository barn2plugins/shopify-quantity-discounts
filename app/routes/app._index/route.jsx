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
  
  export const loader = async ({ request }) => {
    const { session } = await authenticate.admin(request);
  
    const discountBundles = await prisma.discountBundle.findMany({
      where: { 'sessionId' : session.id },
    });
  
    let statisticsData = {
      discountedMonthlyOrders: {
        title: 'This month\'s discounted orders',
        amount: '3,902',
        subdued: '0.00'
      },
      discountedAllTimeOrders: {
        title: 'All time discounted orders',
        amount: '49,021',
        subdued: '0.00'
      },
      discountedMonthlyRevenue: {
        title: 'This month\'s discounted revenue.',
        amount: '280',
        subdued: '0.00'
      },
      discountedAllTimeRevenue: {
        title: 'All time discounted revenue',
        amount: '902',
        subdued: '0.00'
      },
    };
  
    return { statisticsData, discountBundles };
  };
  
  export default function Index() {
    const { statisticsData, discountBundles } = useLoaderData();
  
    return (
      <Page fullWidth={discountBundles.length > 0 ? true : false}>
        <Box style={{ paddingBottom: '40px' }}>
          { discountBundles.length === 0 && (
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
    );
  }
  