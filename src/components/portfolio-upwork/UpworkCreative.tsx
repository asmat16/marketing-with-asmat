"use client";

import Image from "next/image";
import { useEffect, useEffectEvent, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { creativeWork, ugcVideos, type CreativeWork } from "@/lib/case-studies";
import { siteConfig } from "@/lib/site";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Close,
  Play,
} from "@/components/portfolio-site/icons";

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

export function UpworkCreative() {
  const [viewer, setViewer] = useState<{ items: MediaItem[]; index: number } | null>(null);

  return (
    <div>
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--upw-accent)]">
            Creative strategy
          </p>
          <h2 className="upw-display mt-3 text-5xl font-extrabold leading-[0.95] text-[var(--upw-ink)] sm:text-7xl">
            Content is
            <br />
            the targeting.
          </h2>
        </div>
        <p className="max-w-md text-[15px] leading-relaxed text-[var(--upw-muted)] lg:col-span-5">
          After Meta&apos;s Andromeda update, strong creative finds buyers better than
          clever audience settings. I plan angles, write scripts, direct UGC, and keep new
          ads flowing every week.
        </p>
      </div>

      <dl className="mt-12 grid gap-px overflow-hidden rounded-[28px] border border-[var(--upw-line)] bg-[var(--upw-line)] sm:grid-cols-3">
        {[
          { value: "7.37X", label: "ROAS from one UGC testimonial on a skincare account" },
          { value: "3.8X", label: "More return per dollar from video than statics in that test" },
          { value: "90%", label: "Of budget moved to four winning videos after weekly cuts" },
        ].map((item) => (
          <div key={item.value} className="bg-[var(--upw-surface)] px-6 py-8">
            <dd className="upw-display text-5xl font-extrabold text-[var(--upw-accent)]">
              {item.value}
            </dd>
            <dt className="mt-3 max-w-xs text-sm leading-snug text-[var(--upw-muted)]">
              {item.label}
            </dt>
          </div>
        ))}
      </dl>

      <UgcReel
        paused={viewer !== null}
        onOpen={(index) => setViewer({ items: videoItems, index })}
      />

      <div className="mt-20">
        <h3 className="upw-display text-3xl font-bold text-[var(--upw-ink)] sm:text-4xl">
          Static ads and designs
        </h3>
        <p className="mt-3 max-w-2xl text-[var(--upw-muted)]">
          Offers, social proof, and one clear next step for DTC, local services, finance,
          and coaching. Hover to pause. Click for full size.
        </p>
      </div>

      <div className="mt-8 space-y-4">
        {staticRows.map((row, rowIndex) => (
          <div key={rowIndex} className="upw-marquee overflow-hidden">
            <div
              className={`upw-marquee-track flex w-max gap-4 ${rowIndex === 1 ? "upw-marquee-reverse" : ""}`}
            >
              {[...row, ...row].map(({ work, index }, i) => (
                <StaticThumb
                  key={`${work.src}-${i}`}
                  work={work}
                  hidden={i >= row.length}
                  onOpen={() => setViewer({ items: imageItems, index })}
                />
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

function StaticThumb({
  work,
  hidden,
  onOpen,
}: {
  work: CreativeWork;
  hidden: boolean;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      tabIndex={hidden ? -1 : 0}
      aria-hidden={hidden}
      onClick={onOpen}
      className="group relative h-60 shrink-0 overflow-hidden rounded-2xl border border-[var(--upw-line)] bg-[var(--upw-surface)] sm:h-72"
      style={{ aspectRatio: `${work.width} / ${work.height}` }}
    >
      <Image
        src={work.src}
        alt={`${work.brand}: ${work.title}`}
        fill
        sizes="300px"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <span className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/90 to-transparent p-4 pt-12 text-left opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--upw-accent)]">
          {work.brand}
        </span>
        <span className="mt-1 block text-sm font-semibold text-white">{work.title}</span>
      </span>
    </button>
  );
}

function UgcReel({ paused, onOpen }: { paused: boolean; onOpen: (index: number) => void }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef(false);

  const step = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-upw-ugc]");
    const amount = (card?.offsetWidth ?? 240) + 16;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
    if (direction === 1 && atEnd) track.scrollTo({ left: 0, behavior: "smooth" });
    else track.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  const tick = useEffectEvent(() => {
    if (!paused && !hoverRef.current) step(1);
  });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => tick(), 3400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="mt-20">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--upw-accent)]">
            UGC for TikTok and Meta
          </p>
          <h3 className="upw-display mt-3 text-3xl font-bold text-[var(--upw-ink)] sm:text-4xl">
            Videos that sell, not just get views.
          </h3>
          <p className="mt-3 text-[var(--upw-muted)]">
            Hooks, try-ons, demos, and behind-the-scenes content. Tap any video to watch
            with sound.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous videos"
            className="grid h-11 w-11 place-items-center rounded-full border border-[var(--upw-line)] text-[var(--upw-ink)]"
          >
            <ArrowLeft />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next videos"
            className="grid h-11 w-11 place-items-center rounded-full border border-[var(--upw-line)] text-[var(--upw-ink)]"
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        onPointerEnter={() => (hoverRef.current = true)}
        onPointerLeave={() => (hoverRef.current = false)}
        className="upw-no-scrollbar mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
      >
        {ugcVideos.map((video, index) => (
          <button
            key={video.src}
            type="button"
            data-upw-ugc
            onClick={() => onOpen(index)}
            className="group relative aspect-[9/16] w-[58vw] max-w-[250px] shrink-0 snap-start overflow-hidden rounded-[24px] border border-[var(--upw-line)] bg-[var(--upw-surface)] text-left sm:w-[240px]"
          >
            <Image
              src={video.poster}
              alt={video.title}
              fill
              sizes="250px"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/25" />
            <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-[#101218]">
              <Play />
            </span>
            <span className="absolute inset-x-0 bottom-0 p-4">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--upw-accent)]">
                {video.category}
              </span>
              <span className="mt-1 block text-sm font-semibold leading-snug text-white">
                {video.title}
              </span>
            </span>
          </button>
        ))}
      </div>

      <div className="mt-6 flex flex-col items-start gap-3 rounded-2xl border border-[var(--upw-line)] bg-[var(--upw-surface)] p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[var(--upw-muted)]">
          Need UGC that converts for your brand? Ask about creative briefs and testing on
          Upwork.
        </p>
        <a
          href={siteConfig.links.upwork}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--upw-accent)] px-4 py-2.5 text-sm font-semibold text-[#101218] transition hover:brightness-110"
        >
          Message on Upwork
          <ArrowUpRight className="h-4 w-4" />
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
      gsap.fromTo(rootRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.28 });
    },
    { scope: rootRef },
  );

  useGSAP(
    () => {
      gsap.fromTo(
        "[data-upw-viewer]",
        { autoAlpha: 0, scale: 0.97, y: 12 },
        { autoAlpha: 1, scale: 1, y: 0, duration: 0.5, ease: "expo.out" },
      );
    },
    { scope: rootRef, dependencies: [index], revertOnUpdate: true },
  );

  const requestClose = () => {
    if (closingRef.current) return;
    closingRef.current = true;
    gsap.to(rootRef.current, { autoAlpha: 0, duration: 0.22, onComplete: onClose });
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
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#101218]"
        >
          <Close className="h-4 w-4" />
          Close
        </button>
      </div>
      <div className="relative flex flex-1 items-center justify-center px-4 pb-6">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous"
          className="absolute left-3 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/50 text-white sm:left-6"
        >
          <ArrowLeft />
        </button>
        <figure
          key={item.src}
          data-upw-viewer
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
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--upw-accent)]">
              {item.label}
            </span>
            <span className="upw-display mt-2 block text-3xl font-bold text-white">
              {item.title}
            </span>
            {item.kind === "image" && (
              <span className="mt-3 block text-sm leading-relaxed text-zinc-400">{item.note}</span>
            )}
          </figcaption>
        </figure>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next"
          className="absolute right-3 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/50 text-white sm:right-6"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
