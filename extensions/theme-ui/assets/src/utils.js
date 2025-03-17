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