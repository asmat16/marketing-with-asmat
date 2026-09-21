export const siteConfig = {
  name: "Marketing with Asmat",
  url: "https://www.marketingwithasmat.pro",
  description:
    "USA-based Meta & Google media buyer for e-commerce (DTC) sales, real estate lead generation, and home service businesses. Also work with med spas & aesthetics. 7+ years, $20M+ ad spend managed.",
  email: "asmat.llh@gmail.com",
  phone: "+923136109373",
  phoneDisplay: "+92 313 6109373",
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
  },
  keywords: [
    "e-commerce media buyer",
    "DTC Facebook ads",
    "Meta ads for Shopify",
    "Google Shopping ads specialist",
    "real estate lead generation ads",
    "Facebook ads real estate leads",
    "best media buyer for home service business",
    "home service media buyer",
    "google ads contractor leads",
    "HVAC media buyer",
    "lead generation home services",
    "paid media buyer United States",
    "meta google ads specialist",
    "hire media buyer USA",
    "ecommerce ROAS specialist",
    "media buyer med spa",
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
    title: "E-commerce & DTC Sales Ads",
    description:
      "Meta and Google campaigns built to sell — purchases, ROAS, and repeat buyers for Shopify and DTC brands. We do not run e-commerce for lead forms. We run it for revenue.",
    bullets: [
      "Purchase & catalog campaigns (Advantage+, Shopping, PMax)",
      "Creative testing for product, UGC, and offer angles",
      "Pixel, CAPI, and ROAS reporting tied to actual sales",
    ],
  },
  {
    title: "Real Estate Lead Generation",
    description:
      "Facebook, Instagram, and Google ads that bring in buyer, seller, and listing inquiries — not random clicks. Built for agents, teams, and local markets.",
    bullets: [
      "Lead forms & landing pages for listings and markets",
      "Geo targeting by city, zip, and commute patterns",
      "Follow-up friendly lead quality over cheap volume",
    ],
  },
  {
    title: "Home Service Appointment Ads",
    description:
      "Facebook, Instagram, and Google campaigns for HVAC, cleaning, landscaping, remodeling, and other local service businesses that need booked jobs — not vanity metrics.",
    bullets: [
      "Service-area targeting & seasonal offers",
      "Lead gen + click-to-call optimization",
      "Retargeting website visitors & form abandoners",
    ],
  },
  {
    title: "Med Spa & Aesthetic Lead Gen",
    description:
      "Meta and Google campaigns that fill consult calendars for injectables, laser, body contouring, and skincare — when you need booked appointments, not likes.",
    bullets: [
      "Lead forms & instant forms optimized for bookings",
      "Offer creative that stays within ad-platform rules",
      "Local radius targeting for qualified patients",
    ],
  },
  {
    title: "Campaign Setup & Account Audit",
    description:
      "Starting from scratch or inheriting a broken account? I audit structure, tracking, audiences, and creative — then rebuild for sales (e-commerce) or qualified lead volume (services).",
    bullets: [
      "Pixel, CAPI & conversion event review",
      "Account structure & budget recommendations",
      "30-day launch roadmap with clear KPIs",
    ],
  },
  {
    title: "Monthly Media Buying & Optimization",
    description:
      "Ongoing management with weekly optimizations, creative refreshes, and reporting on the metric that matters: ROAS and purchases for stores, cost per lead and booked jobs for services.",
    bullets: [
      "Weekly performance reviews",
      "A/B testing on copy, creative & audiences",
      "Scaling winners, cutting wasted spend fast",
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
      "2+ years on one store — $196K spend, 114K+ clicks, sustained 20X–50X+ ROAS on winning campaigns.",
    tags: ["E-commerce", "Facebook", "Instagram"],
  },
  {
    image: "/portfolio/featured/google-analytics-growth.png",
    platform: "Analytics",
    title: "895% revenue growth in 30 days",
    headline: "895%",
    description:
      "15K users, 21K sessions, 2.5K conversions — purchase revenue scaled from baseline in one month.",
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
      "Search campaigns for training & services — 12.59% avg. conversion rate, $25 cost per conversion.",
    tags: ["Lead Gen", "Search"],
  },
  {
    image: "/portfolio/featured/google-keywords-roas.png",
    platform: "Google Ads",
    title: "29.87X conversion value / cost",
    headline: "29.87X",
    description:
      "37K+ clicks, 5,781 conversions, $0.56 avg. CPC — high-intent keyword structure at scale.",
    tags: ["PPC", "E-commerce"],
  },
  {
    image: "/portfolio/featured/latest-google-ecommerce.png",
    platform: "Google Ads",
    title: "Latest e-commerce brand scaling",
    headline: "Scale",
    description:
      "Full-funnel Google strategy for a growing online brand — optimized for purchases and ROAS.",
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
      "Cross-campaign Google Ads performance — consistent conversion volume across niches.",
    tags: ["Lead Gen", "Local"],
  },
] as const;

export const copyrightNotice =
  "© Asmat — All portfolio screenshots are confidential client work.";

export const niches = [
  { label: "E-commerce & DTC", icon: "◈" },
  { label: "Real Estate", icon: "⌂" },
  { label: "Home Services", icon: "⚙" },
  { label: "Med Spas & Aesthetics", icon: "✦" },
  { label: "Lead Generation", icon: "◎" },
  { label: "Paid Sales Ads", icon: "♡" },
] as const;

export const faqs = [
  {
    q: "Do you do sales ads or lead generation?",
    a: "Both — and they are separate playbooks. E-commerce and DTC brands get purchase campaigns optimized for sales and ROAS. Real estate, home services, and med spas / aesthetics get lead generation: qualified inquiries, calls, and booked appointments.",
  },
  {
    q: "What's included in the free strategy call?",
    a: "A 15-minute Zoom where we review your business, current ads (if any), offers, and goals. You'll get honest feedback on what's working, what to fix, and whether Meta, Google, or both make sense for your niche.",
  },
  {
    q: "How quickly can we launch?",
    a: "Most accounts go live within 1–2 weeks after onboarding — including pixel/CAPI audit, offer alignment, creative direction, and campaign structure. Rush launches are possible if tracking is already in place.",
  },
  {
    q: "What results should I expect?",
    a: "Results vary by offer, market, and budget. For stores, I optimize purchases and ROAS. For real estate and home services, I optimize qualified leads and booked jobs. Past accounts have seen 5X–50X+ ROAS on e-commerce and thousands of conversions on Google Search.",
  },
  {
    q: "Can I hire you through Upwork?",
    a: "Yes — I'm Top Rated Plus on Upwork with 7+ years of paid media experience. You can hire there for escrow protection, or work directly after our strategy call.",
  },
  {
    q: "Do you create ad creative?",
    a: "I direct creative strategy, hooks, and angles based on what converts in your niche. I can work with your in-house team, UGC creators, or recommend formats (product/UGC for DTC, listing and offer ads for real estate and home services).",
  },
  {
    q: "Are you a media buyer for home service businesses in the USA?",
    a: "Yes. I work with US-based HVAC, cleaning, landscaping, remodeling, and other home service companies that need qualified leads and phone calls from Meta and Google — not vanity clicks. Campaigns use service-area targeting, offer-led creative, and conversion tracking aligned to booked jobs.",
  },
  {
    q: "How do I find the best media buyer for my business?",
    a: "Look for results that match your model: ROAS and purchases for e-commerce, cost per lead and booked appointments for real estate and home services. Book a free 15-minute strategy call to review your market, offers, and whether paid ads are the right fit before you commit budget.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discovery call",
    description:
      "We review your business, offers, current ads, and goals — sales for e-commerce, or leads and booked jobs for services.",
  },
  {
    step: "02",
    title: "Strategy & tracking",
    description:
      "I map your funnel, fix tracking, and build a channel plan (Meta, Google, or both) for your niche.",
  },
  {
    step: "03",
    title: "Launch & optimize",
    description:
      "Campaigns go live with tested creative and audiences. I optimize weekly toward more sales (DTC) or lower CPL and more bookings (lead gen).",
  },
  {
    step: "04",
    title: "Scale what works",
    description:
      "Winning campaigns get more budget; underperformers get cut. You get clear reporting on real business outcomes.",
  },
] as const;

/** Keyword-rich sections for SEO & readability (visible on homepage) */
export const seoContentSections = [
  {
    id: "ecommerce-dtc-media-buyer",
    title: "E-commerce & DTC media buyer — ads that sell",
    paragraphs: [
      "Online stores do not need more leads. They need sales. I run Meta (Facebook & Instagram) and Google campaigns for Shopify and DTC brands structured around purchases, catalog ads, Shopping, and Performance Max — with creative and tracking built for ROAS, not form fills.",
      "With 7+ years managing paid media and $20M+ in ad spend, I optimize for cost per purchase and return on ad spend. Every account includes pixel and CAPI setup, offer testing, and weekly scaling of what actually sells.",
    ],
  },
  {
    id: "real-estate-lead-gen",
    title: "Real estate lead generation on Meta & Google",
    paragraphs: [
      "Agents and teams need listing inquiries, buyer consults, and seller conversations — not random traffic. I build Facebook, Instagram, and Google campaigns around markets, listings, and lead forms so your CRM fills with people you can actually work.",
      "Lead generation for real estate is a different mechanism from e-commerce sales. I target by city and zip, match creative to the offer, and report on cost per qualified lead instead of vanity reach.",
    ],
  },
  {
    id: "home-service-media-buyer-usa",
    title: "Best media buyer for home service businesses in the USA",
    paragraphs: [
      "If you run an HVAC, plumbing, roofing, cleaning, landscaping, or remodeling company in the United States, you need a media buyer who understands local lead gen — not a store playbook. I manage Meta and Google campaigns built for service-area targeting, click-to-call, lead forms, and retargeting so you get qualified leads and booked jobs.",
      "Business owners searching for a media buyer for their business often waste budget on broad audiences and weak offers. I focus on cost per lead, cost per booked call, and revenue — with weekly optimization, creative testing, and transparent reporting for US home service brands.",
    ],
  },
  {
    id: "home-service-lead-gen",
    title: "Lead generation for home service businesses",
    paragraphs: [
      "Home service brands rely on qualified leads and phone calls. I build Meta and Google campaigns with seasonal offers, geo-targeted audiences, and remarketing that turns website visitors into booked jobs across the USA.",
      "Whether you need Google Search ads for high-intent keywords like “HVAC repair near me” or Meta lead ads for local awareness, I focus on measurable outcomes: leads, calls, and booked work.",
    ],
  },
  {
    id: "med-spa-media-buyer",
    title: "Media buyer for med spas & aesthetic clinics",
    paragraphs: [
      "Med spas and aesthetic clinics still need booked consultations. I run Meta and Google campaigns with lead forms, local targeting, and offer creative for injectables, laser, body contouring, and skincare — as one of the niches I support alongside e-commerce, real estate, and home services.",
      "The goal is cost per lead and cost per booked appointment, with creative that follows platform rules so the account stays healthy.",
    ],
  },
  {
    id: "meta-google-specialist",
    title: "Meta & Google ads specialist — sales and lead gen",
    paragraphs: [
      "As a Top Rated Plus media buyer on Upwork, I've managed campaigns for e-commerce brands (20X–50X+ ROAS on winning accounts), real estate and home service lead gen, and local providers. I'm Meta and Google certified with experience across B2C, DTC, and local services.",
      "Services include account audits, pixel and conversion API setup, campaign launches, creative strategy, retargeting funnels, and monthly management — all aimed at scaling what works and cutting wasted spend fast.",
    ],
  },
] as const;
