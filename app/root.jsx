import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "@remix-run/react";

// Internal components and libraries
import PartnerDevelopment from "./components/Notice/PartnerDevelopment";
import UpgradeNotice from "./components/Notice/UpgradeNotice";
import Credits from "./components/Footer/Credits.jsx";
import { PLANS } from "./utils/plans"
import { authenticate } from "./shopify.server";
import { getStoreDetails } from "./services/store.service.js";
import { useHelpScoutBeacon } from "./hooks/useHelpScoutBeacon.js";
import { deactivatePreviousAppSubscriptions } from "./services/subscription.service.js";
import './styles/app.scss';

export const loader = async ({ request }) => {
  const { billing, session } = await authenticate.admin(request);

  const {hasActivePayment} = await billing.check({
    plans: [PLANS.Starter_Monthly, PLANS.Growth_Monthly, PLANS.Pro_Monthly, PLANS.Starter_Annual, PLANS.Growth_Annual, PLANS.Pro_Annual],
  });

  if (!hasActivePayment) {
    await deactivatePreviousAppSubscriptions({session});
  }
  
  const store = await getStoreDetails(session.id, { 
    isPartnerDevelopment: true,
    shopOwnerName: true,
    session: {
      select: {
        email: true
      }
    }
  });

  return {
    isPartnerDevelopment: store?.isPartnerDevelopment,
    hasActivePayment,
    userData: {
      email: store?.session?.email,
      name: store?.shopOwnerName
    }
  };
};

export default function App() {
  const { isPartnerDevelopment, hasActivePayment, userData } = useLoaderData();

  const BEACON_ID = 'f63228ce-9f50-4389-8930-8a25425d0ec8';
  useHelpScoutBeacon(BEACON_ID, userData);

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
          { isPartnerDevelopment && !hasActivePayment && <PartnerDevelopment/> }
          { !isPartnerDevelopment && !hasActivePayment && <UpgradeNotice/> }
          <Outlet />
          { <Credits/> }
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
