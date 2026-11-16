import type { Metadata } from "next";
import { UpworkPortfolio } from "@/components/upwork-portfolio/UpworkPortfolio";
import { siteConfig } from "@/lib/site";

const title = "Work samples for Upwork clients";
const description =
  "Case studies from live Meta and Google Ads accounts, UGC and ad creative, plus the tracking and automation work around them.";

// This page is linked from Upwork proposals only. It carries no contact
// details and stays out of search so it never competes with /portfolio.
export const metadata: Metadata = {
  title: { absolute: `${title} | Asmat Ullah` },
  description,
  alternates: { canonical: `${siteConfig.url}/upwork-portfolio` },
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}/upwork-portfolio`,
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function UpworkPortfolioPage() {
  return <UpworkPortfolio />;
}
