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
  ResourceItem,
  ResourceList,
  Thumbnail,
  Filters
} from "@shopify/polaris";
import {
  BookIcon,
  CashPoundIcon,
  ImageIcon,
  QuestionCircleIcon,
} from '@shopify/polaris-icons';
import { json } from "@remix-run/node";
import { useState, useEffect } from "react";
import { useLoaderData, useFetcher } from "@remix-run/react";
import { Modal, TitleBar, useAppBridge } from "@shopify/app-bridge-react";

// Internal libraries
import styles from "./styles.module.css";
import { authenticate } from "../../shopify.server"
import prisma from "../../db.server";
import { fetchProducts, updateDiscount, createDiscountBundle } from "./actions";

export const loader = async ({ request }) => {
  let settings = {
    discountName: 'Bundle',
    discountType: 'volume_bundle',
    whichProducts: 'all_products',
    preview: true,
    active: false
  }
  return json( settings )
};

export const action = async ({ request }) => {
  const { admin, session } = await authenticate.admin(request);

  const formData = await request.formData();
  const fetcherData = Object.fromEntries(formData);
   
  // Load products from merchants store
  if ( fetcherData.intent === 'loadProducts' ) {
    try {
      const products = await fetchProducts(admin);
      return { success: true, products: products.data.products.edges };
    } catch {
      return { success: false, error: "Failed to fetch products" };
    }
  }

  // Create or update discount bundle
  try {
    const actionIntent = ( fetcherData.intent && fetcherData.intent === 'update' ) || !fetcherData.active ? true : false;

    const discountBundle = actionIntent 
      ? await updateDiscount({ prisma, fetcherData }) 
      : await createDiscountBundle({ prisma, fetcherData, session });

    return {
      success: true,
      discountBundle: discountBundle
    };
  } catch {
    return { success: false, error: "Failed to create discount bundles" };
  }
}

export default function DiscountPage() {
  const fetcher = useFetcher();
  const shopify = useAppBridge();
  const settings = useLoaderData();
  const isLoading = ["loading", "submitting"].includes(fetcher.state) && fetcher.formMethod === "POST";
  
  const [ formState, setFormState ] = useState(settings);
  const [ modalProducts, setModalProducts ] = useState([]);

  const discountId = fetcher.data?.discountBundle?.id;
  const loadedProducts = fetcher.data?.products;

  useEffect(() => {
    if ( discountId ) {
      shopify.toast.show("Discount bundle has been created");
    }
  }, [discountId, shopify]);

  useEffect(() => {
    if (loadedProducts) {
      setProductsLoading(false);

      // Format the object to be used in the ResourceList
      const formattedProducts = loadedProducts.map(({ node, cursor }) => ({
        id: node.id.match(/\d+$/)[0],
        title: node.title,
        handle: node.handle,
        imageUrl: node.featuredMedia?.preview?.image?.url,
        cursor,
      }))

      setModalProducts(formattedProducts);
    }
  }, [loadedProducts])

  // On clicking the create discount button, set the form state to active and submit the form
  const createDiscount = () => {
    setFormState({...formState, active: true});
    fetcher.submit(formState, { method: "POST" })
  };

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [productSearchQuery, setProductSearchQuery] = useState('');
  const [productsLoading, setProductsLoading] = useState(false);

  const resourceName = {
    singular: 'product',
    plural: 'products',
  };

  const loadProducts = () => {
    // Set the loader
    setProductsLoading(true);

    // Submit the form to load products
    fetcher.submit({
      intent: 'loadProducts',
    }, { method: "POST" })
  }

  const handleFiltersQueryChange = (value) => {
    setProductSearchQuery(value);
    console.log('handleFiltersQueryChange');
    setProductsLoading(true);
  };

  const handleQueryValueRemove = () => {
    setProductSearchQuery('');
    console.log('handleQueryValueRemove');
    setProductsLoading(false);
  };

  const handleFiltersClearAll = () => {
    setProductSearchQuery('');
    console.log('handleQueryValueRemove');
  };

  const promotedBulkActions = [
    {
      content: 'Save',
      onAction: () => console.log('Todo: implement bulk edit'),
    },
  ];

  function renderItem(item) {
    const {id, title, imageUrl } = item;
    const productId = id.match(/\d+$/)[0];
    
    return (
      <ResourceItem
        id={productId}
        media={<Thumbnail size="small" alt={title} source={imageUrl ?? ImageIcon} />}
        accessibilityLabel={`View details for ${title}`}
        verticalAlignment="center"
      >
        <Text variant="bodyMd" as="h3">
          {title}
        </Text>
      </ResourceItem>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <fetcher.Form method="post">
        <Modal id="my-modal" variant="base" onShow={loadProducts}>
          <TitleBar title="Select products"></TitleBar>
          <div style={{ height: '600px' }}>
            <ResourceList
              resourceName={resourceName}
              items={modalProducts}
              renderItem={renderItem}
              selectedItems={selectedProducts}
              onSelectionChange={setSelectedProducts}
              promotedBulkActions={promotedBulkActions}
              filterControl={
                <Filters
                  queryValue={productSearchQuery}
                  queryPlaceholder={"Search " + resourceName.plural}
                  filters={[]}
                  onQueryChange={handleFiltersQueryChange}
                  onQueryClear={handleQueryValueRemove}
                  onClearAll={handleFiltersClearAll}
                />
              }
              emptySearchState={<div>This is a custom empty state</div>}
              selectable
              loading={productsLoading}
            />
          </div>
{/*           
          <Box style={{
            padding: '10px',
            borderTopStyle: 'solid',
            borderTopWidth: 'var(--p-border-width-025)',
            borderColor: 'var(--p-color-border)',
            boxShadow: 'var(--pc-box-shadow)'
          }}>
              <InlineStack gap={200} blockAlign="center" align="space-between">
                <InlineStack gap={200}>
                  <Text as="p">5 products selected</Text>
                </InlineStack>
                <InlineStack gap={200}>
                  <Button variant="primary" size="micro">Label</Button>
                  <Button onClick={() => shopify.modal.hide('my-modal')} size="micro">Label</Button>
                </InlineStack>
              </InlineStack>
          </Box> */}
        </Modal>
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
                      { formState.whichProducts === 'all_products_except_selected' && (
                        <BlockStack onClick={() => shopify.modal.show('my-modal')}>
                          <Button variant="primary">Exclude products or collections</Button>
                        </BlockStack>
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
