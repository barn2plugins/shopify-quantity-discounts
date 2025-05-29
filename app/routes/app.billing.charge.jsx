import { authenticate } from "../shopify.server";
import { 
  getShopifyCurrentSubscription, 
  deactivatePreviousAppSubscriptions,
  recordAppSubscription,
} from "../services/subscription.service";
import { trackStoreSubscribedEvent } from "../services/mixpanel.service";

export const loader = async ({request}) => {
  const { admin, session, redirect } = await authenticate.admin(request);
  
  const url = new URL(request.url);
  const chargeId = url.searchParams.get('charge_id');

  if (!chargeId) {
    return redirect('/app');
  }
  
  try {
    const subscription = await getShopifyCurrentSubscription(admin.graphql);
    if ( !subscription.success ) {
      return redirect('/app/plans');
    }
    // Deactivate previous app subscriptions
    await deactivatePreviousAppSubscriptions({admin, session})

    // Record app new subscription
    await recordAppSubscription({subscriptions: subscription.subscriptions, session, chargeId});

    await trackStoreSubscribedEvent({subscriptions: subscription.subscriptions, session, chargeId});

    return redirect('/app');
  } catch (e) {
    return redirect('/app/plans');
  }
}