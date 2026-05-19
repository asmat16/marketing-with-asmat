import { niches } from "@/lib/site";

export function NicheBar() {
  return (
    <section className="border-y border-white/[0.08] bg-[var(--surface)] py-6">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="mb-4 text-center text-xs font-semibold tracking-widest text-zinc-500 uppercase">
          Who I help scale with paid ads
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-3">
          {niches.map((niche) => (
            <li
              key={niche.label}
              className="group flex items-center gap-2 rounded-full border border-white/10 bg-[var(--card)] px-4 py-2 text-sm text-zinc-300 transition-all hover:border-teal-500/40 hover:bg-teal-500/10 hover:text-teal-100"
            >
              <span
                className="text-teal-500/80 transition-colors group-hover:text-teal-400"
                aria-hidden
              >
                {niche.icon}
              </span>
              {niche.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
