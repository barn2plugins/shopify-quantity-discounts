import "@shopify/shopify-app-remix/adapters/node";
import {
  ApiVersion,
  AppDistribution,
  shopifyApp,
  BillingInterval
} from "@shopify/shopify-app-remix/server";
import { PrismaSessionStorage } from "@shopify/shopify-app-session-storage-prisma";
import prisma from "./db.server";
import { fetchStoreDetails, saveStoreDetails, createShopifyVolumeDiscount } from "./shopify.service";
import { setUserOnMixpanel, trackInstalledEvent } from "./services/mixpanel.service";
import { getBarn2VolumeDiscountFunctionId } from "./utils/utils"
import { PLANS } from "./utils/plans"
import { identifyCustomerOnMantle } from "./services/mantle.service";

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
      trialDays: 14,
      usageTerms: "Additional charges apply for revenue over $1,000/month",
      usageCappedAmount: {
        amount: 37,
        currencyCode: "USD"
      }
    },
    [PLANS.Growth_Monthly]: {
      amount: 24.99,
      currencyCode: 'USD',
      interval: BillingInterval.Every30Days,
      trialDays: 14,
      usageTerms: "Additional charges apply for revenue over $5,000/month",
      usageCappedAmount: {
        amount: 25,
        currencyCode: "USD"
      }
    },
    [PLANS.Pro_Monthly]: {
      amount: 49.99,
      currencyCode: 'USD',
      interval: BillingInterval.Every30Days,
      trialDays: 14
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
        setUserOnMixpanel({session, storeData});
        
        // Record first install event for the user
        trackInstalledEvent({session, storeData});

      } catch (error) {
        console.error('Error tracking user installed event on Mixpanel:', error);
      }

      await identifyCustomerOnMantle({platformId: storeData.data.shop.id, session});
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
