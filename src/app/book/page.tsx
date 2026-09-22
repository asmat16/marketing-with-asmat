import type { Metadata } from "next";
import Link from "next/link";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Free Strategy Call",
  description:
    "Schedule a free 15-minute Zoom call with Asmat. Meta and Google media buyer for e-commerce sales, real estate, and home service lead generation.",
  alternates: {
    canonical: `${siteConfig.url}/book`,
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Book a Free Strategy Call | Marketing with Asmat",
    description:
      "Pick a time for a free ad strategy call. E-commerce sales, real estate & home service paid media.",
    url: `${siteConfig.url}/book`,
  },
};

export default function BookPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--background)] pt-24 pb-16">
        <div className="mx-auto w-full max-w-5xl">
          <Link
            href="/"
            className="text-sm text-zinc-500 transition-colors hover:text-white"
          >
            ← Back to home
          </Link>
          <h1
            data-split
            className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Book your free strategy call
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-400">
            15 minutes on Zoom. We&apos;ll review your offers, ad accounts,
            and the fastest path to more sales or qualified leads.
          </p>

          <div className="mt-8 rounded-xl border border-teal-500/20 bg-teal-500/5 p-4 text-sm text-zinc-300">
            Appointments appear in your{" "}
            <a
              href="https://calendly.com/app/scheduled_events"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-400 underline"
            >
              Calendly scheduled events
            </a>{" "}
            and email ({siteConfig.email}).
          </div>

          <div className="mt-8">
            <CalendlyEmbed minHeight={750} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
