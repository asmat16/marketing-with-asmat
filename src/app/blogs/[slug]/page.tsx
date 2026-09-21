import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogFaq } from "@/components/blog/BlogFaq";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogJsonLd } from "@/components/blog/BlogJsonLd";
import { BlogMarkdown } from "@/components/blog/BlogMarkdown";
import { BlogShare } from "@/components/blog/BlogShare";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { TestimonialTicker } from "@/components/TestimonialTicker";
import {
  blogPosts,
  formatBlogDate,
  getPost,
  getRelatedPosts,
} from "@/lib/blog";
import { siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const url = `${siteConfig.url}/blogs/${post.slug}`;

  return {
    title: post.seoTitle,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: "Asmat", url: siteConfig.url }],
    category: post.category,
    alternates: {
      canonical: url,
      languages: { "en-US": url },
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      url,
      siteName: siteConfig.name,
      title: post.seoTitle,
      description: post.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: ["Asmat"],
      tags: post.tags,
      images: [
        {
          url: post.cover,
          width: 1200,
          height: 630,
          alt: post.coverAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.description,
      images: [post.cover],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "geo.region": "US",
      "geo.placename": "United States",
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${siteConfig.url}/blogs/${post.slug}`;
  const related = getRelatedPosts(post.slug, 3);
  const isSvg = post.cover.split("?")[0].endsWith(".svg");

  return (
    <>
      <BlogJsonLd post={post} />
      <TestimonialTicker />
      <Header />
      <main className="min-h-screen bg-[var(--background)] pt-28 pb-24">
        <article className="mx-auto max-w-3xl px-5 sm:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-zinc-500">
            <ol className="flex flex-wrap gap-2">
              <li>
                <Link href="/" className="hover:text-teal-300">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/blogs" className="hover:text-teal-300">
                  Blog
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-zinc-400">{post.category}</li>
            </ol>
          </nav>

          <p className="mt-6 text-xs font-medium tracking-widest text-teal-400/90 uppercase">
            {post.category}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            {post.excerpt}
          </p>
          <div className="mt-6 flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-zinc-500">
              <span className="text-zinc-300">Asmat</span>
              <span className="mx-2">·</span>
              <time dateTime={post.publishedAt}>
                {formatBlogDate(post.publishedAt)}
              </time>
              <span className="mx-2">·</span>
              {post.readingMinutes} min read
            </p>
            <BlogShare url={url} title={post.title} />
          </div>

          <div className="relative my-8 overflow-hidden rounded-2xl border border-white/10">
            {isSvg ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={post.cover}
                alt={post.coverAlt}
                className="h-full w-full object-cover"
                width={1200}
                height={630}
                loading="eager"
                decoding="async"
              />
            ) : (
              <Image
                src={post.cover}
                alt={post.coverAlt}
                width={1200}
                height={630}
                priority
                className="h-auto w-full object-cover"
              />
            )}
          </div>

          <BlogMarkdown content={post.content} />

          <div className="mt-12 rounded-2xl border border-teal-500/20 bg-teal-500/5 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white">
              Hire a media buyer for your US business
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              I help e-commerce brands sell more, and I help real estate, home
              service, and aesthetic businesses in the United States get
              qualified leads with Meta and Google. 7+ years. $20M+ ad spend
              managed. Top Rated Plus on Upwork.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={siteConfig.links.book}
                className="inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-teal-500 px-6 text-sm font-bold text-zinc-950"
              >
                Book a free strategy call
              </Link>
              <Link
                href={siteConfig.links.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white"
              >
                Hire on Upwork
              </Link>
            </div>
          </div>

          <BlogFaq faqs={post.faqs} />

          <section className="mt-16 rounded-2xl border border-white/10 bg-[var(--card)] p-6 sm:flex sm:gap-5">
            <Image
              src="/asmat-hero.png"
              alt="Asmat, senior media buyer and growth strategist for US brands"
              width={160}
              height={160}
              className="h-20 w-20 shrink-0 rounded-full border border-teal-400/30 object-cover object-top"
            />
            <div className="mt-4 sm:mt-0">
              <p className="text-xs tracking-widest text-zinc-500 uppercase">
                Written by
              </p>
              <h2 className="mt-1 text-lg font-semibold text-white">Asmat</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Senior media buyer and growth strategist. I run Meta and Google
                ads for US e-commerce, real estate, and home service
                companies, with a focus on sales, booked calls, and revenue.
              </p>
              <p className="mt-3 text-sm">
                <Link href="/#contact" className="text-teal-400 hover:underline">
                  Contact Asmat
                </Link>
                <span className="mx-2 text-zinc-600">·</span>
                <Link
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:underline"
                >
                  LinkedIn
                </Link>
              </p>
            </div>
          </section>
        </article>

        <aside className="mx-auto mt-16 max-w-6xl px-5 sm:px-8">
          <h2 className="text-2xl font-bold text-white">Keep reading</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <BlogCard key={item.slug} post={item} />
            ))}
          </div>
        </aside>
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
