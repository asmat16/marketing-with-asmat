import type { Metadata } from "next";
import { PortfolioSite } from "@/components/portfolio-site/PortfolioSite";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Portfolio: Meta & Google Ads Case Studies",
  ogTitle: "Asmat's portfolio: case studies from real ad accounts",
  description:
    "Five full case studies from live Meta and Google Ads accounts: KIMITH athleisure, Performance AC home services, The10 Jewelry, a high-ticket education client and Google Search for food DTC. The challenge, the plan, the execution and the result.",
  path: "/portfolio",
});

export default function PortfolioHomePage() {
  return <PortfolioSite />;
}
