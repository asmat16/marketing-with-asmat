"use client";

import { usePathname } from "next/navigation";
import { isUpworkSafePath } from "@/lib/upwork-safe";

/** Prefetch Calendly only on pages that can open booking (not Upwork-safe routes). */
export function CalendlyHints() {
  const pathname = usePathname();
  if (isUpworkSafePath(pathname)) return null;

  return (
    <>
      <link rel="preconnect" href="https://calendly.com" />
      <link rel="dns-prefetch" href="https://calendly.com" />
    </>
  );
}
