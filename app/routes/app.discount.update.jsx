import { authenticate } from "../shopify.server";
import prisma from "../db.server";
import { activateShopifyVolumeDiscount, deactivateShopifyVolumeDiscount } from "../actions/discount.actions.js";

export const action = async ({ request }) => {
    const {admin} = await authenticate.admin(request);
    const formData = await request.formData();
    const fetcherData = Object.fromEntries(formData);
    

    if (request.method !== "PUT") {
        return null;
    }
        
    try {
        const discountStatus = fetcherData.active === 'true'
            ? await activateShopifyVolumeDiscount(admin, fetcherData.shopifyDiscountId)
            : await deactivateShopifyVolumeDiscount(admin, fetcherData.shopifyDiscountId);
            
        if (!discountStatus) {
            return null;
        }

        const updateBundle = await prisma.discountBundle.update({
            where: {
                id: parseInt(fetcherData.bundleId),
            },
            data: {
                active: fetcherData.active === 'true',
            }
        });

        return { updateBundle };
    } catch (error) {
        console.error(error);
    }

    return null;
};
