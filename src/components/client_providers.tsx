"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "../i18n";
import GlowingCursor from "./glowing_cursor";
import Navbar from "./navbar";
import Footer from "./footer";

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
  const [isGlowActive, setIsGlowActive] = useState(false);

  return (
    <I18nextProvider i18n={i18n}>
      <GlobalStateContext.Provider value={{ setIsGlowActive }}>
        <LanguageUpdater />
        <GlowingCursor isActive={isGlowActive} />
        <Navbar />
        {children}
        <Footer />
      </GlobalStateContext.Provider>
    </I18nextProvider>
  );
}
