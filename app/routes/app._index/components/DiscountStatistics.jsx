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
                <Grid>
                  <Grid.Cell columnSpan={{xs: 6, sm: 7, md: 7, lg: 7, xl: 7}}>
                    <DataCard data={statisticsData.discountedMonthlyOrders} />
                  </Grid.Cell>
                  <Grid.Cell columnSpan={{xs: 6, sm: 5, md: 5, lg: 5, xl: 5}}>
                    <DataCard data={statisticsData.discountedAllTimeOrders} />
                  </Grid.Cell>
                </Grid>
              </Card>
            </Grid.Cell>
            <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
              <Card>
                <Grid>
                  <Grid.Cell columnSpan={{xs: 6, sm: 7, md: 7, lg: 7, xl: 7}}>
                    <DataCard data={statisticsData.discountedMonthlyRevenue} />
                  </Grid.Cell>
                  <Grid.Cell columnSpan={{xs: 6, sm: 5, md: 5, lg: 5, xl: 5}}>
                    <DataCard data={statisticsData.discountedAllTimeRevenue} />
                  </Grid.Cell>
                </Grid>
              </Card>
            </Grid.Cell>
          </Grid>
        </div>
      </Layout.Section>
    </Layout>
  )
}