// External libraries and components
import {
  Page,
  Button,
  BlockStack
} from "@shopify/polaris";

import { useState, useEffect } from "react";
import { useLoaderData, useFetcher } from "@remix-run/react";
import { useAppBridge } from "@shopify/app-bridge-react";

// Internal services and components
import { authenticate } from "../shopify.server.js"
import { BundleService } from "../services/bundle.service.js";
import { StoreService } from "../services/store.service.js";
import { ProductService } from "../services/product.service";
import { CollectionService } from "../services/collection.service";

import AppBlockEmbed from "../components/Notice/AppBlockEmbed.jsx";
import Content from "../components/Layouts/Discount/Content.jsx";
import Sidebar from "../components/Layouts/Discount/Sidebar.jsx";

import DiscountModals from "../components/Modals/DiscountModals.jsx";

import { getDefaultBundleDiscountTypes, getDefaultPricingTiers, parseBundleObject } from "../utils/utils.jsx";

export const loader = async ({ request, params }) => {
  const { admin, session } = await authenticate.admin(request);
  // Get the app embed block extension id
  const bundlesDiscountsExtensionId = process?.env?.SHOPIFY_BARN2_BUNDLES_BULK_DISCOUNTS_ID;

  const store = await StoreService.getStoreDetails(session.id, {
    id: true,
    currency: true,
    ianaTimezone: true,
    volumeDiscountFunctionId: true,
    activeThemeGid: true,
    moneyFormat: true,
  });

  const appEmbedDisabled = await StoreService.isAppEmbedDisabled({admin, store});

  const discountBundle = await BundleService.getBundle({storeId: store.id, bundleId: params.discountId});
  const parsedDiscountBundle = await parseBundleObject({ discountBundle });

  if (!parsedDiscountBundle) {
    throw new Response("Discount bundle not found", {
      status: 404,
      statusText: "Not Found"
    });
  }

  return { 
    discountBundle: parsedDiscountBundle, 
    appEmbedDisabled,
    store: {
      currencyCode: store?.currency || '$',
      ianaTimezone: store.ianaTimezone || 'UTC',
      bundlesDiscountsExtensionId,
      moneyFormat: store.moneyFormat || '{{amount}} {{currency}}',
    }
  };
}

export const action = async ({ request }) => {
  const { admin, session } = await authenticate.admin(request);

  const formData = await request.formData();
  const fetcherData = Object.fromEntries(formData);

  // When the request is to update the discount function and bundles
  if (fetcherData.intent === 'update') {
    const store = await StoreService.getStoreDetails(session.id, {
      session: {
        select: {
          userId: true
        }
      }
    });

    if (!store) return null;
    
    // Update both the discount function in Shopify and update the discount bundle in the database
    const discountData = await BundleService.updateBundle({admin, fetcherData});
    if (discountData?.success === false) {
      return null;
    }

    const allDiscounts = await BundleService.getAllBundles(session.id);
    if (allDiscounts?.success === false) {
      return null;
    }
    await StoreService.updateStoreMetafieldForVolumeDiscount({admin, shopifyShopId: store.session.userId, allDiscounts: allDiscounts.bundles});

    return discountData;
  }
  
  // When the request is to load the products from Shopify
  if ( fetcherData.intent === 'loadProducts' ) {
    const response = await ProductService.getProducts({admin})
    if (response?.success === false) {
      return null;
    }

    return response;
  }
 
  // When the request is to load the collections from Shopify
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
  const { discountBundle, appEmbedDisabled, store } = useLoaderData();

  const [ formState, setFormState ] = useState(discountBundle);
  const [ isAppEmbedDisabled, setIsAppEmbedDisabled ] = useState(appEmbedDisabled);
  const [ selectedProducts, setSelectedProducts ] = useState([]);
  const [ selectedCollections, setSelectedCollections ] = useState([]);
  const [ excludedProducts, setExcludedProducts ] = useState([]);
  const [ excludedCollections, setExcludedCollections ] = useState([]);
  const [ volumeBundles, setVolumeBundles ] = useState([]);
  const [ pricingTiers, setPricingTiers ] = useState([]);

  const isLoading = ["loading", "submitting"].includes(fetcher.state) && fetcher.formMethod === "POST";

  useEffect(() => {
    setVolumeBundles(discountBundle.volumeBundles ? JSON.parse(discountBundle.volumeBundles) : getDefaultBundleDiscountTypes())
    setPricingTiers(discountBundle.pricingTiers ? JSON.parse(discountBundle.pricingTiers) : getDefaultPricingTiers())
    setSelectedProducts(JSON.parse(discountBundle.selectedProducts))
    setSelectedCollections(JSON.parse(discountBundle.selectedCollections))
    setExcludedProducts(JSON.parse(discountBundle.excludedProducts))
    setExcludedCollections(JSON.parse(discountBundle.excludedCollections))
  }, []);

  // On clicking the update discount button, set the form state to active and submit the form
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
      customDesigns: formState.customDesigns ? JSON.stringify(formState.customDesigns) : '',
      previewOptions: formState.previewOptions ? JSON.stringify(formState.previewOptions) : ''
    }

    fetcher.submit(formData, { method: "POST" })
  };

  return (
    <div className="barn2-discounts-page-wrapper">
      <Page
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
        <BlockStack gap="500">
          { isAppEmbedDisabled && <AppBlockEmbed bundlesDiscountsExtensionId={store.bundlesDiscountsExtensionId} />}
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
        </BlockStack>
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
