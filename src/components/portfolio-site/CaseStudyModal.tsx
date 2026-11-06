"use client";

import Image from "next/image";
import { useEffect, useEffectEvent, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import type { CaseStudy } from "@/lib/case-studies";
import { bookHref, mailHref, whatsappHref } from "./contact";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Close,
  Expand,
  LinkIcon,
  Mail,
  WhatsApp,
} from "./icons";
import { BrowserFrame } from "./BrowserFrame";

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

export function CaseStudyModal({
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
          { autoAlpha: 1, duration: reduce ? 0.01 : 0.35, ease: "power2.out" },
        )
        .fromTo(
          panelRef.current,
          { y: reduce ? 0 : 80, scale: reduce ? 1 : 0.97, autoAlpha: 0 },
          {
            y: 0,
            scale: 1,
            autoAlpha: 1,
            duration: reduce ? 0.01 : 0.75,
            ease: "expo.out",
          },
          "<0.05",
        );
    },
    { scope: rootRef },
  );

  useGSAP(
    () => {
      scrollRef.current?.scrollTo({ top: 0 });
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from("[data-modal-item]", {
        y: 28,
        autoAlpha: 0,
        duration: 0.65,
        stagger: 0.06,
        ease: "power3.out",
        delay: 0.1,
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
        y: 50,
        scale: 0.98,
        autoAlpha: 0,
        duration: 0.32,
        ease: "power2.in",
      })
      .to(backdropRef.current, { autoAlpha: 0, duration: 0.25 }, "<0.1");
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
    const url = `${window.location.origin}/portfolio?case=${study.slug}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.prompt("Copy this link", url);
    }
  };

  const sections = [
    { n: "01", title: "The challenge", body: [study.challenge], tone: "plain" },
    { n: "02", title: "The plan", body: study.plan, tone: "list" },
    { n: "03", title: "The execution", body: study.execution, tone: "list" },
    { n: "04", title: "The outcome", body: study.outcome, tone: "outcome" },
  ] as const;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[90] flex items-end justify-center sm:items-center sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-modal-title"
    >
      <div
        ref={backdropRef}
        className="absolute inset-0 bg-black/75 backdrop-blur-md"
        onClick={requestClose}
      />

      <div
        ref={panelRef}
        className="relative flex h-[94dvh] w-full max-w-6xl flex-col overflow-hidden rounded-t-[28px] border border-white/10 bg-[#0e0e14] shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)] sm:h-[92vh] sm:rounded-[28px]"
      >
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-white/[0.07] bg-[#0e0e14]/95 px-4 py-3 backdrop-blur sm:px-6">
          <div className="flex min-w-0 items-center gap-3 text-xs text-zinc-400">
            <span className="rounded-full border border-teal-300/30 bg-teal-300/10 px-2.5 py-1 font-medium text-teal-200">
              Case {String(position).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <span className="hidden truncate sm:inline">{study.niche}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={copyLink}
              className="hidden items-center gap-1.5 rounded-full border border-white/10 px-3 py-2 text-xs text-zinc-300 transition hover:border-white/25 hover:text-white sm:inline-flex"
            >
              <LinkIcon className="h-3.5 w-3.5" />
              {copied ? "Link copied" : "Copy link"}
            </button>
            <button
              type="button"
              onClick={() => onNavigate(prev.slug)}
              aria-label={`Previous case study: ${prev.headline}`}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-zinc-300 transition hover:border-white/25 hover:text-white"
            >
              <ArrowLeft />
            </button>
            <button
              type="button"
              onClick={() => onNavigate(next.slug)}
              aria-label={`Next case study: ${next.headline}`}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-zinc-300 transition hover:border-white/25 hover:text-white"
            >
              <ArrowRight />
            </button>
            <button
              ref={closeRef}
              type="button"
              onClick={requestClose}
              aria-label="Close case study"
              className="ml-1 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-zinc-950 transition hover:bg-teal-200"
            >
              <Close className="h-4 w-4" />
              <span className="hidden sm:inline">Close</span>
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto overscroll-contain">
          <div className="mx-auto max-w-5xl px-5 pb-16 pt-8 sm:px-10 sm:pt-12">
            <header data-modal-item>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-white/[0.06] px-3 py-1 text-zinc-300">
                  {study.platform}
                </span>
                <span className="rounded-full bg-white/[0.06] px-3 py-1 text-zinc-300">
                  {study.period}
                </span>
                {study.website && (
                  <a
                    href={study.website.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-white/[0.06] px-3 py-1 text-zinc-300 transition hover:text-teal-200"
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
                    className="inline-flex items-center gap-1 rounded-full bg-white/[0.06] px-3 py-1 text-zinc-300 transition hover:text-teal-200"
                  >
                    {study.instagram.label}
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                )}
              </div>
              <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-teal-300">
                {study.client}
              </p>
              <h2
                id="case-modal-title"
                className="mt-3 max-w-4xl text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl"
              >
                {study.headline}
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                {study.summary}
              </p>
              {study.clientNote && (
                <p className="mt-4 max-w-3xl rounded-2xl border border-white/[0.07] bg-white/[0.02] px-4 py-3 text-sm leading-relaxed text-zinc-400">
                  {study.clientNote}
                </p>
              )}
            </header>

            <dl
              data-modal-item
              className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] lg:grid-cols-4"
            >
              {study.metrics.map((metric) => (
                <div key={metric.label} className="bg-[#111118] px-5 py-6">
                  <dt className="text-xs uppercase tracking-[0.14em] text-zinc-500">
                    {metric.label}
                  </dt>
                  <dd className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>

            <figure data-modal-item className="mt-10">
              <a
                href={study.image.src}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                aria-label="Open the full-size screenshot in a new tab"
              >
                <BrowserFrame platform={study.platform}>
                  <Image
                    src={study.image.src}
                    width={study.image.width}
                    height={study.image.height}
                    alt={study.image.alt}
                    sizes="(min-width: 1024px) 960px, 100vw"
                    loading="eager"
                    className="h-auto w-full"
                  />
                  <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-xs text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                    <Expand className="h-3.5 w-3.5" />
                    Full size
                  </span>
                </BrowserFrame>
              </a>
              <figcaption className="mt-4 grid gap-2 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 sm:grid-cols-[180px_1fr] sm:gap-6">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-300">
                  How to read this screenshot
                </span>
                <span className="text-sm leading-relaxed text-zinc-400">
                  {study.screenshotNote}
                </span>
              </figcaption>
            </figure>

            {study.shift && (
              <div
                data-modal-item
                className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-3xl border border-teal-300/20 bg-gradient-to-r from-teal-400/[0.08] to-transparent px-6 py-5"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
                  {study.shift.label}
                </span>
                <span className="flex items-center gap-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                  <span className="text-zinc-500 line-through decoration-rose-400/60 decoration-2">
                    {study.shift.from}
                  </span>
                  <ArrowRight className="h-6 w-6 text-teal-300" />
                  <span className="text-teal-200">{study.shift.to}</span>
                </span>
              </div>
            )}

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {sections.map((section) => (
                <section
                  data-modal-item
                  key={section.n}
                  className={`rounded-3xl border p-6 sm:p-8 ${
                    section.tone === "outcome"
                      ? "border-teal-300/25 bg-teal-300/[0.05]"
                      : "border-white/[0.07] bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-3xl italic text-teal-300">
                      {section.n}
                    </span>
                    <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                  </div>
                  {section.tone === "plain" ? (
                    <p className="mt-4 text-[15px] leading-relaxed text-zinc-300">
                      {section.body[0]}
                    </p>
                  ) : (
                    <ul className="mt-4 space-y-3">
                      {section.body.map((line) => (
                        <li
                          key={line}
                          className="flex gap-3 text-[15px] leading-relaxed text-zinc-300"
                        >
                          <span
                            className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                              section.tone === "outcome" ? "bg-teal-300" : "bg-zinc-500"
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
              data-modal-item
              className="relative mt-12 overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(120%_140%_at_0%_0%,rgba(45,212,191,0.18),transparent_55%),#13131b] p-7 sm:p-10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
                Want to know more about this case study?
              </p>
              <h3 className="mt-3 max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
                Book a one-on-one 15-minute{" "}
                <span className="font-display font-normal italic text-teal-200">
                  coffee chat
                </span>
                . I&apos;ll walk you through this account and what I&apos;d do for yours.
              </h3>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={bookHref(study.slug)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-teal-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-teal-200"
                >
                  <Calendar />
                  Book a 15-min coffee chat
                </a>
                <a
                  href={mailHref(`Question about your ${study.client} case study`)}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:border-white/35"
                >
                  <Mail />
                  Email me about this case
                </a>
                <a
                  href={whatsappHref(
                    `Hi Asmat, I just read your case study "${study.headline}". Can we talk?`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:border-white/35"
                >
                  <WhatsApp />
                  WhatsApp
                </a>
              </div>
            </div>

            <nav
              data-modal-item
              aria-label="More case studies"
              className="mt-10 grid gap-3 sm:grid-cols-2"
            >
              <button
                type="button"
                onClick={() => onNavigate(prev.slug)}
                className="group rounded-2xl border border-white/[0.07] p-5 text-left transition hover:border-white/20"
              >
                <span className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-zinc-500">
                  <ArrowLeft className="h-3.5 w-3.5" /> Previous
                </span>
                <span className="mt-2 block text-sm font-medium text-zinc-200 group-hover:text-white">
                  {prev.headline}
                </span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate(next.slug)}
                className="group rounded-2xl border border-white/[0.07] p-5 text-left transition hover:border-white/20 sm:text-right"
              >
                <span className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-zinc-500 sm:justify-end">
                  Next <ArrowRight className="h-3.5 w-3.5" />
                </span>
                <span className="mt-2 block text-sm font-medium text-zinc-200 group-hover:text-white">
                  {next.headline}
                </span>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
