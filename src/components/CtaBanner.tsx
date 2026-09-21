import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function CtaBanner() {
  return (
    <section className="border-t border-white/[0.08] py-20">
      <div className="page-shell">
        <div
          data-reveal
          className="card-hover relative overflow-hidden rounded-3xl border border-teal-500/20 bg-gradient-to-br from-[var(--card)] via-[var(--surface)] to-indigo-950/40 px-8 py-14 text-center sm:px-16"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.12),transparent_65%)]"
          />
          <div className="relative">
            <h2
              data-split
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Ready to grow sales, or fill the pipeline with real leads?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
              Book a free strategy call. We&apos;ll review your offers, ad
              accounts, and the fastest path to purchases or qualified leads.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={siteConfig.links.book}
                className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-teal-500 px-8 text-sm font-bold text-zinc-950 shadow-lg shadow-teal-500/20 transition-all hover:shadow-teal-500/35"
              >
                Book free call
              </Link>
              <Link
                href={siteConfig.links.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 text-sm font-semibold text-white transition-all hover:border-indigo-400/40 hover:bg-indigo-500/10"
              >
                Hire on Upwork
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
