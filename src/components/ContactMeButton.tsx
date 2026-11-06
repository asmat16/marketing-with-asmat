"use client";

import { openContactPopup } from "@/components/ContactPopup";

export function ContactMeButton({
  className,
  label = "Contact me",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <button type="button" className={className} onClick={openContactPopup}>
      {label}
    </button>
  );
}
