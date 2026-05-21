import { PortfolioFolderGrid } from "@/components/portfolio/PortfolioFolderGrid";

export default function PortfolioHomePage() {
  return (
    <div className="relative overflow-hidden px-5 py-14 sm:px-8 sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,rgba(45,212,191,0.12),transparent_60%)]"
      />
      <div className="relative mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-widest text-teal-400/90 uppercase">
          Portfolio
        </p>
        <h1 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Campaign results by industry
        </h1>
        <p className="mt-4 max-w-xl text-base text-zinc-400 sm:text-lg">
          Six folders. Real ad account screenshots and custom case study boards
          for med spas, home services, trades, e-commerce, Google, and Meta.
        </p>
        <div className="mt-12">
          <PortfolioFolderGrid />
        </div>
      </div>
    </div>
  );
}
