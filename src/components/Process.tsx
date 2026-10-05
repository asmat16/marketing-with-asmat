import { processSteps } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

const liveHeading = {
  label: "How it works",
  title: "From first call to consistent sales or booked leads",
  description:
    "A clear, repeatable process, whether you are launching ads for the first time or scaling what already works.",
};

export function Process({
  heading = liveHeading,
  steps = processSteps,
  sectionId,
  gridClassName = "sm:grid-cols-2 lg:grid-cols-4",
}: {
  heading?: { label: string; title: string; description: string };
  steps?: readonly ProcessStep[];
  sectionId?: string;
  gridClassName?: string;
}) {
  return (
    <section
      id={sectionId}
      className="border-t border-white/[0.08] bg-[var(--surface)] py-24 sm:py-28"
    >
      <div className="page-shell">
        <SectionHeading
          label={heading.label}
          title={heading.title}
          description={heading.description}
          align="center"
        />

        <div className={`mt-16 grid gap-8 ${gridClassName}`}>
          {steps.map((item) => (
            <div
              key={item.step}
              data-reveal
              className="card-hover relative rounded-2xl border border-white/10 bg-[var(--card)] p-6"
            >
              <span
                data-motion="step"
                className="text-5xl font-bold tracking-tight text-teal-300 drop-shadow-[0_0_22px_rgba(45,212,191,0.55)]"
              >
                {item.step}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
