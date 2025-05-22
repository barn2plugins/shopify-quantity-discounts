import { authenticate } from "../shopify.server";
import prisma from "../db.server";
import { deleteShopifyVolumeDiscount } from "../services/discount.service";
import { getAllBundles } from "../services/bundle.service";
import { trackBundleDeleteEvent } from "../services/mixpanel.service";

export const action = async ({ request }) => {
  const { admin, session } = await authenticate.admin(request);
  const formData = await request.formData();
  const fetcherData = Object.fromEntries(formData);

  if (request.method !== "DELETE") {
    return null;
  }

  const bundleToDelete = JSON.parse(fetcherData?.bundle);
  const bundleId = parseInt(bundleToDelete?.id);
  const limit = parseInt(fetcherData?.limit);
  const page = parseInt(fetcherData?.page);

  try {
    await prisma.discountBundle.delete({
      where: {
        id: bundleId,
      },
    });

    // Get all remaining bundles ordered by priority
    const remainingBundles = await prisma.discountBundle.findMany({
      where: {
        store: {
          sessionId: session.id
        }
      },
      orderBy: {
        priority: 'asc'
      }
    });

    // Update priorities to be sequential starting from 1
    await prisma.$transaction(
      remainingBundles.map((bundle, index) =>
        prisma.discountBundle.update({
          where: { id: bundle.id },
          data: { priority: index + 1 }
        })
      )
    );

    // Retrieve the updated list of bundles after deletion
    const discountBundles = await getAllBundles(session.id, page, limit);

    // On bundle delete, track the event on Mixpanel
    trackBundleDeleteEvent({session, bundle: bundleToDelete});

    return {
      success: true,
      bundleDeleted: true,
      bundles: discountBundles.bundles,
      pagination: discountBundles.pagination
    };
  } catch (error) {
    console.error(error);
  }

  return null;
};
