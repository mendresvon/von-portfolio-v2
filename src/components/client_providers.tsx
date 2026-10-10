"use client";

import { useEffect } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "../i18n";

// update lang attr
const LanguageUpdater = () => {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
  return null;
};

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <I18nextProvider i18n={i18n}>
      <LanguageUpdater />
      {children}
    </I18nextProvider>
  );
}
