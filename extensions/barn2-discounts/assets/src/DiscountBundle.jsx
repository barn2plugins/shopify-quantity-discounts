import { useEffect, useState } from "react";
import { currencyCodeToSymbol } from './utils'
import classNames from 'classnames/dedupe';

export default function DiscountBundle({bundleData}) {
  const [selectedBundle, setSelectedBundle] = useState(null);
  const [storeCurrency, setStoreCurrency] = useState('$');
  const [currentVariantPrice, setCurrentVariantPrice] = useState(null);
  const [layout, setLayout] = useState('vertical');
  const [volumeBundles, setVolumeBundles] = useState([]);
  
  const getFirstVariantPrice = () => {
    const variants = window?.ShopifyAnalytics?.meta?.product?.variants || [];
    if (variants.length > 0) {
      // Shopify stores prices in cents, so divide by 100 to get dollars
      return variants[0].price / 100;
    }
    return 0;
  };

  useEffect(() => {
    setVolumeBundles(JSON.parse(bundleData.volumeBundles));
  }, [])

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
      outputText = <span>Save {storeCurrency}{bundle.discount}</span>
    } else {
      outputText = <span>Save {bundle.discount}%</span>
    }

    if (!bundle.discount) {
      outputText = <span>Regular price</span>
    }

    return outputText;
  }

  useEffect(() => {
    // Store store currency
    const storeCurrency = window?.Shopify?.currency?.active;
    setStoreCurrency(currencyCodeToSymbol(storeCurrency));
  }, [])

  useEffect(() => {
    setCurrentVariantPrice(getFirstVariantPrice());
  }, []);

  return (
    <div className="barn2-discount-bundles">
      <div className="barn2-db-main-title"><span>Buy</span></div>
      <div className={`barn2-discounts-list barn2-dbs-layout-${layout} discount-columns-${volumeBundles.length}`}>
        { volumeBundles.map((bundle, index) => {
          return (
            <div 
              key={index} 
              className={classNames(
                'barn2-discount-bundle',
                {
                  'highlighted': bundle.highlighted,
                  'selected': selectedBundle === index,
                }
              )}
              onClick={() => setSelectedBundle(index)}
            >
              { bundle.highlighted && <span className="barn2-highlighted-text">Most popular</span>}
              <div className="barn2-dbs-top">
                <span className="barn2-input-circle"></span>
                <div className="barn2-dbs-text-block">
                  <h4 className="barn2-dbs-bundle-title">{bundle.description}</h4>
                  <p>{discountText(bundle)}</p>
                </div>
              </div>
              <div className="barn2-dbs-bottom">
                <span className="barn2-dbs-price">{storeCurrency}{currentVariantPrice}</span>
                <span className="barn2-dbs-regular-price">{storeCurrency}{currentVariantPrice * bundle.quantity}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}