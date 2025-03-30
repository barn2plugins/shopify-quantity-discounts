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
import Credits from "./components/Footer/Credits.jsx";
import { authenticate } from "./shopify.server";
import { StoreService } from "./services/store.service.js";
import './styles/app.scss';

export const loader = async ({ request }) => {
  const { session } = await authenticate.admin(request);

  const store = await StoreService.getStoreDetails(session.id, { isPartnerDevelopment: true });
  
  return {
    isPartnerDevelopment: store?.isPartnerDevelopment,
    isSubscribed: false, // TODO: Implement subscription check
  };
};

export default function App() {
  const { isPartnerDevelopment, isSubscribed } = useLoaderData();

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
          { isPartnerDevelopment && !isSubscribed && <PartnerDevelopment/> }
          <Outlet />
          { <Credits/> }
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
