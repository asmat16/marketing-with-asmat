import Link from "next/link";
import { siteConfig } from "@/lib/site";

const liveCopy = {
  label: "DTC and lead gen",
  title: "Ads built to sell, not a pile of cheap clicks",
  description:
    "Meta, Google, creative, funnel, and follow-up for DTC brands and lead gen businesses. The goal is purchases and qualified calls.",
  cta: "Book a 15-min call",
};

export function MedSpaHighlight({
  copy = liveCopy,
}: {
  copy?: {
    label: string;
    title: string;
    description: string;
    cta: string;
  };
}) {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.08] py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(45,212,191,0.08),transparent_60%)]"
      />
      <div className="page-shell relative">
        <div
          data-reveal
          className="card-hover flex flex-col gap-8 rounded-3xl border border-teal-500/20 bg-gradient-to-br from-teal-500/10 via-[var(--card)] to-indigo-500/10 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest text-teal-400 uppercase">
              {copy.label}
            </p>
            <h2 data-split className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              {copy.title}
            </h2>
            <p className="mt-3 text-zinc-300 leading-relaxed">
              {copy.description}
            </p>
          </div>
          <Link
            href={siteConfig.links.book}
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-white px-8 text-sm font-bold text-zinc-950 transition-opacity hover:opacity-90"
          >
            {copy.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
