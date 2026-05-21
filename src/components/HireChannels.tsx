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
    logo: <LinkedInLogo className="h-6 w-6" />,
    idleBorder: "border-white/12",
    idleBg:
      "bg-gradient-to-b from-white/[0.09] via-white/[0.04] to-transparent",
    hoverBorder: "hover:border-[#0A66C2]/50",
    hoverBg:
      "hover:bg-gradient-to-b hover:from-[#0A66C2]/20 hover:via-[#0A66C2]/8 hover:to-transparent",
    hoverShadow: "hover:shadow-[#0A66C2]/25",
    iconWrap:
      "border-white/10 bg-white/5 text-[#0A66C2] group-hover:border-[#0A66C2]/40 group-hover:bg-[#0A66C2]/15 group-hover:text-[#70b5f9]",
    titleHover: "group-hover:text-[#70b5f9]",
    ctaHover: "group-hover:text-[#70b5f9]",
  },
  {
    platform: "Upwork",
    title: "Top Rated Plus on Upwork",
    description: "See profile & hire with escrow",
    href: siteConfig.links.upwork,
    logo: (
      <Image
        src="/brand/logos/platform-upwork.svg"
        alt=""
        width={24}
        height={24}
        className="h-7 w-7"
      />
    ),
    idleBorder: "border-white/12",
    idleBg:
      "bg-gradient-to-b from-white/[0.09] via-white/[0.04] to-transparent",
    hoverBorder: "hover:border-[#14A800]/50",
    hoverBg:
      "hover:bg-gradient-to-b hover:from-[#14A800]/20 hover:via-[#14A800]/8 hover:to-transparent",
    hoverShadow: "hover:shadow-[#14A800]/25",
    iconWrap:
      "border-white/10 bg-white/[0.06] group-hover:border-[#14A800]/45 group-hover:bg-[#14A800]/12",
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
        className="h-6 w-auto min-w-[4.5rem]"
      />
    ),
    idleBorder: "border-white/12",
    idleBg:
      "bg-gradient-to-b from-white/[0.09] via-white/[0.04] to-transparent",
    hoverBorder: "hover:border-[#1DBF73]/50",
    hoverBg:
      "hover:bg-gradient-to-b hover:from-[#1DBF73]/20 hover:via-[#1DBF73]/8 hover:to-transparent",
    hoverShadow: "hover:shadow-[#1DBF73]/25",
    iconWrap:
      "border-white/10 bg-white/[0.06] group-hover:border-[#1DBF73]/45 group-hover:bg-[#1DBF73]/12",
    titleHover: "group-hover:text-[#5ee9a8]",
    ctaHover: "group-hover:text-[#5ee9a8]",
  },
] as const;

export function HireChannels() {
  return (
    <section
      aria-label="Hire on LinkedIn, Upwork, or Fiverr"
      className="relative -mt-4 border-b border-white/[0.06] pb-12 sm:-mt-6 sm:pb-14"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-teal-500/[0.04] to-transparent"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <p className="mb-5 text-center text-xs font-semibold tracking-widest text-zinc-500 uppercase">
          Hire me your way
        </p>
        <ul className="grid gap-4 sm:grid-cols-3">
          {channels.map((channel) => (
            <li key={channel.platform}>
              <Link
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex h-full flex-col items-center gap-3 overflow-hidden rounded-2xl border px-5 py-6 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-xl ${channel.idleBorder} ${channel.idleBg} ${channel.hoverBorder} ${channel.hoverBg} ${channel.hoverShadow}`}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.06), transparent 70%)",
                  }}
                />
                <span
                  className={`relative flex h-12 w-full max-w-[140px] items-center justify-center rounded-xl border px-3 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 ${channel.iconWrap}`}
                >
                  {channel.logo}
                </span>
                <span className="relative text-[10px] font-semibold tracking-widest text-zinc-500 uppercase transition-colors duration-300 group-hover:text-zinc-400">
                  {channel.platform}
                </span>
                <span
                  className={`relative text-sm font-semibold leading-snug text-white transition-colors duration-300 sm:text-[0.9375rem] ${channel.titleHover}`}
                >
                  {channel.title}
                </span>
                <span className="relative text-xs leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                  {channel.description}
                </span>
                <span
                  className={`relative mt-auto inline-flex items-center gap-1 text-xs font-medium text-teal-400/90 transition-all duration-300 group-hover:translate-x-0.5 ${channel.ctaHover}`}
                  aria-hidden
                >
                  Open profile
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
