import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { ContactForm } from "./ContactForm";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="border-t border-white/[0.08] py-24 sm:py-28">
      <div className="page-shell">
        <SectionHeading
          label="Contact"
          title="Message me or book a call"
          description="Form submissions go to my email. You can also WhatsApp, email directly, hire on LinkedIn, or book a strategy call."
          align="center"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div
            data-reveal
            className="card-hover rounded-2xl border border-white/10 bg-[var(--card)] p-6 sm:p-8"
          >
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

          <div data-reveal className="flex flex-col justify-between gap-6">
            <Link
              href={siteConfig.links.book}
              className="card-hover flex items-center justify-between rounded-2xl border border-teal-500/30 bg-teal-500/10 p-6 hover:bg-teal-500/15"
            >
              <div>
                <p className="text-lg font-semibold text-white">
                  Book on the calendar
                </p>
                <p className="mt-1 text-sm text-zinc-400">
                  Full scheduling page. Pick a time for your free strategy call
                </p>
              </div>
              <span className="text-2xl text-teal-400" aria-hidden>
                →
              </span>
            </Link>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover rounded-xl border border-teal-500/25 bg-teal-500/10 p-4 text-sm"
              >
                <p className="text-teal-300">WhatsApp</p>
                <p className="mt-1 font-medium text-white">
                  Message Asmat now
                </p>
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="card-hover rounded-xl border border-white/10 bg-[var(--card)] p-4 text-sm"
              >
                <p className="text-zinc-500">Phone</p>
                <p className="mt-1 font-medium text-white">
                  {siteConfig.phoneDisplay}
                </p>
              </a>
              <a
                href={siteConfig.links.email}
                className="card-hover rounded-xl border border-white/10 bg-[var(--card)] p-4 text-sm"
              >
                <p className="text-zinc-500">Email</p>
                <p className="mt-1 font-medium text-white">
                  {siteConfig.email}
                </p>
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover rounded-xl border border-white/10 bg-[var(--card)] p-4 text-sm"
              >
                <p className="text-zinc-500">LinkedIn</p>
                <p className="mt-1 font-medium text-white">Hire or connect</p>
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
