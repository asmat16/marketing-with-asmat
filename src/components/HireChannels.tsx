import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

function LinkedInLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const channels = [
  {
    platform: "LinkedIn",
    title: "Hire on LinkedIn",
    description: "View profile & connect",
    href: siteConfig.links.linkedin,
    logo: <LinkedInLogo className="h-4 w-4" />,
    idleBorder: "border-white/12",
    idleBg:
      "bg-gradient-to-r from-white/[0.06] to-white/[0.02]",
    hoverBorder: "hover:border-[#0A66C2]/45",
    hoverBg:
      "hover:bg-gradient-to-r hover:from-[#0A66C2]/15 hover:to-[#0A66C2]/5",
    hoverShadow: "hover:shadow-[#0A66C2]/15",
    iconWrap:
      "border-white/10 bg-white/5 text-[#0A66C2] group-hover:border-[#0A66C2]/35 group-hover:bg-[#0A66C2]/12 group-hover:text-[#70b5f9]",
    titleHover: "group-hover:text-[#70b5f9]",
    ctaHover: "group-hover:text-[#70b5f9]",
  },
  {
    platform: "Upwork",
    title: "Top Rated Plus",
    description: "Upwork · hire with escrow",
    href: siteConfig.links.upwork,
    logo: (
      <Image
        src="/brand/logos/platform-upwork.svg"
        alt=""
        width={24}
        height={24}
        className="h-4 w-4"
      />
    ),
    idleBorder: "border-white/12",
    idleBg:
      "bg-gradient-to-r from-white/[0.06] to-white/[0.02]",
    hoverBorder: "hover:border-[#14A800]/45",
    hoverBg:
      "hover:bg-gradient-to-r hover:from-[#14A800]/15 hover:to-[#14A800]/5",
    hoverShadow: "hover:shadow-[#14A800]/15",
    iconWrap:
      "border-white/10 bg-white/[0.06] group-hover:border-[#14A800]/35 group-hover:bg-[#14A800]/10",
    titleHover: "group-hover:text-[#6fdc6f]",
    ctaHover: "group-hover:text-[#6fdc6f]",
  },
  {
    platform: "Fiverr",
    title: "Hire on Fiverr",
    description: "Browse gigs & start a project",
    href: siteConfig.links.fiverr,
    logo: (
      <Image
        src="/brand/logos/platform-fiverr.svg"
        alt=""
        width={24}
        height={24}
        className="h-3.5 w-auto max-w-[3.25rem]"
      />
    ),
    idleBorder: "border-white/12",
    idleBg:
      "bg-gradient-to-r from-white/[0.06] to-white/[0.02]",
    hoverBorder: "hover:border-[#1DBF73]/45",
    hoverBg:
      "hover:bg-gradient-to-r hover:from-[#1DBF73]/15 hover:to-[#1DBF73]/5",
    hoverShadow: "hover:shadow-[#1DBF73]/15",
    iconWrap:
      "border-white/10 bg-white/[0.06] group-hover:border-[#1DBF73]/35 group-hover:bg-[#1DBF73]/10",
    titleHover: "group-hover:text-[#5ee9a8]",
    ctaHover: "group-hover:text-[#5ee9a8]",
  },
] as const;

export function HireChannels() {
  return (
    <section
      aria-label="Hire on LinkedIn, Upwork, or Fiverr"
      className="relative -mt-2 border-b border-white/[0.06] pb-8 sm:-mt-4 sm:pb-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-teal-500/[0.03] to-transparent"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <p className="mb-3 text-center text-[10px] font-semibold tracking-[0.18em] text-zinc-500 uppercase sm:mb-3.5 sm:text-left">
          Hire me your way
        </p>
        <ul className="grid gap-2 sm:grid-cols-3 sm:gap-2.5">
          {channels.map((channel) => (
            <li key={channel.platform}>
              <Link
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex items-center gap-2.5 overflow-hidden rounded-xl border px-3 py-2.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-px hover:shadow-md sm:gap-3 sm:px-3.5 sm:py-3 ${channel.idleBorder} ${channel.idleBg} ${channel.hoverBorder} ${channel.hoverBg} ${channel.hoverShadow}`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 sm:h-9 sm:w-9 ${channel.iconWrap}`}
                >
                  {channel.logo}
                </span>
                <span className="min-w-0 flex-1 text-left leading-tight">
                  <span
                    className={`block truncate text-[13px] font-semibold text-white transition-colors duration-300 sm:text-sm ${channel.titleHover}`}
                  >
                    {channel.title}
                  </span>
                  <span className="mt-0.5 block truncate text-[11px] text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400">
                    {channel.description}
                  </span>
                </span>
                <span
                  className={`shrink-0 text-sm text-zinc-500 transition-all duration-300 group-hover:translate-x-0.5 ${channel.ctaHover}`}
                  aria-hidden
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
