// External libraries and components
import {
  Page,
  Button,
  Layout,
  Card,
  Text,
  BlockStack,
  InlineStack,
} from "@shopify/polaris";

import { useState, useEffect } from "react";
import { useLoaderData, useFetcher } from "@remix-run/react";
import { useAppBridge } from "@shopify/app-bridge-react";

// Internal libraries and components
import styles from "./styles.module.css";
import { authenticate } from "../../shopify.server"
import prisma from "../../db.server";
import { actions } from "./actions.js";

import DiscountNameSection from "./components/Sections/DiscountNameSection.jsx";
import DiscountTypeSection from "./components/Sections/DiscountTypeSection.jsx";
import ProductSelectionSection from "./components/Sections/ProductSelectionSection.jsx";

import { useButtonLabels } from "./hooks/useButtonLabels";

import ProductSelectorModal from "./components/Modals/ProductSelectorModal";
import CollectionSelectorModal from "./components/Modals/CollectionSelectorModal";
import ProductExclusionsModal from "./components/Modals/ProductExclusionsModal";
import CollectionExclusionsModal from "./components/Modals/CollectionExclusionsModal";

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

  const buttonLabels = useButtonLabels(
    selectedProducts, 
    selectedCollections, 
    excludedProducts, 
    excludedCollections
  );

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
  const discountBundleAction = () => {
    const formData = {
      ...formState,
      active: true,
      intent: discountBundleId !== undefined ? 'update' : 'create',
      selectedProducts: JSON.stringify(selectedProducts),
      selectedCollections: JSON.stringify(selectedCollections),
      excludedProducts: JSON.stringify(excludedProducts),
      excludedCollections: JSON.stringify(excludedCollections)
    }
    
    fetcher.submit(formData, { method: "POST" })
  };

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
            onClick={discountBundleAction}
          >
              { discountBundleId ? 'Update' : 'Create' }
          </Button>
        }
      >
        <Layout>
          <Layout.Section>
            <Card>
              <BlockStack gap={600}>
                  <DiscountNameSection formState={formState} setFormState={setFormState} />
                  <DiscountTypeSection formState={formState} setFormState={setFormState} />
                  <ProductSelectionSection 
                    formState={formState}
                    setFormState={setFormState}
                    selectedCollections={selectedCollections}
                    shopify={shopify}
                    buttonLabels={buttonLabels}
                  />
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
