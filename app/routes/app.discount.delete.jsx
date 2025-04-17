import { authenticate } from "../shopify.server";
import prisma from "../db.server";
import { deleteShopifyVolumeDiscount } from "../services/discount.service";
import { getAllBundles } from "../services/bundle.service";

export const action = async ({ request }) => {
    const {admin, session} = await authenticate.admin(request);
    const formData = await request.formData();
    const fetcherData = Object.fromEntries(formData);

    if (request.method !== "DELETE") {
        return null;
    }

    const bundleId = parseInt(fetcherData?.bundleId);
    const shopifyDiscountId = fetcherData?.shopifyDiscountId;
    const limit = parseInt(fetcherData?.limit);
    const page = parseInt(fetcherData?.page);

    try {
        await deleteShopifyVolumeDiscount(admin, shopifyDiscountId);
    
        await prisma.discountBundle.delete({
            where: {
                id: bundleId,
            },
        });

        // Retrieve the updated list of bundles after deletion
        const discountBundles = await getAllBundles(session.id, page, limit);

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
