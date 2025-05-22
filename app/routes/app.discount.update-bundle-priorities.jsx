import { json } from "@remix-run/node";
import { authenticate } from "../shopify.server";
import prisma from "../db.server";
import { trackBundlePrioritiesEvent } from "../services/mixpanel.service";

export const action = async ({ request }) => {
  const { session } = await authenticate.admin(request);
  const formData = await request.formData();
  const priorities = JSON.parse(formData.get("priorities"));
  const totalBundles = JSON.parse(formData.get("totalBundles"));

  try {
    // Update all bundles in a single transaction
    await prisma.$transaction(
      priorities.map(({ id, priority }) =>
        prisma.discountBundle.update({
          where: { id },
          data: { priority }
        })
      )
    );

    // On bundle delete, track the event on Mixpanel
    trackBundlePrioritiesEvent({session, totalBundles});

    return json({ success: true });
  } catch (error) {
    console.error("Failed to update bundle priorities:", error);
    return json({ success: false, error: "Failed to update priorities" }, { status: 500 });
  }
};