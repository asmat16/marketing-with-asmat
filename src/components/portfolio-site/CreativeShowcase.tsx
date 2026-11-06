"use client";

import Image from "next/image";
import { useEffect, useEffectEvent, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { creativeWork, ugcVideos } from "@/lib/case-studies";
import { bookHref } from "./contact";
import { ArrowLeft, ArrowRight, Calendar, Close, Play } from "./icons";

gsap.registerPlugin(useGSAP);

type MediaItem =
  | {
      kind: "video";
      src: string;
      poster: string;
      title: string;
      label: string;
    }
  | {
      kind: "image";
      src: string;
      width: number;
      height: number;
      title: string;
      label: string;
      note: string;
    };

const videoItems: MediaItem[] = ugcVideos.map((video) => ({
  kind: "video",
  src: video.src,
  poster: video.poster,
  title: video.title,
  label: video.category,
}));

const imageItems: MediaItem[] = creativeWork.map((work) => ({
  kind: "image",
  src: work.src,
  width: work.width,
  height: work.height,
  title: work.title,
  label: work.brand,
  note: work.note,
}));

const half = Math.ceil(creativeWork.length / 2);
const staticRows = [
  creativeWork.slice(0, half).map((work, i) => ({ work, index: i })),
  creativeWork.slice(half).map((work, i) => ({ work, index: half + i })),
];

const creativeNumbers = [
  { value: "7.37X", label: "ROAS from a single UGC testimonial video on a skincare account" },
  { value: "3.8X", label: "More return per dollar from video ads than statics in the same account" },
  { value: "90%", label: "Of that budget ended up on four winning videos after weekly testing" },
];

export function CreativeShowcase() {
  const [viewer, setViewer] = useState<{ items: MediaItem[]; index: number } | null>(null);

  return (
    <div>
      <div data-pf-reveal className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">
            Creative portfolio
          </p>
          <h2 className="mt-4 text-5xl font-semibold leading-[0.98] tracking-[-0.035em] text-white sm:text-7xl lg:text-[5.5rem]">
            Creative
            <br />
            <span className="font-display font-normal italic text-teal-200">strategist.</span>
          </h2>
        </div>
        <div className="lg:col-span-5">
          <p className="font-display text-3xl italic leading-tight text-white sm:text-4xl">
            Content is the targeting now.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-zinc-400">
            Since Meta&apos;s Andromeda update, the algorithm finds buyers through the
            creative itself. More strong ads beat clever audience settings. So I plan the
            angles, write the scripts and direct the content behind every account, then
            test new creative every week.
          </p>
        </div>
      </div>

      <dl
        data-pf-reveal
        className="mt-12 grid gap-px overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.08] sm:grid-cols-3"
      >
        {creativeNumbers.map((item) => (
          <div key={item.value} className="bg-[#0c0c12] px-6 py-8 sm:px-8">
            <dd className="text-5xl font-semibold tracking-tight text-teal-200 sm:text-6xl">
              {item.value}
            </dd>
            <dt className="mt-3 max-w-xs text-sm leading-snug text-zinc-400">{item.label}</dt>
          </div>
        ))}
      </dl>

      <UgcSlideshow
        paused={viewer !== null}
        onOpen={(index) => setViewer({ items: videoItems, index })}
      />

      <div data-pf-reveal className="mt-24 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Static ads and designs
          </h3>
          <p className="mt-3 text-zinc-400">
            Offers, social proof and one clear next step, made for DTC, local services,
            finance and coaching clients. Hover to pause, click to see one full size.
          </p>
        </div>
      </div>
      <div className="mt-10 space-y-5">
        {staticRows.map((row, rowIndex) => (
          <div key={rowIndex} className="pf-marquee" aria-label={`Static designs row ${rowIndex + 1}`}>
            <div
              className={`pf-marquee-track flex w-max gap-5 ${rowIndex === 1 ? "pf-marquee-reverse" : ""}`}
            >
              {[...row, ...row].map(({ work, index }, i) => (
                <button
                  key={`${work.src}-${i}`}
                  type="button"
                  tabIndex={i >= row.length ? -1 : 0}
                  aria-hidden={i >= row.length}
                  onClick={() => setViewer({ items: imageItems, index })}
                  className="group relative h-64 shrink-0 overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900 sm:h-80"
                  style={{ aspectRatio: `${work.width} / ${work.height}` }}
                >
                  <Image
                    src={work.src}
                    alt={`${work.brand}: ${work.title}`}
                    fill
                    sizes="320px"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/90 to-transparent p-4 pt-12 text-left opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-teal-300">
                      {work.brand}
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-white">{work.title}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {viewer && (
        <MediaViewer
          items={viewer.items}
          index={viewer.index}
          onIndex={(index) => setViewer({ items: viewer.items, index })}
          onClose={() => setViewer(null)}
        />
      )}
    </div>
  );
}

function UgcSlideshow({ paused, onOpen }: { paused: boolean; onOpen: (index: number) => void }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef(false);
  const [preview, setPreview] = useState<number | null>(null);

  const step = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-ugc-card]");
    const amount = (card?.offsetWidth ?? 260) + 20;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
    if (direction === 1 && atEnd) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      track.scrollBy({ left: amount * direction, behavior: "smooth" });
    }
  };

  const tick = useEffectEvent(() => {
    if (!paused && !hoverRef.current) step(1);
  });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => tick(), 3200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="mt-24">
      <div data-pf-reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">
            UGC for TikTok and Meta
          </p>
          <h3 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            I help clients create UGC videos that{" "}
            <span className="font-display font-normal italic text-teal-200">sell.</span>
          </h3>
          <p className="mt-3 text-zinc-400">
            Hooks, try-ons, product demos and behind-the-scenes content for TikTok and
            Meta. These videos brought in more sales and leads for the brands that ran
            them. Tap any video to watch it with sound.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous videos"
            className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-white transition hover:border-white/40"
          >
            <ArrowLeft />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next videos"
            className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-white transition hover:border-white/40"
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        onPointerEnter={() => (hoverRef.current = true)}
        onPointerLeave={() => (hoverRef.current = false)}
        className="pf-no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
      >
        {ugcVideos.map((video, index) => (
          <button
            key={video.src}
            type="button"
            data-ugc-card
            onClick={() => onOpen(index)}
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") setPreview(index);
            }}
            onPointerLeave={() => setPreview(null)}
            className="group relative aspect-[9/16] w-[62vw] max-w-[280px] shrink-0 snap-start overflow-hidden rounded-[26px] border border-white/10 bg-zinc-900 text-left sm:w-[260px]"
          >
            <Image
              src={video.poster}
              alt={video.title}
              fill
              sizes="280px"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            {preview === index && (
              <video
                src={video.src}
                poster={video.poster}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
            <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/20" />
            <span className="absolute left-4 top-4 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
              UGC
            </span>
            <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-zinc-950 shadow-xl transition duration-500 group-hover:scale-110 group-hover:opacity-0">
              <Play />
            </span>
            <span className="absolute inset-x-0 bottom-0 p-5">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-teal-300">
                {video.category}
              </span>
              <span className="mt-1.5 block text-base font-semibold leading-snug text-white">
                {video.title}
              </span>
            </span>
          </button>
        ))}
      </div>

      <div
        data-pf-reveal
        className="mt-8 flex flex-col items-start gap-4 rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <p className="text-sm text-zinc-300">
          Need UGC that actually sells for your brand? I&apos;ll show you how I brief,
          script and test it.
        </p>
        <a
          href={bookHref("ugc")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-teal-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-teal-200"
        >
          <Calendar />
          Talk about UGC for my brand
        </a>
      </div>
    </div>
  );
}

function MediaViewer({
  items,
  index,
  onIndex,
  onClose,
}: {
  items: MediaItem[];
  index: number;
  onIndex: (index: number) => void;
  onClose: () => void;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef(false);
  const item = items[index];
  const go = (delta: number) => onIndex((index + delta + items.length) % items.length);

  useGSAP(
    () => {
      gsap.fromTo(rootRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3 });
    },
    { scope: rootRef },
  );

  useGSAP(
    () => {
      gsap.fromTo(
        "[data-viewer-media]",
        { autoAlpha: 0, scale: 0.96, y: 16 },
        { autoAlpha: 1, scale: 1, y: 0, duration: 0.55, ease: "expo.out" },
      );
    },
    { scope: rootRef, dependencies: [index], revertOnUpdate: true },
  );

  const requestClose = () => {
    if (closingRef.current) return;
    closingRef.current = true;
    gsap.to(rootRef.current, { autoAlpha: 0, duration: 0.25, onComplete: onClose });
  };

  const handleKey = useEffectEvent((event: KeyboardEvent) => {
    if (event.key === "Escape") requestClose();
    if (event.key === "ArrowRight") go(1);
    if (event.key === "ArrowLeft") go(-1);
  });

  useEffect(() => {
    const html = document.documentElement;
    const previousOverflow = html.style.overflow;
    html.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => handleKey(event);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      html.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <div
      ref={rootRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${item.label}: ${item.title}`}
      className="fixed inset-0 z-[90] flex flex-col bg-black/92 backdrop-blur-lg"
    >
      <div className="flex items-center justify-between px-5 py-4">
        <span className="text-xs text-zinc-400">
          {index + 1} / {items.length}
        </span>
        <button
          type="button"
          onClick={requestClose}
          autoFocus
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-zinc-950 transition hover:bg-teal-200"
        >
          <Close className="h-4 w-4" />
          Close
        </button>
      </div>
      <div
        className="relative flex flex-1 items-center justify-center px-4 pb-6"
        onClick={(event) => {
          if (event.target === event.currentTarget) requestClose();
        }}
      >
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous"
          className="absolute left-3 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/50 text-white transition hover:border-white/40 sm:left-6"
        >
          <ArrowLeft />
        </button>
        <figure
          key={item.src}
          data-viewer-media
          className="flex max-h-full max-w-5xl flex-col items-center gap-5 lg:flex-row lg:items-end"
        >
          {item.kind === "video" ? (
            <video
              src={item.src}
              poster={item.poster}
              controls
              autoPlay
              playsInline
              className="aspect-[9/16] max-h-[64vh] rounded-2xl bg-black lg:max-h-[80vh]"
            />
          ) : (
            <Image
              src={item.src}
              width={item.width}
              height={item.height}
              alt={`${item.label}: ${item.title}`}
              sizes="(min-width: 1024px) 700px, 92vw"
              className="h-auto max-h-[62vh] w-auto rounded-2xl object-contain lg:max-h-[78vh]"
            />
          )}
          <figcaption className="max-w-sm px-2 text-center lg:pb-4 lg:text-left">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-300">
              {item.label}
            </span>
            <span className="mt-2 block font-display text-3xl text-white">{item.title}</span>
            {item.kind === "image" && (
              <span className="mt-3 block text-sm leading-relaxed text-zinc-400">{item.note}</span>
            )}
          </figcaption>
        </figure>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next"
          className="absolute right-3 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/50 text-white transition hover:border-white/40 sm:right-6"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
