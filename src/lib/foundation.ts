import { featuredCaseStudies } from "@/lib/site";

/** Demo-only copy for the AI-native growth foundation. Not the live homepage. */

export const foundationNav = [
  { href: "/systems", label: "How I work" },
  { href: "/who-i-help", label: "Who I Help" },
  { href: "/#proof", label: "Proof" },
  { href: "/#insights", label: "Insights" },
  { href: "/#about", label: "About" },
] as const;

export const foundationHero = {
  eyebrow: "US HVAC, roofing, plumbing. One person on the path.",
  headlineBefore: "Home service companies get leads, not ",
  headlineAccent: "booked jobs",
  headlineAfter: ".",
  support:
    "The gap is the rest of the work. Creative. Content. Funnel. CRM automations. Google Ads and Meta Ads. Most owners hire four people for that. I do it in one seat. AI helps me move faster. I still make the calls.",
  primaryCta: "Book a 15-min call",
  secondaryCta: "See how I work",
  specializingLabel: "I work with",
  specializing: "HVAC · Roofing · Plumbing · Landscaping · Home repair",
  imageAlt:
    "Asmat, media buyer for US home service companies",
} as const;

export const foundationStats = [
  { value: "$20M+", label: "Ad spend managed" },
  { value: "7+", label: "Years in market" },
  { value: "$40M+", label: "Revenue generated" },
  { value: "Top Rated", label: "Plus on Upwork" },
] as const;

export const problemCards = [
  {
    title: "Paid traffic",
    question: "Are you not getting enough traffic on your website right now?",
  },
  {
    title: "Data tracking",
    question: "I set up pixel and GTM tracking so we can trust what the ads did.",
  },
  {
    title: "Creative strategy",
    question: "Do you need better ads, hooks, and content? I can build that with you.",
  },
  {
    title: "More booked appointments",
    question: "The goal is not more form fills. The goal is more bookings.",
  },
  {
    title: "CRM automations",
    question: "Qualified leads sit too long. I help you call, text, and email them fast.",
  },
  {
    title: "Google Business Profile",
    question: "Your Google listing should match the ads and help people call you.",
  },
] as const;

export const journeySteps = [
  {
    id: "onboarding",
    step: "01",
    name: "Onboarding",
    skill: 100,
    creativity: 82,
    adaptability: 96,
    focus: "I spend real time here first.",
    does: "I collect how the business works today. Current ads. Who answers the phone. How a lead becomes a booked job. New company, existing company, or an agency with more than one account. Same start.",
    result: "We begin with facts. Then we build.",
  },
  {
    id: "who-you-serve",
    step: "02",
    name: "Who you serve, and where",
    skill: 95,
    creativity: 84,
    adaptability: 92,
    focus: "Wrong people waste the budget.",
    does: "Audience avatar. Age, homeowner, job type. Then the map: states, cities, zip codes. HVAC, roofing, plumbing, landscaping, and home repair only in areas you can actually serve.",
    result: "Ads go to people who can book you.",
  },
  {
    id: "content",
    step: "03",
    name: "Content and copy",
    skill: 92,
    creativity: 100,
    adaptability: 90,
    focus: "What we say in the ads.",
    does: "Hooks. Angles. Variations. Ad copy. Photos and video of the work when you have them. Content writing and content creation sit in this same step. Meta Andromeda rewards testing a lot of creatives. Sitting on two ads is how you fall behind.",
    result: "We have ads worth spending on.",
  },
  {
    id: "ads",
    step: "04",
    name: "Google Ads and Meta Ads",
    skill: 100,
    creativity: 88,
    adaptability: 97,
    focus: "Most of my hours go here.",
    does: "I run Google Search ads and Meta ads. TikTok when you can film the work. I manage and optimize the accounts myself. Day one test. Day two test. Day three test. I do not leave spend sitting on ads that do not produce leads.",
    result: "The ads are worked every day, not set and forgotten.",
  },
  {
    id: "funnel",
    step: "05",
    name: "Website and funnel",
    skill: 88,
    creativity: 86,
    adaptability: 90,
    focus: "The click has to become a call.",
    does: "What they see after the ad. Page, form, click to call. Easy next step. Free quote or estimate when that is the offer. If the funnel leaks, we fix that before we add budget.",
    result: "More booked appointments from the same clicks.",
  },
  {
    id: "tracking",
    step: "06",
    name: "Data tracking",
    skill: 90,
    creativity: 80,
    adaptability: 88,
    focus: "If the numbers are wrong, the ads are guessed.",
    does: "Pixel. Google Tag Manager. Call tracking when we need it. We count calls, forms, and booked jobs. Not cheap form fills that never become a customer.",
    result: "We know which ads to keep.",
  },
  {
    id: "follow-up",
    step: "07",
    name: "Google listing, CRM, and budget",
    skill: 86,
    creativity: 81,
    adaptability: 94,
    focus: "This is how a lead becomes the first booked appointment.",
    does: "Google Business Profile so Maps and Search match the ads. CRM follow-up with SMS, phone, and email, including GoHighLevel when that is the tool. Budget stays tight until leads show up. You do not need four or five people for this. I can cover this desk.",
    result: "A lead gets a reply. A job gets on the calendar.",
  },
] as const;

/** @deprecated Use journeySteps. Kept so older imports keep working. */
export const systemLayers = journeySteps.map((step) => ({
  id: step.id,
  step: step.step,
  name: step.name,
  purpose: step.does,
  failure: step.focus,
  kpi: `${step.skill}% of my skill and time on this part.`,
  example: step.result,
  today: step.focus,
}));

export const capabilities = [
  {
    step: "01",
    name: "How I find your customers",
    detail: "Who should book you, and which zip codes we show the ads to.",
  },
  {
    step: "02",
    name: "Content and copy",
    detail: "Hooks, angles, ad writing, and creatives. Writing and making the ads in one place.",
  },
  {
    step: "03",
    name: "Google Ads and Meta Ads",
    detail: "Search ads and paid social ads. I run them and I optimize them.",
  },
  {
    step: "04",
    name: "More booked appointments",
    detail: "Website and funnel work so a click becomes a call, a quote, or a job.",
  },
  {
    step: "05",
    name: "Data tracking",
    detail: "Pixel, GTM, and call tracking you can trust.",
  },
  {
    step: "06",
    name: "Google Business Profile",
    detail: "Your Google listing, photos, and categories, so people can find you and call.",
  },
  {
    step: "07",
    name: "CRM, budget, and follow-up",
    detail: "Texts, calls, and emails after the lead. Daily tests so the budget is not wasted.",
  },
] as const;

export const problems = [
  {
    id: "leads",
    label: "Not enough qualified leads",
    answer:
      "The phone is quiet, or the leads cannot book you. Wrong zip code. DIY. Price shoppers. I tighten who sees the ads so more of them can become a job.",
    more: "We look at the offer, the map, and who is calling. Cheap form fills that never book are not the goal.",
  },
  {
    id: "ads",
    label: "Ads are not managed every day",
    answer:
      "Someone set the campaigns up and walked away. Spend keeps going. Results do not. I live in Google Ads and Meta Ads. I test on day one, day two, and day three.",
    more: "I do not wait a month to see if it worked. If an ad is burning money, it gets cut.",
  },
  {
    id: "creatives",
    label: "Not enough creatives",
    answer:
      "Two ads cannot carry an account. Meta wants many hooks, angles, and videos. If you stop testing, you fall behind.",
    more: "I plan the content, write the copy, and keep new ads going in. Photos of the real work beat stock rooms.",
  },
  {
    id: "funnel",
    label: "The funnel leaks after the click",
    answer:
      "People click, then leave. The ad did its job. The page, the form, or the next step lost them.",
    more: "We make the page match the ad. Call button. Simple form. Free quote or estimate when that is the promise.",
  },
  {
    id: "tracking",
    label: "Tracking is not reliable",
    answer:
      "The ad account says one number. Your phone says another. Then nobody knows what to scale.",
    more: "I set pixel, GTM, and call tracking so a booked job is what we count.",
  },
  {
    id: "crm",
    label: "Nobody follows up the lead",
    answer:
      "A lead comes in. Nobody texts. Nobody calls. Nobody emails. Hours later they booked the next company.",
    more: "I help you put CRM in place, including GoHighLevel when that is the tool. Fast reply. That is how a lead becomes a booked appointment.",
  },
  {
    id: "listing",
    label: "Google listing and website are weak",
    answer:
      "Ads send people to a listing or a site that does not match. Categories are wrong. No photos of the work. No SEO on the page.",
    more: "I clean up Google Business Profile and the page after the click so people can trust you and call.",
  },
  {
    id: "complete",
    label: "The whole thing is floating",
    answer:
      "Ads, website, listing, tracking, and follow-up are separate. Nobody owns the path from click to booked job. You should not need four or five people for this.",
    more: "I can cover this desk. We fix the stuck part first, then connect the rest.",
  },
] as const;

export const engagement = [
  {
    step: "01",
    title: "Onboarding",
    description:
      "I learn the business, the service area, the current ads, and how a lead becomes a job today.",
  },
  {
    step: "02",
    title: "Who you serve",
    description:
      "Audience avatar. Zip codes. What job we want more of.",
  },
  {
    step: "03",
    title: "Content and ads",
    description:
      "Hooks, copy, creatives, then Google Ads and Meta Ads built on that.",
  },
  {
    step: "04",
    title: "Funnel and follow-up",
    description:
      "Website, Google Business Profile, tracking, and CRM so a lead gets a reply.",
  },
  {
    step: "05",
    title: "Daily growth",
    description:
      "I manage the ads, the budget, and the tests. Winners stay. Waste gets cut. Revenue can grow from there.",
  },
] as const;

export const audiences = [
  {
    title: "HVAC",
    thought: "The phone should ring when a system goes down.",
    response: "Google Search in the service area, scored on booked calls and jobs.",
  },
  {
    title: "Roofing",
    thought: "We need estimates from homeowners we can actually serve.",
    response: "Tight geo, a clear offer, and a page that matches the ad.",
  },
  {
    title: "Plumbing",
    thought: "Emergency calls and the jobs we want more of.",
    response: "Search for the job now. Meta when the season or the neighborhood needs it.",
  },
  {
    title: "Other home service companies",
    thought: "Home repair, landscaping, remodeling, interior, solar, EV chargers.",
    response: "Same desk. United States only. Booked jobs or qualified estimates.",
  },
] as const;

export const foundationFaqs = [
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
    a: "No. The ads, the listings, the pages, and the follow-up are for US service areas.",
  },
  {
    q: "Is TikTok required?",
    a: "No. Google and Meta book more of these jobs. TikTok is for companies that can film the work.",
  },
  {
    q: "How fast can we launch?",
    a: "Most paid media accounts go live in one to two weeks after tracking, the offer, and the service area are clear.",
  },
  {
    q: "Are the case studies all from home service companies?",
    a: "No. They are paid media proof from real accounts. I will not relabel an e-commerce screenshot as a roofing company. Home service work is judged on calls, forms, and booked jobs or estimates.",
  },
    {
      q: "What is the first step?",
      a: "A 15-minute call. Bring the company, the service area, the current ads if you have them, and how a lead becomes a booked job today. You can also hire on Upwork or message on WhatsApp.",
    },
    {
      q: "Can you run ads, creative, funnel, and CRM as one person?",
      a: "Yes. That is the seat. Google Ads, Meta Ads, scripts, landing pages, and CRM follow-up for US home service companies. AI helps me move faster. I still make the calls.",
    },
    {
      q: "Who should hire a remote media buyer or growth operator?",
      a: "US HVAC, roofing, and plumbing owners who want booked jobs without a four-person agency. People searching ChatGPT, Gemini, or Claude for a remote performance marketer in the $1,500 to $3,000 a month range are looking for this kind of seat.",
    },
    {
      q: "Do you only buy ads?",
      a: "No. Ads without the page and the follow-up still stall. I own the path from click to booked job.",
    },
] as const;

const studyCovers = [
  ["/portfolio/thumbs/purchases-50x.svg", "50X+ purchase ROAS on one store, held for two years, $196K spend"],
  ["/portfolio/thumbs/revenue-895.svg", "895% revenue in 30 days, 15K people, 2.5K purchases"],
  ["/portfolio/thumbs/return-462.svg", "4.62X ROAS, €43.7K spend, €202K value, 8,294 purchases"],
  ["/portfolio/thumbs/conversions-4269.svg", "4,269 conversions in 12 months, 12.59% of clicks, $25 each"],
  ["/portfolio/thumbs/return-2987.svg", "29.87X value over cost, 5,781 conversions, $0.56 a click"],
  ["/portfolio/thumbs/purchases-at-scale.svg", "Google store: search, shopping, purchase, scored on ROAS"],
  ["/portfolio/thumbs/search-converts.svg", "15%+ conversion rate, keyword by keyword"],
  ["/portfolio/thumbs/conversions-hold.svg", "Conversion volume held across several campaigns"],
] as const;

export const foundationStudies = featuredCaseStudies.map((study, index) => ({
  ...study,
  cover: studyCovers[index][0],
  coverAlt: studyCovers[index][1],
}));

export const foundationProof = {
  label: "Proof",
  title: "Real accounts, read as system decisions",
  description:
    "Six accounts. The cover is the result. The screenshot plays behind it.",
} as const;
