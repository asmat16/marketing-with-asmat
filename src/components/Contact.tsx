import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { ContactForm } from "./ContactForm";
import { SectionHeading } from "./SectionHeading";

const liveContact = {
  label: "Contact",
  title: "Message me or book a call",
  description:
    "Form submissions go to my email. You can also WhatsApp, email directly, hire on LinkedIn, or book a strategy call.",
  bookTitle: "Book on the calendar",
  bookDescription:
    "Full scheduling page. Pick a time for your free strategy call",
};

type ContactChannel = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

const liveChannels: ContactChannel[] = [
  {
    label: "WhatsApp",
    value: "Message Asmat now",
    href: siteConfig.links.whatsapp,
    external: true,
  },
  {
    label: "Phone",
    value: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phone}`,
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: siteConfig.links.email,
  },
  {
    label: "LinkedIn",
    value: "Hire or connect",
    href: siteConfig.links.linkedin,
    external: true,
  },
];

export function Contact({
  copy = liveContact,
  channels = liveChannels,
  showShortcuts = true,
}: {
  copy?: {
    label: string;
    title: string;
    description: string;
    bookTitle: string;
    bookDescription: string;
  };
  channels?: readonly ContactChannel[];
  showShortcuts?: boolean;
}) {
  return (
    <section id="contact" className="border-t border-white/[0.08] py-24 sm:py-28">
      <div className="page-shell">
        <SectionHeading
          label={copy.label}
          title={copy.title}
          description={copy.description}
          align="center"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div
            data-reveal
            className="card-hover rounded-2xl border border-white/10 bg-[var(--card)] p-6 sm:p-8"
          >
            <h3 className="text-lg font-semibold text-white">Send a message</h3>
            <p className="mt-2 text-sm text-zinc-400">
              I usually reply within 24 hours.
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
                  {copy.bookTitle}
                </p>
                <p className="mt-1 text-sm text-zinc-400">
                  {copy.bookDescription}
                </p>
              </div>
              <span className="text-2xl text-teal-400" aria-hidden>
                →
              </span>
            </Link>

            <div className="grid gap-3 sm:grid-cols-2">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noopener noreferrer" : undefined}
                  className={`card-hover rounded-xl border p-4 text-sm ${
                    channel.label.toLowerCase().includes("whatsapp")
                      ? "border-teal-500/25 bg-teal-500/10"
                      : "border-white/10 bg-[var(--card)]"
                  }`}
                >
                  <p className="text-teal-300">{channel.label}</p>
                  <p className="mt-1 font-medium break-all text-white">
                    {channel.value}
                  </p>
                </a>
              ))}
            </div>

            {showShortcuts ? (
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
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
