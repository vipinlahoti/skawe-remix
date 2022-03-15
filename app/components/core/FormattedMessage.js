import { json } from "remix";
import { useTranslation } from "react-i18next";
import i18n from "~/i18n.server"; // this is the first file you created

export let loader = async ({ request }) => {
  return json({
    i18n: await i18n.getTranslations(request, ["index"]),
  });
};

export const FormattedMessage = ({ id }) => {
  let { t } = useTranslation("index");
  return <span>{t(id)}</span>;
};
