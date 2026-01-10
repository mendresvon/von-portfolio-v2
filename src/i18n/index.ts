import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json" assert { type: "json" };
import zhTW from "./locales/zh-TW.json" assert { type: "json" };

const resources = {
  en: {
    translation: en,
  },
  "zh-TW": {
    translation: zhTW,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "zh-TW"],
    detection: {
      order: ["cookie", "localStorage", "navigator", "htmlTag", "path", "subdomain"],
      caches: ["cookie", "localStorage"],
    },
    interpolation: {
      escapeValue: false, // react handles xss
    },
  });

export default i18n;
