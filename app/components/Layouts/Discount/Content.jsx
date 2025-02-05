import { BlockStack, Card } from "@shopify/polaris";

import DiscountNameSection from "../../Sections/DiscountNameSection.jsx";
import DiscountTypeSection from "../../Sections/DiscountTypeSection.jsx";
import ProductSelectionSection from "../../Sections/ProductSelectionSection.jsx";
import LayoutSection from "../../Sections/LayoutSection.jsx";
import VolumeBundleSection from "../../Sections/VolumeBundleSection.jsx";
import BulkPricingTiers from "../../Sections/BulkPricingTiers.jsx";
import DesignOptions from "../../Sections/DesignOptions.jsx";
import { useButtonLabels } from "../../../hooks/useButtonLabels.js";

export default function Content({
  formState,
  setFormState,
  selectedProducts,
  selectedCollections,
  excludedProducts,
  excludedCollections,
  volumeBundles,
  setVolumeBundles,
  pricingTiers,
  setPricingTiers,
  discountBundle,
  shopify
}) {

  const buttonLabels = useButtonLabels(
    selectedProducts, 
    selectedCollections, 
    excludedProducts, 
    excludedCollections
  );

  return (
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
            <LayoutSection
              formState={formState}
              setFormState={setFormState}
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
          timezone={discountBundle.timezone}
        />
      ) }
      <DesignOptions
        formState={formState}
        setFormState={setFormState}
      />
    </BlockStack>
  )
}