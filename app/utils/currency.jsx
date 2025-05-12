const staticCurrencyExchangeRates = () => {
  return [
    {
      code: "EUR",
      name: "Euro",
      rate: 0.92, // 1 USD = 0.92 EUR
      symbol: "€"
    },
    {
      code: "JPY",
      name: "Japanese Yen",
      rate: 154.78,
      symbol: "¥"
    },
    {
      code: "GBP",
      name: "British Pound Sterling",
      rate: 0.79,
      symbol: "£"
    },
    {
      code: "CAD",
      name: "Canadian Dollar",
      rate: 1.36,
      symbol: "CA$"
    },
    {
      code: "AUD",
      name: "Australian Dollar",
      rate: 1.51,
      symbol: "A$"
    },
    {
      code: "CHF",
      name: "Swiss Franc",
      rate: 0.90,
      symbol: "CHF"
    },
    {
      code: "CNY",
      name: "Chinese Yuan",
      rate: 7.23,
      symbol: "¥"
    },
    {
      code: "HKD",
      name: "Hong Kong Dollar",
      rate: 7.81,
      symbol: "HK$"
    },
    {
      code: "NZD",
      name: "New Zealand Dollar",
      rate: 1.64,
      symbol: "NZ$"
    },
    {
      code: "SEK",
      name: "Swedish Krona",
      rate: 10.55,
      symbol: "kr"
    },
    {
      code: "KRW",
      name: "South Korean Won",
      rate: 1364.79,
      symbol: "₩"
    },
    {
      code: "SGD",
      name: "Singapore Dollar",
      rate: 1.35,
      symbol: "S$"
    },
    {
      code: "NOK",
      name: "Norwegian Krone",
      rate: 10.84,
      symbol: "kr"
    },
    {
      code: "MXN",
      name: "Mexican Peso",
      rate: 16.82,
      symbol: "Mex$"
    },
    {
      code: "INR",
      name: "Indian Rupee",
      rate: 83.50,
      symbol: "₹"
    },
    {
      code: "BRL",
      name: "Brazilian Real",
      rate: 5.15,
      symbol: "R$"
    },
    {
      code: "RUB",
      name: "Russian Ruble",
      rate: 92.87,
      symbol: "₽"
    },
    {
      code: "ZAR",
      name: "South African Rand",
      rate: 18.35,
      symbol: "R"
    },
    {
      code: "TRY",
      name: "Turkish Lira",
      rate: 32.13,
      symbol: "₺"
    },
    {
      code: "PLN",
      name: "Polish Złoty",
      rate: 3.97,
      symbol: "zł"
    },
    {
      code: "AED",
      name: "United Arab Emirates Dirham",
      rate: 3.67,
      symbol: "د.إ",
    },
    {
      code: "SAR",
      name: "Saudi Riyal",
      rate: 3.75,
      symbol: "﷼",
    },
    {
      code: "QAR",
      name: "Qatari Riyal",
      rate: 3.64,
      symbol: "ر.ق",
    },
    {
      code: "OMR",
      name: "Omani Rial",
      rate: 0.385,
      symbol: "ر.ع.",
    },
    {
      code: "BHD",
      name: "Bahraini Dinar",
      rate: 0.376,
      symbol: ".د.ب",
    },
    {
      code: "KWD",
      name: "Kuwaiti Dinar",
      rate: 0.307,
      symbol: "د.ك",
    },
    {
      code: "JOD",
      name: "Jordanian Dinar",
      rate: 0.709,
      symbol: "د.ا",
    },
    {
      code: "ILS",
      name: "Israeli New Shekel",
      rate: 3.72,
      symbol: "₪",
    },
    {
      code: "LBP",
      name: "Lebanese Pound",
      rate: 89875.0,
      symbol: "ل.ل",
    },
    {
      code: "EGP",
      name: "Egyptian Pound",
      rate: 48.52,
      symbol: "ج.م",
    },
    {
      code: "IQD",
      name: "Iraqi Dinar",
      rate: 1310.0,
      symbol: "ع.د",
    },
    {
      code: "IRR",
      name: "Iranian Rial",
      rate: 42000.0,
      symbol: "﷼",
    },
    {
      code: "SYP",
      name: "Syrian Pound",
      rate: 13000.0,
      symbol: "£S",
    },
    {
      code: "YER",
      name: "Yemeni Rial",
      rate: 750.0,
      symbol: "﷼",
    },
    {
      code: "TRY",
      name: "Turkish Lira",
      rate: 32.13,
      symbol: "₺",
    }
  ];
}

/**
 * Converts a USD amount to the equivalent value in the shop's local currency
 * using static exchange rates.
 */
export function convertUSDValuetoShopLocalCurrency(amount, shopCurrency) {
  const listOfCurrencies = staticCurrencyExchangeRates();
  const currency = listOfCurrencies.find(curr => curr.code === shopCurrency);
  
  // Return original amount if currency not found
  if (!currency) {
    return amount;
  }
  
  return amount * currency.rate;
}