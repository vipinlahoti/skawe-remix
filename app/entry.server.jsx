import { renderToString } from "react-dom/server";
import { RemixServer } from "remix";
import { createInstance } from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import i18nextOptions from "./i18nextOptions";

export default async function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) {
  // Here you also need to initialize i18next using initReactI18next, you should
  // use the same configuration as in your client side.
  // create an instance so every request will have a copy and don't re-use the
  // i18n object
  let i18n = createInstance();
  if (!i18n.isInitialized)
    await i18n.use(initReactI18next).init({
      ...i18nextOptions,
      resources: {}, // prevents init warning
    });

  // Then you can render your app wrapped in the RemixI18NextProvider as in the
  // entry.client file
  let markup = renderToString(
    <I18nextProvider i18n={i18n}>
      <RemixServer context={remixContext} url={request.url} />
    </I18nextProvider>
  );

  responseHeaders.set("Content-Type", "text/html");
  responseHeaders.set("Cache-Control", "s-maxage=5, stale-while-revalidate=5");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
