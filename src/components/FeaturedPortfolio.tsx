"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { copyrightNotice, featuredCaseStudies } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function FeaturedPortfolio() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <section
      id="portfolio"
      className="relative border-t border-white/[0.08] bg-[var(--surface)] py-24 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(129,140,248,0.06),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          label="Case studies"
          title="Campaign results from real ad accounts"
          description="Screenshots from Meta Ads Manager, Google Ads, and Analytics. Confidential client work. Click any card to enlarge."
          align="center"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-6 sm:grid-cols-2"
        >
          {featuredCaseStudies.map((study, index) => (
            <motion.article
              key={study.image}
              variants={item}
              className="card-hover group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[var(--card)]"
              onClick={() => setLightbox(index)}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-800/50">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
                quality={72}
                loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                <span className="absolute left-4 top-4 rounded-full bg-teal-500/90 px-3 py-1 text-xs font-bold text-zinc-950">
                  {study.platform}
                </span>
                <p className="absolute bottom-14 left-4 text-3xl font-bold text-white drop-shadow-lg">
                  {study.headline}
                </p>
                <p className="absolute right-3 top-3 rounded bg-black/50 px-2 py-0.5 text-[10px] text-zinc-400 backdrop-blur-sm">
                  © Asmat
                </p>
              </div>
              <div className="border-t border-white/[0.06] p-5 transition-colors group-hover:border-teal-500/20 group-hover:bg-[var(--card-hover)]">
                <h3 className="text-lg font-semibold text-white group-hover:text-teal-50">
                  {study.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {study.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-0.5 text-xs text-indigo-200 transition-colors group-hover:border-teal-500/30 group-hover:bg-teal-500/10 group-hover:text-teal-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <p className="mt-10 text-center text-xs text-zinc-500">
          {copyrightNotice}
        </p>
      </div>

      {lightbox !== null ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-10 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20"
            onClick={() => setLightbox(null)}
          >
            Close
          </button>
          <div
            className="relative max-h-[90vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={featuredCaseStudies[lightbox].image}
              alt={featuredCaseStudies[lightbox].title}
              width={1400}
              height={900}
              className="h-auto max-h-[85vh] w-full rounded-lg object-contain"
            />
            <p className="mt-4 text-center text-sm text-zinc-400">
              {featuredCaseStudies[lightbox].title} · © Asmat
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
