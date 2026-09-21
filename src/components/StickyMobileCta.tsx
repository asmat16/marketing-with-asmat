"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function StickyMobileCta() {
  return (
    <div className="site-chrome fixed bottom-0 z-40 border-t border-white/10 bg-[var(--background)]/95 p-3 backdrop-blur-lg md:hidden">
      <div className="flex gap-2">
        <Link
          href={siteConfig.links.book}
          className="flex flex-1 items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-teal-500 py-3 text-sm font-bold text-zinc-950"
        >
          Book free call
        </Link>
        <Link
          href={`tel:${siteConfig.phone}`}
          className="flex items-center justify-center rounded-full border border-white/15 px-4 py-3 text-sm font-medium text-white"
          aria-label="Call"
        >
          Call
        </Link>
      </div>
    </div>
  );
}
