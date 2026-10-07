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
  title: "Preview · Performance marketing",
  description:
    "Private preview. Not the live site. DTC brands and lead gen businesses.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: "Preview · Performance marketing",
    description: "Private preview. Not the live site.",
    url: `${siteConfig.url}/demo`,
  },
  twitter: {
    card: "summary",
    title: "Preview · Performance marketing",
    description: "Private preview. Not the live site.",
  },
};

export default function DemoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className={desk.variable}>{children}</div>;
}
