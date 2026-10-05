"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { journeySteps } from "@/lib/foundation";

gsap.registerPlugin(useGSAP);

const STEP_MS = 2800;
const SCORE_KEYS = [
  { key: "skill", label: "Skill", color: "#2dd4bf" },
  { key: "creativity", label: "Creativity", color: "#818cf8" },
  { key: "adaptability", label: "Adaptability", color: "#f0c27a" },
] as const;

export function WorkJourney() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [hold, setHold] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const last = useRef(0);
  const holdTimer = useRef<number>(0);

  const pauseForUser = () => {
    setHold(true);
    window.clearTimeout(holdTimer.current);
    holdTimer.current = window.setTimeout(() => setHold(false), 10000);
  };

  useEffect(() => {
    const node = root.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting && entry.intersectionRatio > 0.25),
      { threshold: [0.25, 0.5] },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onVis = () => setPageVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || hold || !inView || !pageVisible) return;
    const id = window.setInterval(() => {
      setActive((value) => (value + 1) % journeySteps.length);
    }, STEP_MS);
    return () => window.clearInterval(id);
  }, [hold, inView, pageVisible]);

  useGSAP(
    () => {
      const card = root.current?.querySelector<HTMLElement>("[data-journey-card]");
      const spark = root.current?.querySelector<HTMLElement>("[data-path-spark]");
      const pathFill = root.current?.querySelector<HTMLElement>("[data-path-fill]");
      const timer = root.current?.querySelector<HTMLElement>("[data-step-timer]");
      if (!card || !spark || !pathFill) return;

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const from = last.current;
      const dir = active >= from ? 1 : -1;
      const step = journeySteps[active];
      const duration = reduce ? 0 : 0.65;
      const pct = active / (journeySteps.length - 1);

      if (from !== active) {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 24 * dir, rotateY: 12 * dir, z: -60 },
          { autoAlpha: 1, y: 0, rotateY: 0, z: 0, duration, ease: "power3.out" },
        );
      } else {
        gsap.set(card, { autoAlpha: 1, y: 0, rotateY: 0, z: 0 });
      }

      gsap.to(pathFill, {
        scaleX: pct,
        duration: from === active ? 0 : 0.55,
        ease: "power3.inOut",
      });
      gsap.to(spark, {
        left: `${pct * 100}%`,
        duration: from === active ? 0 : 0.55,
        ease: "power3.inOut",
      });

      SCORE_KEYS.forEach(({ key }) => {
        const fill = root.current?.querySelector<HTMLElement>(`[data-score-fill="${key}"]`);
        const num = root.current?.querySelector<HTMLElement>(`[data-score-num="${key}"]`);
        const value = step[key];
        const proxy = { n: from === active ? value : journeySteps[from][key] };
        if (fill) {
          gsap.to(fill, {
            scaleX: value / 100,
            duration: reduce ? 0 : 0.8,
            ease: "power2.out",
          });
        }
        if (num) {
          gsap.to(proxy, {
            n: value,
            duration: reduce ? 0 : 0.8,
            ease: "power2.out",
            onUpdate: () => {
              num.textContent = String(Math.round(proxy.n));
            },
          });
        }
      });

      if (timer) {
        gsap.killTweensOf(timer);
        gsap.fromTo(
          timer,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: reduce || hold ? 0 : STEP_MS / 1000,
            ease: "none",
          },
        );
      }

      last.current = active;
    },
    { scope: root, dependencies: [active, hold] },
  );

  const step = journeySteps[active];

  return (
    <section
      id="system"
      ref={root}
      className="scroll-mt-28 border-t border-white/[0.08] py-24 sm:py-28"
      aria-label="How the work runs"
    >
      <div className="page-shell">
        <p className="text-xs font-medium tracking-widest text-teal-400/90 uppercase">
          How the work runs
        </p>
        <h2
          data-split
          className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          From first call to the first booked appointment
        </h2>
        <p
          data-reveal
          className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          The path moves on its own. Tap a step if you want to stay there. New
          company, existing company, or an agency with more than one account.
        </p>

        <div className="mt-10">
          <div className="relative mx-1 h-3 sm:mx-3">
            <div className="absolute inset-x-0 top-1/2 h-2 -translate-y-1/2 rounded-full bg-white/15" />
            <div
              data-path-fill
              className="absolute top-1/2 left-0 h-2 origin-left -translate-y-1/2 rounded-full bg-gradient-to-r from-teal-500 via-teal-300 to-indigo-400 shadow-[0_0_18px_rgba(45,212,191,0.55)]"
              style={{ width: "100%", transform: "scaleX(0)" }}
            />
            {journeySteps.map((item, index) => {
              const selected = index === active;
              return (
                <span
                  key={item.id}
                  aria-hidden
                  className={`absolute top-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 sm:size-4 ${
                    selected
                      ? "border-white bg-teal-300 shadow-[0_0_16px_rgba(45,212,191,0.95)]"
                      : index < active
                        ? "border-teal-200 bg-teal-400"
                        : "border-white/40 bg-[#14141f]"
                  }`}
                  style={{
                    left: `${(index / (journeySteps.length - 1)) * 100}%`,
                  }}
                />
              );
            })}
            <span
              data-path-spark
              aria-hidden
              className="absolute top-1/2 z-10 size-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_22px_rgba(255,255,255,0.85),0_0_28px_rgba(45,212,191,1)]"
              style={{ left: "0%" }}
            />
          </div>

          <div className="mt-5 flex gap-2 overflow-x-auto pb-2 sm:grid sm:grid-cols-7 sm:gap-3 sm:overflow-visible">
            {journeySteps.map((item, index) => {
              const selected = index === active;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => {
                    pauseForUser();
                    setActive(index);
                  }}
                  className={`relative min-w-[7.5rem] overflow-hidden rounded-2xl border px-3 py-3 text-left sm:min-w-0 ${
                    selected
                      ? "border-teal-300 bg-teal-500/20 text-white"
                      : "border-white/10 bg-[var(--card)] text-zinc-400 hover:border-teal-500/30 hover:text-zinc-200"
                  }`}
                >
                  {selected ? (
                    <span
                      data-step-timer
                      className="absolute inset-x-0 bottom-0 h-1 origin-left bg-teal-300"
                      style={{ transform: "scaleX(0)" }}
                    />
                  ) : null}
                  <span className="block font-mono text-[11px] text-teal-300">
                    {item.step}
                  </span>
                  <span className="mt-1 block text-xs font-semibold leading-snug sm:text-sm">
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-12">
          <div className="space-y-5 rounded-3xl border border-white/10 bg-[var(--card)] p-5 sm:p-6">
            <p className="text-[11px] font-semibold tracking-widest text-teal-300 uppercase">
              On this step
            </p>
            {SCORE_KEYS.map((score) => (
              <div key={score.key}>
                <div className="flex items-end justify-between gap-3">
                  <p className="text-sm font-semibold text-white">{score.label}</p>
                  <p className="font-mono text-xl font-bold leading-none" style={{ color: score.color }}>
                    <span data-score-num={score.key}>{step[score.key]}</span>
                    <span className="text-sm text-zinc-500">%</span>
                  </p>
                </div>
                <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    data-score-fill={score.key}
                    className="h-full origin-left rounded-full"
                    style={{
                      background: score.color,
                      transform: `scaleX(${step[score.key] / 100})`,
                      boxShadow: `0 0 16px ${score.color}88`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="relative [perspective:1400px]">
            <article
              key={step.id}
              data-journey-card
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--card)] via-[#1c1c2c] to-[#161624] p-6 will-change-transform [transform-style:preserve-3d] sm:p-8"
            >
              <p className="text-xs font-semibold tracking-widest text-teal-300 uppercase">
                Step {step.step}
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                {step.name}
              </h3>
              <p className="mt-3 text-sm font-medium text-teal-200">{step.focus}</p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-300">
                {step.does}
              </p>
              <p className="mt-5 border-t border-white/10 pt-4 text-sm text-zinc-400">
                {step.result}
              </p>
            </article>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => {
              pauseForUser();
              setActive((value) =>
                value === 0 ? journeySteps.length - 1 : value - 1,
              );
            }}
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white"
          >
            Previous
          </button>
          <p className="text-xs text-zinc-500">
            {active + 1} of {journeySteps.length}
            {hold ? " · paused" : " · playing"}
          </p>
          <button
            type="button"
            onClick={() => {
              pauseForUser();
              setActive((value) => (value + 1) % journeySteps.length);
            }}
            className="rounded-full bg-gradient-to-r from-teal-400 to-teal-500 px-5 py-2.5 text-sm font-bold text-zinc-950"
          >
            Next step
          </button>
        </div>
      </div>
    </section>
  );
}
