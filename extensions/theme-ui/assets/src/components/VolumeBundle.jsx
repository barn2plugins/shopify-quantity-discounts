import { useEffect, useState, useRef } from "react";
import classNames from 'classnames/dedupe';
import { updateOrCreateInput, displayFormattedPrice } from '../utils';

export default function VolumeBundle({
  bundleData, 
  isInEditor, 
  currentVariant, 
  storeDetails
}) {
  const [selectedBundle, setSelectedBundle] = useState(null);
  const [volumeBundles, setVolumeBundles] = useState([]);
  const [layout, setLayout] = useState();
  const [previewOptions, setPreviewOptions] = useState([]);
  const [customDesigns, setCustomDesigns] = useState({});
  const [shopifyProductOptions, setShopifyProductOptions] = useState(window.b2ProductData?.product?.options || []);
  const [shopifyProductVariants, setShopifyProductVariants] = useState(window.b2ProductData?.product?.variants || []);
  const [selectedVariants, setSelectedVariants] = useState([]);
  const selectedVariantsRef = useRef(selectedVariants);
  const selectedBundleRef = useRef(selectedBundle);

  /**
   * Determines if savings should be displayed based on new displaySaving field or legacy amountSaved field
   * 
   * @returns {boolean} Whether to show savings display
   */
  const shouldDisplaySaving = () => {
    const displaySaving = previewOptions?.displaySaving;
    const legacyAmountSaved = previewOptions?.amountSaved;
    
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
    const displaySaving = previewOptions?.displaySaving;
    const legacyAmountSaved = previewOptions?.amountSaved;
    
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
        outputText = <span>Save {displayFormattedPrice(storeDetails?.moneyFormat, bundle.discount)}</span>
      } else {
        // Calculate exact amount for percentage discounts
        const productPrice = getPrice(bundle);
        const totalPrice = bundle.quantity * productPrice;
        const discountAmount = (totalPrice * bundle.discount) / 100;
        outputText = <span>Save {displayFormattedPrice(storeDetails?.moneyFormat, discountAmount)}</span>
      }
    } else if (displayMode === 'percentage_saving') {
      // Show percentage (legacy behavior)
      if (bundle.discount_type === 'amount') {
        // Convert amount to percentage for display
        const productPrice = getPrice(bundle);
        const totalPrice = bundle.quantity * productPrice;
        const percentage = ((bundle.discount / totalPrice) * 100).toFixed(0);
        outputText = <span>Save {percentage}%</span>
      } else {
        outputText = <span>Save {bundle.discount}%</span>
      }
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
    let totalPrice = 0;
    if (selectedBundle && selectedVariants && bundle.id === selectedBundle?.id) {
      const bundleBarTotal = selectedVariants.reduce((sum, variant) => {
        return sum + variant.price / 100;
      }, 0);
      totalPrice = bundleBarTotal;
    } else {
      const price = getPrice(bundle);
      totalPrice = price * bundle.quantity;
    }
    
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

    return displayFormattedPrice(storeDetails?.moneyFormat, priceWithFixedDecimal);
  }

  /**
   * Updates the product quantity input field with the selected bundle's quantity
   *
   * @param {number} quantity - The quantity of items in the bundle
   */
  const updateProductQuantity = (quantity) => {
    const quantityInput = document.querySelector('.product-form__input.product-form__quantity input[type="number"], input[name="quantity"]');
    if (quantityInput) {
      quantityInput.value = quantity;
      // Trigger change event to update any listeners
      quantityInput.dispatchEvent(new Event('change', { bubbles: true }));
    } else {
      updateOrCreateInput('quantity', quantity);
    }
  };

  const updateProductVariantId = () => {
    const variantInput = document.querySelector('.product-variant-id, [ref="variantId"]');
    if (variantInput) {
      variantInput.value = currentVariant.id;
      variantInput.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }

  const isBundleSelected = (bundle) => {
    if (!selectedBundle) return false;
    return selectedBundle.id === bundle.id;
  };

  const getCurrentVariantValue = (barIndex, optionIndex) => {
    if (!selectedVariants?.[barIndex]) return '';

    const currentVariantOptions = selectedVariants[barIndex].options;

    return currentVariantOptions?.[optionIndex] || '';
  };

  const setBundleSelectedVariants = () => {
    if (selectedBundle === null) return;
    // Get initial variant selections
    const duplicatedSelections = Array.from({ length: selectedBundle.quantity }, () => ({
      available: currentVariant.available,
      id: currentVariant.id,
      options: [...currentVariant.options],
      price: currentVariant.price,
    }));
  
    setSelectedVariants(duplicatedSelections);
  }

  const updateProductVariantOnPage = (variantId) => {
    // Update the URL with the new variant ID
    const url = new URL(window.location.href);
    url.searchParams.set('variant', variantId);
    // window.history.replaceState({}, '', url.toString());
    window.dispatchEvent(new Event('popstate'));

    // Find and update hidden variant ID input if it exists
    const variantInput = document.querySelector('.product-variant-id, [ref="variantId"]');
    if (variantInput) {
      variantInput.value = variantId;
      variantInput.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }

  const handleVariantChange = (e, barIndex, optionIndex) => {
    setSelectedVariants((prevSelectedVariants) => {
      const updatedVariants = prevSelectedVariants.map((variant, index) => {
        if (index === barIndex) {
          return {
            ...variant,
            options: variant.options.map((opt, idx) => 
              idx === optionIndex ? e.target.value : opt
            )
          };
        }
        return variant;
      });
                              
      // Find matching variant
      const matchingVariant = shopifyProductVariants.find(variant => {
        return variant.options.every((option, index) => 
          option === updatedVariants[barIndex].options[index]
        );
      });

      updateProductVariantOnPage(matchingVariant.id);

      // Update the availability status for the current variant and ID
      updatedVariants[barIndex].id = matchingVariant.id;
      updatedVariants[barIndex].available = matchingVariant.available;
      updatedVariants[barIndex].price = matchingVariant.price;

      return updatedVariants;
    });
  }

  /**
   * Gets the appropriate CSS classes for a bundle based on its state
   * @param {Object} bundle - The bundle object
   * @returns {Object} Object with highlighted and selected boolean properties
   */
  const getBundleClasses = (bundle) => {
    const isSelected = selectedBundle && selectedBundle.id === bundle.id;
    const shouldBeHighlighted = !selectedBundle && bundle.highlighted;
    
    return {
      highlighted: shouldBeHighlighted,
      selected: isSelected
    };
  }

  /**
   * Handles bundle click - toggles between highlighted and selected states
   * @param {Object} bundle - The bundle object
   */
  const handleBundleClick = (bundle) => {
    if (selectedBundle && selectedBundle.id === bundle.id) {
      // Clicking on already selected bundle - deselect it and restore highlighted state
      setSelectedBundle(null);
    } else {
      // Clicking on a different bundle - select it
      setSelectedBundle(bundle);
      if (selectedBundle?.id !== bundle?.id) {
        updateProductQuantity(bundle.quantity);
        updateProductVariantId();
      }
    }
  }

  useEffect(() => {
    // Find the highlighted bundle and set initial quantity/form data without selecting it
    const highlightedBundle = volumeBundles.find(bundle => bundle.highlighted);
    if (highlightedBundle && !selectedBundle) {
      updateProductQuantity(highlightedBundle.quantity);
      addDiscountBundleToForm(highlightedBundle);
    }
  }, [volumeBundles]);

  useEffect(() => {
    setBundleSelectedVariants();
  }, [selectedBundle, currentVariant]);
  
  /**
   * Updates the product quantity input field with the selected bundle's quantity
   *
   * @param {number} quantity - The quantity of items in the bundle
   */
  useEffect(() => {
    if (selectedBundle === null) return;
    updateProductQuantity(selectedBundle.quantity);
    addDiscountBundleToForm(selectedBundle);
    selectedBundleRef.current = selectedBundle;
  }, [selectedBundle]);

  useEffect(() => {
    const waitForElement = (selector, timeout = 5000) => {
      return new Promise((resolve, reject) => {
        const startTime = Date.now();
        
        const checkForElement = () => {
          const element = document.querySelector(selector);
          if (element) {
            resolve(element);
          } else if (Date.now() - startTime > timeout) {
            reject(new Error(`Element ${selector} not found within ${timeout}ms`));
          } else {
            setTimeout(checkForElement, 100);
          }
        };
        
        checkForElement();
      });
    };

    const attachListener = async () => {
      try {
        const addToCartButton = await waitForElement('form[action="/cart/add"] [type="submit"]');

        const handleClick = (event) => {
          
          // Get current state values at click time
          const submitButton = document.querySelector('[action="/cart/add"] [type="submit"]');
          
          if (!submitButton?.classList.contains('b2-different-variants-selected')) {
            return;
          }

          event.preventDefault();
          event.target.setAttribute('disabled', 'disabled');

          const variantInput = document.querySelector('.product-variant-id, [ref="variantId"]');
          const currentSelectedVariants = selectedVariantsRef.current;
          const currentSelectedBundle = selectedBundleRef.current;

          // Get all variant IDs except the current one
          let hasRemovedCurrentVariant = false;
          const otherVariants = currentSelectedVariants
            .filter(variant => {
              if (variant.id === parseInt(variantInput.value) && !hasRemovedCurrentVariant) {
                hasRemovedCurrentVariant = true;
                return false;
              }
              return true;
            })
            .filter(variant => variant.available)
            .map(variant => variant.id);
          
          // Group variants by ID and count quantities
          const groupedVariants = otherVariants.reduce((acc, variantId) => {
            acc[variantId] = (acc[variantId] || 0) + 1;
            return acc;
          }, {});

          const data = {
            items: Object.entries(groupedVariants).map(([variantId, quantity]) => ({
              id: parseInt(variantId),
              quantity,
              properties: {
                '_barn2_discount_campaign_name': bundleData.name,
                '_barn2_discount_bundle_type': 'volume_discount',
                '_barn2_discount_volume_bundles': bundleData.volumeBundles || ''
              }
            }))
          };

          fetch('/cart/add.js', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
          }).then(() => {
            submitButton.removeAttribute('disabled');

            const submitEvent = new SubmitEvent('submit', {
              bubbles: true,
              cancelable: true
            });

            const productForm = submitButton?.closest('form');
            productForm.dispatchEvent(submitEvent);
          });
        };

        addToCartButton.addEventListener('click', handleClick);
        
        // Return cleanup function
        return () => {
          addToCartButton.removeEventListener('click', handleClick);
        };
      } catch (error) {
        return () => {}; // Return empty cleanup function on error
      }
    };

    // Call the async function and handle cleanup
    let cleanup = null;
    
    attachListener().then((cleanupFn) => {
      cleanup = cleanupFn;
    });

    // Return cleanup function for useEffect
    return () => {
      if (cleanup) {
        cleanup();
      }
    };
  }, []);

  // Separate useEffect for updating UI based on selectedVariants
  useEffect(() => {
    if (selectedVariants.length === 0) return;
    selectedVariantsRef.current = selectedVariants;

    const allVariantsMatch = selectedVariants.every((variant, _, array) => 
      variant.id === array[0].id
    );
    
    const submitButton = document.querySelector('[action="/cart/add"] [type="submit"]');
    const paymentButton = document.querySelector('.shopify-payment-button');

    if (allVariantsMatch) {
      updateProductQuantity(selectedVariants.length);
      submitButton?.classList.remove('b2-different-variants-selected');
      if (paymentButton) {
        paymentButton.style.display = '';
      }
    } else {
      updateProductQuantity(1);
      submitButton?.classList.add('b2-different-variants-selected');
      if (paymentButton) {
        paymentButton.style.display = 'none';
      }
    }
  }, [selectedVariants]);

  useEffect(() => {
    setVolumeBundles(JSON.parse(bundleData.volumeBundles || []));
    setPreviewOptions(JSON.parse(bundleData.previewOptions || {}));
    setCustomDesigns(JSON.parse(bundleData.customDesigns || {}));
    setLayout(bundleData.layout);
  }, []);

  /**
   * Adds or updates hidden form inputs for bulk pricing discount configuration.
   * This function handles the creation and updating of hidden input fields in the product form
   * to store discount-related data that will be used when the product is added to cart.
   */
  const addDiscountBundleToForm = (selectedBundle) => {
    const form = document.querySelector('product-form.product-form form, product-form-component [action="/cart/add"]');
    if (!form) {
      return;
    }

    // Update or create bundle type input
    updateOrCreateInput(
      'properties[_barn2_discount_campaign_name]',
      bundleData.name || ''
    );

    // Update or create bundle type input
    updateOrCreateInput(
      'properties[_barn2_discount_bundle_type]',
      'volume_discount'
    );

    // Update or create discount quantity input
    updateOrCreateInput(
      'properties[_barn2_discount_volume_bundles]',
      bundleData.volumeBundles || ''
    );
  };

  return (
    <div className="barn2-discount-bundles">
      { bundleData.previewEnabled && (
        <>
          { previewOptions?.title && 
            <div className="barn2-db-main-title"><span>{previewOptions?.title}</span></div> 
          }
          {previewOptions?.description &&
            <div className="barn2-db-main-description">
              <span>{previewOptions?.description}</span>
            </div>
          }
        </>
      )}
      
      <div
        className={classNames(
          'barn2-discount-bundles-list',
          `barn2-dbs-layout-${layout}`,
          `discount-columns-${volumeBundles.length}`,
          `barn2-bundle-corner-${customDesigns?.cornerRadius || 'square'}`
        )}
      >
        { volumeBundles.map((bundle, index) => {
          return (
            <div 
              key={index} 
              className={classNames(
                'barn2-discount-bundle',
                getBundleClasses(bundle)
              )}
              onClick={() => handleBundleClick(bundle)}
            >
              { bundle.label.length > 0 && <span className="barn2-highlighted-text">{bundle.label}</span>}
              <div className="barn2-dbs-top">
                <span className="barn2-input-circle"></span>
                <div className="barn2-dbs-text-block-wrapper">
                  <div className="barn2-dbs-text-block">
                    <h4 className="barn2-dbs-bundle-title">{bundle.description}</h4>
                    { shouldDisplaySaving() && <p>{discountText(bundle)}</p> }
                  </div>
                  { bundleData.layout === 'horizontal' && isBundleSelected(bundle) && shopifyProductVariants.length > 1 && getVariantPickerBars() }
                </div>
              </div>
              <div className="barn2-dbs-bottom">
                <span className="barn2-dbs-price">{calculatePrice(bundle, 'discounted')}</span>
                { previewOptions.showOriginalPrice && parseFloat(bundle.discount) !== 0 && 
                  <span 
                    className={classNames(
                      'barn2-dbs-regular-price',
                      {
                        'price-strike-through': parseFloat(bundle.discount) !== 0,
                      }
                    )}
                  >{calculatePrice(bundle, 'regular')}</span>
                }
              </div>
            </div>
          )
        })}
      </div>

      { bundleData.layout === 'vertical' && shopifyProductVariants.length > 1 && (
        <div className="barn2-db-bars-wrapper">{getVariantPickerBars()}</div>
      ) }
    </div>
  )

  function getVariantPickerBars() {
    return (
      <div className="barn2-db-bars">
        {Array.from({ length: selectedBundle?.quantity }).map((_, barIndex) => (
          <div key={barIndex}>
            <div className="barn2-db-bar" data-variant-available={selectedVariants[barIndex]?.available}>
              <span className="barn2-db-bar-number">{barIndex + 1}</span>
              <div className={`barn2-dbs-select-variants barn2-dbs-variants-number-${shopifyProductOptions.length}`}>
              { shopifyProductOptions.map((option, optionIndex) => {
                return (
                  <div className="barn2-dbs-variant" key={optionIndex}>
                    <select
                      value={getCurrentVariantValue(barIndex, optionIndex)}
                      onChange={(e) => {handleVariantChange(e, barIndex, optionIndex)}}
                    >
                      { option.values.map((value, optionIndex) => {
                        return (
                          <option key={optionIndex} value={value}>{value}</option>
                        )
                      })}
                    </select>
                  </div>
                )
              })}
              </div>
            </div>
            { !selectedVariants[barIndex]?.available && <p className="barn2-dbs-stock-unavailable">Sorry, this is currently unavailable.</p> }
          </div>
        ))}
      </div>
    )
  }
}