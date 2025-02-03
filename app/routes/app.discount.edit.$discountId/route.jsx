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
import { authenticate } from "../../shopify.server"
import prisma from "../../db.server";
import { actions } from "../../actions/discount.actions";

import { getDefaultBundleDiscountTypes, getDefaultPricingTiers } from "../../utils/utils";

import DiscountNameSection from "../../components/Sections/DiscountNameSection.jsx";
import DiscountTypeSection from "../../components/Sections/DiscountTypeSection.jsx";
import ProductSelectionSection from "../../components/Sections/ProductSelectionSection.jsx";
import VolumeBundleSection from "../../components/Sections/VolumeBundleSection.jsx";
import BulkPricingTiers from "../../components/Sections/BulkPricingTiers.jsx";
import DesignOptions from "../../components/Sections/DesignOptions.jsx";

import { useButtonLabels } from "../../hooks/useButtonLabels.js";

import ProductSelectorModal from "../../components/Modals/ProductSelectorModal.jsx";
import CollectionSelectorModal from "../../components/Modals/CollectionSelectorModal.jsx";
import ProductExclusionsModal from "../../components/Modals/ProductExclusionsModal.jsx";
import CollectionExclusionsModal from "../../components/Modals/CollectionExclusionsModal.jsx";

export const loader = async ({ request, params }) => {
  const { session } = await authenticate.admin(request);

  const discountBundle = await prisma.discountBundle.findUnique({
    where: {
      id: parseInt(params.discountId),
      sessionId: session.id
    }
  });

  if (!discountBundle) {
    throw new Error('Discount bundle not found');
  }

  return { discountBundle };
}

export const action = async ({ request }) => {
  const { admin, session } = await authenticate.admin(request);

  const formData = await request.formData();
  const fetcherData = Object.fromEntries(formData);

  try {
    const actionFn = actions[fetcherData.intent];
    console.log(actionFn);
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
  const { discountBundle } = useLoaderData();

  const [ formState, setFormState ] = useState(discountBundle);
  const [ selectedProducts, setSelectedProducts ] = useState([]);
  const [ selectedCollections, setSelectedCollections ] = useState([]);
  const [ excludedProducts, setExcludedProducts ] = useState([]);
  const [ excludedCollections, setExcludedCollections ] = useState([]);
  const [ volumeBundles, setVolumeBundles ] = useState([]);
  const [ pricingTiers, setPricingTiers ] = useState([]);

  const buttonLabels = useButtonLabels(
    selectedProducts, 
    selectedCollections, 
    excludedProducts, 
    excludedCollections
  );

  const isLoading = ["loading", "submitting"].includes(fetcher.state) && fetcher.formMethod === "POST";

  useEffect(() => {
    setVolumeBundles(getDefaultBundleDiscountTypes())
    setPricingTiers(getDefaultPricingTiers())
    setSelectedProducts(JSON.parse(discountBundle.selectedProducts))
    setSelectedCollections(JSON.parse(discountBundle.selectedCollections))
    setExcludedProducts(JSON.parse(discountBundle.excludedProducts))
    setExcludedCollections(JSON.parse(discountBundle.excludedCollections))
  }, []);

  // On clicking the create discount button, set the form state to active and submit the form
  const discountBundleAction = () => {
    const formData = {
      ...formState,
      active: true,
      intent: 'update',
      selectedProducts: JSON.stringify(selectedProducts),
      selectedCollections: JSON.stringify(selectedCollections),
      excludedProducts: JSON.stringify(excludedProducts),
      excludedCollections: JSON.stringify(excludedCollections),
      volumeBundles: formState.type === 'volume_bundle' ? JSON.stringify(volumeBundles) : '',
      pricingTiers: formState.type === 'bulk_pricing' ? JSON.stringify(pricingTiers) : '',
      storeDisplay: formState.storeDisplay ? JSON.stringify(formState.storeDisplay) : '',
      customDesigns: formState.customDesigns ? JSON.stringify(formState.customDesigns) : ''
    }

    fetcher.submit(formData, { method: "POST" })
  };

  return (
    <div className="create-page-wrapper">
      <Page
        fullWidth={true}
        backAction={{content: 'Home', url: '/app'}}
        title='Update discount'
        primaryAction={
          <Button 
            variant="primary"
            loading={isLoading}
            onClick={discountBundleAction}
          >
            Update
          </Button>
        }
      >
        <Layout>
          <Layout.Section>
            <BlockStack gap={600}>
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

              { formState.type === 'volume_bundle' && (
                <Card>
                  <VolumeBundleSection 
                    currencyCode={formState.currencyCode}
                    volumeBundles={volumeBundles}
                    setVolumeBundles={setVolumeBundles}
                  />
                </Card>
              ) }

              { formState.type === 'bulk_pricing' && (
                <BulkPricingTiers 
                  formState={formState}
                  setFormState={setFormState}
                  pricingTiers={pricingTiers}
                  setPricingTiers={setPricingTiers}
                  timezone={formState.timezone}
                />
              ) }

              <DesignOptions
                formState={formState}
                setFormState={setFormState}
              />
            </BlockStack>
          </Layout.Section>
          <Layout.Section variant="oneThird">
            <Card>
              <InlineStack gap={150} blockAlign="center">
                <Text as="p" variant="bodyLg" fontWeight="medium">Preview</Text>
                <div className="toggle-switcher">
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
