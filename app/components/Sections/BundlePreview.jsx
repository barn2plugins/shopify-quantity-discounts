import { InlineGrid, BlockStack, InlineStack, Text } from '@shopify/polaris';
import {currencyCodeToSymbol} from '../../utils/utils';


export default function BundlePreview({ formState, volumeBundles }) {
  
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
      outputText = <Text as='span' variant='bodyXs'>Save {currencyCodeToSymbol(formState.currencyCode)}{bundle.discount}</Text>
    } else {
      outputText = <Text as='span' variant='bodyXs'>Save {bundle.discount}%</Text>
    }

    if (!bundle.discount) {
      outputText = <Text as='span' variant='bodyXs'>Regular price</Text>
    }

    return outputText;
  }

  if ( volumeBundles.length <= 0 || formState.previewEnabled === false ) {
    return null;
  }
  
  return (
    <div className="bundle-preview">
      { formState.previewOptions?.title && (
        <div className="main-title">
          <span>{formState.previewOptions?.title}</span>
        </div>
      ) }

      <div className={`bundles-list layout-${formState?.layout}`}>
        <InlineGrid columns={formState?.layout === 'horizontal' ? '1' : volumeBundles.length} gap={300}>
          { volumeBundles.map((bundle, index) => {
            return (
              <div key={index} className={`${bundle.highlighted ? 'highlighted' : ''} bundle-single`}>
                { bundle.highlighted && <span className="highlightedText">Most popular</span>}
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
                    <Text as='span' variant='bodyXs'>{ discountText(bundle) }</Text>
                  </BlockStack>
                </BlockStack>

                <BlockStack >
                  <Text variant='bodyLg' fontWeight='medium'>$150</Text>
                  <Text as='span' variant='bodyXs' textDecorationLine="line-through">$500</Text>
                </BlockStack>
              </div>
            ) })}
        </InlineGrid>
      </div>
    </div>
  )
}