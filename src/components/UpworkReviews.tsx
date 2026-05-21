"use client";

import Image from "next/image";
import Link from "next/link";
import { testimonials } from "@/lib/testimonials";
import { siteConfig } from "@/lib/site";

const customPhotos = new Set([
  "amanda-l",
  "priya-n",
  "holly-burns",
  "mike-r",
  "tom-v",
]);

function photoClass(id: string) {
  if (id === "amanda-l") return "scale-[1.35] object-[center_22%]";
  if (id === "priya-n") return "scale-105 object-[center_12%]";
  if (id === "mike-r") return "scale-[1.25] object-[center_20%]";
  if (id === "tom-v") return "scale-105 object-[center_15%]";
  if (id === "holly-burns") return "scale-105 object-[center_18%]";
  return "object-center";
}

export function UpworkReviews() {
  return (
    <section
      id="upwork-reviews"
      className="scroll-mt-28 border-t border-white/[0.08] bg-[var(--surface)]/40 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-widest text-teal-400/90 uppercase">
            Upwork reviews
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Same clients. Upwork feedback.
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Names match the reviews above. Written how clients actually leave
            feedback on Upwork after a project wraps.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <li
              key={t.id}
              className="flex flex-col rounded-2xl border border-white/10 bg-[var(--card)] p-5 transition-colors hover:border-teal-500/25"
            >
              <div className="flex items-start gap-3">
                <div
                  className={`relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-[var(--surface)] ring-2 ring-white/10 ${customPhotos.has(t.id) ? "" : ""}`}
                >
                  <Image
                    src={t.image}
                    alt=""
                    width={44}
                    height={44}
                    className={`h-full w-full object-cover ${photoClass(t.id)}`}
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-zinc-500">
                    {t.role}, {t.location}
                  </p>
                  <p className="mt-1 text-[11px] text-teal-400/80">
                    {t.upworkProject}
                  </p>
                </div>
              </div>
              <p className="mt-1 text-amber-400" aria-label="5 out of 5 stars">
                ★★★★★
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-300">
                {t.upworkReview}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <Link
            href={siteConfig.links.upwork}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-full border border-[#14A800]/40 bg-[#14A800]/10 px-6 text-sm font-semibold text-[#6fdc6f] transition-colors hover:bg-[#14A800]/20"
          >
            Read more on Upwork →
          </Link>
        </div>
      </div>
    </section>
  );
}
