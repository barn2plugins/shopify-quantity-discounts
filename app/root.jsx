import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "@remix-run/react";
import { useEffect } from 'react';
import { MantleClient } from "@heymantle/client"
import { getMantleCustomer } from "./services/mantle.service.js"

// Internal components and libraries
import PartnerDevelopment from "./components/Notice/PartnerDevelopment";
import UpgradeNotice from "./components/Notice/UpgradeNotice";
import Credits from "./components/Footer/Credits.jsx";
import { PLANS } from "./utils/plans"
import { authenticate } from "./shopify.server";
import { getStoreDetails } from "./services/store.service.js";
import { useHelpScoutBeacon } from "./hooks/useHelpScoutBeacon.js";
import { deactivatePreviousAppSubscriptions } from "./services/subscription.service.js";
import { customerPlanOnMantle } from "./utils/utils.server.js";
import './styles/app.scss';

export const loader = async ({ request }) => {
  const { billing, session } = await authenticate.admin(request);

  const {hasActivePayment, appSubscriptions} = await billing.check({
    plans: [PLANS.Starter_Monthly, PLANS.Growth_Monthly, PLANS.Pro_Monthly],
  });

  if (!hasActivePayment) {
    await deactivatePreviousAppSubscriptions({session});
  }

  const helpScoutBeaconId = process.env.BEACON_ID;
  
  const store = await getStoreDetails(session.id, { 
    isPartnerDevelopment: true,
    shopOwnerName: true,
    storeName: true,
    url: true,
    planDisplayName: true,
    createdAt: true,
    session: {
      select: {
        email: true,
        mantleApiToken: true
      }
    }
  });

  const mantleCustomer = await getMantleCustomer({session});
  const customerPlan = customerPlanOnMantle(mantleCustomer);

  return {
    isPartnerDevelopment: store?.isPartnerDevelopment,
    hasActivePayment,
    helpScoutBeaconId,
    userData: {
      email: store?.session?.email,
      name: store?.shopOwnerName,
      shopName: store?.storeName,
      shopifyURL: store?.url,
      installationDate: store?.createdAt,
      shopifyPlan: customerPlan?.planName,
      shopifyPlanStatus: customerPlan?.status,
      ...(customerPlan.status === "Cancelled" && { cancelledOn: customerPlan?.cancelledOn }),
      ...(customerPlan.status === "On trial" && { trialEndsAt: customerPlan?.trialEndsAt })
    }
  };
};

export default function App() {
  const { isPartnerDevelopment, hasActivePayment, helpScoutBeaconId, userData } = useLoaderData();

  useEffect(() => {
    if (!userData) return;
    useHelpScoutBeacon(helpScoutBeaconId, userData);

    // Clean up on unmount
    return () => {
      // Optionally: Hide the beacon when component unmounts
      if (window.Beacon) {
        window.Beacon('hide');
      }
    };
  }, [helpScoutBeaconId, userData]);

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://cdn.shopify.com/" />
        <link
          rel="stylesheet"
          href="https://cdn.shopify.com/static/fonts/inter/v4/styles.css"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="barn2-app-root">
          {/* { isPartnerDevelopment && !hasActivePayment && <PartnerDevelopment/> }
          { !isPartnerDevelopment && !hasActivePayment && <UpgradeNotice/> } */}
          <Outlet />
          { <Credits/> }
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
