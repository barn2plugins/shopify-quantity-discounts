/**
 * Applies custom design styles to the document root element using CSS variables
 * 
 * @param {Object} bundleData - The bundle configuration object
 * @returns {void}
 */
export const setCustomDesignStyles = (bundleData) => {
  if (!bundleData.designOptions || bundleData.designOptions !== 'custom_design') return;
  const customDesigns = JSON.parse(bundleData.customDesigns);
  
  document.documentElement.style.setProperty('--barn2-bundles-bundle-text-color', customDesigns.bundleTextColor);
  document.documentElement.style.setProperty('--barn2-bundles-highlighted-text-color', customDesigns.highlightedTextColor);
  document.documentElement.style.setProperty('--barn2-bundles-bundle-border-color', customDesigns.bundleBorderColor);
  document.documentElement.style.setProperty('--barn2-bundles-highlighted-border-color', customDesigns.highlightedBorderColor);
  document.documentElement.style.setProperty('--barn2-bundles-highlighted-color', customDesigns.highlightedColor);
  document.documentElement.style.setProperty('--barn2-bundles-bundle-badge-color', customDesigns.badgeBackgroundColor);
  document.documentElement.style.setProperty('--barn2-bundles-badge-text-color', customDesigns.badgeTextColor);

  document.documentElement.style.setProperty('--barn2-bundles-table-color', customDesigns.tableColor);
  document.documentElement.style.setProperty('--barn2-bundles-header-text-color', customDesigns.headerTextColor);
  document.documentElement.style.setProperty('--barn2-bundles-background-color', customDesigns.backgroundColor);
  document.documentElement.style.setProperty('--barn2-bundles-text-color', customDesigns.textColor);
  document.documentElement.style.setProperty('--barn2-bundles-label-color', customDesigns.labelColor);
  document.documentElement.style.setProperty('--barn2-bundles-label-text-color', customDesigns.lebelTextColor);
  document.documentElement.style.setProperty('--barn2-bundles-border-color', customDesigns.borderColor);

  // Handle corner radius
  let borderRadius = '0';
  switch (customDesigns.cornerRadius) {
    case 'slightlyRounded':
      borderRadius = '8px';
      break;
    case 'fullyRounded':
      borderRadius = '15px';
      break;
    case 'square':
    default:
      borderRadius = '0';
  }

  document.documentElement.style.setProperty('--barn2-bundles-corner-radius', borderRadius);
};

export const unHideQuantityAndVariantBlocks = () => {
  const quantityInput = document.querySelector('.product-form__input.product-form__quantity, quantity-selector-component.quantity-selector');
  if (quantityInput) {
    quantityInput.style.removeProperty('display');
  }

  const variantSelector = document.querySelector('.product__info-container variant-selects, .product__info-wrapper variant-selects, .product-page-section variant-selects, .product__info-wrapper variant-radios, variant-picker.variant-picker');
  if (variantSelector) {
    variantSelector.style.removeProperty('display');
  }
}

// Helper function to update or create input
export const updateOrCreateInput = (name, value) => {
  const form = document.querySelector('product-form.product-form form, product-form-component [action="/cart/add"]');
  if (!form) return;
  
  let input = form.querySelector(`input[name="${name}"]`);
  if (input) {
    input.value = value;
  } else {
    input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = value;
    form.appendChild(input);
  }
};

export const removeInputField = (selector) => {
  const inputField = document.querySelector(`input[name="${selector}"]`);
  if (inputField) {
    inputField.remove();
    return true;
  }
  return false;
};


/**
 * Formats a price value according to a specified money format pattern.
 */
export const displayFormattedPrice = (moneyFormat, price) => {
  const numericPrice = typeof price === 'number' ? price : parseFloat(price);
  
  if (isNaN(numericPrice)) return price;
  
  const formatters = {
    '{{amount}}': () => 
      numericPrice % 1 === 0 ? numericPrice.toString() : numericPrice.toFixed(2),
    
    '{{amount_no_decimals}}': () => 
      Math.round(numericPrice).toString(),
    
    '{{amount_with_comma_separator}}': () => {
      const formatted = numericPrice % 1 === 0 ? 
        numericPrice.toString() : numericPrice.toFixed(2);
      return formatted.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    
    '{{amount_no_decimals_with_comma_separator}}': () => {
      const rounded = Math.round(numericPrice).toString();
      return rounded.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    
    '{{amount_with_apostrophe_separator}}': () => {
      const formatted = numericPrice % 1 === 0 ? 
        numericPrice.toString() : numericPrice.toFixed(2);
      return formatted.replace(/\B(?=(\d{3})+(?!\d))/g, "'");
    },
    
    '{{amount_no_decimals_with_space_separator}}': () => {
      const rounded = Math.round(numericPrice).toString();
      return rounded.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    },
    
    '{{amount_with_space_separator}}': () => {
      const formatted = numericPrice % 1 === 0 ? 
        numericPrice.toString() : numericPrice.toFixed(2);
      return formatted.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    },
    
    '{{amount_with_period_and_space_separator}}': () => {
      const formatted = numericPrice % 1 === 0 ? 
        numericPrice.toString() : numericPrice.toFixed(2);
      return formatted.replace(/\B(?=(\d{3})+(?!\d))/g, '. ');
    }
  };
  
  // Find which format is being used
  for (const [placeholder, formatter] of Object.entries(formatters)) {
    if (moneyFormat.includes(placeholder)) {
      return moneyFormat.replace(placeholder, formatter());
    }
  }
  
  // Fallback to original logic if no match found
  const formattedPrice = numericPrice % 1 === 0 ? 
    numericPrice.toString() : numericPrice.toFixed(2);

  return moneyFormat.replace('{{amount}}', formattedPrice);
};