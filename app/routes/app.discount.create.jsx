// External libraries and components
import {
  Page,
} from "@shopify/polaris";

import { useState, useEffect } from "react";
import { useLoaderData, useFetcher, useNavigate } from "@remix-run/react";
import { useAppBridge, SaveBar } from "@shopify/app-bridge-react";

// Internal services and components
import { authenticate } from "../shopify.server"
import { getDefaultBundle, createBundle } from "../services/bundle.service";
import { getStoreDetails } from "../services/store.service";
import { trackBundleCreateEvent } from "../services/mixpanel.service";

import Content from "../components/Layouts/Discount/Content.jsx";
import Sidebar from "../components/Layouts/Discount/Sidebar.jsx";

import { getDefaultBundleDiscountTypes, getDefaultPricingTiers, validateDiscountForm } from "../utils/utils";
import { PLANS } from "../utils/plans"

export const loader = async ({ request }) => {
  const { session, billing } = await authenticate.admin(request);
  
  const {hasActivePayment} = await billing.check({
    plans: [PLANS.Starter_Monthly, PLANS.Growth_Monthly, PLANS.Pro_Monthly],
  });

  const store = await getStoreDetails(session.id, {
    currency: true,
    ianaTimezone: true,
    moneyFormat: true,
    isPartnerDevelopment: true,
  });

  const defaultBundle = await getDefaultBundle({sessionId: session.id, timezone: store?.ianaTimezone});

  
  return {
    defaultBundle,
    isSubscribed: hasActivePayment,
    store: {
      currencyCode: store?.currency || '$',
      ianaTimezone: store?.ianaTimezone || 'UTC',
      moneyFormat: store?.moneyFormat || '${{amount}}',
      isPartnerDevelopment: store?.isPartnerDevelopment,
    }
  };
};

export const action = async ({ request }) => {
  const { admin, session } = await authenticate.admin(request);

  const formData = await request.formData();
  const fetcherData = Object.fromEntries(formData);

  if (fetcherData.intent === 'create') {
    // Validate form data
    const errors = validateDiscountForm(fetcherData);
    if (errors) {
      return { errors };
    }

    const store = await getStoreDetails(session.id, {
      id: true,
      volumeDiscountFunctionId: true,
      session: {
        select: {
          userId: true
        }
      }
    });

    if (!store) return null;

    const discountBundle = await createBundle({ admin, store, fetcherData });

    if (discountBundle?.success === false) {
      return null;
    }

    // On bundle create, track the event on Mixpanel
   try {
    trackBundleCreateEvent({session, bundle: discountBundle.bundle});
   } catch (error) {
    console.log('Error tracking bundle create event on Mixpanel', error);
   }

    return discountBundle;
  } 
}

export default function DiscountPage() {
  const fetcher = useFetcher();
  const storeStatusFetcher = useFetcher();
  const shopify = useAppBridge();
  const { defaultBundle, isSubscribed, store } = useLoaderData();
  const navigate = useNavigate();
  
  const [ formState, setFormStateOriginal ] = useState(defaultBundle);
  const [ selectedProducts, setSelectedProducts ] = useState([]);
  const [ selectedCollections, setSelectedCollections ] = useState([]);
  const [ excludedProducts, setExcludedProducts ] = useState([]);
  const [ excludedCollections, setExcludedCollections ] = useState([]);
  const [ volumeBundles, setVolumeBundles ] = useState([]);
  const [ pricingTiers, setPricingTiers ] = useState([]);
  const [ hasUnsavedChanges, setHasUnsavedChanges ] = useState(false);
  const [ shouldLimitFeatures, setShouldLimitFeatures ] = useState(false);

  const setFormState = (...args) => {
    setHasUnsavedChanges(true);
    return setFormStateOriginal(...args);
  };

  const isLoading = ["loading", "submitting"].includes(fetcher.state) 
    && fetcher.formMethod === "POST" 
    && (fetcher.formData?.get("intent") === "create");

  const discountBundleId = fetcher.data?.bundle?.id;
  const errors = fetcher.data?.errors;

  /**
   * Handles the discard action for unsaved changes
   * Resets the unsaved changes state and hides the save bar
   * 
   * @function
   * @returns {void}
   */
  const handleDiscard = () => {
    shopify.saveBar.hide('discount-create-save-bar');
    navigate('/app');
  };

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

  useEffect(() => {
    if ( discountBundleId ) {
      shopify.saveBar.hide('discount-create-save-bar');
      shopify.toast.show('Discount saved');
      setTimeout(() => {
        navigate(`/app/discount/${discountBundleId}/edit`);
      }, 100);
    }
  }, [discountBundleId, shopify]);

  useEffect(() => {
    setVolumeBundles(getDefaultBundleDiscountTypes())
    setPricingTiers(getDefaultPricingTiers())
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

  useEffect(() => {
    if (shouldLimitFeatures) {
      return;
    }
    shopify.saveBar.show('discount-create-save-bar');
  }, [formState, shouldLimitFeatures])

  return (
    <div className="barn2-discounts-page-wrapper">
      <SaveBar id="discount-create-save-bar">
        <button variant="primary" onClick={() => discountBundleAction()} loading={isLoading ? "" : undefined}></button>
        <button onClick={handleDiscard}></button>
      </SaveBar>

      <Page
        fullWidth={true}
        backAction={{
          content: 'Home', 
          onAction: () => {
            shopify.saveBar.hide('discount-create-save-bar');
            navigate('/app');
          }
        }}
        title='Create discount'
      >
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
              isSubscribed={isSubscribed}
              pricingTiers={pricingTiers}
              store={store}
              handleSave={handleSave}
              isLoading={isLoading}
              hasUnsavedChanges={hasUnsavedChanges}
              handleDiscard={handleDiscard}
            />
          </div>
        </div>
      </Page>
    </div>
  );
}
