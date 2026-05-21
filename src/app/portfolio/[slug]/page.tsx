import { notFound } from "next/navigation";
import { PortfolioSlideshow } from "@/components/portfolio/PortfolioSlideshow";
import { getPortfolioFolder, portfolioFolders } from "@/lib/portfolio";

export function generateStaticParams() {
  return portfolioFolders.map((folder) => ({ slug: folder.slug }));
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
    <div className="px-5 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <PortfolioSlideshow folder={folder} />
      </div>
    </div>
  );
}
