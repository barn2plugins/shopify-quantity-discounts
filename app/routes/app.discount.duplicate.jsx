import { authenticate } from "../shopify.server";
import { getStoreDetails } from "../services/store.service";
import { getBundleById, getAllBundles } from "../services/bundle.service";
import { 
  createDiscountBundle, 
} from '../models/Discount.server';
import { trackBundleDuplicateEvent } from "../services/mixpanel.service";

export const action = async ({ request }) => {
  const { admin, session } = await authenticate.admin(request);
  const formData = await request.formData();
  const fetcherData = Object.fromEntries(formData);
  
  const bundleId = parseInt(fetcherData?.bundleId);
  const page = parseInt(fetcherData?.page);
  const limit = parseInt(fetcherData?.limit);

  try {
    const store = await getStoreDetails(session.id, {
      id: true,
      volumeDiscountFunctionId: true,
    });

    const originalBundle = await getBundleById({storeId: store.id, bundleId});
    originalBundle.name = `${originalBundle.name} (Copy)`;
    originalBundle.active = false;
    
    const duplicatedBundle = await createDiscountBundle({storeId: store.id, data: originalBundle});

    // Get the updated list of bundles after duplication
    const discountBundles = await getAllBundles(session.id, page, limit);

    // On bundle duplicate, track the event on Mixpanel
    trackBundleDuplicateEvent({session, bundle: duplicatedBundle});

    return { 
        success: true,
        bundles: discountBundles.bundles, 
        pagination: discountBundles.pagination,
        duplicatedBundleId: duplicatedBundle.id,
    };
  } catch (error) {
    console.error('Error duplicating bundle:', error);
    return { success: false, error: error.message };
  }
};