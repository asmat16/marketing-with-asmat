import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollToTop } from "@/components/ScrollToTop";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { TestimonialTicker } from "@/components/TestimonialTicker";
import { demoWhatsapp } from "@/lib/demo-content";
import { audiences, footerBlurb, foundationNav } from "@/lib/foundation";
import { pageMeta, siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Who I Help",
  description:
    "DTC e-commerce brands in women's apparel, skincare, beauty, and jewelry, plus B2B and B2C lead gen businesses in the US.",
  path: "/who-i-help",
});

export default function WhoIHelpPage() {
  return (
    <>
      <TestimonialTicker />
      <Header home="/" ctaLabel="Book a call" navItems={foundationNav} />
      <main className="min-h-screen bg-[var(--background)] pt-36 pb-20 md:pb-0">
        <div className="page-shell">
          <p className="text-xs font-medium tracking-widest text-teal-400/90 uppercase">
            Who I help
          </p>
          <h1 data-split className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Brands that sell online and businesses that need real leads
          </h1>
          <p data-reveal className="mt-5 max-w-3xl text-lg leading-relaxed text-zinc-400">
            DTC e-commerce brands and lead gen businesses in the US. I run the
            ads and build the system around them, so you get more sales and
            more qualified leads. Not just more clicks.
          </p>

          <ul className="mt-14 grid gap-5 lg:grid-cols-2">
            {audiences.map((item) => (
              <li
                key={item.title}
                data-reveal
                className="rounded-2xl border border-white/10 bg-[var(--card)] p-6"
              >
                <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                  {item.thought}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  {item.response}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href={siteConfig.links.book}
              className="inline-flex h-12 items-center rounded-full bg-gradient-to-r from-teal-400 to-teal-500 px-6 text-sm font-bold text-zinc-950"
            >
              Book a strategy call
            </Link>
            <Link
              href="/systems"
              className="inline-flex h-12 items-center rounded-full border border-white/15 px-6 text-sm font-semibold text-white"
            >
              See the system
            </Link>
          </div>
        </div>
      </main>
      <Footer blurb={footerBlurb} />
      <StickyMobileCta label="Book a call" whatsappHref={demoWhatsapp} />
      <ScrollToTop />
    </>
  );
}
