// External libraries and components
import {
  BlockStack,
  Card,
} from '@shopify/polaris';

// Internal libraries and components
import PreviewToggle from '../../Sections/PreviewToggle';
import BundlePreview from '../../Sections/BundlePreview';
import PreviewOptions from '../../Sections/PreviewOptions';

export default function Sidebar({
  formState,
  setFormState,
  volumeBundles
}) {
  return (
    <Card>
      <BlockStack gap={1000}>
        <BlockStack gap={500}>
          <PreviewToggle
            formState={formState}
            setFormState={setFormState}
          />

          <BundlePreview
            formState={formState}
            setFormState={setFormState}
            volumeBundles={volumeBundles}
          />
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