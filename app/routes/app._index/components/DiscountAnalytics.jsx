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
export default function DiscountAnalytics({analyticsData}) {
  
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
                      <Box 
                        paddingInlineEnd="400" 
                        borderInlineEndWidth={{xs: 0, sm: 200, md: 200, lg: 200, xl: 200}} 
                        borderColor={{xs: 'transparent', sm: 'border', md: 'border', lg: 'border', xl: 'border'}}
                      >
                        <DataCard data={analyticsData.discountedMonthlyOrders}/>
                      </Box>
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{xs: 6}}>
                      <Box paddingInlineStart={{xs: '0', sm: '400', md: '400', lg: '400', xl: '400'}}>
                        <DataCard data={analyticsData.discountedAllTimeOrders}/>
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
                      <Box 
                        paddingInlineEnd="400" 
                        borderInlineEndWidth={{xs: 0, sm: 200, md: 200, lg: 200, xl: 200}} 
                        borderColor={{xs: 'transparent', sm: 'border', md: 'border', lg: 'border', xl: 'border'}}
                      >
                        <DataCard data={analyticsData.discountedMonthlyRevenue}/>
                      </Box>
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{xs: 6}}>
                      <Box paddingInlineStart={{xs: '0', sm: '400', md: '400', lg: '400', xl: '400'}}>
                        <DataCard data={analyticsData.discountedAllTimeRevenue}/>
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