import { RemixI18Next, FileSystemBackend } from "remix-i18next";
import path from "path";
import i18nextOptions from "./i18nextOptions";

// You will need to provide a backend to load your translations, here we use the
// file system one and tell it where to find the translations.
const backend = new FileSystemBackend(path.resolve("./public/locales"));

export default new RemixI18Next(backend, {
  fallbackLng: i18nextOptions.fallbackLng, // here configure your default (fallback) language
  supportedLanguages: i18nextOptions.supportedLngs, // here configure your supported languages
});
