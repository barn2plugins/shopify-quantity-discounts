import { json } from "@remix-run/node";
import { authenticate } from "../shopify.server";
import prisma from "../db.server";

export const action = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
  const formData = await request.formData();
  const priorities = JSON.parse(formData.get("priorities"));

  try {
    // Update all bundles in a transaction
    await prisma.$transaction(
      priorities.map(({ id, priority }) =>
        prisma.discountBundle.update({
          where: { id },
          data: { priority }
        })
      )
    );

    return json({ success: true });
  } catch (error) {
    console.error("Failed to update bundle priorities:", error);
    return json({ success: false, error: "Failed to update priorities" }, { status: 500 });
  }
};