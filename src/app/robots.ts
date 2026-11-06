import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const crawlRules = {
  allow: "/",
  disallow: ["/demo", "/demo/"],
};

const answerEngines = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Google-Extended",
  "PerplexityBot",
  "Perplexity-User",
  "Applebot-Extended",
  "Amazonbot",
  "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", ...crawlRules },
      { userAgent: answerEngines, ...crawlRules },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
