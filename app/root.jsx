import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData,
} from "remix";
import { Layout } from "~/components";
import { useSetupTranslations } from "remix-i18next";
import remixI18n from "./i18n.server";
import styles from "./styles/globals.css";

export async function loader({ request }) {
  const locale = await remixI18n.getLocale(request);
  const i18n = await remixI18n.getTranslations(request, ["index"]);
  return json({ locale, i18n });
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta = () => {
  return {
    title: "Something cool",
    description: "This becomes the nice preview on search results.",
  };
};

export default function App() {
  const { locale, getTranslations } = useLoaderData();
  useSetupTranslations(locale, getTranslations);

  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
