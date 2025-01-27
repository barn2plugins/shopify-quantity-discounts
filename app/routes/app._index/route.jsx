import {
    Page,
    EmptyState,
    Card,
    BlockStack,
    Layout,
    Box
  } from "@shopify/polaris";
  import { authenticate } from "../../shopify.server";
  import { useLoaderData } from "@remix-run/react";
  
  // Internal components and libraries
  import DiscountStatistics from "./DiscountStatistics";
  import DiscountBundles from "./DiscountBundles";
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
            <Layout>
              <Layout.Section variant="oneHalf">
                <Card>
                  <EmptyState
                    heading="Create your first discount"
                    action={{
                      content: 'Create new discount', 
                      url: "/app/discount/create"
                    }}
                    image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
                  >
                    <p>Add flexible quantity discounts and display them in your store.</p>
                  </EmptyState>
                </Card>
              </Layout.Section>
            </Layout>
          ) }
    
          { discountBundles.length > 0 && (
            <BlockStack gap="500">
              <DiscountStatistics statisticsData={statisticsData}/>
              <DiscountBundles bundles={discountBundles} />
            </BlockStack>
          ) }
        </Box>
      </Page>
    );
  }
  