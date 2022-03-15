import { NextIntlProvider } from "next-intl";
import { useRouter } from "next/router";
import { Strings } from "@skawe/modules/config";

export const App = ({ children }) => {
  const { locale } = useRouter();

  return (
    <NextIntlProvider messages={Strings[locale]}>{children}</NextIntlProvider>
  );
};
