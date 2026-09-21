"use client";

import Image from "next/image";
import { testimonials } from "@/lib/testimonials";

const tickerItems = testimonials.map((t) => ({
  id: t.id,
  image: t.image,
  imageClass: t.imageClass,
  name: t.name,
  snippet: t.quote.slice(0, 72) + (t.quote.length > 72 ? "…" : ""),
}));

export function TestimonialTicker() {
  const doubled = [...tickerItems, ...tickerItems];

  return (
    <div
      className="site-chrome fixed top-0 z-[60] h-9 overflow-hidden border-b border-white/[0.08] bg-[var(--surface)]/95 backdrop-blur-md"
      aria-hidden
    >
      <div className="flex h-full animate-testimonial-marquee items-center gap-8 whitespace-nowrap px-4">
        {doubled.map((item, i) => (
          <span
            key={`${item.id}-${i}`}
            className="inline-flex shrink-0 items-center gap-2.5 text-[11px] text-zinc-400"
          >
            <span className="relative h-5 w-5 overflow-hidden rounded-full bg-[var(--surface)] ring-1 ring-white/15">
              <Image
                src={item.image}
                alt=""
                width={20}
                height={20}
                className={`h-full w-full object-cover ${item.imageClass ?? ""}`}
              />
            </span>
            <span className="font-medium text-zinc-300">{item.name}</span>
            <span className="text-zinc-500">,</span>
            <span className="max-w-[280px] truncate italic text-zinc-500">
              &ldquo;{item.snippet}&rdquo;
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
