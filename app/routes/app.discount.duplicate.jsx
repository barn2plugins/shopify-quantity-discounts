import { authenticate } from "../shopify.server";
import { StoreService } from "../services/store.service";
import { BundleService } from "../services/bundle.service";
import { DiscountService } from "../services/discount.service";
import { 
  createDiscountBundle, 
} from '../models/Discount.server';

export const action = async ({ request }) => {
  const { admin, session } = await authenticate.admin(request);
  const formData = await request.formData();
  const fetcherData = Object.fromEntries(formData);
  
  const bundleId = parseInt(fetcherData?.bundleId);
  const page = parseInt(fetcherData?.page);
  const limit = parseInt(fetcherData?.limit);

  try {
    const store = await StoreService.getStoreDetails(session.id, {
      id: true,
      volumeDiscountFunctionId: true,
    });

    const originalBundle = await BundleService.getBundleById({storeId: store.id, bundleId});
    originalBundle.name = `${originalBundle.name} (Copy)`;
    originalBundle.active = false;
    
    const shopifyDiscountGID = await DiscountService.createShopifyVolumeDiscount({
      admin, 
      fetcherData: originalBundle, 
      discountFunctionId: store.volumeDiscountFunctionId
    });

    if (!shopifyDiscountGID) {
      return {
        success: false,
        error: 'Failed to duplicate discount',
        displayError: 'Failed to duplicate discount'
      }
    }

    const duplicatedBundle = await createDiscountBundle({storeId: store.id, shopifyDiscountGID, data: originalBundle});
    await DiscountService.deactivateShopifyVolumeDiscount({admin, shopifyDiscountId: shopifyDiscountGID});
    const discountBundles = await BundleService.getAllBundles(session.id, page, limit);

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