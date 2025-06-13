import prisma from "../db.server"
import { MantleClient } from "@heymantle/client"

export const identifyCustomerOnMantle = async ({platformId, session}) => {
  try {
    const mantleClient = new MantleClient({
      appId: process.env.MANTLE_APP_ID,
      apiKey: process.env.MANTLE_APP_API_KEY,
    });

    const identifyResponse = await mantleClient.identify({
      platform: "shopify",
      platformId,
      myshopifyDomain: session.shop,
      accessToken: session.accessToken,
    });

    const mantleApiToken = identifyResponse?.apiToken;

    if (!mantleApiToken) {
      return null;
    }

    await prisma.session.update({
      where: { id: session.id },
      data: { mantleApiToken },
    });

  } catch (error) {
    console.error(error);
    return null;
  }
}

export const getMantleApiToken = async (session) => {
  try {
    const { mantleApiToken } = await prisma.session.findUnique({
      where: { id: session.id },
    });
    return mantleApiToken;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const sendUsageEventToMantle = async ({session, eventName, properties}) => {
  try {
    const customerApiToken = await getMantleApiToken(session);

    const mantleClient = new MantleClient({
      appId: process.env.MANTLE_APP_ID,
      customerApiToken: customerApiToken
    });
    
    // Send a single event
    await mantleClient.sendUsageEvent({
      eventName,
      properties
    });
  } catch (error) {
    console.error(error);
  }
}

export const getMantleClient = async ({session}) => {
  try {
    const customerApiToken = await getMantleApiToken(session);

    // Initialize with customer token for customer-specific operations
    const mantleClient = new MantleClient({
      appId: process.env.MANTLE_APP_ID,
      customerApiToken: customerApiToken,
    });

    const customer = await mantleClient.getCustomer();

    return customer;
  } catch (error) {
    console.log(error);
  }
}