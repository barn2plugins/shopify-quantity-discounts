// External libraries and components
import {
  Page,
  Card,
  Text,
  Box,
  Button,
  BlockStack,
  InlineStack,
  ButtonGroup,
  Grid
} from '@shopify/polaris';

export const loader = async ({ request }) => {
  return null;
}

export const action = async ({ request }) => {
  return null;
}

export default function SupportPage() {

  const openDocumentationPage = () => {
    const documentationUrl = 'https://barn2.com/kb-categories/barn2-bundles-discounts-documentation/'
    window.open(documentationUrl, '_blank');
  }

  return (
    <Page
      title="We're here to help"
    >
      <Grid>
       <Grid.Cell columnSpan={{xs: 6}}>
          <Card roundedAbove="sm">
            <BlockStack gap={200}>
              <Text as="h2" variant="headingMd">Contact our support 😀</Text>
                <BlockStack gap={800}>
                  <Text as="p" variant="bodyMd">
                    Need assistance? We're here to help with anything related to the app and want to make sure you're getting the most from it.
                  </Text>
                  <InlineStack>
                    <Button>Get in touch</Button>
                  </InlineStack>
                </BlockStack>
            </BlockStack>
          </Card>
        </Grid.Cell>
       <Grid.Cell columnSpan={{xs: 6}}>
          <Card roundedAbove="sm">
            <BlockStack gap={200}>
              <Text as="h2" variant="headingMd">Find answers 📄</Text>
                <BlockStack gap={800}>
                  <Text as="p" variant="bodyMd">
                    Explore our comprehensive documentation and step-by-step video tutorials to quickly find the answers you need.
                  </Text>
                  <ButtonGroup>
                    <Button onClick={() => openDocumentationPage()}>Documentation</Button>
                    <Button>Getting started video</Button>
                  </ButtonGroup>
                </BlockStack>
            </BlockStack>
          </Card>
        </Grid.Cell>
       <Grid.Cell columnSpan={{xs: 6}}>
          <Card roundedAbove="sm">
            <BlockStack gap={200}>
              <Text as="h2" variant="headingMd">Write a review 🌟</Text>
                <BlockStack gap={800}>
                  <Text as="p" variant="bodyMd">
                    Your feedback helps others discover the app and supports ongoing improvements. We’d love to hear what you think.
                  </Text>
                  <InlineStack>
                    <Button>Add a review</Button>
                  </InlineStack>
                </BlockStack>
            </BlockStack>
          </Card>
        </Grid.Cell>
       <Grid.Cell columnSpan={{xs: 6}}>
          <Card roundedAbove="sm">
            <BlockStack gap={200}>
              <Text as="h2" variant="headingMd">Request a feature 💡</Text>
                <BlockStack gap={300}>
                  <Text as="p" variant="bodyMd">
                    Have an idea for improving the app? We're always open to suggestions and love hearing what would make it even more useful for you.
                  </Text>
                  <InlineStack>
                    <Button url="https://barn2.com/support-center/app-feature-request/" target='_blank'>Suggest a feature</Button>
                  </InlineStack>
                </BlockStack>
            </BlockStack>
          </Card>
        </Grid.Cell>
      </Grid>
    </Page>
  )
}
