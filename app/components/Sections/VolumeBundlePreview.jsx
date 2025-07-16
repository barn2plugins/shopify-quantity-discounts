import { InlineGrid, BlockStack, Text } from '@shopify/polaris';
import {displayFormattedPrice} from '../../utils/utils';
import { useEffect, useState } from 'react';
import classNames from 'classnames/dedupe';

export default function VolumeBundlePreview({ formState, volumeBundles, store }) {
  const [selectedBundle, setSelectedBundle] = useState(null);

  const demoProductPrice = 50.00;

  const displayCalculatedPrice = ( bundle ) => {
    if ( bundle.discount_type === 'amount' ) {
      const price = (bundle.quantity * demoProductPrice) - bundle.discount;
      return displayFormattedPrice(store?.moneyFormat, price);
    } else if ( bundle.discount_type === 'percentage' ) {
      const totalPrice = bundle.quantity * demoProductPrice;
      const discountAmount = (totalPrice * bundle.discount) / 100;
      return displayFormattedPrice(store?.moneyFormat, totalPrice - discountAmount);
    }
  }

  const displayOriginalPrice = ( bundle ) => {
    return displayFormattedPrice(store?.moneyFormat, bundle.quantity * demoProductPrice)
  }
  
  /**
   * Determines if savings should be displayed based on new displaySaving field or legacy amountSaved field
   * 
   * @returns {boolean} Whether to show savings display
   */
  const shouldDisplaySaving = () => {
    const displaySaving = formState.previewOptions?.displaySaving;
    const legacyAmountSaved = formState.previewOptions?.amountSaved;
    
    // If new format exists, use it
    if (displaySaving) {
      return displaySaving !== 'none';
    }
    
    // Backward compatibility for legacy boolean format
    return legacyAmountSaved === true;
  }

  /**
   * Gets the display saving mode (percentage_saving, exact_saving, or none)
   * 
   * @returns {string} The display saving mode
   */
  const getDisplaySavingMode = () => {
    const displaySaving = formState.previewOptions?.displaySaving;
    const legacyAmountSaved = formState.previewOptions?.amountSaved;
    
    // If new format exists, use it
    if (displaySaving) {
      return displaySaving;
    }
    
    // Backward compatibility: if legacy was true, default to percentage_saving
    if (legacyAmountSaved === true) {
      return 'percentage_saving';
    }
    
    return 'none';
  }

  /**
   * Generates formatted discount text based on the bundle's discount type, value, and display mode.
   * 
   * @param {Object} bundle - The bundle object containing discount information
   * @param {string} bundle.discount_type - The type of discount ('amount' or 'percentage')
   * @param {number|string} bundle.discount - The discount value
   */
  const discountText = (bundle) => {
    let outputText = ''
    const displayMode = getDisplaySavingMode();

    if (!bundle.discount) {
      outputText = <span>Regular price</span>
      return outputText;
    }

    if (displayMode === 'exact_saving') {
      // Show exact dollar amount saved
      if (bundle.discount_type === 'amount') {
        outputText = <span>Save {displayFormattedPrice(store?.moneyFormat, bundle.discount)}</span>
      } else {
        // Calculate exact amount for percentage discounts
        const totalPrice = bundle.quantity * demoProductPrice;
        const discountAmount = (totalPrice * bundle.discount) / 100;
        outputText = <span>Save {displayFormattedPrice(store?.moneyFormat, discountAmount)}</span>
      }
    } else if (displayMode === 'percentage_saving') {
      // Show percentage (legacy behavior)
      if (bundle.discount_type === 'amount') {
        // Convert amount to percentage for display
        const totalPrice = bundle.quantity * demoProductPrice;
        const percentage = ((bundle.discount / totalPrice) * 100).toFixed(0);
        outputText = <span>Save {percentage}%</span>
      } else {
        outputText = <span>Save {bundle.discount}%</span>
      }
    }

    return outputText;
  }

  /**
   * Checks if a bundle should be highlighted based on selection state or bundle properties
   * @param {Object} bundle - The bundle object
   * @param {number} index - Bundle index in array
   * @returns {boolean} True if bundle should be highlighted
   */
  const checkIsHighlightedOrSelected = (bundle, index) => {
    if (typeof selectedBundle === 'number' && selectedBundle === index) {
      return true;
    }

    if (typeof selectedBundle !== 'number' && bundle.highlighted) {
      return true;
    }

    return false;
  }

  if (volumeBundles.length <= 0 || (formState.type === 'bulk_pricing' && formState.previewEnabled === false) ) {
    return null;
  }
  
  return (
    <div className="bundle-preview">
      <div className="bundle-header">
        { formState.previewOptions?.title && (
          <div className="main-title">
            <span>{formState.previewOptions?.title}</span>
          </div>
        ) }
        <p className="main-description">{formState.previewOptions?.description}</p>
      </div>

      <div className={`bundles-list layout-${formState?.layout}`}>
        <InlineGrid columns={formState?.layout === 'horizontal' ? '1' : volumeBundles.length} gap={300}>
          { volumeBundles.map((bundle, index) => {
            return (
              <div 
                key={index} 
                className={classNames(
                  'bundle-single',
                  {
                    'highlighted': checkIsHighlightedOrSelected(bundle, index),
                  }
                )}
                onClick={(event) => setSelectedBundle(index)}
              >
                { bundle.label.length > 0 && <span className="highlightedText">{bundle.label}</span>}
                <BlockStack 
                  style={{
                    flexDirection: formState.layout === 'horizontal' ? 'row' : 'column',
                  }}
                >
                  <div className="input-field">
                    <input type="radio" name="" id="" />
                    <span className="input-circle"></span>
                  </div>
                  <BlockStack style={{
                    gap: "5px",
                    flexDirection: 'column',
                    alignItems: formState.layout === 'horizontal'? 'flex-start' : 'center',
                  }}>
                    <h4 className='bundle-title'>{bundle.description}</h4>
                    { shouldDisplaySaving() && <p className="bundle-description">{ discountText(bundle) }</p> }
                  </BlockStack>
                </BlockStack>

                <BlockStack style={{
                    gap: "5px",
                    flexDirection: 'column',
                    alignItems: formState.layout === 'horizontal'? 'flex-end' : 'center',
                  }}>
                  <h4 className='bundle-discounted-price'>{displayCalculatedPrice(bundle)}</h4>
                  { formState.previewOptions?.showOriginalPrice && parseFloat(bundle.discount) !== 0 &&
                    <p 
                      className={classNames(
                        'bundle-regular-price',
                        {
                          'price-strike-through': parseFloat(bundle.discount) !== 0,
                        }
                      )}
                    >
                      {displayOriginalPrice(bundle)}
                    </p> 
                  }
                </BlockStack>
              </div>
            ) })}
        </InlineGrid>
      </div>
    </div>
  )
}