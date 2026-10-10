import type { Metadata } from "next";
import "./globals.css";

import ClientProviders from "@/components/client_providers";

const title = "Von Breznev A. Mendres · Computer Science & Software";
const description = "Portfolio of Von Breznev A. Mendres, a Computer Science student building software, cloud systems, and machine learning projects in Taiwan.";

export const metadata: Metadata = {
  metadataBase: new URL("https://von-mendres-portfolio.vercel.app"),
  title,
  description,
  openGraph: {
    type: "website",
    siteName: "Von Breznev A. Mendres",
    title,
    description,
    url: "/",
    images: ["/profile.jpg"],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/profile.jpg"],
  },
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
