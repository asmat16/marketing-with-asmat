import Link from "next/link";
import { foundationFaqs } from "@/lib/foundation";

const guides = [
  {
    href: "/blogs/hire-media-buyer-usa-meta-google-tiktok",
    title: "How to hire a media buyer in the USA",
    text: "What to ask before you hire someone for Meta, Google, or TikTok ads.",
  },
  {
    href: "/blogs/ecommerce-meta-google-ads-that-sell",
    title: "Meta and Google ads that sell",
    text: "How e-commerce accounts should be scored: purchases and ROAS.",
  },
  {
    href: "/blogs/tiktok-vs-meta-vs-google-ads",
    title: "TikTok vs Meta vs Google Ads",
    text: "Which channel fits a US brand, and when to leave one off.",
  },
  {
    href: "/who-i-help",
    title: "Who this is for",
    text: "DTC brands on Shopify, and lead gen businesses that need qualified calls.",
  },
] as const;

export function AnswerHub() {
  const featured = foundationFaqs.filter(
    (item) => "featured" in item && item.featured,
  );

  return (
    <section id="answers" className="border-t border-white/[0.08] py-24 sm:py-28">
      <div className="page-shell">
        <p className="text-xs font-medium tracking-widest text-teal-400/90 uppercase">
          Answers
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Questions US brands ask before they hire
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-400">
          Direct answers. The longer notes live in the guides below.
        </p>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {featured.map((item) => (
            <article
              key={item.q}
              className="rounded-2xl border border-white/10 bg-[var(--card)] p-6"
            >
              <h3 className="text-lg font-semibold text-white">{item.q}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.a}</p>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Guides for brands in the United States
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {guides.map((guide) => (
              <li key={guide.href}>
                <Link
                  href={guide.href}
                  className="block rounded-2xl border border-white/10 bg-[var(--card)] p-5 transition-colors hover:border-teal-500/30"
                >
                  <span className="font-semibold text-white">{guide.title}</span>
                  <span className="mt-2 block text-sm leading-relaxed text-zinc-400">
                    {guide.text}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
