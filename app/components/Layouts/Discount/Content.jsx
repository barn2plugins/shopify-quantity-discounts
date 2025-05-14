import { 
  BlockStack, 
  Card,
  Box
} from "@shopify/polaris";

import DiscountNameSection from "../../Sections/DiscountNameSection.jsx";
import DiscountTypeSection from "../../Sections/DiscountTypeSection.jsx";
import ProductSelectionSection from "../../Sections/ProductSelectionSection.jsx";
import ActiveDatesSections from "../../Sections/ActiveDatesSections.jsx";
import VolumeBundleSection from "../../Sections/VolumeBundleSection.jsx";
import BulkPricingTiers from "../../Sections/BulkPricingTiers.jsx";
import DesignOptions from "../../Sections/DesignOptions.jsx";
import { useButtonLabels } from "../../../hooks/useButtonLabels.js";

export default function Content({
  formState,
  setFormState,
  selectedProducts,
  setSelectedProducts,
  selectedCollections,
  setSelectedCollections,
  excludedProducts,
  setExcludedProducts,
  excludedCollections,
  setExcludedCollections,
  volumeBundles,
  setVolumeBundles,
  pricingTiers,
  setPricingTiers,
  store,
  shopify,
  formErrors
}) {

  const buttonLabels = useButtonLabels(
    selectedProducts, 
    selectedCollections, 
    excludedProducts, 
    excludedCollections
  );

  const boxStyles = {
    backgroundColor: 'var(--p-color-bg-surface)',
    padding: '1rem 1rem 1.4rem',
    borderRadius: '0.8rem',
    boxShadow: 'var(--p-shadow-bevel-100)'
  }
  const boxStylesWithEndingChoiceComponent = {
    backgroundColor: 'var(--p-color-bg-surface)',
    padding: '1rem 1rem 0.9rem',
    borderRadius: '0.8rem',
    boxShadow: 'var(--p-shadow-bevel-100)'
  }

  return (
    <BlockStack gap={600}>
      <Box
        style={boxStyles}
      >
        <BlockStack gap={600}>
          <DiscountNameSection formState={formState} setFormState={setFormState} formErrors={formErrors} />
          <DiscountTypeSection formState={formState} setFormState={setFormState} />
        </BlockStack>
      </Box>
      <Box style={boxStylesWithEndingChoiceComponent}>
        <BlockStack gap={600}>
          <ProductSelectionSection 
            formState={formState}
            setFormState={setFormState}
            shopify={shopify}
            buttonLabels={buttonLabels}
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
            selectedCollections={selectedCollections}
            setSelectedCollections={setSelectedCollections}
            excludedProducts={excludedProducts}
            setExcludedProducts={setExcludedProducts}
            excludedCollections={excludedCollections}
            setExcludedCollections={setExcludedCollections}
          />
          <ActiveDatesSections
            formState={formState}
            setFormState={setFormState}
            timezone={store?.ianaTimezone}
          />
        </BlockStack>
      </Box>

      { formState.type === 'volume_bundle' && (
        <Box style={boxStyles}>
          <VolumeBundleSection 
            formState={formState}
            currencyCode={store?.currencyCode}
            volumeBundles={volumeBundles}
            setVolumeBundles={setVolumeBundles}
          />
        </Box>
      ) }

      { formState.type === 'bulk_pricing' && (
        <BulkPricingTiers 
          formState={formState}
          setFormState={setFormState}
          pricingTiers={pricingTiers}
          setPricingTiers={setPricingTiers}
          store={store}
        />
      ) }
      <Box style={boxStylesWithEndingChoiceComponent}>
        <DesignOptions
          formState={formState}
          setFormState={setFormState}
        />
      </Box>
    </BlockStack>
  )
}