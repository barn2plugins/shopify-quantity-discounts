import { useNavigate } from "@remix-run/react";

export default function UpgradeNotice() {
  const navigate = useNavigate();

  const navigateToPlans = (e) => {
    e.preventDefault();
    navigate('/app/plans')
  }

  return (
    <div className="development-store-notice upgrade-notice">
      <p>
        You're currently on our development plan, which is free while building your store. Now that your site is live, discounts will no longer appear on the front end. Please <a href="" onClick={(e) => navigateToPlans(e)}>upgrade to a paid plan</a> - all include a 14-day free trial
      </p>
    </div>
  )
}