import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import { siteConfig } from "@/lib/site";

const desk = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-desk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Preview · Paid media for US home services",
  description:
    "Private preview for US HVAC, roofing, plumbing, landscaping, remodeling, solar, and EV charger companies. Not the live site.",
  keywords: [
    "HVAC Google Ads",
    "roofing Facebook ads",
    "plumbing Google Ads",
    "home service media buyer USA",
    "landscaping ads",
    "remodeling lead generation",
    "solar installation ads",
    "EV charger installation ads",
    "Google Business Profile optimization",
    "GoHighLevel for home services",
  ],
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: "Preview · Paid media for US home services",
    description:
      "Private preview. US home service companies only. Google Ads, Meta Ads, TikTok Ads, Google Business Profile, content, funnels, and GoHighLevel.",
    url: `${siteConfig.url}/demo`,
  },
  twitter: {
    card: "summary",
    title: "Preview · Paid media for US home services",
    description:
      "Private preview. US home service companies only. Google Ads, Meta Ads, TikTok Ads, Google Business Profile, content, funnels, and GoHighLevel.",
  },
};

export default function DemoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className={`${desk.variable} trades-root`}>{children}</div>;
}
