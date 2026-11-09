import type { Metadata } from "next";
import { PortfolioSite } from "@/components/portfolio-site/PortfolioSite";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Portfolio: Meta & Google Ads Case Studies",
  ogTitle: "Asmat's portfolio: case studies from real ad accounts",
  description:
    "Six full case studies from live Meta and Google Ads accounts: KIMITH, Performance AC, The Lovery, a Wojo Media client, Ketolibriyum and a training school. Plus UGC videos and ad designs. The challenge, the plan, the execution and the result.",
  path: "/portfolio",
});

export default function PortfolioHomePage() {
  return <PortfolioSite />;
}
