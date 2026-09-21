import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function MedSpaHighlight() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.08] py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(45,212,191,0.08),transparent_60%)]"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="card-hover flex flex-col gap-8 rounded-3xl border border-teal-500/20 bg-gradient-to-br from-teal-500/10 via-[var(--card)] to-indigo-500/10 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-widest text-teal-400 uppercase">
              Sales engine
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              E-commerce & DTC — ads built to sell, not collect leads
            </h2>
            <p className="mt-3 text-zinc-300 leading-relaxed">
              Purchase campaigns, catalog ads, and product creative for Shopify
              and DTC brands — so you get orders and ROAS, not a spreadsheet of
              form fills. Lead gen is reserved for real estate and home
              services.
            </p>
          </div>
          <Link
            href={siteConfig.links.book}
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-white px-8 text-sm font-bold text-zinc-950 transition-opacity hover:opacity-90"
          >
            Get an e-commerce ad audit
          </Link>
        </div>
      </div>
    </section>
  );
}
