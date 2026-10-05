import type { Metadata } from "next";
import { FeaturedPortfolio } from "@/components/FeaturedPortfolio";
import { foundationStudies } from "@/lib/foundation";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Six real accounts. Each cover states the result. The original ad-account screenshot plays behind it.",
  alternates: {
    canonical: `${siteConfig.url}/portfolio`,
  },
  robots: { index: true, follow: true },
};

export default function PortfolioHomePage() {
  return (
    <FeaturedPortfolio
      sectionId="portfolio-results"
      heading={{
        label: "Portfolio",
        title: "Campaign results from real accounts",
        description:
          "The cover is the result. The screenshot plays behind it. Click a card to enlarge the account.",
      }}
      studies={foundationStudies.slice(0, 6)}
      columns={3}
      slideshow
    />
  );
}
