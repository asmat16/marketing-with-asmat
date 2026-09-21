"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { heroStats, siteConfig } from "@/lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-[7.25rem] pb-16 sm:pt-[7.75rem] sm:pb-20">
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 opacity-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_30%_-10%,rgba(45,212,191,0.14),transparent_55%),radial-gradient(ellipse_50%_40%_at_90%_20%,rgba(129,140,248,0.12),transparent_50%)]"
      />
      <div
        aria-hidden
        className="animate-pulse-glow pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-pulse-glow pointer-events-none absolute -right-10 top-10 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl"
      />

      <div className="page-shell relative grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div>
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-teal-300 uppercase"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
            </span>
            Results backed by $20M+ ad spend
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-[1.85rem] font-bold tracking-tight text-white sm:text-[2.45rem] sm:leading-[1.14] lg:text-[2.85rem] lg:leading-[1.12]"
          >
            I don&apos;t just buy Media. I build{" "}
            <span className="text-gradient">Paid Growth Engines</span> that
            drive Revenue.
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-5 max-w-xl text-[0.95rem] leading-[1.65] text-zinc-300 sm:mt-6 sm:text-base sm:leading-[1.7] lg:text-[1.05rem] lg:leading-[1.72]"
          >
            I&apos;ve managed $20M+ in ad spend across eCommerce, DTC, real
            estate, and home services with a focus on turning advertising spend
            into predictable customer acquisition.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href={siteConfig.links.book}
              className="group inline-flex h-13 items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-teal-500 px-8 text-sm font-bold text-zinc-950 shadow-lg shadow-teal-500/25 transition-all hover:shadow-teal-500/40 hover:brightness-110"
            >
              Book a free strategy call
            </Link>
            <Link
              href="#portfolio"
              className="inline-flex h-13 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-indigo-100"
            >
              View case studies
            </Link>
          </motion.div>

          <motion.dl
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 grid grid-cols-2 gap-2 sm:mt-11 sm:grid-cols-4 sm:gap-2.5"
          >
            {heroStats.map((stat, index) => {
              const valueStyles = [
                "text-teal-300",
                "text-indigo-200/95",
                "text-white",
                "text-[#6fdc6f]",
              ] as const;

              return (
                <div
                  key={stat.label}
                  className="card-hover flex min-h-[4.25rem] flex-col justify-center rounded-lg border border-white/[0.08] bg-[var(--card)]/50 px-3 py-2.5 backdrop-blur-sm sm:min-h-[4.5rem] sm:px-3.5"
                >
                  <dt
                    className={`text-lg font-bold leading-none tracking-tight sm:text-xl ${valueStyles[index] ?? valueStyles[0]}`}
                  >
                    {stat.value}
                  </dt>
                  <dd className="mt-1.5 text-[10px] leading-tight text-zinc-500 sm:text-[11px]">
                    {stat.label}
                  </dd>
                </div>
              );
            })}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="animate-float relative flex min-h-[400px] items-end justify-center sm:min-h-[460px] lg:min-h-[520px]">
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-0 left-1/2 h-[90%] w-[75%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.22)_0%,rgba(129,140,248,0.08)_45%,transparent_70%)] blur-2xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-4 left-1/2 h-6 w-[50%] -translate-x-1/2 rounded-[100%] bg-black/50 blur-2xl"
            />
            <div data-parallax="6" className="relative z-10 w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[400px]">
              <Image
                src="/asmat-hero.png"
                alt="Asmat, Meta and Google media buyer for e-commerce, real estate, and home services"
                width={520}
                height={871}
                priority
                className="h-auto w-full object-contain object-bottom drop-shadow-[0_28px_56px_rgba(0,0,0,0.55)]"
                sizes="(max-width: 1024px) 90vw, 400px"
              />
            </div>
          </div>

          <div className="animate-float-delayed absolute -left-2 top-6 z-20 rounded-xl border border-teal-500/30 bg-[var(--card)]/95 px-4 py-3 shadow-xl shadow-teal-500/10 backdrop-blur-md sm:-left-8">
            <p className="text-2xl font-bold text-teal-400">50X+</p>
            <p className="text-xs text-zinc-400">Peak purchase ROAS</p>
          </div>

          <div className="animate-float absolute -right-1 top-1/3 z-20 rounded-xl border border-indigo-500/30 bg-[var(--card)]/95 px-4 py-3 shadow-xl shadow-indigo-500/10 backdrop-blur-md sm:-right-6">
            <p className="text-2xl font-bold text-indigo-300">4,269</p>
            <p className="text-xs text-zinc-400">Google conversions / yr</p>
          </div>

          <div className="absolute bottom-0 left-4 right-4 z-20 rounded-xl border border-white/10 bg-[var(--surface)]/95 p-4 backdrop-blur-md">
            <p className="text-xs font-semibold tracking-wide text-teal-400 uppercase">
              Specializing in
            </p>
            <p className="mt-1 text-sm leading-snug text-zinc-200">
              E-commerce · Real estate · Home services · DTC sales
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
