import { authenticate } from "../shopify.server";
import prisma from "../db.server";
import { trackBundleStatusUpdateEvent } from "../services/mixpanel.service";

export const action = async ({ request }) => {
  const { session } = await authenticate.admin(request);
  const formData = await request.formData();
  const fetcherData = Object.fromEntries(formData);
  
  if (request.method !== "POST") {
      return null;
  }

  const bundle = JSON.parse(fetcherData.bundle);

  try {
    const updateBundle = await prisma.discountBundle.update({
      where: {
        id: parseInt(bundle.id),
      },
      data: {
        active: fetcherData.active === 'true',
      }
    });

    const eventName = fetcherData.active === 'true' ? 'Bundle enabled' : 'Bundle disabled';

    await trackBundleStatusUpdateEvent({session, bundle, eventName});

    return { updateBundle };
  } catch (error) {
    console.error(error);
  }

  return null;
};
