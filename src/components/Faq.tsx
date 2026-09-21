"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-white/[0.08] bg-[var(--surface)] py-24 sm:py-28">
      <div className="mx-auto w-full max-w-5xl">
        <SectionHeading
          label="FAQ"
          title="Common questions before you book"
          description="Straight answers about working together, timelines, and what to expect from your campaigns."
          align="center"
        />

        <ul className="mt-12 space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <li
                key={item.q}
                data-reveal
                className="overflow-hidden rounded-xl border border-white/10 bg-[var(--card)] transition-colors hover:border-teal-500/20"
              >
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-[var(--card-hover)]"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-medium text-white">{item.q}</span>
                  <span
                    className={`mt-0.5 shrink-0 text-teal-400 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
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
      </div>
    </section>
  );
}
