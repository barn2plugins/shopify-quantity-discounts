import {
    Page,
    RadioButton,
    Tooltip,
    Layout,
    Card,
    Icon,
    Grid,
    Text,
    BlockStack,
    InlineStack,
    Box,
  } from "@shopify/polaris";
  import {
    BookIcon,
    CashPoundIcon,
    QuestionCircleIcon,
    DuplicateIcon,
    DeleteIcon
  } from '@shopify/polaris-icons';
import styles from "./styles.module.css";
import { useState } from "react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  let settings = {
    name: "My App",
    description: "Nice",
    whichProducts: 'all_products'
  }

  return json( settings )
};

export default function DiscountPage() {
  const settings = useLoaderData();
  const [ formState, setFormState ] = useState(settings);

  const handleChange = (checked, value) => {
    setFormState({...formState, whichProducts: value})
  }

  return (
    <>
    <Page
      backAction={{content: 'Home', url: '/app'}}
      title="Create discount"
      secondaryActions={[
        {
          content: "Duplicate",
          icon: DuplicateIcon,
          accessibilityLabel: "Secondary action label",
          onAction: () => alert("Duplicate action"),
        },
        {
          content: "Delete",
          icon: DeleteIcon,
          destructive: true,
          accessibilityLabel: "Secondary action label",
          onAction: () => alert("Delete action"),
        },
      ]}
    >
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap={600}>
                <BlockStack gap={200}>
                  <InlineStack blockAlign="center" gap={100}>
                    <Text as="p" variant="bodyLg" fontWeight="medium">Discount type</Text>
                    <Tooltip
                      content={
                        <InlineStack gap="200">
                          Bold
                        </InlineStack>
                      }
                    >
                      <Icon source={QuestionCircleIcon}></Icon>
                    </Tooltip>
                  </InlineStack>
                  <Grid>
                    <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                      <Card background="bg-surface-secondary">
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
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}}>
                      <Card>
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
                    </Grid.Cell>
                  </Grid>
                </BlockStack>

                <BlockStack gap={200}>
                  <Text as="p" variant="bodyLg" fontWeight="medium">Which products?</Text>
                  <BlockStack>
                    <RadioButton
                      label="All products"
                      checked={formState.whichProducts === 'all_products' ? true : false}
                      name="which_products"
                      id="all_products"
                      onChange={handleChange}
                    />
                    <RadioButton
                      label="All products except selected"
                      checked={formState.whichProducts === 'all_products_except_selected' ? true : false}
                      name="which_products"
                      id="all_products_except_selected"
                      onChange={handleChange}
                    />
                    <RadioButton
                      label="Selected products"
                      checked={formState.whichProducts === 'selected_products' ? true : false}
                      name="which_products"
                      id="selected_products"
                      onChange={handleChange}
                    />
                    <RadioButton
                      label="Selected collections"
                      checked={formState.whichProducts === 'selected_collections' ? true : false}
                      name="which_products"
                      id="selected_collections"
                      onChange={handleChange}
                    />
                  </BlockStack>
                </BlockStack>
            </BlockStack>
          </Card>
        </Layout.Section>
        <Layout.Section variant="oneThird">
          <Card>
            <InlineStack gap={150} blockAlign="center">
              <Text as="p" variant="bodyLg" fontWeight="medium">Preview</Text>
              <div className={styles.toggle}>
                <input type="checkbox"  id="switch" />
                <label for="switch">Toggle</label>
              </div>
            </InlineStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
    </>
  );
}
