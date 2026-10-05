import { siteConfig } from "@/lib/site";

/** Private preview. Not the live homepage. US home services only. */

export const tradesPreview = {
  banner: "Private preview. The public site is unchanged, and this page is not indexed.",
  eyebrow: "United States · Home services only",
  headline: "Booked jobs for US home service companies.",
  accent: "Ads. The listing. The page. The follow-up.",
  support:
    "I run Google Ads, Meta Ads, and TikTok Ads for a short list of trades. Around that: Google Business Profile optimization, content for the ads and the social pages, funnel creation, and GoHighLevel so a lead does not sit in an inbox.",
  primary: "Book a 15-min call",
  secondary: "See the five lanes",
  note: "One operator. Five lanes. You do not have to buy all five on day one.",
} as const;

export const tradesStats = [
  { value: "$20M+", label: "Ad spend managed" },
  { value: "7+", label: "Years in paid media" },
  { value: "Top Rated", label: "Plus on Upwork" },
  { value: "USA", label: "Clients only" },
] as const;

export const trades = [
  { name: "HVAC", detail: "Repair, replacement, maintenance plans" },
  { name: "Roofing", detail: "Repair and replacement" },
  { name: "Plumbing", detail: "Calls and estimates" },
  { name: "Home repair", detail: "The jobs you want more of" },
  { name: "Landscaping", detail: "Seasonal work and projects" },
  { name: "Remodeling", detail: "Qualified estimates" },
  { name: "Interior design", detail: "Project inquiries" },
  { name: "Solar installation", detail: "Qualified consultations" },
  { name: "EV charger installation", detail: "Home and small commercial" },
] as const;

export const deskCards = [
  {
    id: "profile",
    kicker: "Google Business Profile",
    title: "The map listing",
    lines: ["Categories match the ads", "Photos from real jobs", "Reviews get a reply"],
  },
  {
    id: "media",
    kicker: "Paid media platforms",
    title: "Google · Meta · TikTok",
    lines: ["Search for the job now", "Social for the season", "Calls and forms, not vanity clicks"],
  },
  {
    id: "follow",
    kicker: "GoHighLevel",
    title: "Speed to lead",
    lines: ["Missed-call text", "Pipeline for the estimate", "Review request after the job"],
  },
] as const;

export const lanes = [
  {
    step: "01",
    title: "Paid media platforms",
    kicker: "Google Ads · Meta Ads · TikTok Ads",
    body: "The ads that put the offer in front of homeowners in your service area. Google Search for people who need the job now. Meta and TikTok for the season, the neighborhood, and the proof of the work.",
    points: [
      "Service-area campaigns, not a national blast",
      "Judged on calls, forms, and booked jobs or estimates",
      "Ad spend is paid to Google, Meta, and TikTok, not to me",
    ],
  },
  {
    step: "02",
    title: "Google Business Profile",
    kicker: "GMB optimization · search visibility on Google",
    body: "The map listing is where a lot of these jobs start. Categories, services, photos, posts, Q&A, and a review rhythm so the profile says the same thing as the ads.",
    points: [
      "Profile setup and cleanup",
      "Posts and photo direction from the jobs",
      "This is the Google listing, not a backlink program",
    ],
  },
  {
    step: "03",
    title: "Content",
    kicker: "Content strategy · ads · social · AI-assisted",
    body: "The words and the pictures for the ads and the social pages. Job photos, before-and-after, offer posts, and short scripts. AI drafts the volume. I edit what a homeowner would actually believe.",
    points: [
      "One content plan for ads and social",
      "Hooks taken from the job, the city, and the offer",
      "Human edit on anything that goes live",
    ],
  },
  {
    step: "04",
    title: "Funnels",
    kicker: "Funnel creation · funnel optimization",
    body: "The page after the click. One offer, one next step, and a form or click-to-call a tired homeowner can finish. If the ad says same-day repair, the page cannot say something else.",
    points: [
      "Offer, headline, and proof lined up with the ad",
      "Call, form, or estimate request, not a maze",
      "Fixes when the click is fine and the page is the leak",
    ],
  },
  {
    step: "05",
    title: "GoHighLevel",
    kicker: "CRM · automations · pipeline",
    body: "What happens after they raise a hand. A pipeline, a missed-call text, a fast alert, estimate follow-up, and a review request. The ad is wasted if the lead sits.",
    points: [
      "Speed-to-lead and missed-call text-back",
      "Pipeline from new lead to booked job",
      "Review and estimate follow-up after the visit",
    ],
  },
] as const;

export const mediaPlans = [
  {
    name: "One platform",
    price: "$1,800",
    unit: "/ month",
    detail: "Google Ads or Meta Ads. The right start when one channel already matches how people hire you.",
    featured: false,
  },
  {
    name: "Two platforms",
    price: "$2,800",
    unit: "/ month",
    detail: "Google and Meta. Where most HVAC, roofing, plumbing, and remodel companies should start.",
    featured: true,
  },
  {
    name: "Three platforms",
    price: "$3,400",
    unit: "/ month",
    detail: "Google, Meta, and TikTok. TikTok only earns a place when you can film the work.",
    featured: false,
  },
] as const;

export const addOns = [
  { name: "Google Business Profile, 90 days", price: "$1,200", detail: "Setup, categories, services, photos, posts, and a review rhythm." },
  { name: "Google Business Profile, ongoing", price: "$500 / month", detail: "Posts, photo direction, Q&A, and review follow-through." },
  { name: "Content system", price: "$1,200 / month", detail: "Ad concepts and social posts. AI drafts, I edit, you approve." },
  { name: "Funnel, one service", price: "$2,200", detail: "Offer page, thank-you, and the call or form path for one service line." },
  { name: "GoHighLevel build", price: "$2,800", detail: "Pipeline, missed-call text, instant alert, estimate and review follow-up." },
  { name: "GoHighLevel care", price: "$450 / month", detail: "Keep the automations honest as the offer and the team change." },
] as const;

export const deskPlan = {
  name: "The desk",
  price: "$4,200",
  unit: "/ month",
  detail:
    "Two ad platforms, monthly ad and social content, Google Business Profile posts, and GoHighLevel care. Funnel fixes when the page is the leak. Three-month start. Ad spend is separate.",
} as const;

export const pricingNotes = [
  "Most companies should start with one or two ad platforms. Add the listing, the funnel, or GoHighLevel when leads are arriving and the phone is not.",
  "I start paid media when the account can put at least $3,000 a month into the platforms. Below that, the learning is too thin.",
  "Emergency trades are scored on booked calls. Solar, EV charger, remodeling, and interior are scored on qualified estimates.",
  "These prices are the offer on this preview. They are not on the public site yet.",
] as const;

export const included = [
  "Weekly changes inside the ad accounts",
  "Ad content direction from the job and the service area",
  "A tracking check on calls and forms",
  "A short note on what to scale, cut, or fix outside the ads",
] as const;

export const notIncluded = [
  "The ad spend itself",
  "A full website rebuild",
  "A guaranteed cost per lead",
] as const;

export const outOfScope = [
  "Med spas and aesthetics",
  "Clinics, vein, and vascular practices",
  "E-commerce and online stores",
  "Real estate teams and agents",
] as const;

export const scoreLine =
  "Emergency trades are scored on booked calls. Solar installation, EV charger installation, remodeling, and interior design are scored on qualified estimates.";

export const faqs = [
  {
    q: "Which companies do you take?",
    a: "US companies in HVAC, roofing, plumbing, home repair, landscaping, remodeling, interior design, solar installation, and EV charger installation. Service-area businesses. United States only.",
  },
  {
    q: "Do you work with med spas, clinics, or online stores?",
    a: "No. I do not take med spas, aesthetics, clinics, vein or vascular practices, e-commerce, or real estate.",
  },
  {
    q: "Do you work outside the United States?",
    a: "No. The ads, the listings, the pages, and the follow-up are for US service areas. I am based in Pakistan. The customers are in the US.",
  },
  {
    q: "Is TikTok required?",
    a: "No. Google and Meta book more of these jobs. TikTok is for companies that can film the work: roofs, installs, before-and-after, truck-to-driveway.",
  },
  {
    q: "Who owns the ad account and the GoHighLevel account?",
    a: "You do. I work inside your accounts. If we part ways, the campaigns, the pixel, and the CRM stay with you.",
  },
  {
    q: "How fast can we launch?",
    a: "Most paid media accounts go live in one to two weeks after tracking, the offer, and the service area are clear. A Google Business Profile cleanup or a GoHighLevel build has its own schedule, and I will say which one is first.",
  },
  {
    q: "Are the case studies all from home service companies?",
    a: "No. They are paid media proof from real accounts: Meta, Google, and Analytics. I am not going to relabel an e-commerce screenshot as a roofing company. Home-service work on this desk is judged on calls, forms, and booked jobs or estimates.",
  },
  {
    q: "What is the first step?",
    a: "A 15-minute call. Bring the trade, the service area, the current ads if you have them, and how a lead becomes a booked job today. You can also hire on Upwork or message on WhatsApp.",
  },
] as const;

export const linkedin = {
  headline:
    "Paid media for US home service companies | Google Ads, Meta Ads, TikTok Ads | Google Business Profile, content, funnels, GoHighLevel",
  about: `I help US home service companies get booked jobs and qualified estimates.

Trades: HVAC, roofing, plumbing, home repair, landscaping, remodeling, interior design, solar installation, and EV charger installation. United States only.

What I do:
• Paid media platforms: Google Ads, Meta Ads, and TikTok Ads
• Google Business Profile optimization (the map listing)
• Content strategy and content creation for ads and social, with AI used to draft and a human edit before anything goes live
• Funnel creation and funnel optimization, so the offer on the page matches the ad
• GoHighLevel CRM and automations: speed-to-lead, missed-call text, pipelines, estimate and review follow-up

I do not take med spas, aesthetics, clinics, e-commerce, or real estate.

7+ years in paid media. $20M+ in ad spend managed. Meta and Google certified. Top Rated Plus on Upwork. Based in Pakistan, working with companies in the United States.

The usual start is one or two ad platforms, with at least $3,000 a month in ad spend. The listing, the funnel, and GoHighLevel are added when the phone or the follow-up is the leak.

Book a 15-minute call: https://calendly.com/asmat-llh/15
WhatsApp: +1 667 788 2088`,
} as const;

export const upwork = {
  title: "Google & Meta Ads for US Home Service Companies",
  overview: `I run paid media for US home service companies that need booked jobs and qualified estimates, not vanity leads.

Trades I take: HVAC, roofing, plumbing, home repair, landscaping, remodeling, interior design, solar installation, and EV charger installation. United States only.

Services:
• Paid media platforms: Google Ads, Meta Ads, TikTok Ads
• Google Business Profile (GMB) optimization
• Content strategy and content creation for ads and social, AI-assisted with a human edit
• Funnel creation and funnel optimization
• GoHighLevel CRM, pipelines, and automations

I do not take med spas, aesthetics, clinics, e-commerce stores, or real estate.

How an engagement usually starts: one or two ad platforms (Google and Meta), weekly optimization, and a clear read on calls and forms. TikTok only if you can film the work. Google Business Profile, the funnel, and GoHighLevel are scoped separately when the lead path needs them.

You own the ad accounts and the CRM. Ad spend is paid to the platforms.

7+ years. $20M+ ad spend managed. Top Rated Plus. Meta and Google certified. Based in Pakistan, clients in the United States.

Start with a short call and the service area, the offer, and how a lead becomes a job today.`,
  skills: [
    "Google Ads",
    "Facebook Ads",
    "Instagram marketing",
    "TikTok Ads",
    "Lead generation",
    "Google My Business",
    "GoHighLevel",
    "Landing pages",
    "Marketing automation",
    "Social media content",
  ],
} as const;

export const contentPlan = [
  {
    week: "01",
    title: "Name the desk",
    channel: "LinkedIn",
    angle:
      "I work with US home service companies only: HVAC, roofing, plumbing, home repair, landscaping, remodeling, interior, solar, and EV chargers. Paid media, the Google listing, content, the funnel, and GoHighLevel.",
  },
  {
    week: "02",
    title: "Search versus social",
    channel: "LinkedIn",
    angle:
      "Google Search is for the homeowner who needs the job today. Meta is for the season and the neighborhood. TikTok is for companies that can show the work. Most trades should not start on all three.",
  },
  {
    week: "03",
    title: "Five minutes",
    channel: "LinkedIn",
    angle:
      "A paid click dies if nobody answers. Missed-call text and a pipeline in GoHighLevel are part of the job, not a software demo.",
  },
  {
    week: "04",
    title: "The map listing",
    channel: "LinkedIn",
    angle:
      "The Google Business Profile has to say the same thing as the ad: the service, the city, the photos, the offer. If those disagree, the click gets expensive.",
  },
  {
    week: "05",
    title: "The offer on the page",
    channel: "LinkedIn",
    angle:
      "Same-day repair in the ad and a vague homepage after the click is a funnel problem. One service, one next step.",
  },
  {
    week: "06",
    title: "Job photos",
    channel: "LinkedIn",
    angle:
      "A real roof, a real install, a real truck in a real driveway beats a stock living room. Content for these trades starts on the job, then AI helps draft the lines.",
  },
  {
    week: "07",
    title: "Cheap leads",
    channel: "LinkedIn",
    angle:
      "A cheap form fill that never books is not growth. The number that matters is the booked call or the qualified estimate.",
  },
  {
    week: "08",
    title: "What I will not take",
    channel: "LinkedIn + Upwork",
    angle:
      "Med spas, clinics, aesthetics, e-commerce, and real estate are not on this desk. The boundary is public, so the wrong fit does not book.",
  },
] as const;

export const tradesNav = [
  { href: "#trades", label: "Trades" },
  { href: "#offer", label: "Offer" },
  { href: "#pricing", label: "Pricing" },
  { href: "#proof", label: "Proof" },
  { href: "#reviews", label: "Reviews" },
  { href: "#profiles", label: "Profiles" },
] as const;

export const tradesWhatsapp =
  "https://wa.me/16677882088?text=Hi%20Asmat%2C%20I%20run%20a%20US%20home%20service%20company%20and%20want%20to%20talk%20about%20paid%20media.";

export const tradesChannels = [
  { label: "Book a call", value: "15 minutes", href: siteConfig.links.book },
  { label: "WhatsApp", value: siteConfig.phoneDisplay, href: tradesWhatsapp, external: true },
  { label: "Upwork", value: "Top Rated Plus", href: siteConfig.links.upwork, external: true },
  { label: "LinkedIn", value: "View profile", href: siteConfig.links.linkedin, external: true },
  { label: "Email", value: siteConfig.email, href: siteConfig.links.email },
] as const;
