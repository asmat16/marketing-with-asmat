import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";
import { BlogCard } from "./blog/BlogCard";
import { SectionHeading } from "./SectionHeading";

export function BlogInsights() {
  const featuredSlugs = [
    "google-ads-hvac-home-service-leads-usa",
    "funnel-optimization-expert-before-meta-ads",
    "ai-ads-strategist-creative-beats-ad-spend",
  ];
  const featured = featuredSlugs
    .map((slug) => blogPosts.find((post) => post.slug === slug))
    .filter((post): post is (typeof blogPosts)[number] => Boolean(post));

  return (
    <section
      id="insights"
      className="border-t border-white/[0.08] py-24 sm:py-28"
      aria-labelledby="insights-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            label="Insights"
            title="Ads, growth and performance marketing"
            description="Guides on Meta Ads, Google Ads, tracking, and funnels written from real ad-account work with US brands — e-commerce, local services, and more."
          />
          <Link
            href="/blogs"
            className="inline-flex h-11 shrink-0 items-center justify-center rounded-full border border-teal-400/40 px-5 text-sm font-semibold text-teal-300 hover:bg-teal-500/10"
          >
            Read the blog
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-zinc-500">
          Ready to hire?{" "}
          <Link href={siteConfig.links.book} className="text-teal-400 hover:underline">
            Book a free strategy call
          </Link>{" "}
          or{" "}
          <Link
            href={siteConfig.links.upwork}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline"
          >
            hire on Upwork
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
