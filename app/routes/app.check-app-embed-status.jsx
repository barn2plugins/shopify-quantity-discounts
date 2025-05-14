import { authenticate } from "../shopify.server"

import { getStoreDetails, isAppEmbedDisabled } from "../services/store.service.js";

export const action = async ({ request }) => {
  const { admin, session } = await authenticate.admin(request);

  const store = await getStoreDetails(session.id, { id: true, activeThemeGid: true });
  const appEmbedDisabled = store ? await isAppEmbedDisabled({admin, store}) : true;

  console.log('checking appEmbedDisabled');
  console.log(appEmbedDisabled);
  return { appEmbedDisabled };
}