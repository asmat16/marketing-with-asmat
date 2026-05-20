import Link from "next/link";
import { siteConfig } from "@/lib/site";

const channels = [
  {
    platform: "LinkedIn",
    title: "Hire on LinkedIn",
    description: "View profile & connect",
    href: siteConfig.links.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    hoverBorder: "hover:border-indigo-400/35",
    hoverGlow: "group-hover:shadow-indigo-500/10",
    iconColor: "text-indigo-300 group-hover:text-indigo-200",
  },
  {
    platform: "Upwork",
    title: "Top Rated Plus on Upwork",
    description: "See profile & hire with escrow",
    href: siteConfig.links.upwork,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-12.158c-2.669 0-4.872 1.364-6.127 3.633-1.224-2.269-3.427-3.633-6.127-3.633C2.691 0 0 2.691 0 6v12c0 3.309 2.691 6 6 6h12c3.309 0 6-2.691 6-6V6c0-3.309-2.691-6-6-6z" />
      </svg>
    ),
    hoverBorder: "hover:border-teal-400/40",
    hoverGlow: "group-hover:shadow-teal-500/15",
    iconColor: "text-teal-400 group-hover:text-teal-300",
  },
  {
    platform: "Fiverr",
    title: "Hire on Fiverr",
    description: "Browse gigs & start a project",
    href: siteConfig.links.fiverr,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M22.436 15.227c-.473-1.756-1.697-3.184-3.293-3.775.479-2.829-1.24-4.751-3.306-5.928-2.572-1.507-5.937-.962-7.557-.22l-.22.096-.096-.22C7.354 4.365 3.988 3.82 1.416 5.327c-2.066 1.177-3.785 3.099-3.306 5.928-1.596.591-2.82 2.019-3.293 3.775-.653 2.422.479 4.713 2.306 5.671 1.077.591 2.306.653 3.477.22 1.24-.479 2.306-1.417 3.099-2.572.653 1.24 1.827 2.093 3.184 2.306 1.357-.213 2.531-1.066 3.184-2.306.793 1.155 1.859 2.093 3.099 2.572 1.171.433 2.4.371 3.477-.22 1.827-.958 2.959-3.249 2.306-5.671z" />
      </svg>
    ),
    hoverBorder: "hover:border-emerald-400/35",
    hoverGlow: "group-hover:shadow-emerald-500/10",
    iconColor: "text-emerald-400 group-hover:text-emerald-300",
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
                className={`card-hover group flex h-full flex-col items-center gap-3 rounded-2xl border border-white/12 bg-gradient-to-b from-white/[0.09] via-white/[0.04] to-transparent px-5 py-6 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] backdrop-blur-xl transition-colors ${channel.hoverBorder} ${channel.hoverGlow}`}
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm ${channel.iconColor}`}
                >
                  {channel.icon}
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-zinc-500 uppercase">
                  {channel.platform}
                </span>
                <span className="text-sm font-semibold leading-snug text-white sm:text-[0.9375rem]">
                  {channel.title}
                </span>
                <span className="text-xs leading-relaxed text-zinc-400">
                  {channel.description}
                </span>
                <span
                  className="mt-auto text-xs font-medium text-teal-400/90 transition-colors group-hover:text-teal-300"
                  aria-hidden
                >
                  Open profile →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
