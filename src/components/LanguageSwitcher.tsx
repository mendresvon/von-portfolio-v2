"use client";

import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);

  // Ensures component is mounted on the client to prevent hydration mismatches.
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // Render a placeholder on the server to avoid a hydration mismatch.
  if (!isMounted) {
    return (
      <div className="flex items-center space-x-2">
        <button className="px-3 py-1 text-sm rounded-md transition-colors bg-purple-600 text-white">
          EN
        </button>
        <button className="px-3 py-1 text-sm rounded-md transition-colors hover:bg-gray-700">
          繁
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage("en")}
        className={`px-3 py-1 text-sm rounded-md transition-colors ${
          i18n.language === "en" || i18n.language.startsWith("en-")
            ? "bg-purple-600 text-white"
            : "hover:bg-gray-700"
        }`}>
        EN
      </button>
      <button
        onClick={() => changeLanguage("zh-TW")}
        className={`px-3 py-1 text-sm rounded-md transition-colors ${
          i18n.language === "zh-TW"
            ? "bg-purple-600 text-white"
            : "hover:bg-gray-700"
        }`}>
        繁
      </button>
    </div>
  );
};

export default LanguageSwitcher;
