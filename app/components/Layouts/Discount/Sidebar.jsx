// External libraries and components
import {
  BlockStack,
  Card,
} from '@shopify/polaris';

// Internal libraries and components
import PreviewToggle from '../../Sections/PreviewToggle';
import VolumeBundlePreview from '../../Sections/VolumeBundlePreview';
import BulkPricingPreview from '../../Sections/BulkPricingPreview';
import PreviewOptions from '../../Sections/PreviewOptions';

export default function Sidebar({
  formState,
  setFormState,
  volumeBundles,
  pricingTiers,
  store
}) {

  return (
    <Card>
      <BlockStack gap={500}>
        <BlockStack gap={500}>
          <PreviewToggle
            formState={formState}
            setFormState={setFormState}
          />

          { formState.type === 'volume_bundle' && 
            <VolumeBundlePreview
              formState={formState}
              setFormState={setFormState}
              volumeBundles={volumeBundles}
              store={store}
            />
          }

          { formState.type === 'bulk_pricing' && 
            <BulkPricingPreview
              formState={formState}
              setFormState={setFormState}
              pricingTiers={pricingTiers}
              store={store}
            />
          }
        </BlockStack>

        <BlockStack gap={500}>
          <PreviewOptions 
            formState={formState}
            setFormState={setFormState}
          />
        </BlockStack>
      </BlockStack>
    </Card>
  )
}