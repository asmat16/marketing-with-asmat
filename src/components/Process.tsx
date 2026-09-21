import { processSteps } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  return (
    <section className="border-t border-white/[0.08] bg-[var(--surface)] py-24 sm:py-28">
      <div className="page-shell">
        <SectionHeading
          label="How it works"
          title="From first call to consistent sales or booked leads"
          description="A clear, repeatable process, whether you are launching ads for the first time or scaling what already works."
          align="center"
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item) => (
            <div
              key={item.step}
              data-reveal
              className="card-hover relative rounded-2xl border border-white/10 bg-[var(--card)] p-6"
            >
              <span className="text-4xl font-semibold tracking-tight text-zinc-800">
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
