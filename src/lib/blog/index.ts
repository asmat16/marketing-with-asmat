import { googleAdsHvac } from "./posts/google-ads-hvac";
import { metaAdsMedSpa } from "./posts/meta-ads-med-spa";
import { costPerLead } from "./posts/cost-per-lead";
import { medSpaHomeService } from "./posts/med-spa-home-service";
import { aiAdsStrategist } from "./posts/ai-ads-strategist";
import { funnelOptimization } from "./posts/funnel-optimization";
import { hirePakistan } from "./posts/hire-pakistan";
import { hireMediaBuyerUsa } from "./posts/hire-media-buyer-usa";
import { ecommerceMetaGoogle } from "./posts/ecommerce-meta-google";
import { tiktokVsMetaGoogle } from "./posts/tiktok-vs-meta-google";
import { facebookAdsRealEstate } from "./posts/facebook-ads-real-estate";
import type { BlogPost } from "./types";

export type { BlogPost, BlogFaq } from "./types";

export const blogPosts: BlogPost[] = [
  hireMediaBuyerUsa,
  ecommerceMetaGoogle,
  tiktokVsMetaGoogle,
  facebookAdsRealEstate,
  googleAdsHvac,
  metaAdsMedSpa,
  costPerLead,
  medSpaHomeService,
  aiAdsStrategist,
  funnelOptimization,
  hirePakistan,
].sort(
  (a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
);

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3) {
  const current = getPost(slug);
  if (!current) return blogPosts.filter((p) => p.slug !== slug).slice(0, limit);

  const scored = blogPosts
    .filter((post) => post.slug !== slug)
    .map((post) => ({
      post,
      score: post.tags.filter((tag) => current.tags.includes(tag)).length,
    }))
    .sort((a, b) => b.score - a.score || b.post.publishedAt.localeCompare(a.post.publishedAt));

  return scored.slice(0, limit).map((item) => item.post);
}

export function formatBlogDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
