"use client";

import Image from "next/image";
import { useEffect, useEffectEvent, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import type { CaseStudy } from "@/lib/case-studies";
import { siteConfig } from "@/lib/site";
import { BrowserFrame } from "@/components/portfolio-site/BrowserFrame";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Close,
  Expand,
  LinkIcon,
} from "@/components/portfolio-site/icons";

gsap.registerPlugin(useGSAP);

type Props = {
  study: CaseStudy;
  position: number;
  total: number;
  prev: CaseStudy;
  next: CaseStudy;
  onClose: () => void;
  onNavigate: (slug: string) => void;
};

export function UpworkCaseModal({
  study,
  position,
  total,
  prev,
  next,
  onClose,
  onNavigate,
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const closingRef = useRef(false);
  const [copied, setCopied] = useState(false);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      gsap
        .timeline()
        .fromTo(
          backdropRef.current,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: reduce ? 0.01 : 0.3, ease: "power2.out" },
        )
        .fromTo(
          panelRef.current,
          { y: reduce ? 0 : 64, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: reduce ? 0.01 : 0.7,
            ease: "expo.out",
          },
          "<0.04",
        );
    },
    { scope: rootRef },
  );

  useGSAP(
    () => {
      scrollRef.current?.scrollTo({ top: 0 });
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from("[data-upw-modal-item]", {
        y: 22,
        autoAlpha: 0,
        duration: 0.55,
        stagger: 0.05,
        ease: "power3.out",
        delay: 0.08,
      });
    },
    { scope: rootRef, dependencies: [study.slug], revertOnUpdate: true },
  );

  const requestClose = () => {
    if (closingRef.current) return;
    closingRef.current = true;
    gsap
      .timeline({ onComplete: onClose })
      .to(panelRef.current, {
        y: 40,
        autoAlpha: 0,
        duration: 0.28,
        ease: "power2.in",
      })
      .to(backdropRef.current, { autoAlpha: 0, duration: 0.22 }, "<0.08");
  };

  const handleKey = useEffectEvent((event: KeyboardEvent) => {
    if (event.key === "Escape") requestClose();
    if (event.key === "ArrowRight") onNavigate(next.slug);
    if (event.key === "ArrowLeft") onNavigate(prev.slug);
  });

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const html = document.documentElement;
    const previousOverflow = html.style.overflow;
    html.style.overflow = "hidden";
    closeRef.current?.focus({ preventScroll: true });
    const onKey = (event: KeyboardEvent) => handleKey(event);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      html.style.overflow = previousOverflow;
      previousFocus?.focus({ preventScroll: true });
    };
  }, []);

  const copyLink = async () => {
    const url = `${window.location.origin}/portfolio-upwork?case=${study.slug}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.prompt("Copy this link", url);
    }
  };

  const sections = [
    { n: "01", title: "The challenge", body: [study.challenge], tone: "plain" as const },
    { n: "02", title: "The plan", body: study.plan, tone: "list" as const },
    { n: "03", title: "The execution", body: study.execution, tone: "list" as const },
    { n: "04", title: "The outcome", body: study.outcome, tone: "outcome" as const },
  ];

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[90] flex items-end justify-center sm:items-center sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="upw-case-title"
    >
      <div
        ref={backdropRef}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={requestClose}
      />

      <div
        ref={panelRef}
        className="relative flex h-[94dvh] w-full max-w-5xl flex-col overflow-hidden rounded-t-[28px] border border-[var(--upw-line)] bg-[#101218] shadow-[0_40px_120px_-20px_rgba(0,0,0,0.85)] sm:h-[90vh] sm:rounded-[28px]"
      >
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-[var(--upw-line)] px-4 py-3 sm:px-6">
          <span className="rounded-full border border-[var(--upw-accent)]/35 bg-[var(--upw-accent-soft)] px-2.5 py-1 text-xs font-medium text-[var(--upw-accent)]">
            Case {String(position).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={copyLink}
              className="hidden items-center gap-1.5 rounded-full border border-[var(--upw-line)] px-3 py-2 text-xs text-[var(--upw-muted)] transition hover:text-[var(--upw-ink)] sm:inline-flex"
            >
              <LinkIcon className="h-3.5 w-3.5" />
              {copied ? "Copied" : "Copy link"}
            </button>
            <button
              type="button"
              onClick={() => onNavigate(prev.slug)}
              aria-label={`Previous: ${prev.headline}`}
              className="grid h-9 w-9 place-items-center rounded-full border border-[var(--upw-line)] text-[var(--upw-muted)] transition hover:text-[var(--upw-ink)]"
            >
              <ArrowLeft />
            </button>
            <button
              type="button"
              onClick={() => onNavigate(next.slug)}
              aria-label={`Next: ${next.headline}`}
              className="grid h-9 w-9 place-items-center rounded-full border border-[var(--upw-line)] text-[var(--upw-muted)] transition hover:text-[var(--upw-ink)]"
            >
              <ArrowRight />
            </button>
            <button
              ref={closeRef}
              type="button"
              onClick={requestClose}
              aria-label="Close case study"
              className="ml-1 inline-flex items-center gap-2 rounded-full bg-[var(--upw-ink)] px-3.5 py-2 text-xs font-semibold text-[#101218] transition hover:bg-white"
            >
              <Close className="h-4 w-4" />
              <span className="hidden sm:inline">Close</span>
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto overscroll-contain">
          <div className="mx-auto max-w-4xl px-5 pb-14 pt-8 sm:px-10 sm:pt-10">
            <header data-upw-modal-item>
              <div className="flex flex-wrap gap-2 text-xs text-[var(--upw-muted)]">
                <span className="rounded-full bg-white/[0.05] px-3 py-1">{study.platform}</span>
                <span className="rounded-full bg-white/[0.05] px-3 py-1">{study.period}</span>
                {study.website && (
                  <a
                    href={study.website.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-white/[0.05] px-3 py-1 transition hover:text-[var(--upw-accent)]"
                  >
                    {study.website.label}
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                )}
                {study.instagram && (
                  <a
                    href={study.instagram.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-white/[0.05] px-3 py-1 transition hover:text-[var(--upw-accent)]"
                  >
                    {study.instagram.label}
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                )}
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--upw-accent)]">
                {study.client}
              </p>
              <h2
                id="upw-case-title"
                className="upw-display mt-2 text-3xl font-bold leading-[1.08] text-[var(--upw-ink)] sm:text-5xl"
              >
                {study.headline}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--upw-muted)] sm:text-lg">
                {study.summary}
              </p>
              {study.clientNote && (
                <p className="mt-4 rounded-2xl border border-[var(--upw-line)] bg-white/[0.02] px-4 py-3 text-sm leading-relaxed text-[var(--upw-muted)]">
                  {study.clientNote}
                </p>
              )}
            </header>

            <dl
              data-upw-modal-item
              className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-[var(--upw-line)] bg-[var(--upw-line)] lg:grid-cols-4"
            >
              {study.metrics.map((metric) => (
                <div key={metric.label} className="bg-[#101218] px-5 py-5">
                  <dt className="text-[11px] uppercase tracking-[0.14em] text-[var(--upw-muted)]">
                    {metric.label}
                  </dt>
                  <dd className="upw-display mt-2 text-3xl font-bold tracking-tight text-[var(--upw-ink)]">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>

            <figure data-upw-modal-item className="mt-8">
              <a
                href={study.image.src}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                aria-label="Open full-size screenshot"
              >
                <BrowserFrame platform={study.platform}>
                  <Image
                    src={study.image.src}
                    width={study.image.width}
                    height={study.image.height}
                    alt={study.image.alt}
                    sizes="(min-width: 1024px) 900px, 100vw"
                    loading="eager"
                    className="h-auto w-full"
                  />
                  <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-xs text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                    <Expand className="h-3.5 w-3.5" />
                    Full size
                  </span>
                </BrowserFrame>
              </a>
              <figcaption className="mt-4 grid gap-2 rounded-2xl border border-[var(--upw-line)] bg-white/[0.02] p-5 sm:grid-cols-[160px_1fr] sm:gap-5">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--upw-accent)]">
                  How to read this
                </span>
                <span className="text-sm leading-relaxed text-[var(--upw-muted)]">
                  {study.screenshotNote}
                </span>
              </figcaption>
            </figure>

            {study.shift && (
              <div
                data-upw-modal-item
                className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 rounded-3xl border border-[var(--upw-accent)]/25 bg-[var(--upw-accent-soft)] px-6 py-5"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--upw-muted)]">
                  {study.shift.label}
                </span>
                <span className="flex items-center gap-3 text-2xl font-bold tracking-tight sm:text-3xl">
                  <span className="text-[var(--upw-muted)] line-through decoration-rose-400/50">
                    {study.shift.from}
                  </span>
                  <ArrowRight className="h-5 w-5 text-[var(--upw-accent)]" />
                  <span className="text-[var(--upw-accent)]">{study.shift.to}</span>
                </span>
              </div>
            )}

            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {sections.map((section) => (
                <section
                  data-upw-modal-item
                  key={section.n}
                  className={`rounded-3xl border p-6 sm:p-7 ${
                    section.tone === "outcome"
                      ? "border-[var(--upw-accent)]/30 bg-[var(--upw-accent-soft)]"
                      : "border-[var(--upw-line)] bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="upw-display text-2xl font-bold text-[var(--upw-accent)]">
                      {section.n}
                    </span>
                    <h3 className="text-lg font-semibold text-[var(--upw-ink)]">{section.title}</h3>
                  </div>
                  {section.tone === "plain" ? (
                    <p className="mt-3 text-[15px] leading-relaxed text-[var(--upw-muted)]">
                      {section.body[0]}
                    </p>
                  ) : (
                    <ul className="mt-3 space-y-2.5">
                      {section.body.map((line) => (
                        <li
                          key={line}
                          className="flex gap-3 text-[15px] leading-relaxed text-[var(--upw-muted)]"
                        >
                          <span
                            className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                              section.tone === "outcome"
                                ? "bg-[var(--upw-accent)]"
                                : "bg-[var(--upw-muted)]"
                            }`}
                          />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <div
              data-upw-modal-item
              className="mt-10 rounded-[28px] border border-[var(--upw-line)] bg-[var(--upw-surface)] p-7 sm:p-9"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--upw-accent)]">
                Want work like this?
              </p>
              <h3 className="upw-display mt-3 max-w-xl text-2xl font-bold leading-tight text-[var(--upw-ink)] sm:text-3xl">
                Message me on Upwork. Keep the conversation there until a contract is in place.
              </h3>
              <a
                href={siteConfig.links.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--upw-accent)] px-5 py-3 text-sm font-semibold text-[#101218] transition hover:brightness-110"
              >
                Open my Upwork profile
                <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
