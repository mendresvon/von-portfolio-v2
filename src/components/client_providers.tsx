"use client";

import { useEffect, createContext, useContext } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "../i18n";

const GlobalStateContext = createContext<{
  setIsGlowActive: (active: boolean) => void;
} | undefined>(undefined);

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) throw new Error("useGlobalState must be used within ClientProviders");
  return context;
};

// update lang attr
const LanguageUpdater = () => {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
  return null;
};

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  const setIsGlowActive = () => undefined;

  return (
    <I18nextProvider i18n={i18n}>
      <GlobalStateContext.Provider value={{ setIsGlowActive }}>
        <LanguageUpdater />
        {children}
      </GlobalStateContext.Provider>
    </I18nextProvider>
  );
}
