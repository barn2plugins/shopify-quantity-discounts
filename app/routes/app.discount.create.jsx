// External libraries and components
import {
  Page,
  Button,
  Layout,
} from "@shopify/polaris";

import { useState, useEffect } from "react";
import { useLoaderData, useFetcher } from "@remix-run/react";
import { useAppBridge } from "@shopify/app-bridge-react";

// Internal services and components
import { authenticate } from "../shopify.server"
import { BundleService } from "../services/bundle.service";
import { StoreService } from "../services/store.service";
import { ProductService } from "../services/product.service";
import { CollectionService } from "../services/collection.service";

import Content from "../components/Layouts/Discount/Content.jsx";
import Sidebar from "../components/Layouts/Discount/Sidebar.jsx";
import DiscountModals from "../components/Modals/DiscountModals.jsx";

import { getDefaultBundleDiscountTypes, getDefaultPricingTiers } from "../utils/utils";

export const loader = async ({ request }) => {
  const { session } = await authenticate.admin(request);

  const store = await StoreService.getStoreDetails(session.id, {
    currency: true,
    ianaTimezone: true,
    moneyFormat: true,
  });

  const defaultBundle = await BundleService.getDefaultBundle({sessionId: session.id, timezone: store.ianaTimezone});

  return {
    defaultBundle,
    store: {
      currencyCode: store?.currency || '$',
      ianaTimezone: store.ianaTimezone || 'UTC',
      moneyFormat: store.moneyFormat || '{{amount}} {{currency}}',
    }
  };
};

export const action = async ({ request }) => {
  const { admin, session, redirect } = await authenticate.admin(request);

  const formData = await request.formData();
  const fetcherData = Object.fromEntries(formData);

  if (fetcherData.intent === 'create') {
    const store = await StoreService.getStoreDetails(session.id, {
      id: true,
      volumeDiscountFunctionId: true,
      session: {
        select: {
          userId: true
        }
      }
    });

    if (!store) return null;

    const bundle = await BundleService.createBundle({ admin, store, fetcherData });

    if (bundle?.success === false) {
      return null;
    }

    const allDiscounts = await BundleService.getAllBundles(session.id);
    if (allDiscounts?.success === false) {
      return null;
    }
    await StoreService.updateStoreMetafieldForVolumeDiscount({admin, shopifyShopId: store.session.userId, allDiscounts: allDiscounts.bundles});

    // Once the discount bundle successfully created, redirect to the edit page
    return redirect(`/app/discount/${bundle.shopifyDiscountid}/edit`);
  } 
  
  if ( fetcherData.intent === 'loadProducts' ) {
    const response = await ProductService.getProducts({admin})
    if (response?.success === false) {
      return null;
    }

    return response;
  }
 
  if ( fetcherData.intent === 'loadCollections' ) {
    const response = await CollectionService.getCollections({admin})
    if (response?.success === false) {
      return null;
    }

    return response;
  }
}

export default function DiscountPage() {
  const fetcher = useFetcher();
  const shopify = useAppBridge();
  const { defaultBundle, store } = useLoaderData();
  
  const [ formState, setFormState ] = useState(defaultBundle);
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
    <div className="barn2-discounts-page-wrapper">
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
              discountBundle={defaultBundle}
              store={store}
              shopify={shopify}
            />
          </div>
          <div className="discount-sidebar">
            <Sidebar
              formState={formState}
              setFormState={setFormState}
              volumeBundles={volumeBundles}
              pricingTiers={pricingTiers}
              store={store}
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
