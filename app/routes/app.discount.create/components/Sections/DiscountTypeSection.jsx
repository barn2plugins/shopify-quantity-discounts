import { BlockStack, InlineStack, Text, Tooltip, Icon, Grid, Card, Box } from "@shopify/polaris";
import { BookIcon, CashPoundIcon, QuestionCircleIcon } from '@shopify/polaris-icons';
import styles from "../../styles.module.scss";

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
          <div className={styles.checkboxWrapper}>
            <input 
              type="radio" 
              name="discountType"
              id="volumeBundleType" 
              value="volume_bundle"
              checked={formState?.discountType === 'volume_bundle' ? true : false}
              onChange={(value) => setFormState({...formState, discountType: value.target.defaultValue})}
            />
            <label htmlFor="volumeBundleType">
              <Card background={ formState.discountType === 'volume_bundle' ? 'bg-surface-secondary' : '' }>
                <Box minHeight="90px">
                  <BlockStack gap="200">
                    <InlineStack align="start" gap={200}>
                      <Box><Icon source={BookIcon} color="subdued" /></Box>
                      <Text as="p" variant="bodyLg" fontWeight="medium">Volume bundle</Text>
                    </InlineStack>
                    <Text as="p" variant="body" tone="subdued">Display eye-catching discounts for buying up to 5 of the same product</Text>
                  </BlockStack>
                </Box>
              </Card>
            </label>
          </div>
        </Grid.Cell>
        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
          <div className={styles.checkboxWrapper}>
            <input 
              type="radio" 
              name="discountType" 
              id="bulkPricingType" 
              value="bulk_pricing"
              checked={formState?.discountType === 'bulk_pricing' ? true : false}
              onChange={(value) => setFormState({...formState, discountType: value.target.defaultValue})}
            />
            <label htmlFor="bulkPricingType">
              <Card background={ formState.discountType === 'bulk_pricing' ? 'bg-surface-secondary' : '' }>
                <Box minHeight="90px">
                  <BlockStack gap="200">
                    <InlineStack align="start" gap={200}>
                      <Box><Icon source={CashPoundIcon} color="subdued" /></Box>
                      <Text as="p" variant="bodyLg" fontWeight="medium">Bulk pricing</Text>
                    </InlineStack>
                    <Text as="p" variant="body" tone="subdued">Create pricing tiers for one or more products, e.g. “Buy 10+ t-shirts and save 25%</Text>
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