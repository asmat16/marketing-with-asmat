"use client";

import Link from "next/link";
import { useState } from "react";
import { openContactPopup } from "@/components/ContactPopup";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/site";

export function Header({
  home = "/",
  ctaLabel = "Book a call",
  navItems,
}: {
  home?: string;
  ctaLabel?: string;
  navItems?: readonly { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);
  const nav = navItems ?? [
    { href: "/systems", label: "How I work" },
    { href: "/who-i-help", label: "Who I Help" },
    { href: siteConfig.links.portfolio, label: "Portfolio" },
    { href: siteConfig.links.blog, label: "Blog" },
    { href: "/#about", label: "About" },
  ];

  return (
    <header className="site-chrome fixed top-9 z-50 border-b border-white/[0.08] bg-[var(--background)]/85 backdrop-blur-xl">
      <div className="page-shell flex h-16 items-center justify-between">
        <Link href={home} className="shrink-0 text-white" onClick={() => setOpen(false)}>
          <Logo accent />
        </Link>

        <nav className="hidden items-center gap-4 md:flex lg:gap-6 xl:gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={"external" in item && item.external ? "_blank" : undefined}
              rel={
                "external" in item && item.external
                  ? "noopener noreferrer"
                  : undefined
              }
              className="whitespace-nowrap text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
          <Link
            href={siteConfig.links.upwork}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm whitespace-nowrap text-zinc-400 transition-colors hover:text-white xl:inline"
          >
            Upwork
          </Link>
          <Link
            href={siteConfig.links.book}
            className="hidden shrink-0 whitespace-nowrap rounded-full border border-white/15 px-3 py-2 text-xs font-semibold text-white transition-colors hover:border-teal-400/40 sm:inline-flex sm:px-4 sm:text-sm"
          >
            {ctaLabel}
          </Link>
          <button
            type="button"
            className="shrink-0 whitespace-nowrap rounded-full bg-gradient-to-r from-teal-400 to-teal-500 px-3 py-2 text-xs font-semibold text-zinc-950 shadow-md shadow-teal-500/20 transition-all hover:shadow-teal-500/35 sm:px-4 sm:text-sm"
            onClick={() => {
              setOpen(false);
              openContactPopup();
            }}
          >
            Contact me
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-white/[0.08] bg-[var(--surface)] px-5 py-4 md:hidden">
          <ul className="space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  target={"external" in item && item.external ? "_blank" : undefined}
                  rel={
                    "external" in item && item.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="block text-sm text-zinc-300"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                className="block text-sm font-semibold text-teal-300"
                onClick={() => {
                  setOpen(false);
                  openContactPopup();
                }}
              >
                Contact me
              </button>
            </li>
            <li>
              <Link
                href={siteConfig.links.book}
                className="block text-sm text-zinc-300"
                onClick={() => setOpen(false)}
              >
                Book a call
              </Link>
            </li>
            <li>
              <Link
                href={siteConfig.links.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-teal-400"
                onClick={() => setOpen(false)}
              >
                Upwork profile
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
