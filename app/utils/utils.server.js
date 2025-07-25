export function customerPlanOnMantle(mantleCustomer) {
  if (!mantleCustomer?.subscription) {
    return { 
      planName: "Starter (Free)",
      status: "Active"
    };
  }

  const subscription = mantleCustomer.subscription;
  const planName = subscription.plan?.name;

  if (!planName) {
    return { 
      planName: "Starter (Free)",
      status: "Active"
    };
  }

  const now = new Date();
  const trialExpiresAt = subscription.trialExpiresAt ? new Date(subscription.trialExpiresAt) : null;
  const canceledAt = subscription.canceledAt ? new Date(subscription.canceledAt) : null;
  
  const isOnTrial = trialExpiresAt && now < trialExpiresAt;
  
  if (canceledAt) {
    return { 
      status: "Cancelled",
      planName: planName,
      cancelledOn: canceledAt
    };
  }
  
  if (isOnTrial) {
    return { 
      status: "On trial",
      planName: planName,
      trialEndsAt: trialExpiresAt
    };
  }
  
  return { 
    status: "Active",
    planName: planName
  };
}