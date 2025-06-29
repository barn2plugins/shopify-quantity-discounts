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
   * Generates formatted discount text based on the bundle's discount type and value.
   * 
   * @param {Object} bundle - The bundle object containing discount information
   * @param {string} bundle.discount_type - The type of discount ('amount' or 'percentage')
   * @param {number|string} bundle.discount - The discount value
   */
  const discountText = (bundle) => {
    let outputText = ''

    if ( bundle.discount_type === 'amount' ) {
      outputText = <span>Save {displayFormattedPrice(store?.moneyFormat, bundle.discount)}</span>
    } else {
      outputText = <span>Save {bundle.discount}%</span>
    }

    if (!bundle.discount) {
      outputText = <span>Regular price</span>
    }

    return outputText;
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
                    'highlighted': bundle.highlighted,
                    'selected': selectedBundle === index
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
                    { formState.previewOptions?.amountSaved && <p className="bundle-description">{ discountText(bundle) }</p> }
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