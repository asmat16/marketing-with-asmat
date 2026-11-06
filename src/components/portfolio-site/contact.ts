import { siteConfig } from "@/lib/site";

export function bookHref(campaign = "portfolio") {
  return `${siteConfig.links.calendly}?utm_source=portfolio&utm_medium=website&utm_campaign=${campaign}`;
}

export function mailHref(subject: string) {
  return `mailto:${siteConfig.businessEmail}?subject=${encodeURIComponent(subject)}`;
}

export function whatsappHref(text: string) {
  return `https://wa.me/${siteConfig.phone.replace("+", "")}?text=${encodeURIComponent(text)}`;
}

export const defaultWhatsapp = whatsappHref(
  "Hi Asmat, I saw your portfolio and want to talk about my ads.",
);
