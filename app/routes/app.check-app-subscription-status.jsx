import { authenticate } from "../shopify.server";
import { PLANS } from "../utils/plans";
import { getStoreDetails } from "../services/store.service"
import { getDateRangeForWebhookOrderAnalytics } from "../utils/utils";
import { getStoreCurrentRevenue } from "../services/analytics.service";
import { getPlanRevenueLimitBySubscription } from "../services/subscription.service"
import { getMantleCustomer } from "../services/mantle.service";

export const action = async ({ request }) => {
  const { session } = await authenticate.admin(request);
  const formData = await request.formData();
  const fetcherData = Object.fromEntries(formData);

  if ( fetcherData?.action !== 'checkStoreActiveStatus' ) return;

  const { isPartnerDevelopment } = await getStoreDetails(session.id, { 
    isPartnerDevelopment: true
  });
  
  if (isPartnerDevelopment) {
    return { shouldLimitFeatures: false }
  }

  // Get the store details for this session
  const store = await getStoreDetails(session.id, {
    id: true,
    createdAt: true
  });

  const mantleCustomer = await getMantleCustomer({session});
  const subscription = mantleCustomer.subscription;

  const planRevenueLimitBySubscription = await getPlanRevenueLimitBySubscription({planName: subscription?.plan?.name});
    
  const dateRange = getDateRangeForWebhookOrderAnalytics({subscription: subscription, store});
  const storeCurrentRevenue = await getStoreCurrentRevenue({session, ...dateRange});

  if (!isPartnerDevelopment && storeCurrentRevenue?.success && (planRevenueLimitBySubscription !==0 && storeCurrentRevenue?.discountedMonthlyRevenue <= planRevenueLimitBySubscription)) {
    return { shouldLimitFeatures: false }
  }

  if (!isPartnerDevelopment && !subscription?.active) {
    return { shouldLimitFeatures: true }
  }

  return {
    shouldLimitFeatures: false
  }
};