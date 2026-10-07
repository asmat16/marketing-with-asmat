import type { Metadata } from "next";

export const siteConfig = {
  name: "Marketing with Asmat",
  url: "https://www.marketingwithasmat.pro",
  description:
    "I help DTC brands and lead gen businesses grow with Meta Ads, Google Ads, creative strategy, funnels, and CRM follow-up. One person who owns the whole system.",
  email: "asmat.llh@gmail.com",
  phone: "+16677882088",
  phoneDisplay: "+1 667 788 2088",
  whatsapp:
    "https://wa.me/16677882088?text=Hi%20Asmat%2C%20I%20want%20to%20talk%20about%20ads%20and%20growth%20for%20my%20brand.",
  calendly: {
    /** Bookings appear in your Calendly dashboard + email (calendly.com) */
    eventUrl: "https://calendly.com/asmat-llh/15",
    eventName: "Free 15-Min Strategy Call",
    embedParams:
      "hide_gdpr_banner=1&hide_event_type_details=1&background_color=14141f&text_color=fafafa&primary_color=2dd4bf",
  },
  links: {
    calendly: "https://calendly.com/asmat-llh/15",
    book: "/book",
    upwork: "https://www.upwork.com/freelancers/proasmat",
    fiverr: "https://www.fiverr.com/users/muhammad_asmat/",
    linkedin: "https://www.linkedin.com/in/asmat16/",
    instagram: "https://www.instagram.com/marketingwithasmat/",
    facebook: "https://www.facebook.com/profile.php?id=61561281302647",
    portfolio: "/portfolio",
    blog: "/blogs",
    whatsapp:
      "https://wa.me/16677882088?text=Hi%20Asmat%2C%20I%20want%20to%20talk%20about%20ads%20and%20growth%20for%20my%20brand.",
    email: "mailto:asmat.llh@gmail.com",
  },
  keywords: [
    "performance marketer",
    "DTC media buyer",
    "Meta Ads for Shopify",
    "Google Ads for e-commerce",
    "lead gen ads USA",
  ],
} as const;

export const heroStats = [
  { value: "$20M+", label: "Ad spend managed" },
  { value: "7+", label: "Years experience" },
  { value: "20X+", label: "Avg. ROAS delivered" },
  { value: "Top Rated", label: "Plus on Upwork" },
] as const;

export const services = [
  {
    title: "Meta Ads and Google Ads",
    description:
      "Paid social, Search, Shopping, and Performance Max for DTC brands and lead gen businesses.",
    bullets: [
      "Daily account work",
      "Creative tests every week",
      "Scale winners, cut waste",
    ],
  },
  {
    title: "Creative strategy",
    description:
      "Hooks, UGC scripts, statics, and ad copy so the ads do not go stale.",
    bullets: [
      "Angles and hooks",
      "UGC briefs and scripts",
      "New ads on a weekly rhythm",
    ],
  },
  {
    title: "Store, funnel, and tracking",
    description:
      "The page after the click, pixel, Conversions API, GTM, and GA4 you can trust.",
    bullets: [
      "Product and landing pages",
      "Pixel and Conversions API",
      "Purchases and qualified leads counted",
    ],
  },
  {
    title: "CRM and follow-up",
    description:
      "Email and SMS so carts and leads do not sit. One person on the path from click to sale.",
    bullets: [
      "Abandoned cart flows",
      "Lead follow-up",
      "GoHighLevel when that is the tool",
    ],
  },
  {
    title: "Monthly media buying",
    description:
      "Weekly changes. Creative refresh. Reporting on sales, ROAS, and qualified calls.",
    bullets: [
      "Weekly account work",
      "Tests on copy, creative, and audiences",
      "Scale winners, cut waste",
    ],
  },
] as const;

export const resultsHighlights = [
  {
    metric: "122",
    label: "Purchases in 1 month",
    detail: "E-commerce client · $35K spend · 5X ROAS",
  },
  {
    metric: "$145K",
    label: "Monthly revenue",
    detail: "From paid ads at 5X return on ad spend",
  },
  {
    metric: "$40M+",
    label: "Revenue generated",
    detail: "Through Meta & Google campaigns managed",
  },
  {
    metric: "20X+",
    label: "Average ROAS",
    detail: "Across lead gen & e-commerce accounts",
  },
] as const;

export const credentials = [
  "Meta & Google Ads Certified",
  "Upwork Top Rated Plus",
  "7+ years paid media experience",
  "Worked with Adidas & Nike",
  "E-commerce, local, B2B & B2C",
  "Sales & lead generation specialist",
] as const;

export const featuredCaseStudies = [
  {
    image: "/portfolio/featured/meta-ecommerce-roas.png",
    platform: "Meta Ads",
    title: "E-commerce · 50X+ purchase ROAS",
    headline: "50X+",
    description:
      "2+ years on one store, $196K spend, 114K+ clicks, sustained 20X–50X+ ROAS on winning campaigns.",
    tags: ["E-commerce", "Facebook", "Instagram"],
  },
  {
    image: "/portfolio/featured/google-analytics-growth.png",
    platform: "Analytics",
    title: "895% revenue growth in 30 days",
    headline: "895%",
    description:
      "15K users, 21K sessions, 2.5K conversions, purchase revenue scaled from baseline in one month.",
    tags: ["E-commerce", "Growth"],
  },
  {
    image: "/portfolio/featured/meta-europe-roas.png",
    platform: "Meta Ads",
    title: "4.62X ROAS · €202K conversion value",
    headline: "4.62X",
    description:
      "€43.7K spend → 8,294 purchases at €5.27 cost per purchase across scaled e-commerce campaigns.",
    tags: ["E-commerce", "EU Market"],
  },
  {
    image: "/portfolio/featured/google-conversions-year.png",
    platform: "Google Ads",
    title: "4,269 conversions in 12 months",
    headline: "4,269",
    description:
      "Search campaigns for training & services, 12.59% avg. conversion rate, $25 cost per conversion.",
    tags: ["Lead Gen", "Search"],
  },
  {
    image: "/portfolio/featured/google-keywords-roas.png",
    platform: "Google Ads",
    title: "29.87X conversion value / cost",
    headline: "29.87X",
    description:
      "37K+ clicks, 5,781 conversions, $0.56 avg. CPC, high-intent keyword structure at scale.",
    tags: ["PPC", "E-commerce"],
  },
  {
    image: "/portfolio/featured/latest-google-ecommerce.png",
    platform: "Google Ads",
    title: "Latest e-commerce brand scaling",
    headline: "Scale",
    description:
      "Full-funnel Google strategy for a growing online brand, optimized for purchases and ROAS.",
    tags: ["E-commerce", "Google"],
  },
  {
    image: "/portfolio/featured/keywords-conversion.png",
    platform: "Google Ads",
    title: "Keyword-level conversion optimization",
    headline: "15%+",
    description:
      "Search keyword refinement driving strong conversion rates and efficient cost per lead.",
    tags: ["Search", "Optimization"],
  },
  {
    image: "/portfolio/featured/google-conversions-2.png",
    platform: "Google Ads",
    title: "Multi-campaign conversion wins",
    headline: "Multi",
    description:
      "Cross-campaign Google Ads performance, consistent conversion volume across niches.",
    tags: ["Lead Gen", "Local"],
  },
] as const;

export const copyrightNotice =
  "© Asmat. All portfolio screenshots are confidential client work.";

export function pageMeta({
  title,
  description,
  path = "",
  ogTitle,
}: {
  title: string;
  description: string;
  path?: string;
  ogTitle?: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const socialTitle = ogTitle ?? title;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: siteConfig.name,
      title: socialTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}

export const niches = [
  { label: "Women's apparel", icon: "◈" },
  { label: "Skincare", icon: "⌂" },
  { label: "Beauty", icon: "⚙" },
  { label: "Jewelry", icon: "✦" },
  { label: "DTC brands", icon: "◎" },
  { label: "Lead gen", icon: "♡" },
] as const;

export const faqs = [
  {
    q: "Which businesses do you work with?",
    a: "DTC e-commerce brands, mostly on Shopify. Women's apparel, skincare, beauty, jewelry, and similar products. I also run lead gen for B2B and B2C companies that need qualified calls and booked meetings.",
  },
  {
    q: "Do you only run ads?",
    a: "No. Ads without good creative, a page that converts, and follow-up still stall. I own the path from first click to sale.",
  },
  {
    q: "How fast can we launch?",
    a: "Most accounts go live in one to two weeks, once tracking, the offer, and the creatives are ready.",
  },
  {
    q: "What is the first step?",
    a: "A 15-minute call. Bring your ad account, your store or landing page link, and the one thing you want to fix first. You can also hire on Upwork or message on WhatsApp.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discovery call",
    description:
      "We review the brand, the products or offer, current ads, and how a click becomes a sale today.",
  },
  {
    step: "02",
    title: "Strategy & tracking",
    description:
      "I map the offer, fix tracking, and choose Meta, Google, or both.",
  },
  {
    step: "03",
    title: "Launch & optimize",
    description:
      "Campaigns go live with a clear next step. I optimize weekly toward sales, ROAS, and qualified calls.",
  },
  {
    step: "04",
    title: "Scale what works",
    description:
      "Winning campaigns get more budget. Weak ones get cut. You get a short read on what to do next.",
  },
] as const;

/** Keyword-rich sections for SEO & readability (visible on homepage) */
export const seoContentSections = [
  {
    id: "meta-google-ads",
    title: "Meta Ads and Google Ads for DTC brands",
    paragraphs: [
      "Most brands hire someone to run ads. The ads are only one part. I also work the creative, the store or landing page, tracking, and follow-up.",
      "The score is purchases, ROAS, and qualified calls, not cheap clicks.",
    ],
  },
  {
    id: "creative-strategy",
    title: "Creative strategy that keeps accounts alive",
    paragraphs: [
      "Two ads cannot carry an account. I plan hooks, write copy and UGC scripts, and keep new creatives going in every week.",
      "Real products and real customers beat polished stock.",
    ],
  },
  {
    id: "lead-gen-ads",
    title: "Lead gen for B2B and B2C",
    paragraphs: [
      "Lead gen is a big part of my work. The goal is qualified calls and booked meetings, not a pile of cheap form fills.",
      "Google Search, Meta, and LinkedIn when it fits.",
    ],
  },
  {
    id: "one-person-system",
    title: "One person who owns the whole path",
    paragraphs: [
      "Ads, creative, funnel, tracking, and CRM follow-up sit with me. You should not need four or five people for this.",
      "AI helps me move faster. I still make the calls.",
    ],
  },
] as const;
