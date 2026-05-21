"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import type { PortfolioFolder } from "@/lib/portfolio";
import { PortfolioDashboardSlide } from "./PortfolioDashboardSlide";

const variants = {
  enter: { opacity: 0, x: 80, scale: 0.98 },
  center: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: -80, scale: 0.98 },
};

export function PortfolioSlideshow({ folder }: { folder: PortfolioFolder }) {
  const [index, setIndex] = useState(0);
  const count = folder.slides.length;
  const slide = folder.slides[index];

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + count) % count),
    [count],
  );

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Link
            href="/portfolio"
            className="text-xs font-medium text-teal-400/90 transition-colors hover:text-teal-300"
          >
            ← All folders
          </Link>
          <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            {folder.title}
          </h1>
          <p className="mt-1 text-sm text-zinc-400">{folder.tagline}</p>
        </div>
        <p className="text-sm text-zinc-500">
          {index + 1} / {count}
        </p>
      </div>

      <div className="relative min-h-[360px] sm:min-h-[420px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${folder.slug}-${index}`}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {slide.type === "image" ? (
              <figure className="overflow-hidden rounded-2xl border border-white/10 bg-[var(--card)] shadow-2xl">
                <div className="relative aspect-[16/10] w-full bg-black/40">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 1024px) 100vw, 960px"
                    priority={index === 0}
                  />
                </div>
                {slide.caption ? (
                  <figcaption className="border-t border-white/10 px-4 py-3 text-sm text-zinc-300">
                    {slide.caption}
                  </figcaption>
                ) : null}
              </figure>
            ) : (
              <PortfolioDashboardSlide variant={slide.variant} />
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[var(--card)] text-zinc-300 transition-colors hover:border-teal-500/40 hover:text-white"
            >
              ←
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[var(--card)] text-zinc-300 transition-colors hover:border-teal-500/40 hover:text-white"
            >
              →
            </button>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {folder.slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index
                    ? "w-7 bg-teal-400"
                    : "w-1.5 bg-zinc-600 hover:bg-zinc-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
