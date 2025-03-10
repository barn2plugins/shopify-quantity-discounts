import { authenticate } from "../shopify.server";
import prisma from "../db.server";
import { deleteShopifyVolumeDiscount } from "../actions/discount.actions.js";

export const action = async ({ request }) => {
    const {admin} = await authenticate.admin(request);
    const formData = await request.formData();
    const fetcherData = Object.fromEntries(formData);

    if (request.method !== "DELETE") {
        return null;
    }

    try {
        const isDeleted = await deleteShopifyVolumeDiscount(admin, fetcherData.shopifyDiscountId);
        if (!isDeleted) {
            return null;
        }
    
        const deleteBundle = await prisma.discountBundle.delete({
            where: {
                id: parseInt(fetcherData.id),
            },
        });

        return { deleteBundle };
    } catch (error) {
        console.error(error);
    }

    return null;
};
