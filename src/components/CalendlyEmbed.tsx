"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site";

const embedSrc = `${siteConfig.calendly.eventUrl}?embed=true&${siteConfig.calendly.embedParams}`;

type CalendlyEmbedProps = {
  minHeight?: number;
  title?: string;
};

export function CalendlyEmbed({
  minHeight = 700,
  title = siteConfig.calendly.eventName,
}: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px", threshold: 0.1 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden rounded-2xl border border-teal-500/25 bg-[var(--card)]"
      style={{ minHeight }}
    >
      {shouldLoad ? (
        <iframe
          src={embedSrc}
          title={title}
          className="w-full border-0"
          style={{ minHeight }}
          loading="lazy"
        />
      ) : (
        <div
          className="flex flex-col items-center justify-center gap-4 p-10 text-center"
          style={{ minHeight }}
        >
          <p className="text-sm text-zinc-400">Loading booking calendar…</p>
          <button
            type="button"
            onClick={() => setShouldLoad(true)}
            className="rounded-full bg-gradient-to-r from-teal-400 to-teal-500 px-6 py-3 text-sm font-bold text-zinc-950"
          >
            Open calendar now
          </button>
        </div>
      )}
    </div>
  );
}
