import type { Metadata } from "next";
import Link from "next/link";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { footerBlurb } from "@/lib/foundation";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Book a Free Strategy Call",
    description:
      "Pick a time. Bring your ad account, your store or landing page link, and the one thing you want to fix first.",
    path: "/book",
  }),
  robots: { index: true, follow: true },
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
            Fifteen minutes on the problem
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-400">
            Pick a time. Bring your ad account, your store or landing page
            link, and the one thing you want to fix first.
          </p>

          <div className="mt-8">
            <CalendlyEmbed minHeight={750} />
          </div>
        </div>
      </main>
      <Footer blurb={footerBlurb} />
    </>
  );
}
