import { Layout, Card, EmptyState } from '@shopify/polaris';

export default function EmptyStateComponent() {
  return (
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
  )
}