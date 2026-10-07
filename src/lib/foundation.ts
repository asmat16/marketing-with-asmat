import { featuredCaseStudies } from "@/lib/site";

export const foundationNav = [
  { href: "/systems", label: "How I work" },
  { href: "/who-i-help", label: "Who I Help" },
  { href: "/#proof", label: "Proof" },
  { href: "/blogs", label: "Blog" },
  { href: "/#about", label: "About" },
] as const;

export const foundationHero = {
  eyebrow: "Paid ads, creative, funnels, tracking, and automations. Built around revenue.",
  headlineBefore: "You bring the business. I build the system that brings the ",
  headlineAccent: "customers",
  headlineAfter: ".",
  support:
    "Most brands do not have an ad problem. They have gaps between the ad, the creative, the funnel, tracking, and follow-up. I connect that path from first click to a sale or a lead, so the marketing works as one revenue system.",
  primaryCta: "Book a 15-min call",
  secondaryCta: "See how I work",
  specializingLabel: "I work with",
  specializing:
    "Women's apparel · Skincare & beauty · Jewelry · DTC brands · B2B lead gen · B2C lead gen",
  imageAlt:
    "Asmat, performance marketer and media buyer for DTC brands and lead gen businesses",
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
    question:
      "I set up pixel, Conversions API, and GTM tracking so we can trust what the ads did.",
  },
  {
    title: "Creative strategy",
    question:
      "Do you need better ads, hooks, and UGC? I plan them, write them, and keep new ones coming.",
  },
  {
    title: "More sales, not more clicks",
    question:
      "The goal is not more traffic. The goal is more purchases and more qualified calls.",
  },
  {
    title: "CRM and email automations",
    question:
      "Carts get left. Leads go cold. I set up email and SMS follow-up so they come back.",
  },
  {
    title: "Offer and landing pages",
    question:
      "A good ad on a weak page still loses. I help fix the offer and the page after the click.",
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
    does: "I collect how the business works today. Current ads. Best sellers. Margins and AOV. How a click becomes a sale or a booked call. New brand, growing brand, or an agency with more than one account. Same start.",
    result: "We begin with facts. Then we build.",
  },
  {
    id: "who-you-serve",
    step: "02",
    name: "Who buys, and why",
    skill: 95,
    creativity: 84,
    adaptability: 92,
    focus: "Wrong people waste the budget.",
    does: "Audience avatar. Age, interests, what they worry about, and what makes them buy. Which products we push first. For lead gen, who can actually say yes and pay.",
    result: "Ads go to people who can buy from you.",
  },
  {
    id: "content",
    step: "03",
    name: "Creative and copy",
    skill: 92,
    creativity: 100,
    adaptability: 90,
    focus: "What we say in the ads.",
    does: "Hooks. Angles. UGC scripts. Statics. Ad copy. Product photos and videos when you have them. Meta Andromeda rewards testing a lot of creatives. Sitting on two ads is how you fall behind.",
    result: "We have ads worth spending on.",
  },
  {
    id: "ads",
    step: "04",
    name: "Meta Ads and Google Ads",
    skill: 100,
    creativity: 88,
    adaptability: 97,
    focus: "Most of my hours go here.",
    does: "I run Meta Ads and Google Ads. Search, Shopping, and Performance Max. TikTok when the product fits video. LinkedIn for B2B lead gen. I manage and optimize the accounts myself. Day one test. Day two test. Day three test. I do not leave spend sitting on ads that do not sell.",
    result: "The ads are worked every day, not set and forgotten.",
  },
  {
    id: "funnel",
    step: "05",
    name: "Store, landing page, and funnel",
    skill: 88,
    creativity: 86,
    adaptability: 90,
    focus: "The click has to become a sale.",
    does: "What they see after the ad. Product page, landing page, form, checkout. A clear offer and an easy next step. If the funnel leaks, we fix that before we add budget.",
    result: "More sales from the same clicks.",
  },
  {
    id: "tracking",
    step: "06",
    name: "Data tracking",
    skill: 90,
    creativity: 80,
    adaptability: 88,
    focus: "If the numbers are wrong, the ads are guessed.",
    does: "Pixel. Conversions API. Google Tag Manager. GA4. We count purchases, revenue, and qualified leads. Not clicks that never turn into a customer.",
    result: "We know which ads to keep.",
  },
  {
    id: "follow-up",
    step: "07",
    name: "CRM, email, and scaling",
    skill: 86,
    creativity: 81,
    adaptability: 94,
    focus:
      "This is how a click becomes a customer, and then a repeat customer.",
    does: "Email and SMS follow-up for abandoned carts, new buyers, and new leads, including GoHighLevel when that is the tool. Budget stays tight until the winners show. Then we scale them. You do not need four or five people for this. I can cover this desk.",
    result: "Nobody slips away. Winners get more budget.",
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
    detail: "Who buys from you, why they buy, and what makes them stop scrolling.",
  },
  {
    step: "02",
    name: "Creative and copy",
    detail:
      "Hooks, angles, UGC scripts, statics, and ad copy. Planning and making the ads in one place.",
  },
  {
    step: "03",
    name: "Meta Ads and Google Ads",
    detail:
      "Paid social, Search, Shopping, and Performance Max. I run them and I optimize them.",
  },
  {
    step: "04",
    name: "More sales and qualified leads",
    detail:
      "Store, product page, and landing page work so a click becomes a purchase or a booked call.",
  },
  {
    step: "05",
    name: "Data tracking",
    detail: "Pixel, Conversions API, GTM, and GA4 you can trust.",
  },
  {
    step: "06",
    name: "Offer and funnel",
    detail:
      "Bundles, first-order offers, lead magnets, and a clear next step after the click.",
  },
  {
    step: "07",
    name: "CRM, budget, and follow-up",
    detail:
      "Email and SMS after the click. Daily tests so the budget is not wasted.",
  },
] as const;

export const problems = [
  {
    id: "leads",
    label: "Not enough sales or qualified leads",
    answer:
      "Traffic comes in. Sales do not. Or the leads cannot afford you. I tighten who sees the ads so more of them can become a customer.",
    more: "We look at the offer, the audience, and who is actually buying. Cheap clicks that never buy are not the goal.",
  },
  {
    id: "ads",
    label: "Ads are not managed every day",
    answer:
      "Someone set the campaigns up and walked away. Spend keeps going. Results do not. I live in Meta Ads and Google Ads. I test on day one, day two, and day three.",
    more: "I do not wait a month to see if it worked. If an ad is burning money, it gets cut.",
  },
  {
    id: "creatives",
    label: "Not enough creatives",
    answer:
      "Two ads cannot carry an account. Meta wants many hooks, angles, UGC videos, and statics. If you stop testing, you fall behind.",
    more: "I plan the creative, write the copy and scripts, and keep new ads going in. Real customers and real products beat polished stock.",
  },
  {
    id: "funnel",
    label: "The store or page leaks after the click",
    answer:
      "People click, then leave. The ad did its job. The product page, the landing page, or the checkout lost them.",
    more: "We make the page match the ad. Clear offer. Reviews up front. Fewer steps to buy or book.",
  },
  {
    id: "tracking",
    label: "Tracking is not reliable",
    answer:
      "Meta says one number. Shopify says another. Google says a third. Then nobody knows what to scale.",
    more: "I set up pixel, Conversions API, GTM, and GA4 so a real purchase or a real lead is what we count.",
  },
  {
    id: "crm",
    label: "Nobody follows up",
    answer:
      "Someone adds to cart and leaves. A lead fills the form. Nobody emails. Nobody texts. They buy from someone else.",
    more: "I help you set up email and SMS flows, including GoHighLevel when that is the tool. Abandoned carts, new buyers, and new leads all get a reply.",
  },
  {
    id: "offer",
    label: "The offer gives no reason to buy now",
    answer:
      "Same price as everyone. No bundle. No first-order reason. Good ads cannot fix an offer people can skip.",
    more: "We look at bundles, first-order offers, and lead magnets so people have a reason to act today.",
  },
  {
    id: "complete",
    label: "The whole thing is floating",
    answer:
      "Ads, creative, store, tracking, and follow-up are separate. Nobody owns the path from click to sale. You should not need four or five people for this.",
    more: "I can cover this desk. We fix the stuck part first, then connect the rest.",
  },
] as const;

export const engagement = [
  {
    step: "01",
    title: "Onboarding",
    description:
      "I learn the brand, the products, the current ads, and how a click becomes a sale today.",
  },
  {
    step: "02",
    title: "Who buys",
    description:
      "Audience avatar. What they care about. Which products and offers we push first.",
  },
  {
    step: "03",
    title: "Creative and ads",
    description:
      "Hooks, copy, UGC, and statics. Then Meta Ads and Google Ads built on that.",
  },
  {
    step: "04",
    title: "Funnel and follow-up",
    description:
      "Store, landing page, tracking, and email and SMS so nobody slips away.",
  },
  {
    step: "05",
    title: "Daily growth",
    description:
      "I manage the ads, the budget, and the tests. Winners stay. Waste gets cut. Then we scale.",
  },
] as const;

export const audiences = [
  {
    title: "Women's apparel and fashion",
    thought: "New drops need to sell, not just get likes.",
    response:
      "Meta Ads with lots of creative testing. UGC, try-on videos, and offers that move people to buy.",
  },
  {
    title: "Skincare and beauty",
    thought: "People need to trust the product before they buy it.",
    response:
      "Before and after angles, reviews, and creator content. Then email and SMS so the first order turns into a second.",
  },
  {
    title: "Other DTC brands",
    thought: "Jewelry, wellness, and products people buy online.",
    response:
      "Meta, Google Shopping, and Performance Max. Scored on purchases and ROAS.",
  },
  {
    title: "Lead gen, B2B and B2C",
    thought: "We need calls with people who can actually buy.",
    response:
      "Google Search, Meta, and LinkedIn when it fits. Qualified calls and booked meetings, not a pile of cheap form fills.",
  },
] as const;

export const foundationFaqs = [
  {
    q: "Which businesses do you work with?",
    a: "DTC e-commerce brands, mostly on Shopify. Women's apparel, skincare, beauty, jewelry, and similar products. I also run lead gen for B2B and B2C companies that need qualified calls and booked meetings.",
  },
  {
    q: "Do you only run ads?",
    a: "No. Ads without good creative, a page that converts, and follow-up still stall. I own the path from first click to sale.",
  },
  {
    q: "Which platforms do you run?",
    a: "Meta Ads and Google Ads most of all. That includes Search, Shopping, and Performance Max. TikTok when the product is a good fit for video. LinkedIn Ads for B2B lead gen.",
  },
  {
    q: "Can you help with creatives?",
    a: "Yes. I plan the hooks and angles, write the ad copy and UGC scripts, and brief the statics and videos. New creatives go in every week so the account does not go stale.",
  },
  {
    q: "Do you work with lead gen and service businesses too?",
    a: "Yes. Lead gen is a big part of my work. B2B and B2C. The goal there is qualified calls and booked meetings, not a pile of cheap form fills.",
  },
  {
    q: "Do you work with agencies?",
    a: "Yes. I spent four years inside an agency running 30+ client accounts at a time. I can plug into your team and run the media buying and creative strategy for your e-commerce clients.",
  },
  {
    q: "How fast can we launch?",
    a: "Most accounts go live in one to two weeks, once tracking, the offer, and the creatives are ready.",
  },
  {
    q: "Are the case studies real?",
    a: "Yes. They are screenshots from real ad accounts. Client names are kept private.",
  },
  {
    q: "What is the first step?",
    a: "A 15-minute call. Bring your ad account, your store or landing page link, and the one thing you want to fix first. You can also hire on Upwork or message on WhatsApp.",
  },
  {
    q: "Can one person really do ads, creative, funnel, and CRM?",
    a: "Yes. That is the job. I use AI where it saves time. I still make the calls on the account.",
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

export const footerBlurb =
  "Performance marketing for DTC brands and lead gen businesses.";
