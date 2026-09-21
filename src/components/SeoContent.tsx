import { seoContentSections } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function SeoContent() {
  return (
    <section
      id="about"
      className="border-t border-white/[0.08] bg-[var(--background)] py-24 sm:py-28"
      aria-label="About services"
    >
      <div className="page-shell">
        <SectionHeading
          label="Expertise"
          title="Paid media for e-commerce, real estate & home services"
          description="Meta and Google ads for DTC sales, plus lead generation for real estate, home services, and aesthetics, not vanity metrics."
          align="center"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {seoContentSections.map((section) => (
            <article
              key={section.id}
              id={section.id}
              data-reveal
              className="card-hover rounded-2xl border border-white/10 bg-[var(--card)] p-6 sm:p-8"
            >
              <h2
                data-split
                className="text-xl font-bold tracking-tight text-white sm:text-2xl"
              >
                {section.title}
              </h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-base leading-relaxed text-zinc-400"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
