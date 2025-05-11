import { BlockStack, InlineStack, Text, Tooltip, Icon, Grid, Card, Box } from "@shopify/polaris";
import { BookIcon, CashDollarIcon, QuestionCircleIcon } from '@shopify/polaris-icons';

export default function DiscountTypeSection({ formState, setFormState }) {
  return (
    <BlockStack gap={200}>
      <InlineStack blockAlign="center" gap={100}>
        <Text as="p" variant="bodyLg" fontWeight="medium">Discount type</Text>
        <Tooltip
          content={
            <InlineStack gap="200">
              Choose the type of discount you want to create.
            </InlineStack>
          }
        >
          <Icon source={QuestionCircleIcon}></Icon>
        </Tooltip>
      </InlineStack>
      <Grid>
        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
          <div className="checkbox-wrapper">
            <input 
              type="radio" 
              name="type"
              id="volumeBundleType" 
              value="volume_bundle"
              checked={formState?.type === 'volume_bundle' ? true : false}
              onChange={(value) => setFormState({...formState, type: value.target.defaultValue})}
            />
            <label htmlFor="volumeBundleType">
              <Card background={ formState.type === 'volume_bundle' ? 'bg-surface-secondary' : '' }>
                <Box minHeight="90px">
                  <BlockStack gap="200">
                    <InlineStack align="start" gap={200}>
                      <Box><Icon source={BookIcon} color="subdued" /></Box>
                      <Text as="p" variant="bodyLg" fontWeight="medium">Volume bundle</Text>
                    </InlineStack>
                    <Text as="p" variant="body" tone="subdued">Display eye-catching discounts for buying fixed quantities of the same product.</Text>
                  </BlockStack>
                </Box>
              </Card>
            </label>
          </div>
        </Grid.Cell>
        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
          <div className="checkbox-wrapper">
            <input 
              type="radio" 
              name="type" 
              id="bulkPricingType" 
              value="bulk_pricing"
              checked={formState?.type === 'bulk_pricing' ? true : false}
              onChange={(value) => setFormState({...formState, type: value.target.defaultValue})}
            />
            <label htmlFor="bulkPricingType">
              <Card background={ formState.type === 'bulk_pricing' ? 'bg-surface-secondary' : '' }>
                <Box minHeight="90px">
                  <BlockStack gap="200">
                    <InlineStack align="start" gap={200}>
                      <Box><Icon source={CashDollarIcon} color="subdued" /></Box>
                      <Text as="p" variant="bodyLg" fontWeight="medium">Bulk pricing</Text>
                    </InlineStack>
                    <Text as="p" variant="body" tone="subdued">Create quantity-based pricing tiers, e.g. Buy 2-9 items for 10% off, or 10+ for 25% off.</Text>
                  </BlockStack>
                </Box>
              </Card>
            </label>
          </div>
        </Grid.Cell>
      </Grid>
    </BlockStack>
  );
}