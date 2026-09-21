import Image from "next/image";
import Link from "next/link";
import { testimonials } from "@/lib/testimonials";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-28 border-t border-white/[0.08] bg-[var(--background)] py-20 sm:py-24"
    >
      <div className="page-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium tracking-widest text-teal-400/90 uppercase">
            Client feedback
          </p>
          <h2
            data-split
            className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.35rem] lg:leading-[1.12]"
          >
            Real clients. Their words. Their LinkedIn.
          </h2>
          <p data-reveal className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
            Four reviews from people who ran paid acquisition with us. Open any
            LinkedIn profile to see who they are.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {testimonials.map((t) => (
            <li key={t.id} data-reveal>
              <article className="card-hover flex h-full flex-col items-center rounded-3xl border border-white/10 bg-[var(--card)] px-6 py-8 text-center">
                <div className="relative h-36 w-36 overflow-hidden rounded-full bg-[var(--surface)] ring-4 ring-[#0A66C2]/35 sm:h-40 sm:w-40">
                  <Image
                    src={t.image}
                    alt={`${t.name} LinkedIn profile photo`}
                    fill
                    sizes="160px"
                    className={`object-cover ${t.imageClass ?? "object-center"}`}
                  />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{t.name}</h3>
                <p className="mt-1 text-sm text-zinc-400">{t.role}</p>
                <p className="mt-0.5 text-xs text-zinc-500">{t.location}</p>
                <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-zinc-300">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <Link
                  href={t.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#0A66C2] px-5 text-sm font-semibold text-white shadow-lg shadow-[#0A66C2]/20 transition-all hover:bg-[#0c7bd3] hover:shadow-[#0A66C2]/35"
                >
                  <LinkedInIcon className="h-4 w-4" />
                  LinkedIn profile
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
