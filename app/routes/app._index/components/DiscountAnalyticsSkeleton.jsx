// External components and libraries
import {
  Layout,
  Card,
  SkeletonBodyText,
  Grid,
  InlineGrid,
} from "@shopify/polaris";

export default function DiscountAnalyticsSkeleton() {
  return (
    <Layout>
      <Layout.Section>
        <div style={{marginBottom: '40px'}}>
          <Grid>
            <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
              <Card>
                <InlineGrid gap={400} columns={2}>
                  <SkeletonBodyText/>
                  <SkeletonBodyText/>
                </InlineGrid>
              </Card>
            </Grid.Cell>
            <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
              <Card>
                <InlineGrid gap={400} columns={2}>
                  <SkeletonBodyText/>
                  <SkeletonBodyText/>
                </InlineGrid>
              </Card>
            </Grid.Cell>
          </Grid>
        </div>
      </Layout.Section>
    </Layout>
  )
}