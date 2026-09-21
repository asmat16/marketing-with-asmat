import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { ContactForm } from "./ContactForm";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="border-t border-white/[0.08] py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          label="Contact"
          title="Message me or book a call"
          description="Form submissions go to my email. Strategy calls are booked through Calendly — I see every appointment in my Calendly dashboard and inbox."
          align="center"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-[var(--card)] p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-white">Send a message</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Leads from this form are emailed to{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-teal-400 hover:underline"
              >
                {siteConfig.email}
              </a>{" "}
              (usually within 24 hours).
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6">
            <Link
              href={siteConfig.links.book}
              className="card-hover flex items-center justify-between rounded-2xl border border-teal-500/30 bg-teal-500/10 p-6 hover:bg-teal-500/15"
            >
              <div>
                <p className="text-lg font-semibold text-white">
                  Book on the calendar
                </p>
                <p className="mt-1 text-sm text-zinc-400">
                  Full scheduling page — pick a time for your free strategy call
                </p>
              </div>
              <span className="text-2xl text-teal-400" aria-hidden>
                →
              </span>
            </Link>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={`tel:${siteConfig.phone}`}
                className="rounded-xl border border-white/10 bg-[var(--card)] p-4 text-sm transition-colors hover:border-white/20"
              >
                <p className="text-zinc-500">Phone</p>
                <p className="mt-1 font-medium text-white">
                  {siteConfig.phoneDisplay}
                </p>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="rounded-xl border border-white/10 bg-[var(--card)] p-4 text-sm transition-colors hover:border-white/20"
              >
                <p className="text-zinc-500">Email</p>
                <p className="mt-1 font-medium text-white">
                  {siteConfig.email}
                </p>
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href={siteConfig.links.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-4 py-2 text-sm text-zinc-300 hover:text-white"
              >
                Upwork
              </Link>
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-4 py-2 text-sm text-zinc-300 hover:text-white"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
