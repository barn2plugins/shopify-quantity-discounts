import { authenticate } from "../shopify.server";
import prisma from "../db.server";

export const action = async ({ request }) => {
    await authenticate.admin(request);
    const formData = await request.formData();
    const { bundleId } = Object.fromEntries(formData);

    try {
        const originalBundle = await prisma.discountBundle.findUnique({
            where: {
                id: parseInt(bundleId),
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
                sessionId: originalBundle.sessionId,
                previewEnabled: false,
            },
        });

        return { success: true, duplicateBundle };
    } catch (error) {
        console.error('Error duplicating bundle:', error);
        return { success: false, error: error.message };
    }
};