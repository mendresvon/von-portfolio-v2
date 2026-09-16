import type { Metadata } from "next";
import "./globals.css";

import ClientProviders from "@/components/client_providers";

export const metadata: Metadata = {
  title: "Von Breznev A. Mendres · Computer Science & Software",
  description: "Portfolio of Von Breznev A. Mendres, a Computer Science student building software, cloud systems, and machine learning projects in Taiwan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
