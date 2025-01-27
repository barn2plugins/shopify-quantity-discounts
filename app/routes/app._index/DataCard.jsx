import {
Text,
BlockStack,
} from "@shopify/polaris";

function DataCard({data}) {
  return (
    <BlockStack gap="200">
      <Text as="p" variant="bodySm" tone="subdued">{data.title}</Text>
      <Text variant="headingLg" as="h4" fontWeight="medium">
        ${data.amount}
      </Text>
      <Text as="p" variant="bodySm" tone="subdued" fontWeight="medium">
      ${data.subdued}
      </Text>
    </BlockStack>
  )
}

export default DataCard;