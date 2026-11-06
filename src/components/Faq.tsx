import { faqs } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

type FaqItem = { q: string; a: string };

const liveHeading = {
  label: "FAQ",
  title: "Common questions before you book",
  description:
    "Straight answers about working together, timelines, and what to expect from your campaigns.",
};

export function Faq({
  heading = liveHeading,
  items = faqs,
}: {
  heading?: { label: string; title: string; description: string };
  items?: readonly FaqItem[];
}) {
  return (
    <section id="faq" className="border-t border-white/[0.08] bg-[var(--surface)] py-24 sm:py-28">
      <div className="mx-auto w-full max-w-5xl">
        <SectionHeading
          label={heading.label}
          title={heading.title}
          description={heading.description}
          align="center"
        />

        <div className="mt-12 space-y-3">
          {items.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-white/10 bg-[var(--card)] open:border-teal-500/20"
            >
              <summary className="cursor-pointer list-none px-5 py-4 [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  <h3 className="font-medium text-white">{item.q}</h3>
                  <span className="mt-0.5 shrink-0 text-teal-400 group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </span>
              </summary>
              <p className="px-5 pb-4 text-sm leading-relaxed text-zinc-400">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
