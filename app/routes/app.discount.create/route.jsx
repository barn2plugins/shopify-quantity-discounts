// External libraries
import {
  Page,
  RadioButton,
  TextField,
  Button,
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
} from '@shopify/polaris-icons';
import { json } from "@remix-run/node";
import { useState, useEffect } from "react";
import { useLoaderData, useFetcher } from "@remix-run/react";
import { useAppBridge } from "@shopify/app-bridge-react";

// Internal libraries
import styles from "./styles.module.css";
import { authenticate } from "../../shopify.server"
import prisma from "../../db.server";

export const loader = async ({ request }) => {
  let settings = {
    discountType: 'volume_bundle',
    whichProducts: 'selected_products',
    preview: true,
    active: false
  }
  return json( settings )
};

export const action = async ({ request }) => {
  const { session } = await authenticate.admin(request);

  const formData = await request.formData();
  const discountData = Object.fromEntries(formData);
  let discountBundle = {};
  
  if ( (discountData.intent && discountData.intent === 'update') || !discountData.active ) {
    discountBundle = await prisma.discountBundle.update({
      where: {
        id: parseInt(discountData.discountBundleId)
      },
      data: {
        type: discountData.discountType,
        name: discountData.discountName,
        whichProducts: discountData.whichProducts,
        previewEnabled: discountData.preview ? true : false,
        active: discountData.active ? true : false,
      }
    });
  } else {
    discountBundle = await prisma.discountBundle.create({
      data: {
        name: discountData.discountName,
        type: discountData.discountType,
        whichProducts: discountData.whichProducts,
        previewEnabled: discountData.preview ? true : false,
        active: discountData.active ? true : false,
        session: {
          connect: {
            id: session.id
          }
        }
      }
    });
  }
  
  return {
    discountBundle: discountBundle
  };
}

export default function DiscountPage() {
  const fetcher = useFetcher();
  const shopify = useAppBridge();
  const settings = useLoaderData();
  const isLoading = ["loading", "submitting"].includes(fetcher.state) && fetcher.formMethod === "POST";
  const [ formState, setFormState ] = useState(settings);
  const discountId = fetcher.data?.discountBundle?.id;

  useEffect(() => {
    if ( discountId ) {
      shopify.toast.show("Discount created");
    }
  }, [discountId, shopify]);

  const createDiscount = () => {
    setFormState({...formState, active: true});
    fetcher.submit(formState, { method: "POST" })
  };

  return (
    <div className={styles.pageWrapper}>
      <fetcher.Form method="post">
        <Page
          fullWidth={true}
          backAction={{content: 'Home', url: '/app'}}
          title={ fetcher.data?.discountBundle?.id ? 'Update discount' : 'Create discount' }
          primaryAction={
            <Button 
              variant="primary"
              submit={true}
              loading={isLoading}
              onClick={createDiscount}
            >
                { fetcher.data?.discountBundle?.id ? 'Update' : 'Create' }
            </Button>
          }
        >
          <Layout>
            <Layout.Section>
              <Card>
                <BlockStack gap={600}>
                    <BlockStack gap={200}>
                        <Text as="p" variant="bodyLg" fontWeight="medium">Discount type</Text>
                        <TextField
                          label="Discount name"
                          labelHidden
                          name="discountName"
                          value={formState?.discountName}
                          onChange={(value) => setFormState({...formState, discountName: value})}
                          autoComplete="off"
                        />
                    </BlockStack>
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
                    <BlockStack gap={200}>
                      <Text as="p" variant="bodyLg" fontWeight="medium">Which products?</Text>
                      <BlockStack>
                        <RadioButton
                          id="all_products"
                          label="All products"
                          checked={formState?.whichProducts === 'all_products' ? true : false}
                          name="whichProducts"
                          value="all_products"
                          onChange={(checked, value) => setFormState({...formState, whichProducts: value})}
                        />
                        <RadioButton
                          id="all_products_except_selected"
                          label="All products except selected"
                          checked={formState?.whichProducts === 'all_products_except_selected' ? true : false}
                          name="whichProducts"
                          value="all_products_except_selected"
                          onChange={(checked, value) => setFormState({...formState, whichProducts: value})}
                        />
                        <RadioButton
                          id="selected_products"
                          label="Selected products"
                          checked={formState?.whichProducts === 'selected_products' ? true : false}
                          name="whichProducts"
                          value="selected_products"
                          onChange={(checked, value) => setFormState({...formState, whichProducts: value})}
                        />
                        <RadioButton
                          id="selected_collections"
                          label="Selected collections"
                          checked={formState?.whichProducts === 'selected_collections' ? true : false}
                          name="whichProducts"
                          value="selected_collections"
                          onChange={(checked, value) => setFormState({...formState, whichProducts: value})}
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
                    <input 
                      type="checkbox" 
                      id="switch" 
                      name="preview" 
                      value={formState.preview}
                      checked={formState.preview}
                      onChange={(event) => {
                        setFormState({...formState, preview: event.target.checked})
                      }}
                    />
                    <label htmlFor="switch">Toggle</label>
                  </div>
                </InlineStack>
              </Card>
            </Layout.Section>
          </Layout>
        </Page>
        {/* Hidden fields */}
        <input type="hidden" name="active" value={formState.active ? true : false} />
        { discountId && (
          <>
            <input type="hidden" name="discountBundleId" value={discountId} />
            <input type="hidden" name="intent" value="update" />
          </>
        ) }
      </fetcher.Form>
    </div>
  );
}
