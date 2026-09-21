import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { CalendlyEmbed } from "./CalendlyEmbed";
import { SectionHeading } from "./SectionHeading";

export function BookSection() {
  return (
    <section
      id="book"
      className="border-t border-white/[0.08] bg-[var(--surface)] py-24 sm:py-28"
    >
      <div className="mx-auto w-full max-w-5xl">
        <SectionHeading
          label="Book a call"
          title="Schedule your free strategy call"
          description="Pick a time below. You'll get a calendar invite and reminder, and I'll see your booking instantly in Calendly."
          align="center"
        />

        <div className="mt-8 rounded-xl border border-white/10 bg-teal-500/5 p-4 text-center text-sm text-zinc-300">
          <p>
            <strong className="text-teal-300">Where bookings appear:</strong>{" "}
            Every appointment shows in your{" "}
            <Link
              href="https://calendly.com/app/scheduled_events"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 underline hover:text-teal-300"
            >
              Calendly dashboard
            </Link>
            , syncs to your connected calendar, and sends email notifications
            to {siteConfig.email}.
          </p>
        </div>

        <div className="mt-8">
          <CalendlyEmbed minHeight={720} />
        </div>

        <p className="mt-6 text-center text-xs text-zinc-500">
          Prefer a link?{" "}
          <Link
            href={siteConfig.links.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline"
          >
            Open Calendly in a new tab
          </Link>
        </p>
      </div>
    </section>
  );
}
