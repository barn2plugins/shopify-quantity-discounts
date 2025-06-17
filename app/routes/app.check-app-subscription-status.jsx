import { authenticate } from "../shopify.server";
import { PLANS } from "../utils/plans";
import { getStoreDetails } from "../services/store.service"

export const action = async ({ request }) => {
  const { session, billing } = await authenticate.admin(request);
  const formData = await request.formData();
  const fetcherData = Object.fromEntries(formData);

  if ( fetcherData?.action !== 'checkStoreActiveStatus' ) return;

  const { isPartnerDevelopment } = await getStoreDetails(session.id, { 
    isPartnerDevelopment: true
  });
  
  if (isPartnerDevelopment) {
    return { shouldLimitFeatures: false }
  }

  const { hasActivePayment } = await billing.check({
    plans: [PLANS.Starter_Monthly, PLANS.Growth_Monthly, PLANS.Pro_Monthly],
  });

  if (!isPartnerDevelopment && !hasActivePayment) {
    return { shouldLimitFeatures: true }
  }

  return {
    shouldLimitFeatures: false
  }
};