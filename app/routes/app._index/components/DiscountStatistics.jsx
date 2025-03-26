// External components and libraries
import {
  Layout,
  Card,
  BlockStack,
  Box,
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
                <Box>
                  <Grid>
                    <Grid.Cell columnSpan={{xs: 6}}>
                      <Box paddingInlineEnd="400" borderInlineEndWidth={200} borderColor="border">
                        <DataCard data={statisticsData.discountedMonthlyOrders}/>
                      </Box>
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{xs: 6}}>
                      <Box paddingInlineStart="400">
                        <DataCard data={statisticsData.discountedAllTimeOrders}/>
                      </Box>
                    </Grid.Cell>
                  </Grid>
                </Box>
              </Card>
            </Grid.Cell>
            <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
              <Card>
                <Box>
                  <Grid>
                    <Grid.Cell columnSpan={{xs: 6}}>
                      <Box paddingInlineEnd="400" borderInlineEndWidth={200} borderColor="border">
                        <DataCard data={statisticsData.discountedMonthlyRevenue}/>
                      </Box>
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{xs: 6}}>
                      <Box paddingInlineStart="400">
                        <DataCard data={statisticsData.discountedAllTimeRevenue}/>
                      </Box>
                    </Grid.Cell>
                  </Grid>
                </Box>
              </Card>
            </Grid.Cell>
          </Grid>
        </div>
      </Layout.Section>
    </Layout>
  )
}