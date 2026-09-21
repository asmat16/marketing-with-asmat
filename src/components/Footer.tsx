import Link from "next/link";
import { siteConfig } from "@/lib/site";

const links = [
  { label: "Blog", href: siteConfig.links.blog },
  { label: "Portfolio", href: siteConfig.links.portfolio },
  { label: "Upwork", href: siteConfig.links.upwork },
  { label: "LinkedIn", href: siteConfig.links.linkedin },
  { label: "Book a call", href: siteConfig.links.book },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[var(--surface)] py-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-white">{siteConfig.name}</p>
            <p className="mt-1 max-w-sm text-sm text-zinc-400">
              Media buyer for e-commerce sales, real estate and home service
              lead gen on Meta & Google.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="text-sm text-zinc-400 transition-colors hover:text-teal-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/[0.08] pt-8 text-sm text-zinc-500 sm:flex-row sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Portfolio screenshots © Asmat — confidential client work.</p>
        </div>
      </div>
    </footer>
  );
}
