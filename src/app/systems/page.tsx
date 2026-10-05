import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollToTop } from "@/components/ScrollToTop";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { TestimonialTicker } from "@/components/TestimonialTicker";
import { demoWhatsapp } from "@/lib/demo-content";
import { foundationNav, journeySteps } from "@/lib/foundation";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "How I work",
  description:
    "The path from onboarding to a booked appointment. Audience, content, Google Ads, Meta Ads, website, tracking, Google Business Profile, and CRM follow-up.",
  alternates: { canonical: "https://www.marketingwithasmat.pro/systems" },
};

export default function SystemsPage() {
  return (
    <>
      <TestimonialTicker />
      <Header home="/" ctaLabel="Book a call" navItems={foundationNav} />
      <main className="min-h-screen bg-[var(--background)] pt-36 pb-20 md:pb-0">
        <div className="page-shell">
          <p className="text-xs font-medium tracking-widest text-teal-400/90 uppercase">
            How I work
          </p>
          <h1 data-split className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            From first call to the first booked appointment
          </h1>
          <p data-reveal className="mt-5 max-w-3xl text-lg leading-relaxed text-zinc-400">
            New company, existing company, or an agency with more than one
            account. Same path. I run the ads. I use AI where it saves time.
            A person still makes the calls.
          </p>

          <div className="mt-14 space-y-8">
            {journeySteps.map((step) => (
              <article
                key={step.id}
                id={step.id}
                className="scroll-mt-32 rounded-2xl border border-white/10 bg-[var(--card)] p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold tracking-widest text-teal-300 uppercase">
                      Step {step.step}
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-white">{step.name}</h2>
                  </div>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "Skill", value: step.skill, color: "#2dd4bf" },
                    { label: "Creativity", value: step.creativity, color: "#818cf8" },
                    { label: "Adaptability", value: step.adaptability, color: "#f0c27a" },
                  ].map((score) => (
                    <div key={score.label}>
                      <div className="flex items-baseline justify-between gap-2">
                        <p className="text-xs font-medium text-zinc-400">{score.label}</p>
                        <p className="font-mono text-sm font-bold" style={{ color: score.color }}>
                          {score.value}%
                        </p>
                      </div>
                      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${score.value}%`,
                            background: score.color,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm font-medium text-teal-200">{step.focus}</p>
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-300">
                  {step.does}
                </p>
                <p className="mt-4 border-t border-white/10 pt-4 text-sm text-zinc-400">
                  {step.result}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href={siteConfig.links.book}
              className="inline-flex h-12 items-center rounded-full bg-gradient-to-r from-teal-400 to-teal-500 px-6 text-sm font-bold text-zinc-950"
            >
              Book a strategy call
            </Link>
            <Link
              href="/who-i-help"
              className="inline-flex h-12 items-center rounded-full border border-white/15 px-6 text-sm font-semibold text-white"
            >
              Who this is for
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
