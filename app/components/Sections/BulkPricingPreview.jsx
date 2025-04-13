import { InlineGrid, BlockStack, Text } from '@shopify/polaris';
import {currencyCodeToSymbol} from '../../utils/utils';
import { useEffect, useState } from 'react';
import classNames from 'classnames/dedupe';

export default function BulkPricingPreview({ formState, pricingTiers, store }) {
  const [currencyCode, setCurrencyCode] = useState('$');

  const demoProductPrice = 50;

  const prefixCurrency = (value) => {
    return `${currencyCode}${value}`;
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
      outputText = <Text as='span' variant='bodyXs'>Save {currencyCode}{bundle.discount}</Text>
    } else {
      outputText = <Text as='span' variant='bodyXs'>Save {bundle.discount}%</Text>
    }

    if (!bundle.discount) {
      outputText = <Text as='span' variant='bodyXs'>Regular price</Text>
    }

    return outputText;
  }

  useEffect(() => {
    setCurrencyCode(currencyCodeToSymbol(store.currencyCode));
  }, [formState.currencyCode])

  /**
   * Generates formatted discount text based on the pricing tier's discount type and value
   * 
   * @param {Object} pricingTier - The pricing tier object
   * @param {string} pricingTier.discount_type - Type of discount ('percentage' or 'amount')
   * @param {number|string} pricingTier.discount - The discount value
   * @returns {JSX.Element} A span element containing the formatted discount text
   */
  const getTierDiscountText = ( pricingTier ) => {
    let text;

    if ( pricingTier.discount_type === 'percentage' ) {
      text = pricingTier.discount + '% off';
    } else {
      text = displayFormattedPrice(pricingTier.discount) + ' off';
    }

    return <span className="b2-pricing-tier-discount">{text}</span>
  }

  const displayFormattedPrice = (price) => {
    return store.moneyFormat.replace('{{amount}}', price);
  }

  const getPrice = () => {
    return demoProductPrice;
  }

  /**
   * Calculates the discounted price for a product based on the pricing tier
   * 
   * @param {Object} pricingTier - The pricing tier object
   * @param {string} pricingTier.discount_type - Type of discount ('percentage' or 'amount')
   * @param {number|string} pricingTier.discount - The discount value
   * @returns {string} The discounted price, guaranteed to be non-negative and formatted to 2 decimal places
   */
  const getDiscountedPrice = (pricingTier) => {
    let finalPrice = getPrice();

    if (pricingTier.discount_type === 'percentage' && pricingTier.discount) {
      const discount = (getPrice() * pricingTier.discount) / 100;
      finalPrice = getPrice() - discount;
    } else if (pricingTier.discount_type === 'amount' && pricingTier.discount) {
      finalPrice = getPrice() - pricingTier.discount;
    }

    return Math.max(0, finalPrice.toFixed(2));
  }

  if ( pricingTiers && pricingTiers.length <= 0 || formState.previewEnabled === false ) {
    return null;
  }
  
  return (
    <div className="bundle-preview">
      { formState.previewOptions?.title && (
        <div className="bundle-header">
          <div className="main-title">
            <span>{formState.previewOptions?.title}</span>
          </div>
          <p className="main-description">{formState.previewOptions?.description}</p>
        </div>
      ) }

      <div className="barn2-bulk-table-container">
        <table className="barn2-bulk-table">
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Discount</th>
              <th>Price per item</th>
            </tr>
          </thead>
          <tbody>
            { pricingTiers.length > 0 && pricingTiers.map( (pricingTier, index) => {
              return (
                <tr key={index}>
                  <td>{pricingTier.min_quantity}-{pricingTier.max_quantity}</td>
                  <td><span className="discount-pill">{getTierDiscountText(pricingTier)}</span></td>
                  <td>{displayFormattedPrice(getDiscountedPrice(pricingTier))}</td>
                </tr>
              )
            } ) }
          </tbody>
        </table>
      </div>
    </div>
  )
}