import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  const { session, billing } = await authenticate.admin(request);
  // Get the URL search params instead of formData
  const url = new URL(request.url);
  const billingName = url.searchParams.get('billingName') || 'Starter';

  await billing.require({
    plans: [billingName],
    onFailure: async () => billing.request({
      plan: billingName,
      returnUrl: `https://${session.shop}/admin/apps/barn2-bundles-bulk-dev/app/billing/charge`,
    }),
  });

  return null;
};
