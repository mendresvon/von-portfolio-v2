"use client";

import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react"; // <-- Import hooks

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);

  // This effect runs only once on the client, after the component has mounted.
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // Before the component is mounted, we can't know the client's language.
  // To avoid a hydration mismatch, we render a static placeholder that
  // exactly matches what the server would render (based on the 'en' fallback).
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

  // After mounting, we can safely render the component with the correct client-side language.
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