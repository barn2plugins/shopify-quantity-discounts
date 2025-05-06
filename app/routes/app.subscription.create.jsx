import { authenticate } from "../shopify.server";
import { shopifyCreateSubscription } from "../services/subscription.service";

export const action = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
  const formData = await request.formData();
  const fetcherData = Object.fromEntries(formData);

  const billingName = fetcherData?.billingName || 'Basic';

  const billingAmount = parseFloat(fetcherData?.billingAmount) || 10.00;

  const billingInterval = fetcherData?.billingInterval === 'monthly' ? 'EVERY_30_DAYS' : 'ANNUAL' || 'EVERY_30_DAYS';

  const returnUrl = fetcherData?.returnUrl;

  const trialDays = parseInt(process.env.SHOPIFY_SUBSCRIPTION_TRIAL_DAYS) || 14;

  const testPayment = process.env.SHOPIFY_SUBSCRIPTION_TEST === 'true' ? true : false;

  const subscription = await shopifyCreateSubscription({
    admin, 
    billingName, 
    billingAmount, 
    billingInterval, 
    returnUrl,
    trialDays,
    testPayment
  });

  return {
    subscription
  };
};