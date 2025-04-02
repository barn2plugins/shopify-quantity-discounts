import { authenticate } from "../shopify.server";
import { BundleService } from "../services/bundle.service";

export const action = async ({ request }) => {
    const { session } = await authenticate.admin(request);
    const formData = await request.formData();
    const fetcherData = Object.fromEntries(formData);
    
    const bundleId = parseInt(fetcherData?.bundleId);
    const page = parseInt(fetcherData?.page);
    const limit = parseInt(fetcherData?.limit);

    try {
      await BundleService.duplicateBundle({sessionId: session.id, bundleId});

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