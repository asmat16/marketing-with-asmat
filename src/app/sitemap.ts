import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { portfolioFolders } from "@/lib/portfolio";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/book`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${siteConfig.url}/blogs`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogPosts.map((post) => ({
      url: `${siteConfig.url}/blogs/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    {
      url: `${siteConfig.url}/portfolio`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    ...portfolioFolders.map((folder) => ({
      url: `${siteConfig.url}/portfolio/${folder.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
