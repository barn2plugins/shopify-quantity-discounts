import { authenticate } from "../shopify.server";
import prisma from "../db.server";
import { BundleService } from "../services/bundle.service";

export const action = async ({ request }) => {
    const { session } = await authenticate.admin(request);
    const formData = await request.formData();
    const fetcherData = Object.fromEntries(formData);
    
    const bundleId = parseInt(fetcherData?.bundleId);
    const page = parseInt(fetcherData?.page);
    const limit = parseInt(fetcherData?.limit);

    try {
        const originalBundle = await prisma.discountBundle.findUnique({
            where: {
                id: bundleId,
            },
        });

        if (!originalBundle) {
            return { error: "Bundle not found" };
        }

        const duplicateBundle = await prisma.discountBundle.create({
            data: {
                name: `${originalBundle.name} (Copy)`,
                type: originalBundle.type,
                whichProducts: originalBundle.whichProducts,
                selectedProducts: originalBundle.selectedProducts,
                selectedCollections: originalBundle.selectedCollections,
                excludedProducts: originalBundle.excludedProducts,
                excludedCollections: originalBundle.excludedCollections,
                priority: originalBundle.priority,
                active: false,
                storeId: originalBundle.storeId,
                shopifyDiscountId: originalBundle.shopifyDiscountId,
                previewEnabled: false,
                volumeBundles: originalBundle.volumeBundles,
                pricingTiers: originalBundle.pricingTiers,
                discountCalculation: originalBundle.discountCalculation,
                activeDates: originalBundle.activeDates,
                specificDates: originalBundle.specificDates,
                storeDisplay: originalBundle.storeDisplay,
                designOptions: originalBundle.designOptions,
                customDesigns: originalBundle.customDesigns,
            },
        });

        const discountBundles = await BundleService.getAllBundles(session.id, page, limit);

        return { 
            success: true,
            bundles: discountBundles.bundles, 
            pagination: discountBundles.pagination
        };
    } catch (error) {
        console.error('Error duplicating bundle:', error);
        return { success: false, error: error.message };
    }
};