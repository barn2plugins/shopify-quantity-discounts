// External libraries and components
import {
  BlockStack,
  Box,
  PageActions
} from '@shopify/polaris';
import { useEffect } from 'react';
import classNames from 'classnames/dedupe';

// Internal libraries and components
import PreviewToggle from '../../Sections/PreviewToggle';
import VolumeBundlePreview from '../../Sections/VolumeBundlePreview';
import LayoutSection from "../../Sections/LayoutSection.jsx";
import SidebarUpgraderBanner from "../../Sections/SidebarUpgraderBanner.jsx";
import BulkPricingPreview from '../../Sections/BulkPricingPreview';
import PreviewOptions from '../../Sections/PreviewOptions';
import { setCustomDesignStyles } from '../../../utils/utils';

export default function Sidebar({
  formState,
  setFormState,
  volumeBundles,
  pricingTiers,
  isSubscribed,
  store,
  handleSave,
  handleDiscard,
  isLoading,
  hasUnsavedChanges,
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

  const boxStyles = {
    backgroundColor: 'var(--p-color-bg-surface)',
    padding: formState.type === 'volume_bundle' ? '1rem 1rem 0.9rem' : '1rem 1rem 1.4rem',
    borderRadius: '0.8rem',
    boxShadow: 'var(--p-shadow-bevel-100)'
  }

  return (
    <BlockStack gap={600}>
      { !store.isPartnerDevelopment && !isSubscribed && <SidebarUpgraderBanner/> }
      <Box style={boxStyles}>
        <div 
          className={classNames(
            'sidebar-preview-block',
            {
              'should-disable': !store.isPartnerDevelopment && !isSubscribed,
            }
          )}
        >
          <BlockStack gap={formState.previewEnabled ? 500 : 10}>
            <BlockStack gap={formState.type === 'volume_bundle' ? 200 : 500}>
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
                volumeBundles={volumeBundles}
              />

              { formState?.type === 'volume_bundle' && 
                <LayoutSection
                  formState={formState}
                  setFormState={setFormState}
                />
              }
            </BlockStack>
          </BlockStack>
        </div>
      </Box>
        
      <div className="edit-page-actions">
          <PageActions
            primaryAction={{
              content: 'Save',
              onClick: handleSave,
              disabled: hasUnsavedChanges? false : true,
              loading: isLoading? true : undefined,
            }}
            secondaryActions={[
              {
                content: 'Discard',
                disabled: hasUnsavedChanges? false : true,
                onClick: handleDiscard
              },
            ]}
          />
        </div>
    </BlockStack>
  )
}