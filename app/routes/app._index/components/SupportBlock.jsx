import {
  BlockStack,
  Banner,
  Text,
} from "@shopify/polaris";

export default function SupportBlock({setDisplaySupportBanner}) {
  return (
    <BlockStack gap={500}>
      <Text variant="headingLg" as="h4">
        Documentation and support
      </Text>
      <Banner title="Need assistance? We're here to help!" onDismiss={() => {setDisplaySupportBanner(false)}}>
        <p>If you need help with support or accessing documentation, <a href="#">click here to get started.</a></p>
      </Banner>
    </BlockStack>
  )
}