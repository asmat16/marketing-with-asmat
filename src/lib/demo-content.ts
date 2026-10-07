import { featuredCaseStudies, siteConfig } from "@/lib/site";

/**
 * Content test for the MOAT positioning brief.
 * Same page architecture as the live homepage. Copy only.
 * Claims stay inside work that already exists: paid media, creative
 * direction, tracking, CRO, and reporting. AI is a support layer, not a product.
 */
export const demoHero = {
  preview:
    "Content test · not the live site. The public homepage is unchanged.",
  eyebrow: "Results backed by $20M+ ad spend",
  headlineBefore: "I build ",
  headlineAccent: "AI-ready paid growth systems",
  headlineAfter: " that turn ad spend into revenue.",
  support:
    "7+ years and $20M+ in managed ad spend. Media buying, customer intelligence, creative strategy, CRO, and measurement, with AI used to speed research and analysis so the system keeps learning.",
  primaryCta: "Diagnose your growth system",
  secondaryCta: "View case studies",
  specializingLabel: "Specializing in",
  specializing:
    "E-commerce · Real estate · Home services · DTC sales",
  imageAlt:
    "Asmat, paid growth operator for e-commerce, real estate, and home services",
} as const;

export const demoServicesHeading = {
  label: "Services",
  title: "Channels inside one acquisition system",
  description:
    "Meta, Google, and TikTok stay in the work. They are channels, not the product. Creative, tracking, conversion, and monthly management are how the system learns. Stores are optimized for purchases. Real estate and home services are optimized for qualified leads and booked jobs.",
} as const;

export const demoServices = [
  {
    title: "E-commerce & DTC Sales Ads",
    description:
      "Meta and Google as the sales channel for Shopify and DTC brands: offer, creative, and tracking built for purchases and ROAS. This is not a lead-form program.",
    bullets: [
      "Purchase and catalog campaigns (Advantage+, Shopping, PMax)",
      "Creative tests on product, UGC, offer, and proof",
      "Pixel, CAPI, and reporting tied to actual sales",
    ],
  },
  {
    title: "Real Estate Lead Generation",
    description:
      "Facebook, Instagram, and Google for buyer, seller, and listing demand. The work is market intent, the offer, and lead quality for agents, teams, and local markets.",
    bullets: [
      "Lead forms and landing pages matched to the listing or market",
      "Geo targeting by city, zip, and commute patterns",
      "Qualified inquiries over cheap lead volume",
    ],
  },
  {
    title: "Home Service Appointment Ads",
    description:
      "Meta and Google for HVAC, cleaning, landscaping, remodeling, and other local services. The score is booked jobs, including what happens after the click.",
    bullets: [
      "Service-area targeting and seasonal offers",
      "Lead gen and click-to-call, judged on quality",
      "Retargeting visitors who did not book",
    ],
  },
  {
    title: "Med Spa & Aesthetic Lead Gen",
    description:
      "Meta and Google that fill consult calendars for injectables, laser, body contouring, and skincare, when the goal is a booked appointment.",
    bullets: [
      "Lead forms structured for bookings",
      "Offer creative that stays within ad-platform rules",
      "Local radius targeting for people who can actually visit",
    ],
  },
  {
    title: "Growth Diagnosis & Account Audit",
    description:
      "A read of the business, offer, funnel, tracking, and account before anything is rebuilt. Sales structure for stores. Qualified lead volume for services.",
    bullets: [
      "Pixel, CAPI, and conversion-event review",
      "Offer, structure, and budget recommendations",
      "30-day test plan with KPIs you can decide from",
    ],
  },
  {
    title: "Monthly Experimentation & Optimization",
    description:
      "Ongoing management as a learning loop: what to scale, what to cut, and what to retest. Stores are judged on ROAS and purchases. Services are judged on cost per lead and booked jobs.",
    bullets: [
      "Weekly reviews tied to business outcomes",
      "Tests on offer, message, creative, and audience",
      "Budget moves to what the account proves",
    ],
  },
] as const;

export const demoProcessHeading = {
  label: "How it works",
  title: "Diagnose, measure, test, then scale",
  description:
    "The same four-step engagement. The work starts with the business and the numbers, then campaigns launch as tests, not as a one-time setup.",
} as const;

export const demoProcessSteps = [
  {
    step: "01",
    title: "Diagnose",
    description:
      "Business, customer, offer, funnel, and the data you already have. Sales for e-commerce, or leads and booked jobs for services.",
  },
  {
    step: "02",
    title: "Build the measurement layer",
    description:
      "Tracking, attribution, and the KPIs that decide budget: purchases and ROAS for stores, lead quality and booked jobs for services.",
  },
  {
    step: "03",
    title: "Create hypotheses",
    description:
      "Audience, offer, message, creative, and channel. Meta, Google, and TikTok are chosen for the job, not by default.",
  },
  {
    step: "04",
    title: "Launch, learn, and scale",
    description:
      "Structured tests, then budget follows the evidence. Reporting is for the next decision, not a stack of screenshots.",
  },
] as const;

export const demoFaqHeading = {
  label: "FAQ",
  title: "Common questions before you book",
  description:
    "Straight answers on scope, timelines, creative, measurement, and how AI actually shows up in the work.",
} as const;

export const demoFaqs = [
  {
    q: "Do you do sales ads or lead generation?",
    a: "Both, as separate playbooks inside one acquisition system. E-commerce and DTC brands get purchase campaigns optimized for sales and ROAS. Real estate and home services get qualified inquiries, calls, and booked jobs.",
  },
  {
    q: "What's included in the free strategy call?",
    a: "A 15-minute Zoom to diagnose the offer, the account, tracking, and the goal. You get an honest read on what is working, what to fix first, and whether Meta, Google, TikTok, or a mix belongs in the plan.",
  },
  {
    q: "How quickly can we launch?",
    a: "Most accounts go live within 1–2 weeks after onboarding, including the pixel and CAPI audit, offer alignment, creative direction, and campaign structure. A faster launch is possible when tracking is already trustworthy.",
  },
  {
    q: "What results should I expect?",
    a: "Results depend on the offer, the market, and the budget. Stores are optimized for purchases and ROAS. Real estate and home services are optimized for qualified leads and booked jobs. Past accounts have seen 5X–50X+ ROAS on e-commerce and thousands of conversions on Google Search. Nothing here is a guarantee, including anything involving AI.",
  },
  {
    q: "Can I hire you through Upwork?",
    a: "Yes. I'm Top Rated Plus on Upwork with 7+ years of paid media experience. You can hire there for escrow protection, or work directly after the strategy call.",
  },
  {
    q: "Can you help with creative strategy, not just media buying?",
    a: "Yes. I direct the message, hook, offer, angle, and proof, then test them in the account. I work with your team or UGC creators. I do not treat creative as a separate trick from the media. Volume is easy to generate. Choosing what is credible and worth spending on is the job.",
  },
  {
    q: "Are you a media buyer for home service businesses in the USA?",
    a: "Yes. I work with US HVAC, cleaning, landscaping, remodeling, and other home service companies that need qualified leads and calls from Meta and Google. Campaigns use service-area targeting, offer-led creative, and tracking aligned to booked jobs.",
  },
  {
    q: "How do I find the best media buyer for my business?",
    a: "Match the proof to the model: ROAS and purchases for e-commerce, cost per qualified lead and booked appointments for real estate and home services. Then ask how they diagnose the offer, the creative, and the tracking, not only which buttons they click. Book a free diagnosis, message on WhatsApp, or hire on LinkedIn.",
  },
  {
    q: "Do you run TikTok ads as well as Meta and Google?",
    a: "Yes. TikTok is a channel for DTC creative testing and prospecting. Meta and Google usually carry the conversion load. The mix depends on the product, the offer, and whether you can sustain creative, not on a one-platform default.",
  },
  {
    q: "Can I hire you for Meta or Google ads in the United States?",
    a: "Yes. Most of the paid media work is for US e-commerce, real estate, and home service brands. Book a strategy call, email, WhatsApp, or hire through LinkedIn or Upwork.",
  },
  {
    q: "Will AI replace media buyers?",
    a: "AI is taking more of the targeting, bidding, reporting, and first-draft creative. That raises the value of judgment: which customer, which offer, which test, and which trade-off the business should accept. I still run the accounts. AI does not make the campaign decisions, and it does not automatically improve ROAS.",
  },
  {
    q: "How are you using AI in the workflow?",
    a: "AI supports research, briefing, and analysis inside the paid-media work. It is not a product I sell, and I do not hand an account to an agent. If a workflow is still being built, I will say that instead of implying it is already running.",
  },
  {
    q: "What makes this different from a traditional media buyer?",
    a: "Platform execution is the foundation, not the ceiling. The engagement starts with the customer, the offer, the creative, the measurement, and what happens after the click. Meta, Google, and TikTok are how that system gets in market.",
  },
  {
    q: "How do you measure lead quality?",
    a: "Cost per lead is the start. For real estate and home services the useful numbers are qualified inquiries, calls, and booked jobs. I can connect ad performance to CRM or revenue data when you can share it. If that connection is not in place, we use the closest honest signal and say what it cannot prove.",
  },
  {
    q: "Who should I hire as a media buyer for a US brand?",
    a: "Hire for proof that matches the model: purchases and ROAS for e-commerce, qualified leads and booked meetings for lead gen. The work is in English, with Top Rated Plus history on Upwork, 7+ years, and $20M+ in managed ad spend.",
  },
  {
    q: "Can you run ads for a US business remotely?",
    a: "Yes. The ad accounts, the customers, and the reporting are for the US market. Start with a diagnosis or an Upwork contract so the scope is clear.",
  },
] as const;

export const demoCta = {
  title: "Let's diagnose your growth system",
  description:
    "A free call on the offer, the account, the tracking, and whether paid acquisition is the constraint. Purchases for stores. Qualified leads for services.",
  primary: "Book free diagnosis",
  secondary: "Hire on Upwork",
} as const;

export const demoResultsHeading = {
  label: "Results",
  title: "Decision experience, measured in the account",
  description:
    "7+ years and $20M+ in managed spend across e-commerce sales, real estate, and home service lead gen. The proof is what the accounts did, not a new job title.",
} as const;

export const demoCredentialsBlurb =
  "Top Rated Plus, Meta and Google certified, still doing the media buying. The standard is whether the system produces revenue or qualified demand.";

export const demoPortfolioHeading = {
  label: "Case studies",
  title: "Account proof, and the decision it supports",
  description:
    "Screenshots from Meta Ads Manager, Google Ads, and Analytics. Confidential client work. Each card is a result plus the read of what the account actually showed. Click any card to enlarge.",
} as const;

const caseReads = [
  "Read: the account held 20X–50X+ ROAS by staying with winning purchase campaigns over two years, not by resetting every month.",
  "Read: revenue moved with users, sessions, and conversions together. Traffic alone was not the result.",
  "Read: the system held purchase volume at €5.27 cost per purchase after €43.7K in spend.",
  "Read: Search for training and services, judged on conversion rate and cost per conversion, not on clicks.",
  "Read: high-intent keywords at a $0.56 average CPC, scored on conversion value versus cost.",
  "Read: the Google plan was built for purchases and ROAS on a growing brand, not for traffic.",
  "Read: keyword refinement was the intervention. The score was conversion rate and cost per lead.",
  "Read: conversion volume held across campaigns, so the win was the system, not one ad set.",
] as const;

export const demoCaseStudies = featuredCaseStudies.map((study, index) => ({
  ...study,
  description: `${study.description} ${caseReads[index] ?? ""}`.trim(),
}));

export const demoSeoHeading = {
  label: "Expertise",
  title: "Paid acquisition for e-commerce, real estate, and home services",
  description:
    "Meta, Google, and TikTok stay in the offer. So do creative direction, measurement, and what happens after the click. Stores are for sales. Local businesses are for qualified demand.",
} as const;

export const demoSeoSections = [
  {
    id: "ecommerce-dtc-media-buyer",
    title: "E-commerce and DTC media buyer for ads that sell",
    paragraphs: [
      "Online stores need sales, not more leads. I run Meta (Facebook and Instagram) and Google for Shopify and DTC brands around purchases, catalog ads, Shopping, and Performance Max, with creative and tracking built for ROAS.",
      "With 7+ years in paid media and $20M+ in managed spend, the decisions are about offer, message, and what the purchase data says to do next. Every account includes pixel and CAPI setup and a weekly read of what actually sells.",
    ],
  },
  {
    id: "real-estate-lead-gen",
    title: "Real estate lead generation on Meta and Google",
    paragraphs: [
      "Agents and teams need listing inquiries, buyer consults, and seller conversations. I build Facebook, Instagram, and Google campaigns around the market, the listing, and the lead path so the CRM fills with people you can work.",
      "Real estate lead gen is a different system from e-commerce sales. Targeting is by city and zip, creative matches the offer, and the report is cost per qualified lead.",
    ],
  },
  {
    id: "home-service-media-buyer-usa",
    title: "Media buyer for home service businesses in the USA",
    paragraphs: [
      "HVAC, plumbing, roofing, cleaning, landscaping, and remodeling companies in the United States need local lead gen, not a store playbook. I manage Meta and Google for service-area targeting, click-to-call, lead forms, and retargeting so the outcome is a qualified lead or a booked job.",
      "The diagnosis usually starts with a weak offer or a broad audience, not with a missing setting inside the ad platform. I report cost per lead, cost per booked call, and what the account says to change next.",
    ],
  },
  {
    id: "home-service-lead-gen",
    title: "Lead generation for home service businesses",
    paragraphs: [
      "Home service brands live on qualified leads and phone calls. I build Meta and Google campaigns with seasonal offers, geo-targeted audiences, and remarketing that turns visitors into booked jobs across the USA.",
      "That can be Google Search for high-intent queries, or Meta lead ads when the offer and the creative can earn the click. The measurement is leads, calls, and booked work.",
    ],
  },
  {
    id: "med-spa-media-buyer",
    title: "Also available: med spas and aesthetic clinics",
    paragraphs: [
      "This is a supporting niche. When a med spa needs booked consultations, I can run Meta and Google lead campaigns with local targeting and offer creative that follows platform rules.",
      "The main work is still e-commerce sales, plus real estate and home service lead generation.",
    ],
  },
  {
    id: "meta-google-specialist",
    title: "Meta, Google, and TikTok inside one growth system",
    paragraphs: [
      "As a Top Rated Plus media buyer, I manage Meta, Google, and TikTok for e-commerce brands (20X–50X+ ROAS on winning accounts) and lead gen for real estate and home services. Certification covers Meta and Google. TikTok is used when the creative can support it.",
      "The engagement can start as an audit, a tracking rebuild, a launch, or monthly management. The through-line is the same: creative, measurement, and a metric that matches the business.",
    ],
  },
  {
    id: "hire-media-buyer",
    title: "Hire a media buyer you can actually reach",
    paragraphs: [
      "If you searched for a media buyer, a Meta ads expert, or a Google ads specialist in the US, the next step is a diagnosis, not a form maze. Book a free strategy call, email, WhatsApp, or hire on LinkedIn.",
      "I run paid acquisition for businesses in the United States. You get senior Meta, Google, and TikTok work, 7+ years and $20M+ in managed spend.",
    ],
  },
] as const;

export const demoSalesEngine = {
  label: "Sales engine",
  title: "E-commerce and DTC ads built to sell, not collect leads",
  description:
    "Purchase campaigns, catalog ads, and product creative for Shopify and DTC brands. Orders and ROAS, not a spreadsheet of form fills. Lead gen stays with real estate and home services.",
  cta: "Diagnose the sales system",
} as const;

export const demoNicheLabel = "Who this acquisition system is built for";

export const demoInsights = {
  label: "Insights",
  title: "Ads, growth, and performance marketing",
  description:
    "The commercial guides on Meta, Google, TikTok, tracking, and funnels stay. A second lane, what automation changes for operators, is being written from account work. It is not an AI news feed.",
  hireLead: "Ready to look at the system?",
  hireCta: "Book a free diagnosis",
} as const;

export const demoBook = {
  label: "Book a call",
  title: "Diagnose your growth system",
  description:
    "Pick a time. Fifteen minutes on the offer, the account, and whether the constraint is creative, tracking, the funnel, or the media mix.",
} as const;

export const demoContact = {
  label: "Contact",
  title: "Message me or book a diagnosis",
  description:
    "Form submissions go to my email. Hire on WhatsApp, Upwork, or LinkedIn, or book the call.",
  bookTitle: "Book on the calendar",
  bookDescription: "Pick a time for a free growth diagnosis",
} as const;

export const demoWhatsappDisplay = "+1 667 788 2088";

export const demoWhatsapp =
  "https://wa.me/16677882088?text=Hi%20Asmat%2C%20I%20want%20to%20talk%20about%20ads%20and%20growth%20for%20my%20brand.";

export const demoChannels = [
  {
    label: "Message on WhatsApp",
    value: demoWhatsappDisplay,
    href: demoWhatsapp,
    external: true,
  },
  {
    label: "Hire on Upwork",
    value: "Top Rated Plus",
    href: siteConfig.links.upwork,
    external: true,
  },
  {
    label: "Email me",
    value: siteConfig.email,
    href: siteConfig.links.email,
  },
  {
    label: "Connect on LinkedIn",
    value: "View profile",
    href: siteConfig.links.linkedin,
    external: true,
  },
] as const;

export const demoFooter =
  "Paid growth systems for e-commerce sales, real estate, and home service lead gen. Meta, Google, and TikTok, with creative strategy and measurement in the same plan.";

export const demoHeaderCta = "Book a call";
export const demoMobileCta = "Book free call";
