import { useEffect, useState } from "react";
import classNames from 'classnames/dedupe';

export default function VolumeBundle({volumeBundles, layout, isInEditor, currentVariant, storeDetails}) {
  const [selectedBundle, setSelectedBundle] = useState(null);
  const [loading, setLoading] = useState(false);

  const displayFormattedPrice = (price) => {
    return storeDetails.moneyFormat.replace('{{amount}}', price);
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
      outputText = <span>Save {displayFormattedPrice(bundle.discount)}</span>
    } else {
      outputText = <span>Save {bundle.discount}%</span>
    }

    if (!bundle.discount) {
      outputText = <span>Regular price</span>
    }

    return outputText;
  }

  const getPrice = (bundle) => {
    const price = isInEditor ? window.b2ProductData.product.price : currentVariant.price;

    return price / 100;
  }
  
  /**
   * Calculates the price for a bundle based on the current variant price and discount settings
   * 
   * @param {Object} bundle - The bundle object containing quantity and discount information
   * @param {number} bundle.quantity - The quantity of items in the bundle
   * @param {string} bundle.discount_type - The type of discount ('amount' or 'percentage')
   * @param {number} bundle.discount - The discount value
   * @param {string} [type='discounted'] - The type of price to calculate ('regular' or 'discounted')
   * @returns {string} Formatted price string with currency symbol
   */
  const calculatePrice = (bundle, type = 'discounted') => {
    const price = getPrice(bundle);
    const totalPrice = price * bundle.quantity;
    
    if (type === 'regular') {
      return formatPricing(totalPrice);
    }

    let finalPrice = totalPrice;
    if (bundle.discount_type === 'percentage' && bundle.discount) {
      const discount = (totalPrice * bundle.discount) / 100;
      finalPrice = totalPrice - discount;
    } else if (bundle.discount_type === 'amount' && bundle.discount) {
      finalPrice = totalPrice - bundle.discount;
    }

    return formatPricing(finalPrice);
  };

  /**
   * Formats a numeric price value with currency symbol and fixed decimal places
   * 
   * @param {number|string} price - The price value to format
   * @returns {string} Formatted price string with currency symbol and two decimal places
   */
  const formatPricing = (price) => {
    // Convert to number in case it's a string
    const numericPrice = Number(price);
    // Fix to 2 decimal places and ensure it's a number
    const priceWithFixedDecimal = Number(numericPrice.toFixed(2));

    return displayFormattedPrice(priceWithFixedDecimal);
  }
  
  /**
   * Adds the selected bundle to the cart and redirects to cart page
   * Uses Shopify's cart API to add items and handles different cart redirect methods
   * 
   * @async
   * @returns {Promise<void>}
   * @throws {Error} When the cart API request fails
   */
  const addToCart = async () => {
    if (selectedBundle === null) return;

    setLoading(true);
    
    const bundle = volumeBundles[selectedBundle];
    const formData = {
      'items': [{
        'id': currentVariant.id || '',
        'quantity': bundle.quantity
      }]
    };

    try {
      const response = await fetch(window.Shopify.routes.root + 'cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Try different methods to redirect to cart
        if (window.Shopify && window.Shopify.theme && window.Shopify.theme.cart) {
          window.Shopify.theme.cart.open();
        } else if (window.Shopify && window.Shopify.routes && window.Shopify.routes.cart) {
          window.location.href = window.Shopify.routes.cart;
        } else {
          window.location.href = '/cart';
        }
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  useEffect(() => {
    // Select highlighted bundle if exists
    const highlightedIndex = volumeBundles.findIndex(bundle => bundle.highlighted);
    if (highlightedIndex !== -1) {
      setSelectedBundle(highlightedIndex);
    }
  }, [volumeBundles]);

  return (
    <div className="barn2-discount-bundles">
      <div className="barn2-db-main-title"><span>Buy</span></div>
      <div className="barn2-db-main-description">
        <span>Time-limited offer text! Customize this text to highlight your special deal, promotion, or exclusive discount.</span>
      </div>
      <div 
        className={classNames(
          'barn2-discount-bundles-list',
          `barn2-dbs-layout-${layout}`,
          `discount-columns-${volumeBundles.length}`
        )}
      >
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
                <span className="barn2-dbs-price">{calculatePrice(bundle, 'discounted')}</span>
                <span className="barn2-dbs-regular-price">{calculatePrice(bundle, 'regular')}</span>
              </div>
            </div>
          )
        })}
      </div>
      <button 
        className={classNames(
          'barn2-add-to-cart',
          {
            'loading': loading
          }
        )}
        onClick={addToCart}
      >
        Get this deal
      </button>
    </div>
  )
}