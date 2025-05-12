import {
Text,
BlockStack,
} from "@shopify/polaris";

function DataCard({data}) {
  
  const printAmount = () => {
    return data.title.toLowerCase().includes('orders') ? data.amount : `$${data.amount}`;
  }

  return (
    <BlockStack gap="200">
      <p className="analytics-card-title">
        <Text as="span" variant="bodySm">{data.title}</Text>
      </p>
      <Text variant="headingXl" as="h4" fontWeight="bold">
        {printAmount()}
      </Text>
    </BlockStack>
  )
}

export default DataCard;