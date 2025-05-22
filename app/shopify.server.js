import "@shopify/shopify-app-remix/adapters/node";
import {
  ApiVersion,
  AppDistribution,
  shopifyApp,
  BillingInterval
} from "@shopify/shopify-app-remix/server";
import Mixpanel from "mixpanel";
import { PrismaSessionStorage } from "@shopify/shopify-app-session-storage-prisma";
import prisma from "./db.server";
import { fetchStoreDetails, saveStoreDetails, createShopifyVolumeDiscount } from "./shopify.service";
import { getBarn2VolumeDiscountFunctionId } from "./utils/utils"
import { PLANS } from "./utils/plans"

const shopify = shopifyApp({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET || "",
  apiVersion: ApiVersion.October24,
  scopes: process.env.SCOPES?.split(","),
  appUrl: process.env.SHOPIFY_APP_URL || "",
  authPathPrefix: "/auth",
  sessionStorage: new PrismaSessionStorage(prisma),
  distribution: AppDistribution.AppStore,
  billing: {
    [PLANS.Starter_Monthly]: {
      amount: 12.99,
      currencyCode: 'USD',
      interval: BillingInterval.Every30Days,
    },
    [PLANS.Growth_Monthly]: {
      amount: 24.99,
      currencyCode: 'USD',
      interval: BillingInterval.Every30Days,
    },
    [PLANS.Pro_Monthly]: {
      amount: 49.99,
      currencyCode: 'USD',
      interval: BillingInterval.Every30Days,
    },
    [PLANS.Starter_Annual]: {
      amount: 119,
      currencyCode: 'USD',
      interval: BillingInterval.Annual,
    },
    [PLANS.Growth_Annual]: {
      amount: 239,
      currencyCode: 'USD',
      interval: BillingInterval.Annual,
    },
    [PLANS.Pro_Annual]: {
      amount: 479,
      currencyCode: 'USD',
      interval: BillingInterval.Annual,
    },
  },
  hooks: {
    afterAuth: async ({ session, admin }) => {
      const storeData = await fetchStoreDetails(admin);

      try {
        // Fetch store details using GraphQL
        const volumeDiscountFunctionId = getBarn2VolumeDiscountFunctionId(storeData);
        const shopifyAutomaticDiscountId = await createShopifyVolumeDiscount({admin, volumeDiscountFunctionId, storeData});

        // Save store details to the database
        await saveStoreDetails({sessionId: session.id, storeData, volumeDiscountFunctionId, shopifyAutomaticDiscountId});
      } catch (error) {
        console.error('Error fetching or saving store details:', error);
      }

      try {
        const mp = Mixpanel.init(process.env.MIXPANEL_TOKEN);
        // On first install, track the user on Mixpanel
        mp.people.set(session.shop, {
          '$name': storeData?.data?.shop?.shopOwnerName,
          '$email': storeData?.data?.shop?.email,
          'Timezon': storeData?.data?.shop?.ianaTimezone,
          'Development store': storeData?.data?.shop?.partnerDevelopment,
          'Money format': storeData?.data?.shop?.moneyFormat,
          'Currency code': storeData?.data?.shop?.currencyCode,
        });
        
        // Record first install event for the user
        mp.track('Installed', {
          distinct_id: session.shop,
          'Shop': session.shop,
          'Shop owner name': storeData?.data?.shop?.shopOwnerName,
          'Shop email': storeData?.data?.shop?.email,
          'Timezone': storeData?.data?.shop?.ianaTimezone,
          'Development store': storeData?.data?.shop?.partnerDevelopment ? 'Yes' : 'No',
          'Currency code': storeData?.data?.shop?.currencyCode,
          'Money format': storeData?.data?.shop?.moneyFormat,
          'Install date': new Date().toISOString(),
          'App version': process.env.APP_VERSION || '1.0.0',
        });
      } catch (error) {
        console.error('Error tracking user installed event on Mixpanel:', error);
      }
    },
  },
  future: {
    unstable_newEmbeddedAuthStrategy: true,
    removeRest: true,
  },
  ...(process.env.SHOP_CUSTOM_DOMAIN
    ? { customShopDomains: [process.env.SHOP_CUSTOM_DOMAIN] }
    : {}),
});

export default shopify;
export const apiVersion = ApiVersion.October24;
export const addDocumentResponseHeaders = shopify.addDocumentResponseHeaders;
export const authenticate = shopify.authenticate;
export const unauthenticated = shopify.unauthenticated;
export const login = shopify.login;
export const registerWebhooks = shopify.registerWebhooks;
export const sessionStorage = shopify.sessionStorage;
