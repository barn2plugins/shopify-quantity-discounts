import { authenticate } from "../shopify.server";
import { setOrUpdateOption } from "../services/options.service";

export const action = async ({ request }) => {
  const { session } = await authenticate.admin(request);

  try {
    const formData = await request.formData();
    const { key, value } = Object.fromEntries(formData);
    const option = await setOrUpdateOption({sessionId: session.id, key, value});
  } catch(errors) {
  }

  return null;
}