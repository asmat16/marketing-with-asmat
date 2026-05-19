import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { ContactForm } from "./ContactForm";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="border-t border-white/[0.08] py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              label="Contact"
              title="Let's talk about your ad strategy"
              description="Book a free 15-minute call or send a message. I'll review your goals and share how we can drive more leads and appointments for your business."
            />

            <div className="mt-10 space-y-4">
              <Link
                href={siteConfig.links.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover flex items-center justify-between rounded-2xl border border-teal-500/30 bg-teal-500/10 p-5 hover:bg-teal-500/15"
              >
                <div>
                  <p className="font-semibold text-white">
                    Book a free strategy call
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">
                    15 min · Zoom · Portfolio walkthrough
                  </p>
                </div>
                <span className="text-teal-400" aria-hidden>
                  →
                </span>
              </Link>

              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="rounded-xl border border-white/[0.08] bg-zinc-900/40 p-4 text-sm transition-colors hover:border-white/15"
                >
                  <p className="text-zinc-500">Phone</p>
                  <p className="mt-1 font-medium text-white">
                    {siteConfig.phoneDisplay}
                  </p>
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="rounded-xl border border-white/[0.08] bg-zinc-900/40 p-4 text-sm transition-colors hover:border-white/15"
                >
                  <p className="text-zinc-500">Email</p>
                  <p className="mt-1 font-medium text-white">
                    {siteConfig.email}
                  </p>
                </a>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href={siteConfig.links.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-white/30 hover:text-white"
                >
                  Upwork
                </Link>
                <Link
                  href={siteConfig.links.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-white/30 hover:text-white"
                >
                  Fiverr
                </Link>
                <Link
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-white/30 hover:text-white"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[var(--card)] p-6 sm:p-8">
            <p className="mb-6 text-sm font-medium text-zinc-400">
              Or send a message — I&apos;ll respond within 24 hours
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
