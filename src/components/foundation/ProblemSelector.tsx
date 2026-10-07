"use client";

import { useState } from "react";
import Link from "next/link";
import { problems } from "@/lib/foundation";
import { SectionHeading } from "@/components/SectionHeading";

export function ProblemSelector() {
  const [active, setActive] = useState<(typeof problems)[number]["id"]>(
    problems[0].id,
  );

  function select(id: (typeof problems)[number]["id"]) {
    setActive(id);
    document.getElementById(`problem-${id}`)?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }

  return (
    <section
      id="diagnose"
      className="scroll-mt-28 border-t border-white/[0.08] py-24 sm:py-28"
    >
      <div className="page-shell">
        <SectionHeading
          label="Start here"
          title="What is the current problem in your system?"
          description="Pick the one that sounds like your business. I can help with ads, creatives, the funnel, tracking, and follow-up. You should not need four or five people for this."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {problems.map((item) => {
            const selected = item.id === active;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={selected}
                onClick={() => select(item.id)}
                className={`rounded-full border px-4 py-2 text-left text-sm transition-colors ${
                  selected
                    ? "border-teal-400/50 bg-teal-500/15 text-white"
                    : "border-white/10 bg-[var(--card)] text-zinc-300 hover:border-teal-500/30"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {problems.map((item) => {
            const selected = item.id === active;
            return (
              <li
                key={item.id}
                id={`problem-${item.id}`}
                className={`scroll-mt-28 rounded-xl border p-5 transition-colors ${
                  selected
                    ? "border-teal-400/40 bg-teal-500/10"
                    : "border-white/10 bg-[var(--card)]"
                }`}
              >
                <h3 className="font-semibold text-white">{item.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  {item.answer}
                </p>
                <Link
                  href={`/constraints#${item.id}`}
                  className="mt-4 inline-flex text-sm font-semibold text-teal-300 hover:text-teal-200"
                >
                  Read more about it
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
