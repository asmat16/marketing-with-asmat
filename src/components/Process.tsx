import { processSteps } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  return (
    <section className="border-t border-white/[0.08] bg-[var(--surface)] py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          label="How it works"
          title="From first call to consistent sales or booked leads"
          description="A clear, repeatable process — whether you're launching ads for the first time or scaling what already works."
          align="center"
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item) => (
            <div key={item.step} className="relative">
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
