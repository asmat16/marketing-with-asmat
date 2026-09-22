import type { Metadata } from "next";
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
    robots: { index: true, follow: true },
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
    <div className="py-10 sm:py-14">
      <div className="page-shell">
        <PortfolioSlideshow folder={folder} />
      </div>
    </div>
  );
}
