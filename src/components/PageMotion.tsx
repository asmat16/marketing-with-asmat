"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export function PageMotion() {
  const pathname = usePathname();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  useGSAP(
    () => {
      if (!ready) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const inView = (el: HTMLElement) =>
          el.getBoundingClientRect().top < window.innerHeight * 0.92;

        gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
          const play = (targets: gsap.TweenTarget) => {
            const visible = inView(el);
            return gsap.from(targets, {
              x: -28,
              autoAlpha: 0,
              duration: 0.72,
              stagger: 0.045,
              ease: "power3.out",
              immediateRender: true,
              scrollTrigger: visible
                ? undefined
                : {
                    trigger: el,
                    start: "top 88%",
                    once: true,
                  },
            });
          };

          try {
            SplitText.create(el, {
              type: "words",
              autoSplit: true,
              aria: "auto",
              onSplit(self) {
                return play(self.words);
              },
            });
          } catch {
            play(el);
          }
        });

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.from(el, {
            x: -36,
            autoAlpha: 0,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              once: true,
            },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-motion='media']").forEach((el) => {
          gsap.from(el, {
            x: -28,
            scale: 1.04,
            autoAlpha: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 92%",
              once: true,
            },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-motion='step']").forEach((el) => {
          gsap.from(el, {
            x: -16,
            autoAlpha: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 92%",
              once: true,
            },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          const amount = Number(el.dataset.parallax) || 8;
          gsap.to(el, {
            yPercent: amount,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          });
        });

        requestAnimationFrame(() => ScrollTrigger.refresh());
      });

      return () => mm.revert();
    },
    { dependencies: [pathname, ready], revertOnUpdate: true },
  );

  return null;
}
