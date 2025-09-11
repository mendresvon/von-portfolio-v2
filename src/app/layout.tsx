// src/app/layout.tsx
"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import i18n from "../i18n";
import { I18nextProvider, useTranslation } from "react-i18next";
import { useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// This component ensures the document's lang attribute is updated on the client
// after the initial render, avoiding a hydration mismatch.
const LanguageUpdater = () => {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
  return null; // This component does not render any visible UI
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // We explicitly set lang="en" to match the server's initial render.
    // The LanguageUpdater component will then handle changing it on the client.
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <I18nextProvider i18n={i18n}>
          <LanguageUpdater />
          {children}
        </I18nextProvider>
      </body>
    </html>
  );
}

