import prisma from "./db.server"; // Your Prisma instance

// Fetch store details
export const fetchStoreDetails = async (admin) => {
  try {
    const query = `#graphql
      query {
        shop {
            id
            name
            email
            shopOwnerName
            currencyCode
            timezoneAbbreviation
            url
            plan {
                displayName
                partnerDevelopment
                shopifyPlus
            }
            currencyFormats {
                moneyFormat
                moneyInEmailsFormat
                moneyWithCurrencyFormat
                moneyWithCurrencyInEmailsFormat
            }
            checkoutApiSupported
        }
        shopifyFunctions(first: 25) {
          nodes {
            app {
              title
            }
            apiType
            title
            id
          }
        }
        themes(first: 25) {
          edges {
            node {
              name
              id
              role
            }
          }
        }
      }
    `;
    
    const response = await admin.graphql(query);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
  }
};

// Save store details to the database
export const saveStoreDetails = async (id, storedata) => {
  try {
    const shop = storedata.data.shop;
    const volumeDiscountFunctionId = getBarn2VolumeDiscountFunctionId(storedata);
    const getActiveThemeGid = getStoreActiveThemeGid(storedata);

    await prisma.session.update({
      where: { 
        id: id 
      },
      data: {
        userId: shop.id,
        storeName: shop.name,
        email: shop.email,
        shopOwnerName: shop.shopOwnerName,
        url: shop.url,
        currency: shop.currencyCode,
        timezone: shop.timezoneAbbreviation,
        planDisplayName: shop.plan.displayName,
        isPartnerDevelopment: shop.plan.partnerDevelopment,
        isShopifyPlus: shop.plan.shopifyPlus,
        moneyFormat: shop.currencyFormats.moneyFormat,
        moneyInEmailsFormat: shop.currencyFormats.moneyInEmailsFormat,
        moneyWithCurrencyFormat: shop.currencyFormats.moneyWithCurrencyFormat,
        moneyWithCurrencyInEmailsFormat: shop.currencyFormats.moneyWithCurrencyInEmailsFormat,
        checkoutApiSupported: shop.checkoutApiSupported,
        volumeDiscountFunctionId,
        activeThemeGid: getActiveThemeGid
      },
    });
  } catch (error) {
  }
};

const getBarn2VolumeDiscountFunctionId = (storedata) => {
  const shopifyFunctions = storedata.data.shopifyFunctions.nodes;
  const barn2VolumeDiscountFunction = shopifyFunctions.find(
    (func) => func.app.title === 'Barn2 Bundles & Bulk Discounts' && func.apiType === 'product_discounts'
  );
  return barn2VolumeDiscountFunction ? barn2VolumeDiscountFunction.id : null;
};

const getStoreActiveThemeGid = (storedata) => {
  const themes = storedata.data.themes.edges;
  const activeTheme = themes.find((theme) => theme.node.role === 'MAIN');
  return activeTheme ? activeTheme.node.id : null;
}