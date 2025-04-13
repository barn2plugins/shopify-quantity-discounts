// External libraries and components
import {
  BlockStack,
  Card,
} from '@shopify/polaris';
import { useEffect } from 'react';

// Internal libraries and components
import PreviewToggle from '../../Sections/PreviewToggle';
import VolumeBundlePreview from '../../Sections/VolumeBundlePreview';
import BulkPricingPreview from '../../Sections/BulkPricingPreview';
import PreviewOptions from '../../Sections/PreviewOptions';
import { setCustomDesignStyles } from '../../../utils/utils';

export default function Sidebar({
  formState,
  setFormState,
  volumeBundles,
  pricingTiers,
  store
}) {

  useEffect(() => {
    if (formState.designOptions === 'custom_design') {
      setCustomDesignStyles(formState);
    }

    // Cleanup function to remove custom styles on unmount
    return () => {
      const cssVars = [
        '--barn2-bundles-bundle-text-color',
        '--barn2-bundles-highlighted-text-color',
        '--barn2-bundles-bundle-border-color',
        '--barn2-bundles-highlighted-border-color',
        '--barn2-bundles-bundle-badge-color',
        '--barn2-bundles-badge-text-color',
        '--barn2-bundles-highlighted-color',
        '--barn2-bundles-table-color',
        '--barn2-bundles-header-text-color',
        '--barn2-bundles-background-color',
        '--barn2-bundles-text-color',
        '--barn2-bundles-label-color',
        '--barn2-bundles-label-text-color',
        '--barn2-bundles-cart-notice-bg-color',
        '--barn2-bundles-cart-notice-text-color',
        '--barn2-bundles-badge-color',
        '--barn2-bundles-border-color',
        '--barn2-bundles-corner-radius'
      ];

      cssVars.forEach(varName => {
        document.documentElement.style.removeProperty(varName);
      });
    };
  }, [formState]);

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