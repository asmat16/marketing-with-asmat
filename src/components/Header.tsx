"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/site";

const nav = [
  { href: "#testimonials", label: "Reviews" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#book", label: "Book" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-9 z-50 border-b border-white/[0.08] bg-[var(--background)]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="text-white" onClick={() => setOpen(false)}>
          <Logo accent />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
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
            className="hidden text-sm text-zinc-400 transition-colors hover:text-white sm:inline"
          >
            Upwork
          </Link>
          <Link
            href={siteConfig.links.book}
            className="rounded-full bg-gradient-to-r from-teal-400 to-teal-500 px-4 py-2 text-sm font-semibold text-zinc-950 shadow-md shadow-teal-500/20 transition-all hover:shadow-teal-500/35"
          >
            Book a call
          </Link>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-white/[0.08] bg-[var(--surface)] px-5 py-4 md:hidden">
          <ul className="space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-sm text-zinc-300"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
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
