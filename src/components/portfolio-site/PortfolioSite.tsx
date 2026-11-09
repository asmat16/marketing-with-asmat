"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Footer } from "@/components/Footer";
import {
  allCases,
  caseSlugAliases,
  creativeWork,
  featuredCases,
  moreCases,
  ugcVideos,
  type CaseStudy,
} from "@/lib/case-studies";
import { footerBlurb } from "@/lib/foundation";
import { siteConfig } from "@/lib/site";
import { BrowserFrame } from "./BrowserFrame";
import { CaseStudyModal } from "./CaseStudyModal";
import { CreativeShowcase } from "./CreativeShowcase";
import { bookHref, defaultWhatsapp, mailHref } from "./contact";
import { ArrowRight, ArrowUpRight, Calendar, Mail, Star, WhatsApp } from "./icons";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type View = "all" | "ecommerce" | "leadgen" | "ads" | "creative";

const officeHours = "Monday to Friday · 9am to 5pm US Eastern Time (ET)";

const stats = [
  { value: 20, prefix: "$", suffix: "M+", label: "Ad budget managed" },
  { value: 200, prefix: "$", suffix: "K+", label: "Earned on Upwork in the last 3 years" },
  { value: 80, prefix: "", suffix: "+", label: "US clients managed at Wojo Media" },
  { value: 8, prefix: "", suffix: "+ yrs", label: "On Meta and Google Ads" },
];

const marquee = [
  "KIMITH",
  "Performance AC",
  "The Lovery",
  "Wojo Media",
  "Ketolibriyum",
  "ShapedBae",
  "Women's apparel",
  "Skincare & beauty",
  "Fine jewelry",
  "Home services",
  "High-ticket education",
  "UGC for TikTok & Meta",
  "Google Search",
];

const playbook = [
  {
    step: "01",
    title: "Fix tracking",
    body: "Meta Pixel and Conversions API, GTM, Google tags and Hyros. Ad numbers checked against Shopify or the CRM so every sale and booking is real.",
  },
  {
    step: "02",
    title: "Know the numbers",
    body: "Margins, AOV, break-even ROAS and cost per booked call. We agree on what a win is before any budget goes up.",
  },
  {
    step: "03",
    title: "Plan the content",
    body: "Angles, hooks, UGC scripts and statics. After Andromeda, the creative does most of the targeting, so it gets planned first.",
  },
  {
    step: "04",
    title: "Build and test",
    body: "Prospecting, Advantage+, catalog and small retargeting. For lead gen, campaigns split by intent and scored on bookings. New creative every week.",
  },
  {
    step: "05",
    title: "Scale with control",
    body: "Budgets rise step by step on the winners. MER, CAC and cost per booking checked every week, reported in plain English.",
  },
];

const ecommerceCount = allCases.filter((study) => study.category === "ecommerce").length;
const leadgenCount = allCases.filter((study) => study.category === "leadgen").length;

const views: { id: View; label: string; detail: string }[] = [
  { id: "all", label: "All work", detail: "Everything" },
  { id: "ecommerce", label: "E-commerce & DTC", detail: `${ecommerceCount} case studies` },
  { id: "leadgen", label: "Lead generation", detail: `${leadgenCount} case studies` },
  { id: "ads", label: "Ads results", detail: `${allCases.length} ad accounts` },
  {
    id: "creative",
    label: "Creative & UGC",
    detail: `${ugcVideos.length} videos · ${creativeWork.length} designs`,
  },
];

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-teal-300 px-5 py-3 text-sm font-semibold text-zinc-950 shadow-[0_10px_40px_-10px_rgba(45,212,191,0.7)] transition hover:-translate-y-0.5 hover:bg-teal-200";
const btnGhost =
  "inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-white/40";

export function PortfolioSite() {
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

  const selectView = (next: View, always = false) => {
    setView(next);
    const el = document.getElementById("work");
    if (el && (always || el.getBoundingClientRect().top < 0)) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
    }
  };

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .from("[data-hero-item]", { y: 32, autoAlpha: 0, duration: 0.9, stagger: 0.07 })
          .from(
            "[data-hero-portrait]",
            {
              clipPath: "inset(18% 18% 18% 18% round 40px)",
              scale: 1.08,
              duration: 1.3,
              ease: "expo.out",
            },
            0.1,
          )
          .from(
            "[data-hero-badge]",
            { y: 20, scale: 0.9, autoAlpha: 0, duration: 0.7, stagger: 0.12 },
            0.7,
          );

        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
          const target = Number(el.dataset.count);
          const prefix = el.dataset.prefix ?? "";
          const suffix = el.dataset.suffix ?? "";
          const counter = { value: 0 };
          gsap.to(counter, {
            value: target,
            duration: 1.8,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 92%", once: true },
            onUpdate: () => {
              el.textContent = `${prefix}${Math.round(counter.value)}${suffix}`;
            },
          });
        });

        gsap.utils
          .toArray<HTMLElement>("[data-pf-reveal]")
          .filter((el) => !workRef.current?.contains(el))
          .forEach((el) => {
            gsap.from(el, {
              y: 48,
              autoAlpha: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 90%", once: true },
            });
          });

        gsap.to("[data-orb]", {
          yPercent: 30,
          ease: "none",
          scrollTrigger: { trigger: rootRef.current, start: "top top", end: "bottom top", scrub: 1 },
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
        gsap.utils.toArray<HTMLElement>("[data-pf-reveal]").forEach((el) => {
          gsap.from(el, {
            y: 48,
            autoAlpha: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-case-card]").forEach((card, i) => {
          const media = card.querySelector("[data-case-media]");
          const tl = gsap.timeline({
            scrollTrigger: { trigger: card, start: "top 88%", once: true },
          });
          tl.from(card, { y: 60, autoAlpha: 0, duration: 0.9, delay: (i % 2) * 0.12, ease: "power3.out" });
          if (media) {
            tl.from(
              media,
              { clipPath: "inset(0% 0% 100% 0% round 18px)", duration: 1.1, ease: "expo.out" },
              0.2,
            );
          }
        });
        requestAnimationFrame(() => ScrollTrigger.refresh());
      });
      return () => mm.revert();
    },
    { scope: workRef, dependencies: [view], revertOnUpdate: true },
  );

  return (
    <>
      <div ref={rootRef} className="pf-root">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[900px] overflow-hidden">
          <div
            data-orb
            className="absolute -left-40 -top-40 h-[620px] w-[620px] rounded-full bg-teal-400/20 blur-[140px]"
          />
          <div
            data-orb
            className="absolute -right-20 top-40 h-[480px] w-[480px] rounded-full bg-indigo-500/15 blur-[140px]"
          />
          <div className="pf-grid absolute inset-0" />
        </div>

        <TopBar onSelect={selectView} />

        <main className="relative">
          <Hero />

          <section aria-label="Track record" className="pf-shell">
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.08] lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-[#0c0c12] px-6 py-8 sm:px-8 sm:py-10">
                  <dd
                    data-count={stat.value}
                    data-prefix={stat.prefix}
                    data-suffix={stat.suffix}
                    className="text-4xl font-semibold tracking-tight text-white sm:text-5xl"
                  >
                    {stat.prefix}
                    {stat.value}
                    {stat.suffix}
                  </dd>
                  <dt className="mt-3 text-sm leading-snug text-zinc-400">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </section>

          <div className="pf-marquee mt-16 border-y border-white/[0.07] py-5" aria-hidden>
            <div className="pf-marquee-track flex w-max gap-10">
              {[...marquee, ...marquee].map((item, i) => (
                <span key={`${item}-${i}`} className="flex items-center gap-10 whitespace-nowrap">
                  <span className="font-display text-2xl italic text-zinc-300 sm:text-3xl">{item}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-300/70" />
                </span>
              ))}
            </div>
          </div>

          <div ref={workRef}>
            <section id="work" className="pf-shell scroll-mt-24 pt-24 sm:pt-28">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">
                    All-in-one portfolio · 2018 to 2026
                  </p>
                  <h2 className="mt-4 text-4xl font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl">
                    Ads results and creative,{" "}
                    <span className="font-display font-normal italic text-teal-200">in one place.</span>
                  </h2>
                  <p className="mt-5 max-w-2xl text-zinc-400 sm:text-lg">
                    Choose what you want to see: e-commerce, lead generation, the ad account
                    results, or the UGC and designs behind them.
                  </p>
                </div>
              </div>
            </section>

            <div className="sticky top-[97px] z-30 mt-10 border-y border-white/[0.07] bg-[#09090d]/85 backdrop-blur-xl">
              <div
                className="pf-shell pf-no-scrollbar flex gap-2 overflow-x-auto py-3"
                role="tablist"
                aria-label="Choose what to see"
              >
                {views.map((item) => {
                  const active = view === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => selectView(item.id)}
                      className={`flex shrink-0 flex-col items-start rounded-2xl border px-4 py-2.5 text-left transition sm:px-5 ${
                        active
                          ? "border-teal-300 bg-teal-300 text-zinc-950 shadow-[0_10px_30px_-10px_rgba(45,212,191,0.7)]"
                          : "border-white/10 bg-white/[0.03] text-white hover:border-white/30"
                      }`}
                    >
                      <span className="text-sm font-semibold sm:text-[15px]">{item.label}</span>
                      <span className={`text-[11px] ${active ? "text-zinc-800" : "text-zinc-500"}`}>
                        {item.detail}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {showCases && (
              <section id="case-studies" className="pf-shell scroll-mt-44 pt-14">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Case studies
                  </h3>
                  <span className="text-sm text-zinc-500">
                    {cases.length} full breakdowns · click any card to open
                  </span>
                </div>
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {cases.map((study) => (
                    <CaseCard
                      key={study.slug}
                      study={study}
                      number={featuredCases.indexOf(study) + 1}
                      onOpen={() => openCase(study.slug)}
                    />
                  ))}
                </div>
              </section>
            )}

            {showCases && more.length > 0 && (
              <section id="more-results" className="pf-shell scroll-mt-44 pt-24">
                <div data-pf-reveal className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">
                    Quick reads
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    More results from the ad accounts
                  </h3>
                  <p className="mt-3 text-zinc-400">
                    Shorter case studies from DTC brands whose names stay private. Each one
                    opens with the same breakdown.
                  </p>
                </div>
                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {more.map((study) => (
                    <MiniCaseCard key={study.slug} study={study} onOpen={() => openCase(study.slug)} />
                  ))}
                </div>
              </section>
            )}

            {showCreative && (
              <section id="creative" className="pf-shell scroll-mt-44 pt-28">
                <CreativeShowcase />
              </section>
            )}
          </div>

          <MidCta />

          <section id="process" className="pf-shell scroll-mt-28 pt-28">
            <div data-pf-reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">
                  How I work
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                  The same five steps behind every result above
                </h2>
              </div>
              <Link href="/systems" className={btnGhost}>
                Read my full strategy
                <ArrowUpRight />
              </Link>
            </div>
            <ol className="mt-12 grid gap-px overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.08] md:grid-cols-5">
              {playbook.map((item) => (
                <li key={item.step} className="bg-[#0c0c12] p-6 sm:p-7">
                  <span className="font-display text-4xl italic text-teal-300">{item.step}</span>
                  <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.body}</p>
                </li>
              ))}
            </ol>
          </section>

          <AboutContact />
        </main>

        <MobileBar />

        <Suspense fallback={null}>
          <CaseModalHost />
        </Suspense>
      </div>
      <Footer blurb={footerBlurb} />
      <div className="h-20 lg:hidden" aria-hidden />
    </>
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
    <CaseStudyModal
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

function TopBar({ onSelect }: { onSelect: (view: View, always?: boolean) => void }) {
  return (
    <div className="sticky top-0 z-50">
      <div className="bg-teal-300 text-zinc-950">
        <div className="pf-shell flex h-8 items-center justify-center gap-2 text-center text-xs font-medium sm:text-[13px]">
          <span className="hidden sm:inline">You&apos;re viewing my portfolio.</span>
          <span>Seen enough?</span>
          <a
            href={bookHref("topbar")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold underline decoration-zinc-950/40 underline-offset-4 hover:decoration-zinc-950"
          >
            Book a 15-min call
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
      <header className="border-b border-white/[0.07] bg-[#09090d]/80 backdrop-blur-xl">
        <div className="pf-shell flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Marketing with Asmat home">
            <Image
              src="/brand/logos/logo-square-on-dark.svg"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-sm font-semibold text-white">
              Marketing with Asmat
              <span className="ml-2 hidden font-normal text-zinc-500 sm:inline">/ Portfolio</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-zinc-400 lg:flex">
            <button type="button" onClick={() => onSelect("ads", true)} className="transition hover:text-white">
              Case studies
            </button>
            <button type="button" onClick={() => onSelect("creative", true)} className="transition hover:text-white">
              Creative & UGC
            </button>
            <a href="#process" className="transition hover:text-white">How I work</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
            <Link href="/" className="inline-flex items-center gap-1 transition hover:text-white">
              Main site <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={mailHref("Saw your portfolio")}
              className="hidden items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:border-white/40 sm:inline-flex"
            >
              <Mail />
              Email me
            </a>
            <a
              href={bookHref("header")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-teal-200"
            >
              <Calendar />
              Book a call
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

function Hero() {
  return (
    <section className="pf-shell grid items-center gap-14 pb-20 pt-12 sm:pt-16 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-20">
      <div className="lg:col-span-7">
        <p
          data-hero-item
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-zinc-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Taking new US clients · {officeHours}
        </p>
        <h1
          data-hero-item
          className="mt-7 text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl lg:text-[4.4rem]"
        >
          Case studies from{" "}
          <span className="font-display font-normal italic text-teal-200">real</span> ad
          accounts, and the{" "}
          <span className="font-display font-normal italic text-teal-200">content</span> that
          drove them.
        </h1>
        <div data-hero-item className="mt-6 flex flex-wrap gap-2">
          {["Meta & Google Ads", "Creative strategy & UGC", "Funnels & tracking"].map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-teal-300/25 bg-teal-300/[0.07] px-3.5 py-1.5 text-xs font-medium text-teal-100"
            >
              {chip}
            </span>
          ))}
        </div>
        <p data-hero-item className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          I&apos;m Asmat, a performance marketer and creative strategist for US e-commerce
          brands and lead gen businesses. After Meta&apos;s Andromeda update, content is
          the key, so I run the ads and plan the creative behind them. Below: six full case
          studies with screenshots from the live ad accounts, plus the UGC videos and
          designs I made for clients.
        </p>
        <div data-hero-item className="mt-8 flex flex-wrap gap-3">
          <a href={bookHref("hero")} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
            <Calendar />
            Book a 15-min call
          </a>
          <a href={mailHref("Saw your portfolio")} className={btnGhost}>
            <Mail />
            Email me
          </a>
          <a href={defaultWhatsapp} target="_blank" rel="noopener noreferrer" className={btnGhost}>
            <WhatsApp />
            WhatsApp
          </a>
          <a href={siteConfig.links.upwork} target="_blank" rel="noopener noreferrer" className={btnGhost}>
            Hire me on Upwork
            <ArrowUpRight />
          </a>
          <Link href="/" className={btnGhost}>
            Learn more about me
            <ArrowUpRight />
          </Link>
        </div>
        <div data-hero-item className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-sm">
          <a href="#work" className="group inline-flex items-center gap-2 text-white">
            Jump to the portfolio
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <Link href="/systems" className="group inline-flex items-center gap-2 text-zinc-400 hover:text-white">
            See my strategy
            <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <Link href="/" className="group inline-flex items-center gap-2 text-zinc-400 hover:text-white">
            marketingwithasmat.pro
            <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
        <div
          data-hero-portrait
          className="relative aspect-[4/5] overflow-hidden rounded-[36px] border border-white/10 bg-zinc-900"
        >
          <Image
            src="/portfolio/asmat-profile.jpg"
            alt="Asmat Ullah, performance marketer and creative strategist for US e-commerce brands and lead gen businesses"
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 1024px) 480px, 90vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 pt-24">
            <p className="font-display text-3xl text-white">Asmat Ullah</p>
            <p className="mt-1 text-sm text-zinc-300">
              Performance marketer &amp; creative strategist · Marketing with Asmat LLC
            </p>
          </div>
        </div>
        <div
          data-hero-badge
          className="absolute -left-3 top-8 flex items-center gap-2.5 rounded-2xl border border-white/10 bg-[#111118]/90 px-4 py-3 shadow-2xl backdrop-blur sm:-left-8"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
            <Star />
          </span>
          <span>
            <span className="block text-sm font-semibold text-white">Top Rated Plus</span>
            <span className="block text-xs text-zinc-400">Upwork · 100% Job Success</span>
          </span>
        </div>
        <div
          data-hero-badge
          className="absolute -right-3 bottom-28 rounded-2xl border border-white/10 bg-[#111118]/90 px-4 py-3 shadow-2xl backdrop-blur sm:-right-8"
        >
          <span className="block text-2xl font-semibold tracking-tight text-teal-200">$200K+</span>
          <span className="block text-xs text-zinc-400">earned on Upwork, last 3 years</span>
        </div>
      </div>
    </section>
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
      data-case-card
      className="group flex flex-col overflow-hidden rounded-[30px] border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] transition-colors duration-500 hover:border-teal-300/30"
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Open case study: ${study.headline}`}
        className="relative block p-3 pb-0 text-left sm:p-4 sm:pb-0"
      >
        <div data-case-media>
          <BrowserFrame platform={study.platform}>
            <div className="relative aspect-[2.15/1]">
              <Image
                src={study.image.src}
                alt={study.image.alt}
                fill
                sizes="(min-width: 768px) 620px, 100vw"
                className="object-contain transition duration-[900ms] ease-out group-hover:scale-[1.04]"
              />
            </div>
            <span className="pointer-events-none absolute inset-0 grid place-items-center bg-black/0 transition duration-500 group-hover:bg-black/40">
              <span className="translate-y-3 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 opacity-0 shadow-xl transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                Open case study
              </span>
            </span>
          </BrowserFrame>
        </div>
      </button>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-400">
          <span className="font-display text-3xl normal-case italic tracking-normal text-teal-300">
            {String(number).padStart(2, "0")}
          </span>
          <span className="h-px w-6 bg-white/20" />
          <span className="line-clamp-1">{study.niche}</span>
        </div>
        <p className="mt-4 text-sm font-medium text-white/80">
          {study.client} <span className="text-zinc-500">· {study.platform}</span>
        </p>
        <h3 className="mt-2 text-2xl font-semibold leading-[1.15] tracking-tight text-white sm:text-[1.7rem]">
          <button type="button" onClick={onOpen} className="text-left hover:text-teal-100">
            {study.headline}
          </button>
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">{study.summary}</p>

        {study.shift && (
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            <span className="text-zinc-500">{study.shift.label}</span>
            <span className="text-zinc-500 line-through decoration-rose-400/60">{study.shift.from}</span>
            <ArrowRight className="h-4 w-4 text-teal-300" />
            <span className="font-semibold text-teal-200">{study.shift.to}</span>
          </div>
        )}

        <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-4">
          {study.metrics.map((metric) => (
            <div key={metric.label} className="bg-[#0d0d13] px-4 py-3.5">
              <dd className="text-lg font-semibold tracking-tight text-white sm:text-xl">{metric.value}</dd>
              <dt className="mt-0.5 text-[11px] leading-tight text-zinc-500">{metric.label}</dt>
            </div>
          ))}
        </dl>

        <div className="mt-auto flex flex-wrap gap-3 pt-7">
          <button type="button" onClick={onOpen} className={btnPrimary}>
            Read the case study
            <ArrowRight />
          </button>
          <a href={bookHref(study.slug)} target="_blank" rel="noopener noreferrer" className={btnGhost}>
            Ask me about it
          </a>
        </div>
      </div>
    </article>
  );
}

function MiniCaseCard({ study, onOpen }: { study: CaseStudy; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex flex-col overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.02] text-left transition duration-500 hover:-translate-y-1 hover:border-teal-300/25"
    >
      <div className="relative aspect-[2.1/1] overflow-hidden border-b border-white/[0.07] bg-white">
        <Image
          src={study.image.src}
          alt={study.image.alt}
          fill
          sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-black/75 px-3 py-1 text-xs font-semibold text-teal-200 backdrop-blur">
          {study.metrics[0].value} {study.metrics[0].label}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500">
          {study.niche}
        </span>
        <span className="mt-3 text-lg font-semibold leading-snug text-white">{study.headline}</span>
        <span className="mt-3 text-sm leading-relaxed text-zinc-400">{study.summary}</span>
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-teal-200">
          Read the breakdown
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </button>
  );
}

function MidCta() {
  return (
    <section className="pf-shell pt-28">
      <div
        data-pf-reveal
        className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[radial-gradient(90%_120%_at_100%_0%,rgba(129,140,248,0.22),transparent_60%),radial-gradient(90%_120%_at_0%_100%,rgba(45,212,191,0.22),transparent_60%),#101017] px-6 py-14 text-center sm:px-14 sm:py-20"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">
          Seen a case like yours?
        </p>
        <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
          Let&apos;s talk about your account over a{" "}
          <span className="font-display font-normal italic text-teal-200">15-minute coffee.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-zinc-400">
          Bring your ad account and the one number you want to move. I&apos;ll tell you what
          I&apos;d fix first. No pitch deck, no obligation.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a href={bookHref("mid-cta")} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
            <Calendar />
            Book a 15-min call
          </a>
          <a href={mailHref("Let's talk about my ads")} className={btnGhost}>
            <Mail />
            {siteConfig.businessEmail}
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutContact() {
  const channels = [
    { label: "Book a call", value: "15-min strategy call", href: bookHref("contact"), external: true },
    { label: "Email", value: siteConfig.businessEmail, href: mailHref("Saw your portfolio") },
    { label: "Email (Gmail)", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { label: "WhatsApp / Phone", value: siteConfig.phoneDisplay, href: defaultWhatsapp, external: true },
    { label: "Upwork", value: "Top Rated Plus · $200K+ earned", href: siteConfig.links.upwork, external: true },
    { label: "LinkedIn", value: "linkedin.com/in/asmat16", href: siteConfig.links.linkedin, external: true },
  ];

  return (
    <section id="contact" className="pf-shell scroll-mt-28 pb-28 pt-28">
      <div className="grid gap-6 lg:grid-cols-12">
        <div
          data-pf-reveal
          className="flex flex-col gap-8 rounded-[32px] border border-white/[0.08] bg-white/[0.02] p-6 sm:flex-row sm:p-8 lg:col-span-7"
        >
          <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden rounded-3xl sm:w-52">
            <Image
              src="/portfolio/asmat-profile.jpg"
              alt="Asmat Ullah"
              fill
              sizes="(min-width: 640px) 208px, 90vw"
              className="object-cover object-top"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">About me</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-white">
              One person on the whole path from{" "}
              <span className="font-display font-normal italic text-teal-200">click to sale.</span>
            </h2>
            <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-zinc-400">
              <p>
                I&apos;ve spent 8+ years on Meta and Google Ads and managed more than $20M
                in ad budget. I&apos;m Top Rated Plus on Upwork, where I&apos;ve earned
                $200K+ in the last three years.
              </p>
              <p>
                At Wojo Media I manage 80+ US client accounts. I work with US clients
                only, Monday to Friday, 9am to 5pm US Eastern Time, so you get answers
                during your business day.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/" className={btnGhost}>
                Know more about me
                <ArrowUpRight />
              </Link>
              <Link href="/systems" className={btnGhost}>
                My strategy
                <ArrowUpRight />
              </Link>
            </div>
          </div>
        </div>

        <div
          data-pf-reveal
          className="rounded-[32px] border border-teal-300/20 bg-[radial-gradient(100%_100%_at_100%_0%,rgba(45,212,191,0.14),transparent_60%),#0f0f15] p-6 sm:p-8 lg:col-span-5"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">Get in touch</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
            Monday to Friday, 9am to 5pm
          </h2>
          <p className="mt-1 text-sm text-zinc-400">US Eastern Time (ET)</p>
          <ul className="mt-6 divide-y divide-white/[0.07]">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center justify-between gap-4 py-3.5"
                >
                  <span>
                    <span className="block text-xs text-zinc-500">{channel.label}</span>
                    <span className="block text-sm font-medium text-white group-hover:text-teal-200">
                      {channel.value}
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-zinc-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-200" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function MobileBar() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-40 flex gap-2 rounded-full border border-white/10 bg-[#111118]/90 p-1.5 shadow-2xl backdrop-blur-xl lg:hidden">
      <a
        href={bookHref("mobile-bar")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-teal-300 py-3 text-sm font-semibold text-zinc-950"
      >
        <Calendar />
        Book a call
      </a>
      <a
        href={defaultWhatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="grid w-12 place-items-center rounded-full border border-white/10 text-white"
      >
        <WhatsApp />
      </a>
      <a
        href={mailHref("Saw your portfolio")}
        aria-label="Email"
        className="grid w-12 place-items-center rounded-full border border-white/10 text-white"
      >
        <Mail />
      </a>
    </div>
  );
}
