import prisma from "./db.server"; // Your Prisma instance
import { getStoreActiveThemeGid } from "./utils/utils"

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
            ianaTimezone
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
export const saveStoreDetails = async ({sessionId, storeData, volumeDiscountFunctionId, shopifyAutomaticDiscountId}) => {
  try {
    const shop = storeData.data.shop;
    const getActiveThemeGid = getStoreActiveThemeGid(storeData);

    await prisma.session.update({
      where: { 
        id: sessionId 
      },
      data: {
        userId: shop.id,
        email: shop.email,
        store: {
          create: {
            storeName: shop.name,
            url: shop.url,
            shopOwnerName: shop.shopOwnerName,
            currency: shop.currencyCode,
            ianaTimezone: shop.ianaTimezone,
            planDisplayName: shop.plan.displayName,
            isPartnerDevelopment: shop.plan.partnerDevelopment,
            isShopifyPlus: shop.plan.shopifyPlus,
            activeThemeGid: getActiveThemeGid,
            volumeDiscountFunctionId,
            shopifyAutomaticDiscountId,
            moneyFormat: shop.currencyFormats.moneyFormat,
            moneyInEmailsFormat: shop.currencyFormats.moneyInEmailsFormat,
            moneyWithCurrencyFormat: shop.currencyFormats.moneyWithCurrencyFormat,
            moneyWithCurrencyInEmailsFormat: shop.currencyFormats.moneyWithCurrencyInEmailsFormat,
            checkoutApiSupported: shop.checkoutApiSupported,
          }
        }
      },
    });
  } catch (error) {
  }
};

/**
 * Creates a Shopify automatic discount for the store
 */
export async function createShopifyVolumeDiscount({admin, volumeDiscountFunctionId, storeData}) {
  // Get store timezone
  const storeTimezone = storeData.data.shop.ianaTimezone;
  // Create today's date in store's timezone
  const today = new Date().toLocaleString('en-US', { timeZone: storeTimezone });
  const startsAt = new Date(today);

  const response = await admin.graphql(
    `#graphql
    mutation discountAutomaticAppCreate($automaticAppDiscount: DiscountAutomaticAppInput!) {
      discountAutomaticAppCreate(automaticAppDiscount: $automaticAppDiscount) {
        userErrors {
          field
          message
        }
        automaticAppDiscount {
          discountId
          title
          startsAt
          endsAt
          status
          appDiscountType {
            appKey
            functionId
          }
          combinesWith {
            orderDiscounts
            productDiscounts
            shippingDiscounts
          }
        }
      }
    }`,
    {
      variables: {
        automaticAppDiscount: {
          title: `Barn2 Bundles & Bulk Discounts`,
          functionId: volumeDiscountFunctionId,
          startsAt: startsAt,
          endsAt: null,
          combinesWith: {
            orderDiscounts: true,
            productDiscounts: true,
            shippingDiscounts: false
          },
          metafields: [
            {
              namespace: "$app:barn2-bundles-bulk-discount",
              key: "function-configuration",
              type: "json",
              value: '[]'
            }
          ]
        }
      }
    }
  );
  const responseJson = await response.json();

  if (responseJson.data.discountAutomaticAppCreate.userErrors.length > 0) {
    return false;
  }

  const discountId = responseJson.data.discountAutomaticAppCreate.automaticAppDiscount.discountId;

  return discountId;
}