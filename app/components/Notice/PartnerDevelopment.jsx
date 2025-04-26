import { useNavigate } from "@remix-run/react";

export default function PartnerDevelopment() {
  const navigate = useNavigate();

  const navigateToPlans = (e) => {
    e.preventDefault();
    navigate('/app/plans')
  }

  return (
    <div className="development-store-notice">
      <p>This app is free for development stores. When your store goes live, all premium features will be hidden until you <a href="" onClick={(e) => navigateToPlans(e)}>choose a Plan</a>.</p>
    </div>
  )
}