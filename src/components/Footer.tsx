import Link from "next/link";
import { siteConfig } from "@/lib/site";

const links = [
  { label: "Blog", href: siteConfig.links.blog },
  { label: "Portfolio", href: siteConfig.links.portfolio },
  { label: "Email", href: siteConfig.links.email },
  { label: "WhatsApp", href: siteConfig.links.whatsapp },
  { label: "LinkedIn", href: siteConfig.links.linkedin },
  { label: "Upwork", href: siteConfig.links.upwork },
  { label: "Book a call", href: siteConfig.links.book },
] as const;

const liveBlurb =
  "Performance marketing for DTC brands and lead gen businesses.";

export function Footer({
  blurb = liveBlurb,
  whatsappHref = siteConfig.links.whatsapp,
}: {
  blurb?: string;
  whatsappHref?: string;
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[var(--surface)] py-12">
      <div className="page-shell">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-white">{siteConfig.name}</p>
            <p className="mt-1 max-w-sm text-sm text-zinc-400">
              {blurb}
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((item) => {
              const href = item.label === "WhatsApp" ? whatsappHref : item.href;
              return (
              <Link
                key={item.label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="text-sm text-zinc-400 transition-colors hover:text-teal-300"
              >
                {item.label}
              </Link>
              );
            })}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/[0.08] pt-8 text-sm text-zinc-500 sm:flex-row sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Portfolio screenshots © Asmat. Confidential client work.</p>
        </div>
      </div>
    </footer>
  );
}
