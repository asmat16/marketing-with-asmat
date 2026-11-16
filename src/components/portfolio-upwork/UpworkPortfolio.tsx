"use client";

import Image from "next/image";
import { Suspense, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  allCases,
  caseSlugAliases,
  featuredCases,
  moreCases,
  type CaseCategory,
  type CaseStudy,
} from "@/lib/case-studies";
import { siteConfig } from "@/lib/site";
import { BrowserFrame } from "@/components/portfolio-site/BrowserFrame";
import { ArrowRight, ArrowUpRight } from "@/components/portfolio-site/icons";
import { UpworkCaseModal } from "./UpworkCaseModal";
import { UpworkCreative } from "./UpworkCreative";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type View = "all" | CaseCategory | "creative";

const upworkHref = siteConfig.links.upwork;

const stats = [
  { value: "$20M+", label: "Ad budget managed" },
  { value: "$200K+", label: "Earned on Upwork · last 3 years" },
  { value: "80+", label: "US clients at Wojo Media" },
  { value: "8+ yrs", label: "Meta & Google Ads" },
];

const fitSignals = [
  { title: "Adaptive & clear", body: "I explain the numbers in plain English and adjust fast when the account changes." },
  { title: "Structured onboarding", body: "Access, offer, tracking, and creative plan before spend goes up." },
  { title: "Fluent English", body: "Written and spoken. Easy for US teams and founders." },
  { title: "US Eastern hours", body: "Monday to Friday, 9am to 5pm ET. Overlap with your workday." },
  { title: "US clients only", body: "I specialize in brands selling in the United States." },
];

const desks = [
  {
    label: "01 · Paid acquisition",
    title: "Meta Ads & Google Ads",
    body: "Campaign structure, prospecting, Advantage+, Shopping, Search, Performance Max. Daily tests. Winners scaled. Waste cut.",
  },
  {
    label: "02 · Creative",
    title: "UGC, hooks & statics",
    body: "Angles, scripts, briefs, and weekly creative refresh so the account does not go stale after Andromeda.",
  },
  {
    label: "03 · Tracking & data",
    title: "GTM, Pixel, CAPI & analysis",
    body: "Pixel, Conversions API, Google Tag Manager, and reporting that matches Shopify or the CRM. Data analysis so we trust what to scale.",
  },
  {
    label: "04 · Ops & automations",
    title: "Klaviyo, GHL & Shopify",
    body: "Email and SMS flows in Klaviyo or GoHighLevel. Shopify catalog and product feed work so dynamic ads stay accurate.",
  },
];

const views: { id: View; label: string; detail: string }[] = [
  { id: "all", label: "All work", detail: "Full desk" },
  { id: "ecommerce", label: "E-commerce", detail: "DTC & Shopify" },
  { id: "leadgen", label: "Lead gen", detail: "Calls & pipeline" },
  { id: "creative", label: "Creative & UGC", detail: "Ads that sell" },
];

const btnUpwork =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[var(--upw-accent)] px-5 py-3 text-sm font-semibold text-[#101218] transition hover:brightness-110";
const btnQuiet =
  "inline-flex items-center justify-center gap-2 rounded-full border border-[var(--upw-line)] px-5 py-3 text-sm font-medium text-[var(--upw-ink)] transition hover:border-[var(--upw-ink)]/40";

export function UpworkPortfolio() {
  const rootRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<View>("all");

  const showCases = view !== "creative";
  const showCreative = view === "all" || view === "creative";
  const cases =
    view === "ecommerce" || view === "leadgen"
      ? featuredCases.filter((study) => study.category === view)
      : featuredCases;
  const more =
    view === "ecommerce" || view === "leadgen"
      ? moreCases.filter((study) => study.category === view)
      : moreCases;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .fromTo(
            "[data-upw-hero]",
            { y: 28, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.85, stagger: 0.07 },
          )
          .fromTo(
            "[data-upw-portrait]",
            { clipPath: "inset(12% 12% 12% 12% round 28px)", scale: 1.06 },
            { clipPath: "inset(0% 0% 0% 0% round 28px)", scale: 1, duration: 1.15, ease: "expo.out" },
            0.12,
          );

        gsap.utils.toArray<HTMLElement>("[data-upw-reveal]").forEach((el) => {
          gsap.fromTo(
            el,
            { y: 40, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.9,
              ease: "power3.out",
              immediateRender: false,
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
            },
          );
        });
      });
      return () => mm.revert();
    },
    { scope: rootRef },
  );

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-upw-case]").forEach((card, i) => {
          gsap.fromTo(
            card,
            { y: 48, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.85,
              delay: (i % 2) * 0.08,
              ease: "power3.out",
              immediateRender: false,
              scrollTrigger: { trigger: card, start: "top 88%", once: true },
            },
          );
        });
        requestAnimationFrame(() => ScrollTrigger.refresh());
      });
      return () => mm.revert();
    },
    { scope: workRef, dependencies: [view], revertOnUpdate: true },
  );

  return (
    <div ref={rootRef} className="upw-root">
      <div className="upw-grain" aria-hidden />

      <div className="border-b border-[var(--upw-line)] bg-[var(--upw-accent)] text-[#101218]">
        <div className="upw-shell py-2 text-center text-xs font-medium sm:text-[13px]">
          Upwork portfolio · Please keep all pre-contract messages on Upwork
        </div>
      </div>

      <header className="border-b border-[var(--upw-line)] bg-[var(--upw-bg)]/80 backdrop-blur-xl">
        <div className="upw-shell flex h-14 items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Image
              src="/brand/logos/logo-square-on-dark.svg"
              alt=""
              width={28}
              height={28}
              className="h-7 w-7"
            />
            <span className="text-sm font-semibold text-[var(--upw-ink)]">
              Asmat
              <span className="ml-2 hidden font-normal text-[var(--upw-muted)] sm:inline">
                / Upwork portfolio
              </span>
            </span>
          </div>
          <a href={upworkHref} target="_blank" rel="noopener noreferrer" className={btnUpwork}>
            Hire on Upwork
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main>
        <section className="upw-shell grid items-center gap-12 pb-16 pt-12 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-7">
            <p
              data-upw-hero
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--upw-accent)]"
            >
              Top Rated Plus · Upwork
            </p>
            <h1
              data-upw-hero
              className="upw-display mt-5 text-[2.7rem] font-extrabold leading-[0.98] text-[var(--upw-ink)] sm:text-6xl lg:text-[4.4rem]"
            >
              Paid growth for US brands.
              <span className="mt-2 block text-[var(--upw-muted)]">
                Ads, creative, tracking, and follow-up.
              </span>
            </h1>
            <p
              data-upw-hero
              className="mt-6 max-w-xl text-base leading-relaxed text-[var(--upw-muted)] sm:text-lg"
            >
              I&apos;m Asmat. I run Meta and Google Ads, plan the creative, fix tracking, and
              set up the automations behind the account. This page is work samples only.
              Message me on Upwork to talk.
            </p>
            <div data-upw-hero className="mt-8 flex flex-wrap gap-3">
              <a href={upworkHref} target="_blank" rel="noopener noreferrer" className={btnUpwork}>
                Message me on Upwork
                <ArrowUpRight />
              </a>
              <a href="#cases" className={btnQuiet}>
                Jump to case studies
                <ArrowRight />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            <div
              data-upw-portrait
              className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-[var(--upw-line)] bg-[var(--upw-surface)]"
            >
              <Image
                src="/portfolio/asmat-profile.jpg"
                alt="Asmat Ullah, performance marketer and creative strategist"
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 1024px) 440px, 90vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-6 pt-24">
                <p className="upw-display text-3xl font-bold text-white">Asmat Ullah</p>
                <p className="mt-1 text-sm text-zinc-300">
                  Media buyer · Creative strategist · Tracking &amp; ops
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="upw-shell" aria-label="Track record">
          <dl
            data-upw-reveal
            className="grid grid-cols-2 gap-px overflow-hidden rounded-[28px] border border-[var(--upw-line)] bg-[var(--upw-line)] lg:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="bg-[var(--upw-surface)] px-6 py-8">
                <dd className="upw-display text-4xl font-extrabold tracking-tight text-[var(--upw-ink)] sm:text-5xl">
                  {stat.value}
                </dd>
                <dt className="mt-3 text-sm leading-snug text-[var(--upw-muted)]">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </section>

        <section className="upw-shell pt-20" aria-labelledby="fit-heading">
          <div data-upw-reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--upw-accent)]">
              How I work with clients
            </p>
            <h2
              id="fit-heading"
              className="upw-display mt-3 text-3xl font-bold text-[var(--upw-ink)] sm:text-4xl"
            >
              Easy to work with. Clear on the desk.
            </h2>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {fitSignals.map((item) => (
              <li
                key={item.title}
                data-upw-reveal
                className="rounded-3xl border border-[var(--upw-line)] bg-[var(--upw-surface)] p-5"
              >
                <h3 className="font-semibold text-[var(--upw-ink)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--upw-muted)]">{item.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="upw-shell pt-20" aria-labelledby="desk-heading">
          <div data-upw-reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--upw-accent)]">
              What I cover
            </p>
            <h2
              id="desk-heading"
              className="upw-display mt-3 text-3xl font-bold text-[var(--upw-ink)] sm:text-4xl"
            >
              One person for ads, creative, data, and automations.
            </h2>
          </div>
          <ol className="mt-10 grid gap-px overflow-hidden rounded-[28px] border border-[var(--upw-line)] bg-[var(--upw-line)] md:grid-cols-2 lg:grid-cols-4">
            {desks.map((desk) => (
              <li key={desk.label} data-upw-reveal className="bg-[var(--upw-surface)] p-6 sm:p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--upw-accent)]">
                  {desk.label}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-[var(--upw-ink)]">{desk.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--upw-muted)]">{desk.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <div ref={workRef} id="cases" className="scroll-mt-24 pt-20">
          <section className="upw-shell">
            <div data-upw-reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--upw-accent)]">
                  Selected work
                </p>
                <h2 className="upw-display mt-3 text-3xl font-bold text-[var(--upw-ink)] sm:text-5xl">
                  Case studies from live ad accounts.
                </h2>
              </div>
            </div>
          </section>

          <div className="sticky top-0 z-30 mt-8 border-y border-[var(--upw-line)] bg-[var(--upw-bg)]/90 backdrop-blur-xl">
            <div
              className="upw-shell upw-no-scrollbar flex gap-2 overflow-x-auto py-3"
              role="tablist"
              aria-label="Filter portfolio"
            >
              {views.map((item) => {
                const active = view === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setView(item.id)}
                    className={`flex shrink-0 flex-col items-start rounded-2xl border px-4 py-2.5 text-left transition ${
                      active
                        ? "border-[var(--upw-accent)] bg-[var(--upw-accent)] text-[#101218]"
                        : "border-[var(--upw-line)] text-[var(--upw-ink)] hover:border-[var(--upw-ink)]/35"
                    }`}
                  >
                    <span className="text-sm font-semibold">{item.label}</span>
                    <span className={`text-[11px] ${active ? "text-[#101218]/75" : "text-[var(--upw-muted)]"}`}>
                      {item.detail}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {showCases && (
            <section className="upw-shell pt-10">
              <div className="grid gap-5 md:grid-cols-2">
                {cases.map((study) => (
                  <CaseCard
                    key={study.slug}
                    study={study}
                    number={featuredCases.indexOf(study) + 1}
                    onOpen={() => openCase(study.slug)}
                  />
                ))}
              </div>

              {more.length > 0 && (
                <div className="mt-16">
                  <h3 className="upw-display text-2xl font-bold text-[var(--upw-ink)]">
                    More results
                  </h3>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {more.map((study) => (
                      <MiniCard key={study.slug} study={study} onOpen={() => openCase(study.slug)} />
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}

          {showCreative && (
            <section className="upw-shell pt-20">
              <UpworkCreative />
            </section>
          )}
        </div>

        <section className="upw-shell py-24">
          <div
            data-upw-reveal
            className="rounded-[36px] border border-[var(--upw-line)] bg-[radial-gradient(90%_120%_at_100%_0%,rgba(255,106,61,0.18),transparent_55%),var(--upw-surface)] px-6 py-14 text-center sm:px-12 sm:py-16"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--upw-accent)]">
              Next step
            </p>
            <h2 className="upw-display mx-auto mt-4 max-w-2xl text-3xl font-extrabold leading-tight text-[var(--upw-ink)] sm:text-5xl">
              Ready to talk about your account?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[var(--upw-muted)]">
              Hire or message me on Upwork. Please keep all pre-contract communication on
              the platform.
            </p>
            <a
              href={upworkHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnUpwork} mt-8 px-7 py-3.5 text-base`}
            >
              Open my Upwork profile
              <ArrowUpRight />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--upw-line)] py-8">
        <div className="upw-shell flex flex-col gap-2 text-xs text-[var(--upw-muted)] sm:flex-row sm:justify-between">
          <p>
            © 2026 Marketing with Asmat LLC. Confidential client work shown for portfolio
            purposes.
          </p>
          <p>Contact via Upwork only until a contract is in place.</p>
        </div>
      </footer>

      <Suspense fallback={null}>
        <CaseModalHost />
      </Suspense>
    </div>
  );
}

function openCase(slug: string) {
  window.history.replaceState(null, "", `?case=${slug}`);
}

function closeCase() {
  window.history.replaceState(null, "", window.location.pathname);
}

function CaseModalHost() {
  const requested = useSearchParams().get("case");
  const slug = requested ? (caseSlugAliases[requested] ?? requested) : null;
  const index = slug ? allCases.findIndex((study) => study.slug === slug) : -1;
  if (index < 0) return null;

  return (
    <UpworkCaseModal
      study={allCases[index]}
      position={index + 1}
      total={allCases.length}
      prev={allCases[(index - 1 + allCases.length) % allCases.length]}
      next={allCases[(index + 1) % allCases.length]}
      onClose={closeCase}
      onNavigate={openCase}
    />
  );
}

function CaseCard({
  study,
  number,
  onOpen,
}: {
  study: CaseStudy;
  number: number;
  onOpen: () => void;
}) {
  return (
    <article
      data-upw-case
      className="group flex flex-col overflow-hidden rounded-[28px] border border-[var(--upw-line)] bg-[var(--upw-surface)] transition hover:border-[var(--upw-accent)]/35"
    >
      <button type="button" onClick={onOpen} className="block p-3 pb-0 text-left sm:p-4 sm:pb-0">
        <BrowserFrame platform={study.platform}>
          <div className="relative aspect-[2.15/1]">
            <Image
              src={study.image.src}
              alt={study.image.alt}
              fill
              sizes="(min-width: 768px) 560px, 100vw"
              className="object-contain transition duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </BrowserFrame>
      </button>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--upw-muted)]">
          <span className="upw-display text-3xl font-bold normal-case tracking-tight text-[var(--upw-accent)]">
            {String(number).padStart(2, "0")}
          </span>
          <span className="line-clamp-1">{study.niche}</span>
        </div>
        <p className="mt-3 text-sm text-[var(--upw-ink)]/80">
          {study.client} <span className="text-[var(--upw-muted)]">· {study.platform}</span>
        </p>
        <h3 className="upw-display mt-2 text-xl font-bold leading-snug text-[var(--upw-ink)] sm:text-2xl">
          <button type="button" onClick={onOpen} className="text-left hover:text-[var(--upw-accent)]">
            {study.headline}
          </button>
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--upw-muted)]">{study.summary}</p>
        <dl className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--upw-line)] bg-[var(--upw-line)] sm:grid-cols-4">
          {study.metrics.map((metric) => (
            <div key={metric.label} className="bg-[#101218] px-3 py-3">
              <dd className="text-base font-bold text-[var(--upw-ink)]">{metric.value}</dd>
              <dt className="mt-0.5 text-[10px] leading-tight text-[var(--upw-muted)]">{metric.label}</dt>
            </div>
          ))}
        </dl>
        <button type="button" onClick={onOpen} className={`${btnUpwork} mt-6 self-start`}>
          Read the case study
          <ArrowRight />
        </button>
      </div>
    </article>
  );
}

function MiniCard({ study, onOpen }: { study: CaseStudy; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex flex-col overflow-hidden rounded-[24px] border border-[var(--upw-line)] bg-[var(--upw-surface)] text-left transition hover:border-[var(--upw-accent)]/35"
    >
      <div className="relative aspect-[2.1/1] overflow-hidden border-b border-[var(--upw-line)] bg-white">
        <Image
          src={study.image.src}
          alt={study.image.alt}
          fill
          sizes="(min-width: 1024px) 380px, 50vw"
          className="object-cover object-top transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--upw-muted)]">
          {study.niche}
        </span>
        <span className="mt-2 text-base font-semibold leading-snug text-[var(--upw-ink)]">
          {study.headline}
        </span>
        <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-medium text-[var(--upw-accent)]">
          Open breakdown
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </button>
  );
}
