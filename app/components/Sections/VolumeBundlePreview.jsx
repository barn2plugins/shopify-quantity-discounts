import { InlineGrid, BlockStack, Text } from '@shopify/polaris';
import {displayFormattedPrice} from '../../utils/utils';
import { useEffect, useState } from 'react';
import classNames from 'classnames/dedupe';

export default function VolumeBundlePreview({ formState, volumeBundles, store, productQueryFetcher }) {
  const [demoProductOptions, setDemoProductOptions] = useState([]);
  const [selectedBundle, setSelectedBundle] = useState(null);
  const [fetchedProduct, setFetchedProduct] = useState(null);
  const [selectedVariants, setSelectedVariants] = useState([]);
  const [demoProductVariants, setDemoProductVariants] = useState([]);

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
   * Gets the appropriate CSS class for a bundle based on its state
   * @param {Object} bundle - The bundle object
   * @param {number} index - Bundle index in array
   * @returns {Object} Object with highlighted and selected boolean properties
   */
  const getBundleClasses = (bundle, index) => {
    const isSelected = typeof selectedBundle === 'number' && selectedBundle === index;
    const shouldBeHighlighted = typeof selectedBundle !== 'number' && bundle.highlighted;
    
    return {
      highlighted: shouldBeHighlighted,
      selected: isSelected
    };
  }

  /**
   * Handles bundle click - toggles between highlighted and selected states
   * @param {number} index - Bundle index
   */
  const handleBundleClick = (index) => {
    if (selectedBundle === index) {
      // Clicking on already selected bundle - deselect it and restore highlighted state
      setSelectedBundle(null);
    } else {
      // Clicking on a different bundle - select it
      setSelectedBundle(index);
    }
  }

  /**
   * Determines if variant picker should be shown for a bundle
   * @param {number} index - Bundle index
   * @returns {boolean} True if variant picker should be shown
   */
  const shouldShowVariantPicker = (index) => {
    const bundle = volumeBundles[index];
    if (!bundle) return false;

    // If a bundle is selected, only show for the selected bundle
    if (typeof selectedBundle === 'number') {
      return selectedBundle === index;
    }

    // If no bundle is selected, show for highlighted bundle
    return bundle.highlighted;
  }

  /**
   * Gets the active bundle for variant picker (selected or highlighted)
   * @returns {Object|null} The active bundle object or null
   */
  const getActiveBundleForVariantPicker = () => {
    // If a bundle is selected, use that
    if (typeof selectedBundle === 'number') {
      return volumeBundles[selectedBundle];
    }

    // Otherwise, find the highlighted bundle
    const highlightedIndex = volumeBundles.findIndex(bundle => bundle.highlighted);
    return highlightedIndex !== -1 ? volumeBundles[highlightedIndex] : null;
  }

  const previewProduct = productQueryFetcher?.data;

  useEffect(() => {
    if (previewProduct && !previewProduct.success) return;

    setDemoProductOptions(previewProduct?.product?.options || []);
    setDemoProductVariants(previewProduct?.product?.variants?.edges || []);

  }, [previewProduct])

  const fetchProducts = async () => {
    try {
      productQueryFetcher.submit(
        {
          intent: 'getProductWithVariations'
        },
        {
          method: 'POST',
          action: '/app/product-query'
        }
      )
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  const getCurrentVariantValue = (barIndex, optionIndex) => {
    if (!selectedVariants?.[barIndex]) return '';

    const currentVariantOptions = selectedVariants[barIndex].options;
    return currentVariantOptions?.[optionIndex] || '';
  };

  const setBundleSelectedVariants = (bundle) => {
    if (!bundle || !demoProductVariants.length) return;
    
    // Get the first variant as default
    const defaultVariant = demoProductVariants[0]?.node;
    if (!defaultVariant) return;

    // Create initial variant selections for the bundle quantity
    const duplicatedSelections = Array.from({ length: bundle.quantity }, () => ({
      available: defaultVariant.availableForSale,
      id: defaultVariant.id,
      options: defaultVariant.selectedOptions.map(option => option.value),
      price: parseFloat(defaultVariant.price),
    }));

    setSelectedVariants(duplicatedSelections);
  };

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
                            
      // Find matching variant from demoProductVariants
      const matchingVariant = demoProductVariants.find(({ node }) => {
        return node.selectedOptions.every((option, index) => 
          option.value === updatedVariants[barIndex].options[index]
        );
      });

      if (matchingVariant) {
        // Update the variant info
        updatedVariants[barIndex].id = matchingVariant.node.id;
        updatedVariants[barIndex].available = matchingVariant.node.availableForSale;
        updatedVariants[barIndex].price = parseFloat(matchingVariant.node.price);
      }

      return updatedVariants;
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Keep selectedBundle as null initially to show highlighted state
  // No automatic selection on mount - bundles will show as highlighted by default

  // Initialize selected variants when active bundle changes
  useEffect(() => {
    const activeBundle = getActiveBundleForVariantPicker();
    if (activeBundle) {
      setBundleSelectedVariants(activeBundle);
    }
  }, [selectedBundle, volumeBundles, demoProductVariants]);

  const getVariantPickerBars = (bundle) => {
    if (!demoProductOptions.length || !bundle) return null;
    
    return (
      <div className="variant-picker-bars">
        {Array.from({ length: bundle.quantity }).map((_, barIndex) => (
          <div key={barIndex} className="variant-bar">
            <div 
              className="variant-bar-content" 
              data-variant-available={selectedVariants[barIndex]?.available}
            >
              <span className="variant-bar-number">{barIndex + 1}</span>
              <div className={`variant-selects variant-count-${demoProductOptions.length}`}>
                {demoProductOptions.map((option, optionIndex) => (
                  <div className="variant-select" key={optionIndex}>
                    <select
                      value={getCurrentVariantValue(barIndex, optionIndex)}
                      onChange={(e) => handleVariantChange(e, barIndex, optionIndex)}
                    >
                      {option.values.map((value, valueIndex) => (
                        <option key={valueIndex} value={value}>{value}</option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            </div>
            {!selectedVariants[barIndex]?.available && (
              <p className="variant-unavailable">Sorry, this is currently unavailable.</p>
            )}
          </div>
        ))}
      </div>
    );
  };

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
        <InlineGrid columns={formState?.layout === 'horizontal' ? '1' : volumeBundles.length} gap={400}>
          { volumeBundles.map((bundle, index) => {
            return (
              <div 
                key={index} 
                className={classNames(
                  'bundle-single',
                  getBundleClasses(bundle, index)
                )}
                onClick={() => handleBundleClick(index)}
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
                  <BlockStack  style={{
                      flexDirection: 'column',
                      alignItems: formState.layout === 'horizontal'? 'flex-start' : 'center',
                    }}>
                    <BlockStack style={{
                      gap: "5px",
                      flexDirection: 'column',
                      alignItems: formState.layout === 'horizontal'? 'flex-start' : 'center',
                    }}>
                      <h4 className='bundle-title'>{bundle.description}</h4>
                      { shouldDisplaySaving() && <p className="bundle-description">{ discountText(bundle) }</p> }
                    </BlockStack>
                    <BlockStack>
                      {formState.layout === 'horizontal' && 
                        shouldShowVariantPicker(index) && 
                        demoProductVariants.length > 1 && 
                        getVariantPickerBars(bundle)
                      }
                    </BlockStack>
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

      {/* Add variant picker bars for vertical layout */}
      {formState.layout === 'vertical' && 
       getActiveBundleForVariantPicker() && 
       demoProductVariants.length > 1 && (
        <div className="variant-bars-wrapper">
          {getVariantPickerBars(getActiveBundleForVariantPicker())}
        </div>
      )}
    </div>
  )
}