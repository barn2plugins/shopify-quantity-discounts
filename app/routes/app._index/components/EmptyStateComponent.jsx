import { Layout, Card, EmptyState } from '@shopify/polaris';

export default function EmptyStateComponent() {
  return (
    <Layout>
      <Layout.Section variant="oneHalf">
        <Card>
          <div className='discount-empty-state'>
            <EmptyState
              heading="Create your first discount"
              action={{
                content: 'Create new discount', 
                url: "/app/discount/create"
              }}
              image="https://i.ibb.co.com/fz2LntbQ/empty-state.png"
              largeImage='https://i.ibb.co.com/39qQwJvV/empty-state.png'
              imageContained="true"
            >
              <p>Add flexible quantity discounts and display them in your store.</p>
            </EmptyState>
          </div>
        </Card>
      </Layout.Section>
    </Layout>
  )
}