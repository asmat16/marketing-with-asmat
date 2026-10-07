import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollToTop } from "@/components/ScrollToTop";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { TestimonialTicker } from "@/components/TestimonialTicker";
import { footerBlurb, foundationNav } from "@/lib/foundation";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Draft landing",
  description: "Draft page. Not indexed. Performance marketing for DTC brands and lead gen.",
  alternates: { canonical: `${siteConfig.url}/plumbing-google-ads` },
  robots: { index: false, follow: false },
};

export default function DraftLandingPage() {
  return (
    <>
      <TestimonialTicker />
      <Header home="/" ctaLabel="Book a call" navItems={foundationNav} />
      <main className="min-h-screen bg-[var(--background)] pt-36 pb-20 md:pb-0">
        <div className="page-shell">
          <p className="text-xs font-medium tracking-widest text-teal-400/90 uppercase">
            Draft
          </p>
          <h1 data-split className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            This landing is not live yet
          </h1>
          <p data-reveal className="mt-5 max-w-3xl text-lg leading-relaxed text-zinc-400">
            The public site is for DTC brands and lead gen businesses. Book a
            call if you want Meta Ads, Google Ads, creative, funnel, and
            follow-up in one seat.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href={siteConfig.links.book}
              className="inline-flex h-12 items-center rounded-full bg-gradient-to-r from-teal-400 to-teal-500 px-6 text-sm font-bold text-zinc-950"
            >
              Book a 15-min call
            </Link>
            <Link
              href="/"
              className="inline-flex h-12 items-center rounded-full border border-white/15 px-6 text-sm font-semibold text-white"
            >
              Back to home
            </Link>
          </div>
        </div>
      </main>
      <Footer blurb={footerBlurb} />
      <StickyMobileCta label="Book a call" />
      <ScrollToTop />
    </>
  );
}
