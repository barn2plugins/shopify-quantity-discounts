import {
Text,
BlockStack,
} from "@shopify/polaris";

function DataCard({data}) {
  return (
    <BlockStack gap="100">
      <p style={{color: 'var(--p-color-text-secondary)'}}>
        <Text as="span" variant="bodySm">{data.title}</Text>
      </p>
      <Text variant="headingXl" as="h4" fontWeight="bold">
        ${data.amount}
      </Text>
      <p style={{color: 'var(--p-color-text-secondary)'}}>
        <Text as="span" variant="bodySm">${data.subdued}</Text>
      </p>
    </BlockStack>
  )
}

export default DataCard;