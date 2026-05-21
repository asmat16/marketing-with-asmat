"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { testimonials } from "@/lib/testimonials";

const slideVariants = {
  enter: { opacity: 0, x: 48 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -48 },
};

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % count);
  }, [count]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const active = testimonials[index];

  return (
    <section
      id="testimonials"
      className="scroll-mt-28 border-t border-white/[0.08] bg-[var(--background)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
          <div className="max-w-xl">
            <p className="text-xs font-medium tracking-widest text-teal-400/90 uppercase">
              Client feedback
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.35rem] lg:leading-[1.12]">
              Our clients actually tell us how it went
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
              Home service owners, clinic teams, and local brands across the US.
              Real feedback from people running Meta and Google with us, not
              polished marketing copy.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  aria-label={`Show review from ${t.name}`}
                  aria-current={i === index ? "true" : undefined}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-8 bg-teal-400"
                      : "w-1.5 bg-zinc-600 hover:bg-zinc-500"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="relative min-h-[320px] sm:min-h-[300px]">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-8 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-teal-500/10 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[var(--background)] to-transparent"
            />

            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={active.id}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[var(--card)] via-[var(--card)] to-[var(--surface)]/80 p-5 shadow-xl shadow-black/20 backdrop-blur-md sm:p-6"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
                  <div className="relative mx-auto shrink-0 sm:mx-0">
                    <div className="relative h-24 w-24 overflow-hidden rounded-2xl ring-2 ring-white/10 sm:h-28 sm:w-28">
                      <Image
                        src={active.image}
                        alt=""
                        width={112}
                        height={112}
                        className="h-full w-full object-cover"
                        priority={index === 0}
                      />
                    </div>
                    <span className="absolute -bottom-1 -right-1 rounded-md bg-teal-500/90 px-1.5 py-0.5 text-[9px] font-bold tracking-wide text-zinc-950 uppercase">
                      USA
                    </span>
                  </div>

                  <div className="min-w-0 flex-1 text-center sm:text-left">
                    <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 sm:justify-start">
                      <p className="text-base font-semibold text-white">
                        {active.name}
                      </p>
                      <span className="text-zinc-600" aria-hidden>
                        ·
                      </span>
                      <p className="text-sm text-zinc-400">{active.role}</p>
                    </div>
                    <p className="mt-0.5 text-xs text-zinc-500">
                      {active.niche}, {active.location}
                    </p>
                    <blockquote className="mt-4 text-[15px] leading-relaxed text-zinc-200 sm:text-base">
                      &ldquo;{active.quote}&rdquo;
                    </blockquote>
                    {active.caseStudy ? (
                      <div className="mt-4 rounded-xl border border-teal-500/20 bg-teal-500/5 px-4 py-3 text-left">
                        <p className="text-[10px] font-semibold tracking-widest text-teal-400/90 uppercase">
                          Quick snapshot
                        </p>
                        <p className="mt-1.5 text-xs leading-relaxed text-zinc-300 sm:text-sm">
                          {active.caseStudy}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>

            <div className="mt-4 flex justify-end gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous review"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[var(--card)] text-zinc-400 transition-colors hover:border-teal-500/30 hover:text-white"
              >
                ←
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next review"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[var(--card)] text-zinc-400 transition-colors hover:border-teal-500/30 hover:text-white"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
