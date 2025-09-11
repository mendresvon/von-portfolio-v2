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
    // This property tells i18next which languages are supported.
    // It helps the detector resolve regional codes (like 'en-US') to the base language ('en').
    supportedLngs: ["en", "zh-TW"],
    // The detection object configures *how* the language is detected.
    detection: {
      // Order of detection methods
      order: ["cookie", "localStorage", "navigator", "htmlTag", "path", "subdomain"],
      caches: ["cookie", "localStorage"],
    },
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;
