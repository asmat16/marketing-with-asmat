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
        const yFrom = gsap.utils.clamp(16, 32, window.innerWidth * 0.016);

        gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
          SplitText.create(el, {
            type: "lines",
            autoSplit: true,
            aria: "auto",
            onSplit(self) {
              const inView =
                el.getBoundingClientRect().top < window.innerHeight * 0.92;

              return gsap.from(self.lines, {
                autoAlpha: 0,
                y: 28,
                duration: 0.7,
                stagger: 0.08,
                ease: "power3.out",
                immediateRender: true,
                scrollTrigger: inView
                  ? undefined
                  : {
                      trigger: el,
                      start: "top 88%",
                      once: true,
                    },
              });
            },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.from(el, {
            autoAlpha: 0,
            y: yFrom,
            duration: 0.68,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
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
