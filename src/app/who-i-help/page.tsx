import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollToTop } from "@/components/ScrollToTop";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { TestimonialTicker } from "@/components/TestimonialTicker";
import { demoWhatsapp } from "@/lib/demo-content";
import { audiences, foundationNav } from "@/lib/foundation";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Who I help",
  description:
    "I work with US HVAC, roofing, plumbing, and similar home service companies. Booked jobs and estimates. Not med spas, stores, or real estate.",
  alternates: { canonical: "https://www.marketingwithasmat.pro/who-i-help" },
};

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
            Operators who run a US home service company
          </h1>
          <p data-reveal className="mt-5 max-w-3xl text-lg leading-relaxed text-zinc-400">
            HVAC, roofing, plumbing, landscaping, and home repair. United
            States only. I run ads so you get more booked jobs, more booked
            appointments, and more revenue. Not a pile of cheap leads.
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
      <Footer blurb="Paid ads for US HVAC, roofing, plumbing, and similar home service companies." />
      <StickyMobileCta label="Book a call" whatsappHref={demoWhatsapp} />
      <ScrollToTop />
    </>
  );
}
