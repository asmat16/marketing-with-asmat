import type { Metadata } from "next";
import { BlogCard } from "@/components/blog/BlogCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { TestimonialTicker } from "@/components/TestimonialTicker";
import { blogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

const title = "Insights on Ads, Growth and Performance Marketing";
const description =
  "Learn how US e-commerce, real estate, and home service brands grow with Meta Ads, Google Ads, tracking, and funnels. Hire Asmat, Top Rated Plus media buyer.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "e-commerce ads",
    "google ads HVAC",
    "real estate lead generation",
    "hire media buyer USA",
    "home service lead generation",
  ],
  authors: [{ name: "Asmat", url: siteConfig.url }],
  alternates: {
    canonical: `${siteConfig.url}/blogs`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteConfig.url}/blogs`,
    title,
    description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogsPage() {
  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: title,
    description,
    url: `${siteConfig.url}/blogs`,
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${siteConfig.url}/blogs/${post.slug}`,
      datePublished: post.publishedAt,
      image: `${siteConfig.url}${post.cover}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }}
      />
      <TestimonialTicker />
      <Header />
      <main className="min-h-screen bg-[var(--background)] pt-28 pb-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-xs font-medium tracking-widest text-teal-400/90 uppercase">
            Blog
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">
            {description}
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
