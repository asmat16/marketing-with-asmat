import type { Metadata } from "next";
import { UpworkPortfolio } from "@/components/portfolio-upwork/UpworkPortfolio";
import { siteConfig } from "@/lib/site";

const title = "Upwork Portfolio · Case Studies & Creative";
const description =
  "Upwork-safe case studies from live Meta and Google Ads accounts, plus UGC and creative strategy. Continue the conversation on Upwork.";

export const metadata: Metadata = {
  title: { absolute: `${title} | ${siteConfig.name}` },
  description,
  alternates: {
    canonical: `${siteConfig.url}/portfolio-upwork`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}/portfolio-upwork`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function UpworkPortfolioPage() {
  return <UpworkPortfolio />;
}
