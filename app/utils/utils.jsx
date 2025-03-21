import { Text, BlockStack } from "@shopify/polaris";

/**
 * Generates a formatted text display for bundle product selection rules.
 * 
 * @param {Object} bundle - The discount bundle object
 * @param {string} bundle.whichProducts - The product selection type ('all_products', 'all_products_except_selected', 'selected_products', 'selected_collections')
 * @param {string} bundle.selectedProducts - JSON string of selected products array
 * @param {string} bundle.selectedCollections - JSON string of selected collections array
 * @param {string} bundle.excludedProducts - JSON string of excluded products array
 * @param {string} bundle.excludedCollections - JSON string of excluded collections array
 * 
 * @returns {string|JSX.Element} A text string or JSX element describing the product selection rules
 */
export const getApplyToText = ({
  whichProducts,
  selectedProducts,
  selectedCollections,
  excludedProducts,
  excludedCollections
}) => {

  // Parse JSON strings into arrays
  const selectedProductsArray = JSON.parse(selectedProducts || '[]');
  const selectedCollectionsArray = JSON.parse(selectedCollections || '[]');
  const excludedProductsArray = JSON.parse(excludedProducts || '[]');
  const excludedCollectionsArray = JSON.parse(excludedCollections || '[]');

  switch (whichProducts) {
    case 'all_products':
      return 'All products';

    case 'all_products_except_selected':
      if (excludedProductsArray.length > 0 || excludedCollectionsArray.length > 0 ) {
        const excludedProductsName = excludedProductsArray.map(p => p.title);
        const excludedCollectionsName = excludedCollectionsArray.map(p => p.title);

        return (
          <BlockStack>
            <Text fontWeight="bold" as="span">All products except:</Text>
            { excludedProductsArray.length > 0 && <span>
              <Text fontWeight="bold" as="span">Products: </Text>
              {excludedProductsName.join(', ')}
            </span> }
            { excludedCollectionsArray.length > 0 && <span>
              <Text fontWeight="bold" as="span">Collections: </Text>
              {excludedCollectionsName.join(', ')}
            </span> }
          </BlockStack>
        );
      }
      return 'No products selected';
    case 'selected_products':
      if (selectedProductsArray.length > 0) {
        const productNames = selectedProductsArray.map(p => p.title);

        return (
          <span><Text fontWeight="bold" as="span">Products: </Text> {productNames.join(', ')}</span>
        );
      }
      return 'No products selected';
    case 'selected_collections':
      if (selectedCollectionsArray.length > 0 || excludedProductsArray.length > 0 ) {
        const selectedProductsName = selectedCollectionsArray.map(p => p.title);
        const excludedProductsName = excludedProductsArray.map(p => p.title);

        return (
          <BlockStack>
            <span>
              <Text fontWeight="bold" as="span">Selected collections: </Text>
              {selectedProductsName.join(', ')}
            </span>
            { excludedProductsArray.length > 0 && <span>
              <Text fontWeight="bold" as="span">Except products: </Text>
              {excludedProductsName.join(', ')}
            </span>}
          </BlockStack>
        );
      }
    default:
      return 'All products';
  }
};

/**
 * Converts a currency code to its corresponding symbol.
 * 
 * @param {string} code - The ISO 4217 currency code (e.g., 'USD', 'EUR', 'GBP')
 * @returns {string} The currency symbol (e.g., '$', '€', '£') or the original code if no symbol is found
 * 
 * @example
 * currencyCodeToSymbol('USD') // returns '$'
 * currencyCodeToSymbol('EUR') // returns '€'
 * currencyCodeToSymbol('ABC') // returns 'ABC'
 */
export const currencyCodeToSymbol = (code) => {
  switch (code) {
    case 'USD':
      return '$';
    case 'EUR':
      return '€';
    case 'GBP':
      return '£';
    case 'JPY':
      return '¥';
    case 'CNY':
      return '¥';
    case 'KRW':
      return '₩';
    case 'INR':
      return '₹';
    case 'RUB':
      return '₽';
    case 'BRL':
      return 'R$';
    case 'ZAR':
      return 'R';
    case 'AUD':
      return 'A$';
    case 'CAD':
      return 'C$';
    case 'NZD':
      return 'NZ$';
    case 'CHF':
      return 'Fr';
    case 'HKD':
      return 'HK$';
    case 'SGD':
      return 'S$';
    case 'SEK':
      return 'kr';
    case 'NOK':
      return 'kr';
    case 'DKK':
      return 'kr';
    case 'PLN':
      return 'zł';
    case 'THB':
      return '฿';
    case 'MXN':
      return 'Mex$';
    default:
      return code;
  }
}

/**
 * Returns an array of default bundle discount configurations.
 * 
 * @returns {Array<{
 *   quantity: number,
 *   discount: string,
 *   discount_type: 'percentage',
 *   description: string,
 *   label: string,
 *   highlighted: boolean
 * }>} An array of bundle discount objects with the following properties:
 * - quantity: The number of items required for this discount tier
 * - discount: The discount amount (empty string by default)
 * - discount_type: The type of discount (percentage by default)
 * - description: A descriptive text for the discount tier
 * - label: An optional label for the tier (empty string by default)
 * - highlighted: Whether this tier should be visually highlighted
 */
export const getDefaultBundleDiscountTypes = () => {
  return [
    {
      quantity: 1,
      discount: '',
      discount_type: 'percentage',
      description: 'Buy 1',
      label: '',
      highlighted: false,
    },
    {
      quantity: 2,
      discount: '',
      discount_type: 'percentage',
      description: 'Buy 2 & save',
      label: '',
      highlighted: false,
    },
    {
      quantity: 3,
      discount: '',
      discount_type: 'percentage',
      description: 'Buy 3 & save',
      label: '',
      highlighted: true,
    }
  ];
}

/**
 * Returns an array of default pricing tier configurations.
 * 
 * @returns {Array<{
 *   min_quantity: number,
 *   max_quantity: number,
 *   discount: string,
 *   discount_type: string
 * }>} An array of pricing tier objects with the following properties:
 * - min_quantity: The minimum quantity required for this pricing tier
 * - max_quantity: The maximum quantity for this pricing tier
 * - discount: The discount amount (empty string by default)
 * - discount_type: The discount type (either percentage or amount)
 */
export const getDefaultPricingTiers = () => {
  return [
    {
      min_quantity: 1,
      max_quantity: 10,
      discount: '',
      discount_type: 'percentage'
    },
    {
      min_quantity: 11,
      max_quantity: 21,
      discount: '',
      discount_type: 'percentage'
    },
    {
      min_quantity: 21,
      max_quantity: 31,
      discount: '',
      discount_type: 'percentage'
    },
  ];
}

/**
 * Converts a hex color string to RGBA object
 * @param {string} hex - The hex color string (e.g., '#ff0000')
 * @returns {Object|null} An object with r, g, b, a values or null if invalid
 */
export const hexToRgba = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
    a: 1
  } : null;
};

/**
 * Converts RGB values to HSB color space
 * @param {number} r - Red value (0-255)
 * @param {number} g - Green value (0-255)
 * @param {number} b - Blue value (0-255)
 * @returns {Object} An object with hue, saturation, and brightness values
 */
export const rgbaToHsb = (r, g, b) => {
  r /= 255;
  g /= 255;
  b /= 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  
  let h;
  const s = max === 0 ? 0 : d / max;
  const v = max;

  if (max === min) {
    h = 0;
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return {
    hue: Math.round(h * 360),
    saturation: s,
    brightness: v
  };
};

/**
 * Parses an RGBA color string into an object
 * @param {string} rgba - The RGBA color string (e.g., 'rgba(255, 0, 0, 1)')
 * @returns {Object|null} An object with r, g, b, a values or null if invalid
 */
export const parseRgba = (rgba) => {
  const match = rgba.match(/rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+)\s*)?\)/i);
  if (match) {
    return {
      r: parseInt(match[1]),
      g: parseInt(match[2]),
      b: parseInt(match[3]),
      a: match[4] ? parseFloat(match[4]) : 1
    };
  }
  return null;
};

/**
 * Converts HSB color values to RGBA
 * @param {number} h - Hue value (0-360)
 * @param {number} s - Saturation value (0-1)
 * @param {number} b - Brightness value (0-1)
 * @returns {Object} An object with r, g, b, a values
 */
export const hsbToRgba = (h, s, b) => {
  h = h / 360;
  let i = Math.floor(h * 6);
  let f = h * 6 - i;
  let p = b * (1 - s);
  let q = b * (1 - f * s);
  let t = b * (1 - (1 - f) * s);
  let r, g, b_;
  switch (i % 6) {
    case 0: r = b; g = t; b_ = p; break;
    case 1: r = q; g = b; b_ = p; break;
    case 2: r = p; g = b; b_ = t; break;
    case 3: r = p; g = q; b_ = b; break;
    case 4: r = t; g = p; b_ = b; break;
    case 5: r = b; g = p; b_ = q; break;
  }
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b_ * 255),
    a: 1
  };
};

/**
 * Converts RGBA values to hex color string
 * @param {Object} param0 - Object containing r, g, b, a values
 * @returns {string} Hex color string
 */
export const rgbaToHex = ({ r, g, b, a }) => {
  const toHex = (n) => {
    const hex = Math.round(n).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

/**
 * Parses JSON strings in a discount bundle object into their corresponding JavaScript objects.
 * 
 * @param {Object} params - The parameters object
 * @param {Object} params.discountBundle - The discount bundle object to parse
 * @param {string} params.discountBundle.storeDisplay - JSON string containing store display settings
 * @param {string} params.discountBundle.customDesigns - JSON string containing custom design settings
 * @returns {Promise<Object>} The discount bundle object with parsed storeDisplay and customDesigns properties
 */
export const parseBundleObject = async ( {discountBundle, currency, timezone} ) => {
  if (discountBundle.storeDisplay ) {
    discountBundle.storeDisplay = JSON.parse(discountBundle.storeDisplay);
  }
  if (discountBundle.customDesigns) {
    discountBundle.customDesigns = JSON.parse(discountBundle.customDesigns);
  }
  if (discountBundle.previewOptions) {
    discountBundle.previewOptions = JSON.parse(discountBundle.previewOptions);
  }

  discountBundle.currencyCode = discountBundle.currencyCode ? currency : '$';
  discountBundle.timezone = discountBundle.timezone? timezone : 'UTC';

  return discountBundle;
}

/**
 * Checks if the Barn2 app embed block is disabled in the theme configuration
 * 
 * @param {string} themeConfig - The theme configuration JSON string containing block settings
 * @returns {boolean|null} Returns true if the app embed block is disabled, false if enabled, or null if not found
 */
export const isBarn2AppEmbedDisabled = (themeConfig) => {
  // Extract JSON part by removing the comment block
  const jsonStartIndex = themeConfig.indexOf('{');
  const jsonStr = themeConfig.slice(jsonStartIndex);
  let isDisabled = null;

  try {
    const jsonData = JSON.parse(jsonStr);
    const barn2AppEmbed = "shopify://apps/barn2-bundles-bulk-discounts/blocks/barn2-bundles-app-embed";
    
    Object.values(jsonData.current.blocks).forEach(block => {
      if (block.type.startsWith(barn2AppEmbed)) {
        isDisabled = block.disabled;
      }
    });
    
  } catch (error) {

  }

  return isDisabled;
}

/**
 * Simplifies discount data by extracting only the IDs from product and collection arrays
 * 
 * @param {Array<Object>} discounts - Array of discount objects
 * @param {(Array<Object>|string)} discounts[].selectedProducts - Array of selected products or JSON string
 * @param {(Array<Object>|string)} discounts[].selectedCollections - Array of selected collections or JSON string
 * @param {(Array<Object>|string)} discounts[].excludedProducts - Array of excluded products or JSON string
 * @param {(Array<Object>|string)} discounts[].excludedCollections - Array of excluded collections or JSON string
 * @returns {Array<Object>} Array of discount objects with simplified arrays containing only IDs
 */
export const simplifyDiscountData = (discounts) => {
  return discounts.map(discount => ({
    ...discount,
    selectedProducts: Array.isArray(discount.selectedProducts) 
      ? discount.selectedProducts.map(item => item.id)
      : JSON.parse(discount.selectedProducts || '[]').map(item => item.id),
    selectedCollections: Array.isArray(discount.selectedCollections)
      ? discount.selectedCollections.map(item => item.id)
      : JSON.parse(discount.selectedCollections || '[]').map(item => item.id),
    excludedProducts: Array.isArray(discount.excludedProducts)
      ? discount.excludedProducts.map(item => item.id)
      : JSON.parse(discount.excludedProducts || '[]').map(item => item.id),
    excludedCollections: Array.isArray(discount.excludedCollections)
      ? discount.excludedCollections.map(item => item.id)
      : JSON.parse(discount.excludedCollections || '[]').map(item => item.id)
  }));
}

/**
 * Extracts the last segment of a URL or path string after the last forward slash
 * 
 * @param {string} object - The URL or path string to parse
 * @returns {string|null} The extracted ID or null if no match is found
 */
export const parseObjectId = (object) => {
  const matches = object.match(/\/([^\/]+)$/);
  return matches ? matches[1] : null;
}

/**
 * Retrieves the ID of the Barn2 volume discount function from Shopify store data
 * 
 * @param {Object} storedata - The Shopify store data object
 * @param {Object} storedata.data - The data object containing Shopify functions
 * @param {Object} storedata.data.shopifyFunctions - The functions object containing nodes array
 * @param {Array} storedata.data.shopifyFunctions.nodes - Array of function objects with app and apiType properties
 * @returns {string|null} The ID of the Barn2 volume discount function or null if not found
 */
export const getBarn2VolumeDiscountFunctionId = (storedata) => {
  const shopifyFunctions = storedata.data.shopifyFunctions.nodes;
  const barn2VolumeDiscountFunction = shopifyFunctions.find(
    (func) => func.app.title === 'Barn2 Bundles & Bulk Discounts' && func.apiType === 'product_discounts'
  );
  return barn2VolumeDiscountFunction ? barn2VolumeDiscountFunction.id : null;
};

/**
 * Retrieves the ID of the active (main) theme from Shopify store data
 * 
 * @param {Object} storedata - The Shopify store data object
 * @param {Object} storedata.data - The data object containing themes information
 * @param {Object} storedata.data.themes - The themes object containing edges array
 * @param {Array} storedata.data.themes.edges - Array of theme objects with node property
 * @returns {string|null} The ID of the active theme or null if not found
 * 
 */ 
export const getStoreActiveThemeGid = (storedata) => {
  const themes = storedata.data.themes.edges;
  const activeTheme = themes.find((theme) => theme.node.role === 'MAIN');
  return activeTheme ? activeTheme.node.id : null;
}