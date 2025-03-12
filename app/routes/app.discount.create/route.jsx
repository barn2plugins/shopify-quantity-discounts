// External libraries and components
import {
  Page,
  Button,
  Layout,
} from "@shopify/polaris";

import { useState, useEffect } from "react";
import { useLoaderData, useFetcher } from "@remix-run/react";
import { useAppBridge } from "@shopify/app-bridge-react";

// Internal libraries and components
import { authenticate } from "../../shopify.server"
import prisma from "../../db.server";
import { actions, createShopifyVolumeDiscount } from "../../actions/discount.actions";
import { BundleService } from "../../services/bundle.service";
import { StoreService } from "../../services/store.service.js";

import { getDefaultBundleDiscountTypes, getDefaultPricingTiers } from "../../utils/utils";

import Content from "../../components/Layouts/Discount/Content.jsx";
import Sidebar from "../../components/Layouts/Discount/Sidebar.jsx";

import DiscountModals from "../../components/Modals/DiscountModals.jsx";

export const loader = async ({ request }) => {
  const { session } = await authenticate.admin(request);
  const defaultBundle = await BundleService.getDefaultBundle(session.id);

  return defaultBundle;
};

export const action = async ({ request }) => {
  const { admin, session, redirect } = await authenticate.admin(request);

  const formData = await request.formData();
  const fetcherData = Object.fromEntries(formData);

  try {
    if (fetcherData.intent === 'create') {
      const store = await StoreService.getStoreDetails(session.id, {
        volumeDiscountFunctionId: true,
        userId: true
      });

      if (!store) return null;

      const shopifyDiscountGID = await createShopifyVolumeDiscount({admin, fetcherData, discountFunctionId: store.volumeDiscountFunctionId});
      const shopifyDiscountid = shopifyDiscountGID.split('/').pop();

      const createDiscount = actions[fetcherData.intent];
      const actionData = await createDiscount({ prisma, fetcherData, session, shopifyDiscountGID });
      if (!actionData) return null;

      const allDiscounts = await BundleService.getAllBundles(session.id);
      await StoreService.updateStoreMetafieldForVolumeDiscount({admin, shopifyShopId: store.userId, allDiscounts});
  
      // Once the discount bundle successfully created, redirect to the edit page
      return redirect(`/app/discount/${shopifyDiscountid}/edit`);
    }

    const actionFn = actions[fetcherData.intent];
    if (!actionFn) return null;
    
    return await actionFn(admin);
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
  const discountBundle = useLoaderData();
  
  const [ formState, setFormState ] = useState(discountBundle);
  const [ selectedProducts, setSelectedProducts ] = useState([]);
  const [ selectedCollections, setSelectedCollections ] = useState([]);
  const [ excludedProducts, setExcludedProducts ] = useState([]);
  const [ excludedCollections, setExcludedCollections ] = useState([]);
  const [ volumeBundles, setVolumeBundles ] = useState([]);
  const [ pricingTiers, setPricingTiers ] = useState([]);

  const isLoading = ["loading", "submitting"].includes(fetcher.state) 
    && fetcher.formMethod === "POST" 
    && (fetcher.formData?.get("intent") === "create");

  const discountBundleId = fetcher.data?.discountBundle?.id;

  useEffect(() => {
    if ( discountBundleId ) {
      shopify.toast.show("Discount bundle has been created");
      setFormState({...formState, discountBundleId: discountBundleId});
    }
  }, [discountBundleId, shopify]);

  useEffect(() => {
    setVolumeBundles(getDefaultBundleDiscountTypes())
    setPricingTiers(getDefaultPricingTiers())
  }, []);

  // On clicking the create discount button, set the form state to active and submit the form
  const discountBundleAction = () => {
    const formData = {
      ...formState,
      active: true,
      intent: 'create',
      selectedProducts: JSON.stringify(selectedProducts),
      selectedCollections: JSON.stringify(selectedCollections),
      excludedProducts: JSON.stringify(excludedProducts),
      excludedCollections: JSON.stringify(excludedCollections),
      volumeBundles: JSON.stringify(volumeBundles),
      pricingTiers: JSON.stringify(pricingTiers),
      storeDisplay: formState.storeDisplay ? JSON.stringify(formState.storeDisplay) : '',
      customDesigns: formState.customDesigns ? JSON.stringify(formState.customDesigns) : '',
      previewOptions: formState.previewOptions ? JSON.stringify(formState.previewOptions) : ''
    }
    
    fetcher.submit(formData, { method: "POST" })
  };

  return (
    <div className="create-page-wrapper">
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
        <div className="discount-layout">
          <div className="discount-content">
            <Content
              formState={formState}
              setFormState={setFormState}
              selectedProducts={selectedProducts}
              selectedCollections={selectedCollections}
              excludedProducts={excludedProducts}
              excludedCollections={excludedCollections}
              volumeBundles={volumeBundles}
              setVolumeBundles={setVolumeBundles}
              pricingTiers={pricingTiers}
              setPricingTiers={setPricingTiers}
              discountBundle={discountBundle}
              shopify={shopify}
            />
          </div>
          <div className="discount-sidebar">
            <Sidebar
              formState={formState}
              setFormState={setFormState}
              volumeBundles={volumeBundles}
            />
          </div>
        </div>
      </Page>

      <DiscountModals
        selectedProducts={selectedProducts}
        selectedCollections={selectedCollections}
        excludedProducts={excludedProducts}
        excludedCollections={excludedCollections}
        setSelectedProducts={setSelectedProducts}
        setSelectedCollections={setSelectedCollections}
        setExcludedProducts={setExcludedProducts}
        setExcludedCollections={setExcludedCollections}
        fetcher={fetcher}
      />

    </div>
  );
}
