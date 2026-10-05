"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  addOns,
  contentPlan,
  deskCards,
  deskPlan,
  faqs,
  included,
  lanes,
  linkedin,
  mediaPlans,
  notIncluded,
  outOfScope,
  pricingNotes,
  scoreLine,
  trades,
  tradesChannels,
  tradesNav,
  tradesPreview,
  tradesStats,
  tradesWhatsapp,
  upwork,
} from "@/lib/trades-demo";
import { featuredCaseStudies, siteConfig } from "@/lib/site";
import { testimonials } from "@/lib/testimonials";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function CopyButton({ text }: { text: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  return (
    <button
      type="button"
      aria-live="polite"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setState("copied");
        } catch {
          setState("failed");
        }
      }}
      className="rounded-full border border-[#e39a45]/40 px-4 py-2 text-sm font-semibold text-[#f0c27a] transition-colors hover:bg-[#e39a45]/10"
    >
      {state === "copied" ? "Copied" : state === "failed" ? "Select the text below" : "Copy"}
    </button>
  );
}

function DeskFace({
  card,
}: {
  card: (typeof deskCards)[number];
}) {
  return (
    <div className="desk-drift rounded-[1.4rem] border border-[#e39a45]/30 bg-[#1a2117] p-5 shadow-[0_30px_60px_-28px_rgba(0,0,0,0.85)]">
      <p className="text-[11px] font-semibold tracking-[0.18em] text-[#e7b56a] uppercase">
        {card.kicker}
      </p>
      <h3 className="trades-serif mt-3 text-3xl text-[#f7f3ea]">{card.title}</h3>
      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#d9d3c5]">
        {card.lines.map((line) => (
          <li key={line} className="flex gap-2">
            <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d7e38a]" />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TradesDemo() {
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [shot, setShot] = useState<number | null>(null);

  useGSAP(
    (_context, contextSafe) => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".hero-rise", {
          y: 28,
          autoAlpha: 0,
          stagger: 0.07,
          duration: 0.72,
          ease: "power3.out",
        });

        gsap.utils.toArray<HTMLElement>("[data-desk]").forEach((el) => {
          gsap.from(el, {
            y: 28,
            autoAlpha: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          });
        });
      });

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const stage = stageRef.current;
        const pin = pinRef.current;
        if (!stage || !pin || !contextSafe) return;

        gsap.set(".desk-card", { transformPerspective: 1000 });
        gsap.set(".desk-card-back", { z: -12, rotationY: -4 });
        gsap.set(".desk-card-mid", { z: 0, rotationY: -1 });
        gsap.set(".desk-card-front", { z: 16, rotationY: 3 });

        gsap.from(".desk-card", {
          rotationX: -16,
          autoAlpha: 0,
          stagger: 0.12,
          duration: 0.9,
          ease: "power3.out",
          transformOrigin: "center bottom",
          delay: 0.15,
        });

        const rotY = gsap.quickTo(stage, "rotationY", { duration: 0.6, ease: "power3" });
        const rotX = gsap.quickTo(stage, "rotationX", { duration: 0.6, ease: "power3" });

        const onMove = contextSafe((event: PointerEvent) => {
          const bounds = stage.getBoundingClientRect();
          const px = (event.clientX - bounds.left) / bounds.width - 0.5;
          const py = (event.clientY - bounds.top) / bounds.height - 0.5;
          rotY(px * 12);
          rotX(py * -8);
        });
        const onLeave = contextSafe(() => {
          rotY(0);
          rotX(0);
        });
        stage.addEventListener("pointermove", onMove);
        stage.addEventListener("pointerleave", onLeave);

        gsap.to(".desk-card-back .desk-drift", {
          y: 54,
          ease: "none",
          scrollTrigger: {
            trigger: stage,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.7,
          },
        });
        gsap.to(".desk-card-front .desk-drift", {
          y: -46,
          ease: "none",
          scrollTrigger: {
            trigger: stage,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.7,
          },
        });

        const cards = gsap.utils.toArray<HTMLElement>(".lane-card");
        cards.forEach((card, index) => {
          gsap.set(card, {
            y: index * 18,
            zIndex: cards.length - index,
            transformPerspective: 900,
          });
        });

        const peel = gsap.timeline({
          scrollTrigger: {
            trigger: pin,
            start: "top 108px",
            end: `+=${Math.max(cards.length - 1, 1) * 480}`,
            pin: true,
            scrub: 0.55,
            anticipatePin: 1,
          },
        });

        cards.forEach((card, index) => {
          if (index === cards.length - 1) return;
          peel.to(card, {
            y: -240,
            rotationX: 22,
            autoAlpha: 0,
            duration: 1,
            ease: "power2.inOut",
          });
          peel.to(
            cards[index + 1],
            { y: 0, duration: 1, ease: "power2.inOut" },
            "<",
          );
        });

        requestAnimationFrame(() => ScrollTrigger.refresh());

        return () => {
          stage.removeEventListener("pointermove", onMove);
          stage.removeEventListener("pointerleave", onLeave);
        };
      });

      return () => mm.revert();
    },
    { scope: rootRef },
  );

  useEffect(() => {
    if (shot === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShot(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [shot]);

  return (
    <div ref={rootRef}>
      <div className="site-chrome fixed top-0 z-50">
        <div className="flex h-9 items-center justify-center bg-[#e39a45] px-3 text-center text-xs font-semibold text-[#1a140c]">
          {tradesPreview.banner}
        </div>
        <header className="border-b border-white/10 bg-[#0e120c]/90 backdrop-blur-xl">
          <div className="page-shell flex h-16 items-center justify-between gap-4">
            <Link href="/demo" className="text-[#f4f1e8]" onClick={() => setOpen(false)}>
              <span className="text-sm font-semibold tracking-wide text-[#c8c2b4]">
                Marketing <span className="font-normal text-[#8f897c]">with</span>
              </span>{" "}
              <span className="text-sm font-bold tracking-[0.16em] text-[#f0c27a]">ASMAT</span>
            </Link>
            <nav className="hidden items-center gap-6 lg:flex">
              {tradesNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[#c8c2b4] transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-[#d9d3c5] lg:hidden"
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((value) => !value)}
              >
                {open ? "✕" : "☰"}
              </button>
              <Link
                href={siteConfig.links.book}
                className="rounded-full bg-[#e39a45] px-4 py-2 text-sm font-semibold text-[#1a140c] transition-transform hover:scale-[1.03]"
              >
                Book a call
              </Link>
            </div>
          </div>
          {open ? (
            <nav className="border-t border-white/10 px-5 py-4 lg:hidden">
              <ul className="space-y-3">
                {tradesNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block text-base text-[#f4f1e8]"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </header>
      </div>

      <main className="pb-24 pt-28 lg:pb-0">
        <section className="page-shell grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div>
            <p className="hero-rise text-xs font-semibold tracking-[0.22em] text-[#e7b56a] uppercase">
              {tradesPreview.eyebrow}
            </p>
            <h1 className="hero-rise mt-4 max-w-xl text-4xl font-semibold tracking-tight text-[#f7f3ea] sm:text-6xl sm:leading-[1.02]">
              {tradesPreview.headline}
            </h1>
            <p className="trades-serif hero-rise mt-5 max-w-xl text-2xl leading-snug text-[#f0c27a] italic sm:text-3xl">
              {tradesPreview.accent}
            </p>
            <p className="hero-rise mt-6 max-w-xl text-base leading-relaxed text-[#d4cec1] sm:text-lg">
              {tradesPreview.support}
            </p>
            <div className="hero-rise mt-8 flex flex-wrap gap-3">
              <Link
                href={siteConfig.links.book}
                className="rounded-full bg-[#e39a45] px-5 py-3 text-sm font-semibold text-[#1a140c]"
              >
                {tradesPreview.primary}
              </Link>
              <a
                href="#offer"
                className="rounded-full border border-[#e39a45]/40 px-5 py-3 text-sm font-semibold text-[#f4f1e8]"
              >
                {tradesPreview.secondary}
              </a>
            </div>
            <p className="hero-rise mt-5 text-sm text-[#a39e90]">{tradesPreview.note}</p>
            <dl className="hero-rise mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {tradesStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs tracking-wide text-[#a39e90] uppercase">{stat.label}</dt>
                  <dd className="mt-1 text-lg font-semibold text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:hidden">
            <ul className="grid gap-3">
              {deskCards.map((card) => (
                <li key={card.id}>
                  <DeskFace card={card} />
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden [perspective:1400px] lg:block">
            <div ref={stageRef} className="desk-stage relative h-[820px]">
              <article className="desk-card desk-card-back absolute top-0 left-0 w-[82%]">
                <DeskFace card={deskCards[0]} />
              </article>
              <article className="desk-card desk-card-mid absolute top-[14.75rem] left-[6%] w-[84%]">
                <DeskFace card={deskCards[1]} />
              </article>
              <article className="desk-card desk-card-front absolute top-[29.5rem] right-0 w-[86%]">
                <div className="desk-drift rounded-[1.4rem] border border-[#e39a45]/50 bg-[#24301f] p-5 shadow-[0_40px_70px_-30px_rgba(227,154,69,0.45)]">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/asmat-portrait.jpg"
                      alt="Asmat"
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover object-top"
                    />
                    <div>
                      <p className="text-[11px] font-semibold tracking-[0.18em] text-[#d7e38a] uppercase">
                        {deskCards[2].kicker}
                      </p>
                      <h3 className="trades-serif text-3xl text-[#f7f3ea]">{deskCards[2].title}</h3>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#e7e2d6]">
                    {deskCards[2].lines.map((line) => (
                      <li key={line} className="flex gap-2">
                        <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e39a45]" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-xs tracking-wide text-[#c8c2b4] uppercase">
                    Asmat · Pakistan, for US companies
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <div className="h-2 bg-[repeating-linear-gradient(90deg,#e39a45_0_18px,#d7e38a_18px_28px,#1a140c_28px_36px)]" />

        <section id="trades" className="scroll-mt-32 border-y border-white/10 py-8">
          <p className="page-shell text-xs font-semibold tracking-[0.2em] text-[#a39e90] uppercase">
            The only trades on this desk
          </p>
          <div className="trades-marquee mt-5 overflow-hidden">
            <div className="trades-marquee-track flex w-max gap-3 px-4">
              {[0, 1].map((copy) => (
                <ul key={copy} aria-hidden={copy === 1} className="flex gap-3">
                  {trades.map((trade) => (
                    <li
                      key={`${copy}-${trade.name}`}
                      className="rounded-full border border-white/10 bg-[#171d14] px-4 py-2 text-sm text-[#f4f1e8]"
                    >
                      <span className="font-semibold">{trade.name}</span>
                      <span className="text-[#a39e90]"> · {trade.detail}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </section>

        <section
          id="offer"
          ref={pinRef}
          className="scroll-mt-32 border-b border-white/10 py-16 lg:py-20"
        >
          <div className="page-shell grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#e7b56a] uppercase">
                The offer
              </p>
              <h2 className="mt-3 max-w-md text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Five lanes. One operator.
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-[#d4cec1]">
                Paid media is the core. The Google listing, the content, the funnel, and GoHighLevel are how a click becomes a booked job. Scroll the stack.
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[#a39e90]">{scoreLine}</p>
            </div>

            <div className="grid gap-4 lg:hidden">
              {lanes.map((lane) => (
                <article key={lane.step} className="rounded-3xl border border-white/10 bg-[#1b2218] p-6">
                  <LaneBody lane={lane} />
                </article>
              ))}
            </div>

            <div className="lane-deck relative hidden h-[500px] overflow-hidden [perspective:1100px] lg:block">
              {lanes.map((lane) => (
                <article
                  key={lane.step}
                  className="lane-card absolute inset-x-0 top-0 h-full rounded-3xl border border-[#e39a45]/30 bg-[#1c2418] p-7 shadow-[0_24px_50px_-28px_rgba(0,0,0,0.8)]"
                >
                  <LaneBody lane={lane} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="trades-fit" className="page-shell scroll-mt-32 py-20">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div data-desk>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#e7b56a] uppercase">
                Who this is for
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                US service-area companies in these trades.
              </h2>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {trades.map((trade) => (
                  <li
                    key={trade.name}
                    className="rounded-2xl border border-white/10 bg-[#171d14] px-4 py-4"
                  >
                    <p className="font-semibold text-white">{trade.name}</p>
                    <p className="mt-1 text-sm text-[#c8c2b4]">{trade.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
            <aside data-desk className="rounded-3xl border border-[#e39a45]/25 bg-[#21180f] p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-[#f0c27a]">Outside this desk</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#e7e2d6]">
                {outOfScope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-[#c8c2b4]">
                United States only. If the customers are not in a US service area, this is the wrong fit.
              </p>
            </aside>
          </div>
        </section>

        <section id="pricing" className="scroll-mt-32 border-y border-white/10 bg-[#121710] py-20">
          <div className="page-shell">
            <div data-desk className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#e7b56a] uppercase">
                Pricing
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Start with the ads. Add a lane when that lane is the leak.
              </h2>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {mediaPlans.map((plan) => (
                <article
                  key={plan.name}
                  data-desk
                  className={`rounded-3xl border p-6 ${
                    plan.featured
                      ? "border-[#e39a45] bg-[#2a2114]"
                      : "border-white/10 bg-[#1b2218]"
                  }`}
                >
                  <p className="text-xs font-semibold tracking-[0.16em] text-[#e7b56a] uppercase">
                    Paid media
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{plan.name}</h3>
                  <p className="mt-4 text-4xl font-semibold tracking-tight text-[#f0c27a]">
                    {plan.price}
                    <span className="text-base font-medium text-[#c8c2b4]">{plan.unit}</span>
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[#d4cec1]">{plan.detail}</p>
                </article>
              ))}
            </div>

            <div data-desk className="mt-6 grid gap-6 rounded-3xl border border-white/10 bg-[#1b2218] p-6 lg:grid-cols-2">
              <div>
                <h3 className="font-semibold text-white">Inside every paid media month</h3>
                <ul className="mt-3 space-y-2 text-sm text-[#d4cec1]">
                  {included.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white">Separate from the retainer</h3>
                <ul className="mt-3 space-y-2 text-sm text-[#d4cec1]">
                  {notIncluded.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <h3 data-desk className="mt-12 text-xl font-semibold text-white">
              Add a lane
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {addOns.map((item) => (
                <li key={item.name} data-desk className="rounded-2xl border border-white/10 bg-[#171d14] p-5">
                  <p className="text-sm text-[#a39e90]">{item.name}</p>
                  <p className="mt-2 text-xl font-semibold text-[#f0c27a]">{item.price}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#d4cec1]">{item.detail}</p>
                </li>
              ))}
            </ul>

            <article data-desk className="mt-6 rounded-3xl border border-[#d7e38a]/30 bg-[#1a2114] p-6 sm:p-8">
              <p className="text-xs font-semibold tracking-[0.16em] text-[#d7e38a] uppercase">
                When you want the whole desk
              </p>
              <h3 className="mt-3 text-3xl font-semibold text-white">
                {deskPlan.name}{" "}
                <span className="text-[#f0c27a]">
                  {deskPlan.price}
                  <span className="text-base text-[#c8c2b4]">{deskPlan.unit}</span>
                </span>
              </h3>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#d4cec1]">{deskPlan.detail}</p>
            </article>

            <ul data-desk className="mt-8 max-w-3xl space-y-3 text-sm leading-relaxed text-[#c8c2b4]">
              {pricingNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="proof" className="scroll-mt-32 py-20">
          <div className="page-shell">
            <div data-desk className="max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#e7b56a] uppercase">
                Proof
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                The same portfolio. Read as paid media proof.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#d4cec1]">
                Screenshots from Meta Ads Manager, Google Ads, and Analytics. Confidential client work. These accounts are the record of the media buying. They are not relabeled as HVAC or roofing jobs.
              </p>
            </div>
            <ul className="mt-10 grid gap-5 md:grid-cols-2">
              {featuredCaseStudies.map((study, index) => (
                <li key={study.image} data-desk>
                  <button
                    type="button"
                    onClick={() => setShot(index)}
                    className="w-full overflow-hidden rounded-3xl border border-white/10 bg-[#1b2218] text-left transition-transform hover:-translate-y-1"
                  >
                    <span className="relative block aspect-[16/10] bg-black/40">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        sizes="(min-width: 768px) 45vw, 100vw"
                        className="object-cover object-top"
                      />
                    </span>
                    <span className="block p-5">
                      <span className="text-xs font-semibold tracking-[0.16em] text-[#e7b56a] uppercase">
                        {study.platform} · {study.headline}
                      </span>
                      <span className="mt-2 block text-lg font-semibold text-white">{study.title}</span>
                      <span className="mt-2 block text-sm leading-relaxed text-[#c8c2b4]">
                        {study.description}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-center text-xs text-[#8f897c]">
              © Asmat. All portfolio screenshots are confidential client work. Click a card to enlarge.
            </p>
          </div>
        </section>

        <section id="reviews" className="scroll-mt-32 border-t border-white/10 py-20">
          <div className="page-shell">
            <div data-desk className="max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#e7b56a] uppercase">
                Reviews
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Their words, unchanged.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#d4cec1]">
                Four reviews from people who have worked with me. Names, companies, and locations are theirs. Open the LinkedIn profile to see who they are.
              </p>
            </div>
            <ul className="mt-10 grid gap-5 lg:grid-cols-2">
              {testimonials.map((person) => (
                <li key={person.id} data-desk>
                  <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-[#1b2218] p-6">
                    <div className="flex items-center gap-4">
                      <Image
                        src={person.image}
                        alt={`${person.name} profile photo`}
                        width={72}
                        height={72}
                        className={`h-[72px] w-[72px] rounded-full object-cover ${person.imageClass ?? "object-center"}`}
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">{person.name}</h3>
                        <p className="text-sm text-[#c8c2b4]">{person.role}</p>
                        {person.location ? (
                          <p className="text-xs text-[#8f897c]">{person.location}</p>
                        ) : null}
                      </div>
                    </div>
                    <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-[#e7e2d6]">
                      “{person.quote}”
                    </blockquote>
                    <Link
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex h-11 w-fit items-center gap-2 rounded-full bg-[#0A66C2] px-5 text-sm font-semibold text-white"
                    >
                      <LinkedInIcon className="h-4 w-4" />
                      LinkedIn profile
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="faq" className="scroll-mt-32 border-t border-white/10 py-20">
          <div className="page-shell max-w-3xl">
            <h2 data-desk className="text-3xl font-semibold tracking-tight text-white">
              Before you book
            </h2>
            <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
              {faqs.map((item) => (
                <details key={item.q} data-desk className="group py-5">
                  <summary className="cursor-pointer list-none text-lg font-semibold text-white marker:content-none">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-[#d4cec1]">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="start" className="scroll-mt-32 border-t border-white/10 py-20">
          <div className="page-shell">
            <div data-desk className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Bring the trade, the city, and how a lead becomes a job.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#d4cec1]">
                Fifteen minutes. If the fit is wrong, I will say so on the call.
              </p>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {tradesChannels.map((channel) => (
                <li key={channel.label} data-desk>
                  <Link
                    href={channel.href}
                    target={"external" in channel && channel.external ? "_blank" : undefined}
                    rel={"external" in channel && channel.external ? "noopener noreferrer" : undefined}
                    className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#1b2218] p-4 transition-colors hover:border-[#e39a45]/50"
                  >
                    <span className="text-xs tracking-[0.14em] text-[#e7b56a] uppercase">
                      {channel.label}
                    </span>
                    <span className="mt-2 text-sm font-semibold text-white">{channel.value}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="profiles" className="scroll-mt-32 border-t border-[#e39a45]/20 bg-[#16130e] py-20">
          <div className="page-shell">
            <div data-desk className="max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#e7b56a] uppercase">
                Working notes
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                LinkedIn and Upwork, ready to paste.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#d4cec1]">
                This block is for your profiles and your posting plan. It stays on the preview so you can copy it. It would not ship as a section on the public homepage.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <article data-desk className="rounded-3xl border border-white/10 bg-[#1c1812] p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white">LinkedIn</h3>
                  <CopyButton text={`${linkedin.headline}\n\n${linkedin.about}`} />
                </div>
                <p className="mt-4 text-xs font-semibold tracking-[0.16em] text-[#e7b56a] uppercase">
                  Headline
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#f4f1e8]">{linkedin.headline}</p>
                <p className="mt-5 text-xs font-semibold tracking-[0.16em] text-[#e7b56a] uppercase">
                  About
                </p>
                <p className="mt-2 text-sm leading-relaxed whitespace-pre-wrap text-[#d4cec1]">
                  {linkedin.about}
                </p>
              </article>

              <article data-desk className="rounded-3xl border border-white/10 bg-[#1c1812] p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white">Upwork</h3>
                  <CopyButton text={`${upwork.title}\n\n${upwork.overview}`} />
                </div>
                <p className="mt-4 text-xs font-semibold tracking-[0.16em] text-[#e7b56a] uppercase">
                  Title
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#f4f1e8]">{upwork.title}</p>
                <p className="mt-5 text-xs font-semibold tracking-[0.16em] text-[#e7b56a] uppercase">
                  Overview
                </p>
                <p className="mt-2 text-sm leading-relaxed whitespace-pre-wrap text-[#d4cec1]">
                  {upwork.overview}
                </p>
                <p className="mt-5 text-xs font-semibold tracking-[0.16em] text-[#e7b56a] uppercase">
                  Skills to list
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {upwork.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#f4f1e8]"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <div data-desk className="mt-8">
              <h3 className="text-2xl font-semibold text-white">Eight posts, in order</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#c8c2b4]">
                Post these on LinkedIn before you publish the new site. The profile and the feed should already say home services, so the public page is a confirmation, not a surprise.
              </p>
              <ol className="mt-6 grid gap-3 lg:grid-cols-2">
                {contentPlan.map((post) => (
                  <li key={post.week} className="rounded-2xl border border-white/10 bg-[#1c1812] p-5">
                    <p className="text-xs font-semibold tracking-[0.16em] text-[#e7b56a] uppercase">
                      {post.week} · {post.channel}
                    </p>
                    <h4 className="mt-2 text-lg font-semibold text-white">{post.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-[#d4cec1]">{post.angle}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 pb-24 lg:pb-8">
        <div className="page-shell flex flex-col gap-3 text-sm text-[#a39e90] sm:flex-row sm:items-center sm:justify-between">
          <p>Marketing with Asmat · US home services preview</p>
          <p>
            <a className="hover:text-white" href={tradesWhatsapp}>
              {siteConfig.phoneDisplay}
            </a>
            {" · "}
            <a className="hover:text-white" href={siteConfig.links.email}>
              {siteConfig.email}
            </a>
          </p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#0e120c]/95 p-3 lg:hidden">
        <Link
          href={siteConfig.links.book}
          className="block rounded-full bg-[#e39a45] py-3 text-center text-sm font-semibold text-[#1a140c]"
        >
          Book a 15-min call
        </Link>
      </div>

      {shot !== null ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal
          aria-label={featuredCaseStudies[shot].title}
          onClick={() => setShot(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 rounded-full border border-white/20 px-4 py-2 text-sm text-white"
            onClick={() => setShot(null)}
          >
            Close
          </button>
          <div className="max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <Image
              src={featuredCaseStudies[shot].image}
              alt={featuredCaseStudies[shot].title}
              width={1400}
              height={900}
              className="h-auto max-h-[80vh] w-full rounded-lg object-contain"
            />
            <p className="mt-3 text-center text-sm text-[#d4cec1]">
              {featuredCaseStudies[shot].title}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function LaneBody({ lane }: { lane: (typeof lanes)[number] }) {
  return (
    <>
      <p className="text-xs font-semibold tracking-[0.18em] text-[#e7b56a] uppercase">
        {lane.step} · {lane.kicker}
      </p>
      <h3 className="trades-serif mt-3 text-3xl text-white sm:text-4xl">{lane.title}</h3>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#d4cec1]">{lane.body}</p>
      <ul className="mt-4 space-y-2 text-sm text-[#f4f1e8]">
        {lane.points.map((point) => (
          <li key={point} className="flex gap-2">
            <span aria-hidden className="text-[#d7e38a]">
              ▸
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
