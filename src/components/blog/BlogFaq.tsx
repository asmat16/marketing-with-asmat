import type { BlogFaq as BlogFaqItem } from "@/lib/blog";

export function BlogFaq({ faqs }: { faqs: BlogFaqItem[] }) {
  return (
    <section className="mt-16" aria-labelledby="blog-faq-heading">
      <h2 id="blog-faq-heading" className="text-2xl font-bold tracking-tight text-white">
        Frequently asked questions
      </h2>
      <div className="mt-6 space-y-3">
        {faqs.map((item, index) => (
          <details
            key={item.q}
            open={index === 0}
            className="group rounded-xl border border-white/10 bg-[var(--card)]"
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
    </section>
  );
}
