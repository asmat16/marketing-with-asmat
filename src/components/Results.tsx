import Link from "next/link";
import { credentials, resultsHighlights, siteConfig } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function Results() {
  return (
    <section id="results" className="border-t border-white/[0.08] bg-[var(--background)] py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          label="Results"
          title="Experience backed by measurable outcomes"
          description="7+ years managing Meta and Google ads across e-commerce, local services, and high-ticket niches — with a focus on ROAS and lead quality."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {resultsHighlights.map((item) => (
            <div
              key={item.label}
              className="card-hover rounded-2xl border border-white/10 bg-[var(--card)] p-6"
            >
              <p className="text-3xl font-semibold tracking-tight text-teal-400">
                {item.metric}
              </p>
              <p className="mt-2 font-medium text-white">{item.label}</p>
              <p className="mt-1 text-sm text-zinc-500">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-[var(--card)] p-8 sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-medium tracking-widest text-teal-400/90 uppercase">
                Credentials
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                Top Rated Plus on Upwork
              </h3>
              <p className="mt-2 max-w-xl text-zinc-400">
                Trusted by brands from startups to enterprise. Meta & Google
                certified with a proven track record in lead generation and
                revenue growth.
              </p>
            </div>
            <Link
              href={siteConfig.links.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-zinc-950 transition-opacity hover:opacity-90"
            >
              View Upwork profile
            </Link>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {credentials.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-zinc-300"
              >
                <svg
                  className="h-4 w-4 shrink-0 text-teal-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
