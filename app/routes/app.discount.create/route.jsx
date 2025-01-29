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
  ButtonGroup,
} from "@shopify/polaris";
import {
  BookIcon,
  CashPoundIcon,
  QuestionCircleIcon,
} from '@shopify/polaris-icons';
import { useState, useEffect } from "react";
import { useLoaderData, useFetcher } from "@remix-run/react";
import { useAppBridge } from "@shopify/app-bridge-react";

// Internal libraries
import styles from "./styles.module.css";
import { authenticate } from "../../shopify.server"
import prisma from "../../db.server";
import { actions } from "./actions";
import ProductSelectorModal from "./ProductSelectorModal";
import CollectionSelectorModal from "./CollectionSelectorModal";
import ProductExclusionsModal from "./ProductExclusionsModal";
import CollectionExclusionsModal from "./CollectionExclusionsModal";

export const loader = async ({ request }) => {
  await authenticate.admin(request);
  
  let settings = {
    discountBundleId: null,
    discountName: 'Bundle',
    discountType: 'volume_bundle',
    whichProducts: 'all_products',
    preview: true,
    active: false
  }
  return settings
};

export const action = async ({ request }) => {
  const { admin, session } = await authenticate.admin(request);

  const formData = await request.formData();
  const fetcherData = Object.fromEntries(formData);

  try {
    const actionFn = actions[fetcherData.intent];
    if (!actionFn) return null;
    
    return await actionFn(
      fetcherData.intent.startsWith('load') ? admin : { prisma, fetcherData, session }
    );
  } catch (error) {
    console.error(`Failed to execute ${fetcherData.intent}:`, error);
    return { 
      success: false, 
      error: `Failed to ${fetcherData.intent.replace('load', 'fetch')}` 
    };
  }
}

export default function DiscountPage() {
  const fetcher = useFetcher();
  const shopify = useAppBridge();
  const settings = useLoaderData();
  
  const [ formState, setFormState ] = useState(settings);
  const [ selectedProducts, setSelectedProducts ] = useState([]);
  const [ selectedCollections, setSelectedCollections ] = useState([]);
  const [ excludedProducts, setExcludedProducts ] = useState([]);
  const [ excludedCollections, setExcludedCollections ] = useState([]);

  const isLoading = ["loading", "submitting"].includes(fetcher.state) 
    && fetcher.formMethod === "POST" 
    && (fetcher.formData?.get("intent") === "create" || fetcher.formData?.get("intent") === "update");

  const discountBundleId = fetcher.data?.discountBundle?.id;

  useEffect(() => {
    if ( discountBundleId ) {
      shopify.toast.show("Discount bundle has been created");
      setFormState({...formState, discountBundleId: discountBundleId});
    }
  }, [discountBundleId, shopify]);

  // On clicking the create discount button, set the form state to active and submit the form
  const createDiscountBundle = () => {
    const formData = {
      ...formState,
      active: true,
      intent: discountBundleId !== undefined ? 'update' : 'create'
    }
    
    fetcher.submit(formData, { method: "POST" })
  };

  const selectedProductsBtnLabel = () => {
    if ( selectedProducts.length === 0 ) {
      return 'Select products';
    } else {
      return `Select products (${selectedProducts.length} selected)`;
    }
  }

  const selectedCollectionsBtnLabel = () => {
    if ( selectedCollections.length === 0 ) {
      return 'Select collections';
    } else {
      return `Select collections (${selectedCollections.length} selected)`;
    }
  }

  const excludeProductsBtnLabel = () => {
    if ( excludedProducts.length === 0 ) {
      return 'Exclude products';
    } else {
      return `Exclude products (${excludedProducts.length} selected)`;
    }
  }

  const excludeCollectionsBtnLabel = () => {
    if ( excludedCollections.length === 0 ) {
      return 'Exclude collections';
    } else {
      return `Exclude collections (${excludedCollections.length} selected)`;
    }
  }

  return (
    <div className={styles.pageWrapper}>
      <Page
        fullWidth={true}
        backAction={{content: 'Home', url: '/app'}}
        title={ discountBundleId ? 'Update discount' : 'Create discount' }
        primaryAction={
          <Button 
            variant="primary"
            loading={isLoading}
            onClick={createDiscountBundle}
          >
              { discountBundleId ? 'Update' : 'Create' }
          </Button>
        }
      >
        <Layout>
          <Layout.Section>
            <Card>
              <BlockStack gap={600}>
                  <BlockStack gap={200}>
                      <Text as="p" variant="bodyLg" fontWeight="medium">Bundle name</Text>
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
                  <BlockStack gap={400}>
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

                    { formState.whichProducts === 'all_products_except_selected' && (
                        <BlockStack>
                          <ButtonGroup>
                            <Button variant="primary" onClick={() => shopify.modal.show('exclude-products-modal')}>{excludeProductsBtnLabel()}</Button>
                            <Button variant="primary" onClick={() => shopify.modal.show('exclude-collections-modal')}>{excludeCollectionsBtnLabel()}</Button>
                          </ButtonGroup>
                        </BlockStack>
                    ) }
                    { formState.whichProducts === 'selected_products' && (
                        <InlineStack>
                          <Button variant="primary" onClick={() => shopify.modal.show('select-products-modal')}>{selectedProductsBtnLabel()}</Button>
                        </InlineStack>
                    ) }
                    { formState.whichProducts === 'selected_collections' && (
                        <InlineStack>
                          <ButtonGroup>
                            <Button variant="primary" onClick={() => shopify.modal.show('select-collections-modal')}>{selectedCollectionsBtnLabel()}</Button>
                            <Button variant="primary" onClick={() => shopify.modal.show('exclude-products-modal')}>{excludeProductsBtnLabel()}</Button>
                          </ButtonGroup>
                        </InlineStack>
                    ) }
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

      <ProductSelectorModal
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
        fetcher={fetcher}
      />
      <CollectionSelectorModal
        selectedCollections={selectedCollections}
        setSelectedCollections={setSelectedCollections}
        fetcher={fetcher}
      />
      <ProductExclusionsModal
        excludedProducts={excludedProducts}
        setExcludedProducts={setExcludedProducts}
        fetcher={fetcher}
      />
      <CollectionExclusionsModal
        excludedCollections={excludedCollections}
        setExcludedCollections={setExcludedCollections}
        fetcher={fetcher}
      />

    </div>
  );
}
