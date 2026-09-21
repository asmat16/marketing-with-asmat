import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Marketing with Asmat",
  description:
    "Case studies and campaign results for e-commerce, real estate, home services, Google Ads, and Meta Ads.",
  robots: { index: true, follow: true },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="border-b border-white/[0.08] bg-[var(--background)]/90 backdrop-blur-xl">
        <div className="page-shell flex h-14 items-center justify-between">
          <Link href="/portfolio" className="text-sm font-semibold text-white">
            Marketing with Asmat
          </Link>
          <Link
            href="https://www.marketingwithasmat.pro"
            className="text-xs text-zinc-400 transition-colors hover:text-teal-300"
          >
            Main site →
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-white/[0.08] py-8 text-center text-xs text-zinc-500">
        © Asmat. Confidential client work shown for portfolio purposes.
      </footer>
    </div>
  );
}
