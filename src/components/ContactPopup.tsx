"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { siteConfig } from "@/lib/site";

export const contactPopupHref = "#contact";

export function openContactPopup() {
  window.dispatchEvent(new Event("open-contact-popup"));
}

const channels = [
  {
    label: "Email",
    value: siteConfig.email,
    href: siteConfig.links.email,
  },
  {
    label: "Phone",
    value: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phone}`,
  },
  {
    label: "WhatsApp",
    value: "Message me",
    href: siteConfig.links.whatsapp,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Hire or connect",
    href: siteConfig.links.linkedin,
    external: true,
  },
  {
    label: "Upwork",
    value: "Top Rated Plus",
    href: siteConfig.links.upwork,
    external: true,
  },
] as const;

export function ContactPopup() {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("open-contact-popup", onOpen);
    return () => window.removeEventListener("open-contact-popup", onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-4 sm:items-center">
      <button
        type="button"
        aria-label="Close contact popup"
        className="absolute inset-0 bg-black/70"
        onClick={() => setOpen(false)}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[var(--card)] p-5 shadow-2xl shadow-black/40 sm:p-6"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium tracking-widest text-teal-400/90 uppercase">
              Contact
            </p>
            <h2
              id={titleId}
              className="mt-2 text-xl font-bold tracking-tight text-white"
            >
              Free strategy call, or contact me
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Book 15 minutes, or reach me by email, phone, WhatsApp, LinkedIn,
              or Upwork.
            </p>
          </div>
          <button
            type="button"
            aria-label="Close"
            autoFocus
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-sm text-zinc-300 transition-colors hover:border-white/30 hover:text-white"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        <Link
          href={siteConfig.links.book}
          className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-teal-500 text-sm font-bold text-zinc-950 shadow-md shadow-teal-500/20"
          onClick={() => setOpen(false)}
        >
          Book a free 15-min call
        </Link>

        <ul className="mt-4 divide-y divide-white/[0.08] overflow-hidden rounded-xl border border-white/10">
          {channels.map((channel) => (
            <li key={channel.label}>
              <a
                href={channel.href}
                target={"external" in channel && channel.external ? "_blank" : undefined}
                rel={
                  "external" in channel && channel.external
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex items-center justify-between gap-4 px-4 py-3 text-sm transition-colors hover:bg-white/[0.04]"
                onClick={() => setOpen(false)}
              >
                <span className="text-teal-300">{channel.label}</span>
                <span className="truncate text-right font-medium text-white">
                  {channel.value}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
