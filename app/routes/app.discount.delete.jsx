import { authenticate } from "../shopify.server";
import prisma from "../db.server";

export const action = async ({ request }) => {
    await authenticate.admin(request);
    const formData = await request.formData();
    const fetcherData = Object.fromEntries(formData);

    if (request.method !== "DELETE") {
        return null;
    }
    
    try {
        const deleteBundle = await prisma.discountBundle.delete({
            where: {
                id: parseInt(fetcherData.discountId),
            },
        });

        return { deleteBundle };
    } catch (error) {
        console.error(error);
    }

    return null;
};
