import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PageMotion } from "@/components/PageMotion";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "Asmat | Media Buyer for E-commerce, Real Estate & Home Services",
    template: "%s | Marketing with Asmat",
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: "Asmat", url: siteConfig.url }],
  creator: "Asmat",
  publisher: siteConfig.name,
  verification: {
    google: "p4VxNtNaFvUW1gI3_FAVE3qG6aw5HRObvAV1Y2O2XHo",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Media Buyer for E-commerce, Real Estate & Home Services",
    description: siteConfig.description,
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: siteConfig.name },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Media Buyer for DTC Sales & Lead Generation",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className={`${inter.variable} h-full`}>
      <head>
        <link rel="preconnect" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
      </head>
      <body className="min-h-full antialiased">
        <PageMotion />
        {children}
      </body>
    </html>
  );
}
