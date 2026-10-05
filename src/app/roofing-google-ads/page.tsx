import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollToTop } from "@/components/ScrollToTop";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { TestimonialTicker } from "@/components/TestimonialTicker";
import { foundationNav } from "@/lib/foundation";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Google Ads for roofing companies",
  description:
    "TODO: Meta description for roofing Google Ads. Draft page. US home service companies only.",
  alternates: { canonical: `${siteConfig.url}/roofing-google-ads` },
  robots: { index: false, follow: false },
};

export default function RoofingGoogleAdsPage() {
  return (
    <>
      <TestimonialTicker />
      <Header home="/" ctaLabel="Book a call" navItems={foundationNav} />
      <main className="min-h-screen bg-[var(--background)] pt-36 pb-20 md:pb-0">
        <div className="page-shell">
          <p className="text-xs font-medium tracking-widest text-teal-400/90 uppercase">
            Roofing
          </p>
          <h1 data-split className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Google Ads for US roofing companies
          </h1>
          <p data-reveal className="mt-5 max-w-3xl text-lg leading-relaxed text-zinc-400">
            TODO: Write the roofing page. Cover repair and replacement.
            Tight geo. The page after the click has to match the ad.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-500">
            TODO: Add storm vs planned replacement notes, estimate follow-up,
            and what photos you need from the crew.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href={siteConfig.links.book}
              className="inline-flex h-12 items-center rounded-full bg-gradient-to-r from-teal-400 to-teal-500 px-6 text-sm font-bold text-zinc-950"
            >
              Book a 15-min call
            </Link>
            <Link
              href="/who-i-help"
              className="inline-flex h-12 items-center rounded-full border border-white/15 px-6 text-sm font-semibold text-white"
            >
              Who I help
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <StickyMobileCta label="Book a call" />
      <ScrollToTop />
    </>
  );
}
