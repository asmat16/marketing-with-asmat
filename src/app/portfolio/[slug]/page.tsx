import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortfolioSlideshow } from "@/components/portfolio/PortfolioSlideshow";
import { getPortfolioFolder, portfolioFolders } from "@/lib/portfolio";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return portfolioFolders.map((folder) => ({ slug: folder.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const folder = getPortfolioFolder(slug);
  if (!folder) return {};
  const url = `${siteConfig.url}/portfolio/${folder.slug}`;
  return {
    title: `${folder.title} | Paid Ads Case Studies`,
    description: `${folder.tagline}. Real Meta and Google campaign results from Marketing with Asmat.`,
    alternates: { canonical: url },
    robots:
      folder.index === false
        ? { index: false, follow: true, googleBot: { index: false, follow: true } }
        : {
            index: true,
            follow: true,
            googleBot: {
              index: true,
              follow: true,
              "max-image-preview": "large" as const,
              "max-snippet": -1,
            },
          },
    openGraph: {
      title: folder.title,
      description: folder.tagline,
      url,
    },
  };
}

export default async function PortfolioFolderPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const folder = getPortfolioFolder(slug);

  if (!folder) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="border-b border-white/[0.08] bg-[var(--background)]/90 backdrop-blur-xl">
        <div className="page-shell flex h-14 items-center justify-between">
          <Link href="/portfolio" className="text-sm font-semibold text-white">
            Marketing with Asmat
          </Link>
          <Link
            href="/"
            className="text-xs text-zinc-400 transition-colors hover:text-teal-300"
          >
            Home
          </Link>
        </div>
      </header>
      <main className="py-10 sm:py-14">
        <div className="page-shell">
          <PortfolioSlideshow folder={folder} />
        </div>
      </main>
      <footer className="border-t border-white/[0.08] py-8 text-center text-xs text-zinc-500">
        © Asmat. Confidential client work shown for portfolio purposes.
      </footer>
    </div>
  );
}
