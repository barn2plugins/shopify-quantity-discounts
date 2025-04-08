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
  document.documentElement.style.setProperty('--barn2-bundles-bundle-badge-color', customDesigns.bundleBadgeColor);
  document.documentElement.style.setProperty('--barn2-bundles-badge-text-color', customDesigns.badgeTextColor);
  document.documentElement.style.setProperty('--barn2-bundles-highlighted-color', customDesigns.highlightedColor);

  document.documentElement.style.setProperty('--barn2-bundles-table-color', customDesigns.tableColor);
  document.documentElement.style.setProperty('--barn2-bundles-header-text-color', customDesigns.headerTextColor);
  document.documentElement.style.setProperty('--barn2-bundles-background-color', customDesigns.backgroundColor);
  document.documentElement.style.setProperty('--barn2-bundles-text-color', customDesigns.textColor);
  document.documentElement.style.setProperty('--barn2-bundles-label-color', customDesigns.labelColor);
  document.documentElement.style.setProperty('--barn2-bundles-label-text-color', customDesigns.lebelTextColor);
  document.documentElement.style.setProperty('--barn2-bundles-cart-notice-bg-color', customDesigns.cartNoticeBackgroundColor);
  document.documentElement.style.setProperty('--barn2-bundles-cart-notice-text-color', customDesigns.cartNoticeTextColor);
  document.documentElement.style.setProperty('--barn2-bundles-badge-color', customDesigns.badgeColor);
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