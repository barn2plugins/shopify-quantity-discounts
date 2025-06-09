// External components and libraries
import {
  Layout,
  Card,
  Box,
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
                  <div className="analytics-card-boxes">
                    <div className="analytics-card-box analytics-card-box-first">
                      <DataCard data={analyticsData.discountedMonthlyOrders}/>
                    </div>
                    <div className="analytics-card-box analytics-card-box-last">
                      <DataCard data={analyticsData.discountedAllTimeOrders}/>
                    </div>
                  </div>
                </Box>
              </Card>
            </Grid.Cell>
            <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
              <Card>
                <Box>
                  <div className="analytics-card-boxes">
                    <div className="analytics-card-box analytics-card-box-first">
                      <DataCard data={analyticsData.discountedMonthlyRevenue}/>
                    </div>
                    <div className="analytics-card-box analytics-card-box-last">
                      <DataCard data={analyticsData.discountedAllTimeRevenue}/>
                    </div>
                  </div>
                </Box>
              </Card>
            </Grid.Cell>
          </Grid>
        </div>
      </Layout.Section>
    </Layout>
  )
}