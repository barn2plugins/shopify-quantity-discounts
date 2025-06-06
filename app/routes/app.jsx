import { Link, Outlet, useLoaderData, useRouteError } from "@remix-run/react";
import { boundary } from "@shopify/shopify-app-remix/server";
import { AppProvider } from "@shopify/shopify-app-remix/react";
import { NavMenu } from "@shopify/app-bridge-react";
import polarisStyles from "@shopify/polaris/build/esm/styles.css?url";
import { authenticate } from "../shopify.server";
import { MantleProvider } from "@heymantle/react";
import { getMantleApiToken } from "../services/mantle.service";

export const links = () => [{ rel: "stylesheet", href: polarisStyles }];

export const loader = async ({ request }) => {
  const {session} = await authenticate.admin(request);

  const mantleApiToken = await getMantleApiToken(session);
  
  return {
    apiKey: process.env.SHOPIFY_API_KEY || "",
    mantleAppId: process.env.MANTLE_APP_ID || "",
    mantleApiToken: mantleApiToken?? "",
  };
};

export default function App() {
  const { apiKey, mantleAppId, mantleApiToken } = useLoaderData();

  return (
    <AppProvider isEmbeddedApp apiKey={apiKey}>
      <MantleProvider
        appId={mantleAppId}
        customerApiToken={mantleApiToken}
      >
        <NavMenu>
          <Link to="/app" rel="home">
            Home
          </Link>
          <Link to="/app/plans">My Plan</Link>
          <Link to="/app/documentation">Documentation</Link>
          <Link to="/app/support">Support</Link>
        </NavMenu>
        <Outlet />
      </MantleProvider>
    </AppProvider>
  );
}

// Shopify needs Remix to catch some thrown responses, so that their headers are included in the response.
export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
