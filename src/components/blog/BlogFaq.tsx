"use client";

import { useState } from "react";
import type { BlogFaq } from "@/lib/blog";

export function BlogFaq({ faqs }: { faqs: BlogFaq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mt-16" aria-labelledby="blog-faq-heading">
      <h2 id="blog-faq-heading" className="text-2xl font-bold tracking-tight text-white">
        Frequently asked questions
      </h2>
      <ul className="mt-6 space-y-3">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <li
              key={item.q}
              className="overflow-hidden rounded-xl border border-white/10 bg-[var(--card)]"
            >
              <button
                type="button"
                className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="font-medium text-white">{item.q}</span>
                <span
                  className={`mt-0.5 shrink-0 text-teal-400 ${isOpen ? "rotate-45" : ""}`}
                  aria-hidden
                >
                  +
                </span>
              </button>
              <div
                className={`grid ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-4 text-sm leading-relaxed text-zinc-400">
                    {item.a}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
