import {
  Text,
  BlockStack,
  InlineStack,
  Tooltip,
  Icon
} from "@shopify/polaris";

import {InfoIcon} from '@shopify/polaris-icons';

function DataCard({data}) {
  
  const printAmount = () => {
    if (data.title.toLowerCase().includes('orders')) {
      return data.amount || 0;
    } else {
      const amount = parseFloat(data.amount) || 0;
      return `$${amount.toFixed(2)}`;
    }
  }

  return (
    <BlockStack gap="200">
      <p className="analytics-card-title">
        <InlineStack blockAlign="center" gap={100}>
          <Text as="p" variant="bodyMd">{data.title}</Text>
          { data.tooltip && <Tooltip
            content={
              <InlineStack gap="200">{data.tooltip}</InlineStack>
            }
          >
            <Icon source={InfoIcon}></Icon>
          </Tooltip> }
        </InlineStack>
      </p>
      <Text variant="headingXl" as="h4" fontWeight="bold">
        {printAmount()}
      </Text>
    </BlockStack>
  )
}

export default DataCard;