"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";

type Panel = "privacy" | "terms";

const linkClass =
  "text-xs font-normal text-zinc-600 transition-colors hover:text-zinc-400";

export function FooterLegal({ align = "start" }: { align?: "start" | "center" }) {
  const [open, setOpen] = useState<Panel | null>(null);
  const centered = align === "center";

  function toggle(panel: Panel) {
    setOpen((current) => (current === panel ? null : panel));
  }

  return (
    <div className={centered ? "mt-4 flex flex-col items-center" : "mt-4"}>
      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => toggle("privacy")}
          aria-expanded={open === "privacy"}
          aria-controls="footer-privacy"
          className={linkClass}
        >
          Privacy
        </button>
        <button
          type="button"
          onClick={() => toggle("terms")}
          aria-expanded={open === "terms"}
          aria-controls="footer-terms"
          className={linkClass}
        >
          Terms
        </button>
      </div>

      {open === "privacy" ? (
        <div
          id="footer-privacy"
          className={`mt-4 max-w-2xl space-y-3 text-xs leading-relaxed text-zinc-500${centered ? " text-center" : ""}`}
        >
          <p className="text-zinc-400">Privacy</p>
          <p>
            This site is run by Asmat as {siteConfig.name}. If you want a copy
            of what I have, a correction, or a deletion, email{" "}
            <a
              href={siteConfig.links.email}
              className="text-zinc-400 underline decoration-white/10 underline-offset-2 hover:text-zinc-300"
            >
              {siteConfig.email}
            </a>
            .
          </p>
          <p>
            The contact form asks for your name, email, and message. That form
            is sent through FormSubmit to my inbox. A booking on the calendar
            is handled by Calendly, which collects the details you enter there.
            WhatsApp, phone, and direct email stay on those services.
          </p>
          <p>
            I use that information to reply, book a call, and do the work we
            agree on. I do not sell it. If we work together, I use the ad
            accounts, store, and CRM you give me only for that work.
          </p>
          <p>
            This site does not set its own analytics or advertising cookies.
            Calendly may set a cookie when you open the scheduler. I keep
            messages and call notes while I need them to reply or do the work,
            then delete them.
          </p>
          <p>Last updated October 2026.</p>
        </div>
      ) : null}

      {open === "terms" ? (
        <div
          id="footer-terms"
          className={`mt-4 max-w-2xl space-y-3 text-xs leading-relaxed text-zinc-500${centered ? " text-center" : ""}`}
        >
          <p className="text-zinc-400">Terms</p>
          <p>
            The site describes how I work. Reading it, sending a message, or
            booking a call is not a client agreement.
          </p>
          <p>
            Numbers and stories on the site are from past work. They are not a
            promise that your account will get the same result. A project
            starts when we agree in writing, by email, proposal, Upwork, or a
            similar note. That note covers scope, fees, and timing.
          </p>
          <p>
            You keep your ad accounts, store, pixel, and CRM. I work inside
            them. Client work stays confidential. Portfolio screenshots are
            mine to show unless we agree otherwise.
          </p>
          <p>
            The writing and design on this site belong to {siteConfig.name}.
            The site is offered as it is. Articles are not a substitute for a
            look at your account.
          </p>
          <p>
            Questions go to{" "}
            <a
              href={siteConfig.links.email}
              className="text-zinc-400 underline decoration-white/10 underline-offset-2 hover:text-zinc-300"
            >
              {siteConfig.email}
            </a>
            . Last updated October 2026.
          </p>
        </div>
      ) : null}
    </div>
  );
}
