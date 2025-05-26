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
              <Text fontWeight="bold" as="span">Collections: </Text>
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
      id: 1,
      quantity: 1,
      discount: '',
      discount_type: 'percentage',
      description: 'Buy 1',
      label: '',
      highlighted: false,
    },
    {
      id: 2,
      quantity: 2,
      discount: '',
      discount_type: 'percentage',
      description: 'Buy 2 & save',
      label: '',
      highlighted: false,
    },
    {
      id: 3,
      quantity: 3,
      discount: '',
      discount_type: 'percentage',
      description: 'Buy 3 & save',
      label: 'Most popular',
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
 * Parses JSON strings in a discount bundle object into their corresponding JavaScript objects.
 * 
 * @param {Object} params - The parameters object
 * @param {Object} params.discountBundle - The discount bundle object to parse
 * @returns {Promise<Object>} The discount bundle object with parsed storeDisplay and customDesigns properties
 */
export const parseBundleObject = async ( {discountBundle} ) => {
  if (discountBundle.storeDisplay ) {
    discountBundle.storeDisplay = JSON.parse(discountBundle.storeDisplay);
  }
  if (discountBundle.customDesigns) {
    discountBundle.customDesigns = JSON.parse(discountBundle.customDesigns);
  }
  if (discountBundle.previewOptions) {
    discountBundle.previewOptions = JSON.parse(discountBundle.previewOptions);
  }
  
  return discountBundle;
}

/**
 * Checks if the Barn2 app embed block is disabled in the theme configuration
 * 
 * @param {string} themeConfig - The theme configuration JSON string containing block settings
 * @returns {boolean|null} Returns true if the app embed block is disabled, false if enabled, or null if not found
 */
export const isBarn2AppEmbedDisabled = (themeConfig) => {
  let isDisabled = null;
  
  try {
    const configJSON = parseThemeConfig(themeConfig); // TODO: Implement this helpe
    
    const barn2AppEmbed = "shopify://apps/barn2-bundles-bulk-discounts/blocks/barn2-bundles-app-embed";
    const barn2DevAppEmbed = "shopify://apps/barn2-bundles-bulk-dev/blocks/barn2-bundles-app-embed";
    
    let foundBlock = false;
    if (configJSON.current?.blocks) {
      Object.values(configJSON.current.blocks).forEach(block => {
        if (block.type.startsWith(barn2AppEmbed) || block.type.startsWith(barn2DevAppEmbed)) {
          isDisabled = block.disabled;
          foundBlock = true;
        }
      });
      
      if (!foundBlock) {
        isDisabled = true;
      }
    } else {
      isDisabled = true;
    }
    
  } catch (error) {

  }

  return isDisabled;
}

export const parseThemeConfig = (themeConfig) => {
  // Extract JSON part by removing the comment block
  const jsonStartIndex = themeConfig.indexOf('{');
  const jsonStr = themeConfig.slice(jsonStartIndex);
  return JSON.parse(jsonStr);
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
  return matches ? parseInt(matches[1], 10) : null;
};

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
    (func) => (func.app.title === 'Barn2 Bundles & Bulk Discounts' || func.app.title === 'Barn2 Bundles $ Bulk... (dev)') && func.apiType === 'product_discounts'
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

export const getThemeColorSchemes = async (data) => {
  const coonfigJSON = parseThemeConfig(data);

  // Function to recursively find scheme-related keys
  const findSchemeKeys = (obj, path = '') => {
    let results = [];
    
    for (const [key, value] of Object.entries(obj)) {
      const currentPath = path ? `${path}.${key}` : key;
      
      if (key.startsWith('scheme') || key === 'color_schemes') {
        results.push({ path: currentPath, value });
      }
      
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        results = results.concat(findSchemeKeys(value, currentPath));
      }
    }
    
    return results;
  };

  // Function to check if a string is a color code
  const isColorCode = (str) => {
    return typeof str === 'string' && (
      str.startsWith('#') || 
      str.startsWith('rgb') || 
      str.startsWith('rgba')
    );
  };

  // Function to recursively extract color values
  const extractColors = (data, path = '') => {
    let colors = {};

    if (typeof data === 'object' && data !== null) {
      if (Array.isArray(data)) {
        data.forEach((item, index) => {
          const childColors = extractColors(item, `${path}[${index}]`);
          colors = { ...colors, ...childColors };
        });
      } else {
        Object.entries(data).forEach(([key, value]) => {
          const currentPath = path ? `${path}.${key}` : key;
          if (isColorCode(value)) {
            colors[currentPath] = value;
          } else {
            const childColors = extractColors(value, currentPath);
            colors = { ...colors, ...childColors };
          }
        });
      }
    }

    return colors;
  };

  const schemeResults = findSchemeKeys(coonfigJSON);
  const colorSchemes = {};

  schemeResults.forEach(({ path, value }) => {
    const colors = extractColors(value, path);
    Object.assign(colorSchemes, colors);
  });

  return colorSchemes;
};


/**
 * Applies custom design styles to the document root element using CSS variables
 * 
 * @param {Object} bundleData - The bundle configuration object
 * @returns {void}
 */
export const setCustomDesignStyles = (bundleData) => {
  if (!bundleData.designOptions || bundleData.designOptions !== 'custom_design') return;
  const customDesigns = bundleData.customDesigns;
  
  document.documentElement.style.setProperty('--barn2-bundles-bundle-text-color', customDesigns.bundleTextColor);
  document.documentElement.style.setProperty('--barn2-bundles-highlighted-text-color', customDesigns.highlightedTextColor);
  document.documentElement.style.setProperty('--barn2-bundles-bundle-border-color', customDesigns.bundleBorderColor);
  document.documentElement.style.setProperty('--barn2-bundles-highlighted-border-color', customDesigns.highlightedBorderColor);
  document.documentElement.style.setProperty('--barn2-bundles-highlighted-color', customDesigns.highlightedColor);

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

export const editPageHasChanges = ({
  formState, 
  selectedProducts, 
  selectedCollections, 
  excludedProducts, 
  excludedCollections, 
  volumeBundles, 
  pricingTiers, 
  discountBundle
}) => {
  const changes = {
    formState: JSON.stringify(formState) !== JSON.stringify(discountBundle),
    products: JSON.stringify(selectedProducts) !== discountBundle.selectedProducts,
    collections: JSON.stringify(selectedCollections) !== discountBundle.selectedCollections,
    excludedProducts: JSON.stringify(excludedProducts) !== discountBundle.excludedProducts,
    excludedCollections: JSON.stringify(excludedCollections) !== discountBundle.excludedCollections,
    volumeBundles: JSON.stringify(volumeBundles) !== discountBundle.volumeBundles,
    pricingTiers: JSON.stringify(pricingTiers) !== discountBundle.pricingTiers
  };

  const hasChanges = Object.values(changes).some(changed => changed);
  return hasChanges;
}

export const getSpecificDates = (timezone) => {
  const now = new Date();
  const userDate = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
  const endDate = new Date(userDate);
  endDate.setDate(userDate.getDate() + 6);
  
  return {
    start: userDate,
    end: endDate
  };
}


// Convert HSB to Hex
export const hsbToHex = (hsb) => {
  const { hue, saturation, brightness } = hsb;
  let h = hue / 360;
  let s = saturation;
  let v = brightness;
  
  let r, g, b;
  
  let i = Math.floor(h * 6);
  let f = h * 6 - i;
  let p = v * (1 - s);
  let q = v * (1 - f * s);
  let t = v * (1 - (1 - f) * s);
  
  switch (i % 6) {
    case 0: r = v; g = t; b = p; break;
    case 1: r = q; g = v; b = p; break;
    case 2: r = p; g = v; b = t; break;
    case 3: r = p; g = q; b = v; break;
    case 4: r = t; g = p; b = v; break;
    case 5: r = v; g = p; b = q; break;
  }
  
  r = Math.round(r * 255);
  g = Math.round(g * 255);
  b = Math.round(b * 255);
  
  const toHex = (x) => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

// Convert Hex to HSB
export const hexToHsb = (hex) => {
  // Remove # if present
  hex = hex.replace('#', '');
  
  // Convert to RGB
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  
  let h = 0;
  let s = max === 0 ? 0 : delta / max;
  let v = max;
  
  if (delta !== 0) {
    if (max === r) {
      h = ((g - b) / delta) % 6;
    } else if (max === g) {
      h = (b - r) / delta + 2;
    } else {
      h = (r - g) / delta + 4;
    }
    
    h = Math.round(h * 60);
    if (h < 0) h += 360;
  }
  
  return {
    hue: h,
    saturation: s,
    brightness: v
  };
};

/**
 * Validates form data for discount bundle creation/editing
 */
export const validateDiscountForm = (formData) => {
  const errors = {};

  if (!formData.name) {
    errors.name = 'Name is required';
  }

  // Return null if no errors, otherwise return errors object
  return Object.keys(errors).length > 0 ? errors : null;
};