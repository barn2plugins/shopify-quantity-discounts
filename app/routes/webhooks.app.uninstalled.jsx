import { authenticate } from "../shopify.server";
import Mixpanel from "mixpanel";
import db from "../db.server";
import { getStoreDetails } from "../services/store.service.js";

export const action = async ({ request }) => {
  const { shop, session, topic } = await authenticate.webhook(request);

  console.log(`Received ${topic} webhook for ${shop}`);

  const store = await getStoreDetails(session.id, {
    id: true,
    currency: true,
    ianaTimezone: true,
    shopOwnerName: true,
    moneyFormat: true,
    isPartnerDevelopment: true,
  });

  // Record uninstall event for the user
  const mp = Mixpanel.init(process.env.MIXPANEL_TOKEN);
  mp.track('Uninstalled', {
    distinct_id: session.shop,
    'Shop': session.shop,
    'Shop owner name': store?.shopOwnerName,
    'Shop email': store?.email,
    'Timezone': store?.ianaTimezone,
    'Development store': store?.partnerDevelopment ? 'Yes' : 'No',
    'Currency code': store?.currencyCode,
    'Money format': store?.moneyFormat,
    'Uninstall date': new Date().toISOString(),
    'App version': process.env.APP_VERSION || '1.0.0',
  });

  // Webhook requests can trigger multiple times and after an app has already been uninstalled.
  // If this webhook already ran, the session may have been deleted previously.
  if (session) {
    await db.session.deleteMany({ where: { shop } });
  }

  return new Response();
};
