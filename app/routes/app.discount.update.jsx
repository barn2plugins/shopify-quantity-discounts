import { authenticate } from "../shopify.server";
import prisma from "../db.server";
import { activateShopifyVolumeDiscount, deactivateShopifyVolumeDiscount } from "../services/discount.service.js";

export const action = async ({ request }) => {
    const {admin} = await authenticate.admin(request);
    const formData = await request.formData();
    const fetcherData = Object.fromEntries(formData);
    

    if (request.method !== "POST") {
        return null;
    }
        
    try {
        const discountStatus = fetcherData.active === 'true'
            ? await activateShopifyVolumeDiscount({admin, shopifyDiscountId: fetcherData.shopifyDiscountId})
            : await deactivateShopifyVolumeDiscount({admin, shopifyDiscountId: fetcherData.shopifyDiscountId});
            
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
