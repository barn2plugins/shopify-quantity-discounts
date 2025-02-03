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
import prisma from "./db.server";
import { authenticate } from "./shopify.server";
import './styles/app.scss';

export const loader = async ({ request }) => {
  const { session } = await authenticate.admin(request);
  const user = await prisma.session.findFirst({
    where: {
      id: session.id
    }
  });
  
  return user;
};

export default function App() {
  const user = useLoaderData();

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
          { user.isPartnerDevelopment && <PartnerDevelopment/> }
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
