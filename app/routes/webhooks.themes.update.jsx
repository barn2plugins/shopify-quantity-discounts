import { authenticate } from "../shopify.server";
import { fetchStoreDetails } from "../shopify.service";
import { updateStoreDetails } from "../services/store.service";
import { getStoreActiveThemeGid } from "../utils/utils";

export const action = async ({ request }) => {
  const { session, admin, topic } = await authenticate.webhook(request);

  try {
    // Fetch store details using GraphQL
    const storeData = await fetchStoreDetails(admin);
    const activeThemeGid = getStoreActiveThemeGid(storeData);

    // Update the active theme GID in the database
    await updateStoreDetails(session.id, { activeThemeGid });

    return null;
  } catch (error) {
    console.log(error);
  }
  
  return new Response();
};
