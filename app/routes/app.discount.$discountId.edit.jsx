// External libraries and components
import {
  Page,
  BlockStack
} from "@shopify/polaris";

import { useState, useEffect } from "react";
import { useLoaderData, useFetcher, useNavigate } from "@remix-run/react";
import { useAppBridge, SaveBar } from "@shopify/app-bridge-react";

// Internal services and components
import { authenticate } from "../shopify.server.js"
import { getBundle, updateBundle, getAllBundles } from "../services/bundle.service.js";
import { getStoreDetails, updateStoreMetafieldForVolumeDiscount } from "../services/store.service.js";
import { setOrUpdateOption, getOptionValue } from "../services/options.service";
import { trackBundleUpdateEvent } from "../services/mixpanel.service";

import AppBlockEmbed from "../components/Notice/AppBlockEmbed.jsx";
import AppBlockEmbedPopup from "../components/Notice/AppBlockEmbedPopup.jsx";
import Content from "../components/Layouts/Discount/Content.jsx";
import Sidebar from "../components/Layouts/Discount/Sidebar.jsx";
import { PLANS } from "../utils/plans";

import { getDefaultPricingTiers, parseBundleObject, editPageHasChanges, validateDiscountForm } from "../utils/utils.jsx";

export const loader = async ({ request, params }) => {
  const { session, billing } = await authenticate.admin(request);
  // Get the app embed block extension id
  const bundlesDiscountsExtensionId = process?.env?.SHOPIFY_BARN2_BUNDLES_BULK_DISCOUNTS_ID;

  const {hasActivePayment} = await billing.check({
    plans: [PLANS.Starter_Monthly, PLANS.Growth_Monthly, PLANS.Pro_Monthly],
  });

  const store = await getStoreDetails(session.id, {
    id: true,
    currency: true,
    ianaTimezone: true,
    volumeDiscountFunctionId: true,
    activeThemeGid: true,
    moneyFormat: true,
    isPartnerDevelopment: true,
  });

  const discountBundle = await getBundle({storeId: store.id, bundleId: params.discountId});
  if (!discountBundle) {
    throw new Response("Discount bundle not found", {
      status: 404,
      statusText: "Not Found"
    });
  }

  const parsedDiscountBundle = await parseBundleObject({ discountBundle });
  const appEmbedPopupDisplayed = await getOptionValue({storeId: store.id, key: 'app_embed_popup_displayed'})
  
  return { 
    discountBundle: parsedDiscountBundle, 
    isSubscribed: true,
    appEmbedPopupDisplayed: appEmbedPopupDisplayed === 'true',
    store: {
      currencyCode: store?.currency || '$',
      ianaTimezone: store.ianaTimezone || 'UTC',
      bundlesDiscountsExtensionId,
      moneyFormat: store.moneyFormat || '${{amount}}',
      isPartnerDevelopment: store?.isPartnerDevelopment,
    }
  };
}

export const action = async ({ request }) => {
  const { admin, session } = await authenticate.admin(request);

  const formData = await request.formData();
  const fetcherData = Object.fromEntries(formData);

  // When the request is to update the discount function and bundles
  if (fetcherData.intent === 'update') {
    // Validate form data
    const errors = validateDiscountForm(fetcherData);
    if (errors) {
      return { errors };
    }

    const store = await getStoreDetails(session.id, {
      session: {
        select: {
          userId: true
        }
      }
    });

    if (!store) return null;
    
    // Update both the discount function in Shopify and update the discount bundle in the database
    const discountData = await updateBundle({admin, fetcherData});
    if (discountData?.success === false) {
      return null;
    }

    const allDiscounts = await getAllBundles(session.id);
    if (allDiscounts?.success === false) {
      return null;
    }
    await updateStoreMetafieldForVolumeDiscount({admin, shopifyShopId: store.session.userId, allDiscounts: allDiscounts.bundles});

    // On bundle update, track the event on Mixpanel
    try {
      trackBundleUpdateEvent({session, bundle: fetcherData});
    } catch (error) {
      console.log('Error tracking bundle update event on Mixpanel', error);
    }

    return discountData;
  }

  if (fetcherData.intent === 'closeAppEmbedPopup') {
    const key = 'app_embed_popup_displayed';
    const value = 'true';
    const option = await setOrUpdateOption({sessionId: session.id, key, value});

    return null;
  }
}

export default function DiscountPage() {
  const fetcher = useFetcher();
  const storeStatusFetcher = useFetcher();
  const shopify = useAppBridge();
  const navigate = useNavigate();
  const { discountBundle, isSubscribed, appEmbedPopupDisplayed, store } = useLoaderData();

  const [ isAppEmbedDisabled, setIsAppEmbedDisabled ] = useState(false);
  const [ formState, setFormState ] = useState(discountBundle);
  const [ selectedProducts, setSelectedProducts ] = useState([]);
  const [ selectedCollections, setSelectedCollections ] = useState([]);
  const [ excludedProducts, setExcludedProducts ] = useState([]);
  const [ excludedCollections, setExcludedCollections ] = useState([]);
  const [ volumeBundles, setVolumeBundles ] = useState([]);
  const [ pricingTiers, setPricingTiers ] = useState([]);
  const [ pageLoaded, setPageLoaded ] = useState(false);
  const [ hasUnsavedChanges, setHasUnsavedChanges ] = useState(false);
  const [ shouldLimitFeatures, setShouldLimitFeatures ] = useState(false);

  const isLoading = fetcher.state === "submitting" || (fetcher.state === "loading" && fetcher.formMethod === "POST");
  const errors = fetcher.data?.errors;

  const shouldDisplayAppEmbedPopup =
  !appEmbedPopupDisplayed && 
  isAppEmbedDisabled && 
  ( discountBundle.type === 'volume_bundle' || discountBundle.type === 'bulk_pricing' && discountBundle.previewEnabled);

  /**
   * Handles the save action for the discount bundle
   * Triggers the submission of form data to update the discount
   * 
   * @function
   * @returns {void}
   * @fires discountBundleAction
   */
  const handleSave = () => {
    discountBundleAction();
  };

  /**
   * Handles the discard action for unsaved changes
   * Resets the unsaved changes state and hides the save bar
   * 
   * @function
   * @returns {void}
   */
  const handleDiscard = () => {
    setHasUnsavedChanges(false);
    shopify.saveBar.hide('discount-edit-save-bar');
  };

  /**
   * Submits the discount bundle form data to update the discount
   * Prepares form data by combining form state with selected products, collections,
   * and other configuration options. All array/object data is stringified before submission.
   * 
   * @function
   * @returns {void}
   * @fires fetcher.submit
   */
  const discountBundleAction = () => {
    const formData = {
      ...formState,
      intent: 'update',
      selectedProducts: JSON.stringify(selectedProducts),
      selectedCollections: JSON.stringify(selectedCollections),
      excludedProducts: JSON.stringify(excludedProducts),
      excludedCollections: JSON.stringify(excludedCollections),
      volumeBundles: formState.type === 'volume_bundle' ? JSON.stringify(volumeBundles) : JSON.stringify([]),
      pricingTiers: formState.type === 'bulk_pricing' ? JSON.stringify(pricingTiers) : JSON.stringify([]),
      storeDisplay: formState.storeDisplay ? JSON.stringify(formState.storeDisplay) : '',
      customDesigns: formState.customDesigns ? JSON.stringify(formState.customDesigns) : '',
      previewOptions: formState.previewOptions ? JSON.stringify(formState.previewOptions) : ''
    }

    fetcher.submit(formData, { method: "POST" })
  };

  /**
   * Handles the back navigation action when clicking the back button
   * If there are unsaved changes, shows a confirmation dialog
   * Otherwise, navigates back to the app home page
   * 
   * @function
   * @returns {void}
   */
  const handleBackAction = () => {
    if (hasUnsavedChanges) {
      // Show the save bar if there are unsaved changes
      shopify.saveBar.leaveConfirmation('discount-edit-save-bar');
      return;
    }
    navigate('/app');
  };

  /**
   * Effect to set the initial state of the form
   */
  useEffect(() => {
    setVolumeBundles(discountBundle.volumeBundles ? JSON.parse(discountBundle.volumeBundles) : getDefaultBundleDiscountTypes())
    setPricingTiers(discountBundle.pricingTiers ? JSON.parse(discountBundle.pricingTiers) : getDefaultPricingTiers())
    setSelectedProducts(JSON.parse(discountBundle.selectedProducts))
    setSelectedCollections(JSON.parse(discountBundle.selectedCollections))
    setExcludedProducts(JSON.parse(discountBundle.excludedProducts))
    setExcludedCollections(JSON.parse(discountBundle.excludedCollections))
    setPageLoaded(true);
  }, []);

  /**
   * Effect to show the save bar when there are unsaved changes
   */
  useEffect(() => {
    if (!pageLoaded) return;
    
    const hasChanges = editPageHasChanges({
      formState, 
      selectedProducts, 
      selectedCollections, 
      excludedProducts, 
      excludedCollections, 
      volumeBundles, 
      pricingTiers, 
      discountBundle
    });

    setHasUnsavedChanges(hasChanges);

    if (shouldLimitFeatures) {
      return;
    }
    hasChanges ? shopify.saveBar.show('discount-edit-save-bar') : shopify.saveBar.hide('discount-edit-save-bar');

  }, [formState, selectedProducts, selectedCollections, excludedProducts, excludedCollections, volumeBundles, pricingTiers]);

  useEffect(() => {
    if (fetcher.data?.success === true) {
      setHasUnsavedChanges(false);
      shopify.saveBar.hide('discount-edit-save-bar');
      shopify.toast.show("Discount updated");
    }
    
    if (fetcher.data?.appEmbedDisabled) {
      setIsAppEmbedDisabled(true);
    }
  }, [fetcher.data]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Check app embed enabled or not
      fetcher.submit(
        {},
        {
          method: 'POST',
          action: '/app/check-app-embed-status'
        }
      )
    }, 500);

    // Cleanup function to clear the timeout on unmount
    return () => clearTimeout(timeoutId);
  }, []);


  useEffect(() => {
    const checkStoreActiveStatus = setTimeout(() => {
      // Check app embed enabled or not
      storeStatusFetcher.submit(
        {
          action: 'checkStoreActiveStatus',
        },
        {
          method: 'POST',
          action: '/app/check-app-subscription-status'
        }
      )
    }, 100);

    // Cleanup function to clear the timeout on unmount
    return () => clearTimeout(checkStoreActiveStatus);
  }, []);

  useEffect(() => {
    if (storeStatusFetcher.data?.shouldLimitFeatures) {
      setShouldLimitFeatures(storeStatusFetcher.data?.shouldLimitFeatures === true)
    }
  }, [storeStatusFetcher?.data])

  return (
    <div className="barn2-discounts-page-wrapper barn2-discount-edit-page-wrapper">
      <SaveBar id="discount-edit-save-bar">
        <button variant="primary" onClick={handleSave} disabled={isLoading} loading={isLoading ? "" : undefined}></button>
        <button onClick={handleDiscard}></button>
      </SaveBar>
  
      <Page
        backAction={{content: 'Home', onAction: handleBackAction}}
        title='Update discount'
      >
        <BlockStack gap="500">
          {!shouldDisplayAppEmbedPopup && 
            isAppEmbedDisabled && 
            <AppBlockEmbed bundlesDiscountsExtensionId={store.bundlesDiscountsExtensionId}/>
          }
          
          {shouldDisplayAppEmbedPopup && 
            <AppBlockEmbedPopup 
              fetcher={fetcher} 
              bundlesDiscountsExtensionId={store.bundlesDiscountsExtensionId}
            />
          }

          <div className="discount-layout">
            <div className="discount-content">
              <Content
                formState={formState}
                setFormState={setFormState}
                selectedProducts={selectedProducts}
                setSelectedProducts={setSelectedProducts}
                selectedCollections={selectedCollections}
                setSelectedCollections={setSelectedCollections}
                excludedProducts={excludedProducts}
                setExcludedProducts={setExcludedProducts}
                excludedCollections={excludedCollections}
                setExcludedCollections={setExcludedCollections}
                volumeBundles={volumeBundles}
                setVolumeBundles={setVolumeBundles}
                pricingTiers={pricingTiers}
                setPricingTiers={setPricingTiers}
                store={store}
                shopify={shopify}
                formErrors={errors}
              />
            </div>
            <div className="discount-sidebar">
              <Sidebar
                formState={formState}
                setFormState={setFormState}
                volumeBundles={volumeBundles}
                pricingTiers={pricingTiers}
                isSubscribed={isSubscribed}
                store={store}
                handleSave={handleSave}
                isLoading={isLoading}
                hasUnsavedChanges={hasUnsavedChanges}
                handleDiscard={handleDiscard}
              />
            </div>
          </div>
        </BlockStack>
      </Page>
    </div>
  );
}
