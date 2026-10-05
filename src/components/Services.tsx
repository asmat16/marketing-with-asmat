import { services } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

type ServiceItem = {
  title: string;
  description: string;
  bullets: readonly string[];
};

const liveHeading = {
  label: "Services",
    title: "Paid ads for US home service companies",
  description:
    "Google Ads, Meta Ads, and TikTok Ads for US HVAC, roofing, plumbing, landscaping, and home repair. The goal is more bookings and estimates.",
};

export function Services({
  heading = liveHeading,
  items = services,
}: {
  heading?: { label: string; title: string; description: string };
  items?: readonly ServiceItem[];
}) {
  return (
    <section id="services" className="border-t border-white/[0.08] py-24 sm:py-28">
      <div className="page-shell">
        <SectionHeading
          label={heading.label}
          title={heading.title}
          description={heading.description}
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service) => (
            <article
              key={service.title}
              data-reveal
              className="card-hover group flex flex-col rounded-2xl border border-white/10 bg-[var(--card)] p-6 hover:bg-[var(--card-hover)]"
            >
              <h3 className="text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2 border-t border-white/[0.06] pt-5">
                {service.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-2 text-sm text-zinc-500"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal-500/80" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
