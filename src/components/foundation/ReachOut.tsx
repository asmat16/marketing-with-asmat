import Link from "next/link";
import { demoWhatsapp } from "@/lib/demo-content";
import { siteConfig } from "@/lib/site";

const links = [
  { label: "Reach out", href: demoWhatsapp, external: true },
  { label: "LinkedIn", href: siteConfig.links.linkedin, external: true },
  { label: "Upwork", href: siteConfig.links.upwork, external: true },
  { label: "Hire me", href: siteConfig.links.upwork, external: true },
  { label: "Email me", href: siteConfig.links.email },
] as const;

export function ReachOut() {
  return (
    <div className="page-shell pb-16">
      <p className="text-xs font-medium tracking-widest text-zinc-500 uppercase">
        Talk to Asmat
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {links.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            target={"external" in item && item.external ? "_blank" : undefined}
            rel={
              "external" in item && item.external
                ? "noopener noreferrer"
                : undefined
            }
            className="inline-flex h-10 items-center rounded-full border border-white/15 px-4 text-sm font-semibold text-white transition-colors hover:border-teal-400/40 hover:text-teal-200"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
