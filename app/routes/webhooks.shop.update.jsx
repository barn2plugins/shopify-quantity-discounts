import { authenticate } from "../shopify.server";
import { fetchStoreDetails, saveStoreDetails } from "../shopify.service";

export const action = async ({ request }) => {
  const { admin, session, topic } = await authenticate.webhook(request);

  if (topic !== 'SHOP_UPDATE') {
    return new Response();
  }

  try {
    // We will not depend on the payload data as it's not sufficient for us
    // Fetch store details using GraphQL
    const storeData = await fetchStoreDetails(admin);
    // Save store details to the database
    await saveStoreDetails( session.id, storeData );

    return new Response();
  } catch (error) {
    return new Response();
  }

};
