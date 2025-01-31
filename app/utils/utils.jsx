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
      description: '',
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