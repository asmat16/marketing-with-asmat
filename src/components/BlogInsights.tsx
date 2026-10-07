import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";
import { BlogCard } from "./blog/BlogCard";
import { SectionHeading } from "./SectionHeading";

const liveInsights = {
  label: "Insights",
    title: "Notes on ads that actually sell",
  description:
    "Why ads stall after the click, why creative matters more than targeting now, and how one person can own ads, funnel, and follow-up.",
  hireLead: "Ready to hire?",
  hireCta: "Book a free strategy call",
};

export function BlogInsights({
  copy = liveInsights,
  count = 3,
  whatsappHref = siteConfig.links.whatsapp,
}: {
  copy?: {
    label: string;
    title: string;
    description: string;
    hireLead: string;
    hireCta: string;
  };
  count?: number;
  whatsappHref?: string;
}) {
  const featuredSlugs = [
    "ads-creative-funnel-tracking-one-system",
    "ecommerce-meta-google-ads-that-sell",
    "funnel-optimization-expert-before-meta-ads",
    "hire-media-buyer-usa-meta-google-tiktok",
  ].slice(0, count);
  const featured = featuredSlugs
    .map((slug) => blogPosts.find((post) => post.slug === slug))
    .filter((post): post is (typeof blogPosts)[number] => Boolean(post));

  return (
    <section
      id="insights"
      className="border-t border-white/[0.08] py-24 sm:py-28"
      aria-labelledby="insights-heading"
    >
      <div className="page-shell">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            label={copy.label}
            title={copy.title}
            description={copy.description}
          />
          <Link
            href="/blogs"
            className="inline-flex h-11 shrink-0 items-center justify-center rounded-full border border-teal-400/40 px-5 text-sm font-semibold text-teal-300 hover:bg-teal-500/10"
          >
            Read the blog
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {featured.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-zinc-500">
          {copy.hireLead}{" "}
          <Link href={siteConfig.links.book} className="text-teal-400 hover:underline">
            {copy.hireCta}
          </Link>
          {", "}
          <Link
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline"
          >
            WhatsApp
          </Link>
          {", or "}
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
