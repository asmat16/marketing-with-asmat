"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";

export function BlogShare({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  const links = [
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`,
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`,
    },
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}`,
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500">
      <span className="mr-1 uppercase tracking-wider">Share</span>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/10 px-3 py-1 text-zinc-400 transition-colors hover:border-teal-400/40 hover:text-teal-300"
        >
          {link.label}
        </a>
      ))}
      <button
        type="button"
        onClick={copy}
        className="rounded-full border border-white/10 px-3 py-1 text-zinc-400 transition-colors hover:border-teal-400/40 hover:text-teal-300"
      >
        {copied ? "Copied" : "Copy link"}
      </button>
      <a
        href={siteConfig.links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-white/10 px-3 py-1 text-zinc-400 transition-colors hover:border-teal-400/40 hover:text-teal-300"
      >
        Follow
      </a>
    </div>
  );
}
