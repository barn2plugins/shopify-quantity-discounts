// External components and libraries
import {
  Layout,
  Card,
  BlockStack,
  InlineStack,
  Grid,
} from "@shopify/polaris";

// Internal components and libraries
import DataCard from "./DataCard";

export default function DiscountStatistics({statisticsData}) {
  
  return (
    <Layout>
      <Layout.Section>
        <div style={{marginBottom: '40px'}}>
          <Grid>
            <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
              <Card>
                <BlockStack gap="500">
                  <InlineStack align="space-between">
                    <DataCard data={statisticsData.discountedMonthlyOrders} />
                    <DataCard data={statisticsData.discountedAllTimeOrders} />
                  </InlineStack>
                </BlockStack>
              </Card>
            </Grid.Cell>
            <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
              <Card>
                <InlineStack align="space-between">
                    <DataCard data={statisticsData.discountedMonthlyRevenue} />
                    <DataCard data={statisticsData.discountedAllTimeRevenue} />
                </InlineStack>
              </Card>
            </Grid.Cell>
          </Grid>
        </div>
      </Layout.Section>
    </Layout>
  )
}