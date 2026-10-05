import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollToTop } from "@/components/ScrollToTop";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { TestimonialTicker } from "@/components/TestimonialTicker";
import { ReachOut } from "@/components/foundation/ReachOut";
import { demoWhatsapp } from "@/lib/demo-content";
import { foundationNav, problems } from "@/lib/foundation";

export const metadata: Metadata = {
  title: "What is the current problem",
  description:
    "Common problems in a home service ads system: weak leads, unmanaged ads, few creatives, funnel leaks, bad tracking, no CRM follow-up, and a weak Google listing.",
  alternates: { canonical: "https://www.marketingwithasmat.pro/constraints" },
};

export default function ConstraintsPage() {
  return (
    <>
      <TestimonialTicker />
      <Header home="/" ctaLabel="Book a call" navItems={foundationNav} />
      <main className="min-h-screen bg-[var(--background)] pt-36 pb-20 md:pb-0">
        <div className="page-shell">
          <p className="text-xs font-medium tracking-widest text-teal-400/90 uppercase">
            Start here
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            What is the current problem in your system?
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-400">
            A plain look at each problem. I can cover this desk so you do not
            need four or five people.
          </p>

          <div className="mt-12 space-y-5">
            {problems.map((item) => (
              <article
                key={item.id}
                id={item.id}
                className="scroll-mt-32 rounded-2xl border border-white/10 bg-[var(--card)] p-6 sm:p-8"
              >
                <h2 className="text-2xl font-semibold text-white">{item.label}</h2>
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-300">
                  {item.answer}
                </p>
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-400">
                  {item.more}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-10">
            <Link
              href="/#diagnose"
              className="text-sm font-semibold text-teal-300 hover:text-teal-200"
            >
              Back to the problems on the homepage
            </Link>
          </p>
        </div>
        <div className="mt-10">
          <ReachOut />
        </div>
      </main>
      <Footer blurb="Paid ads for US HVAC, roofing, plumbing, and similar home service companies." />
      <StickyMobileCta label="Book a call" whatsappHref={demoWhatsapp} />
      <ScrollToTop />
    </>
  );
}
