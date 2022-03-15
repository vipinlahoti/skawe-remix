export default {
  debug: process.env.NODE_ENV === "production",
  fallbackLng: "en",
  supportedLngs: ["en", "de"],
  defaultNS: "index",
  ns: [],
  react: { useSuspense: false },
  keySeparator: false,
  load: "languageOnly",
  initImmediate: true,
  interpolation: { escapeValue: false },
  detection: {
    caches: ["cookie"],
  },
};
