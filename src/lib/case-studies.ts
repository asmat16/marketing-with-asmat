export type CaseCategory = "ecommerce" | "leadgen";

export type CaseImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type CaseStudy = {
  slug: string;
  category: CaseCategory;
  /** Short niche line shown above the headline. */
  niche: string;
  client: string;
  clientNote?: string;
  website?: { label: string; href: string };
  instagram?: { label: string; href: string };
  platform: string;
  period: string;
  headline: string;
  summary: string;
  /** Before → after pair shown on the card. */
  shift?: { label: string; from: string; to: string };
  metrics: { value: string; label: string }[];
  image: CaseImage;
  /** Plain-English guide to the one screenshot in the case study. */
  screenshotNote: string;
  challenge: string;
  plan: string[];
  execution: string[];
  outcome: string[];
  tags: string[];
};

export const caseCategories: { id: CaseCategory | "all"; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "ecommerce", label: "E-commerce & DTC" },
  { id: "leadgen", label: "Lead generation" },
];

export const featuredCases: CaseStudy[] = [
  {
    slug: "kimith-athleisure",
    category: "ecommerce",
    niche: "Women's luxury athleisure · DTC e-commerce",
    client: "KIMITH",
    website: { label: "kimith.com", href: "https://kimith.com" },
    instagram: {
      label: "@kimithbrand",
      href: "https://www.instagram.com/kimithbrand/",
    },
    platform: "Meta Ads",
    period: "Feb 6 – Mar 12, 2026",
    headline: "Cost per purchase cut from $106 to $44 while revenue hit $360K",
    summary:
      "A luxury women's athleisure brand was paying over $100 for every sale. I rebuilt the account around three winning campaigns and new-drop creative, and 1,428 orders followed in five weeks.",
    shift: { label: "Cost per purchase", from: "$106.60", to: "$44.29" },
    metrics: [
      { value: "$360.3K", label: "Purchase revenue" },
      { value: "5.70X", label: "Blended ROAS" },
      { value: "1,428", label: "Website purchases" },
      { value: "$44.29", label: "Cost per purchase" },
    ],
    image: {
      src: "/portfolio/case-studies/kimith-meta.jpg",
      width: 1024,
      height: 473,
      alt: "KIMITH Meta Ads Manager, Feb 6 to Mar 12 2026: 1,428 website purchases, $63,225 spent, $360,302 purchase value, 5.70 ROAS",
    },
    screenshotNote:
      "Meta Ads Manager, campaign level, Feb 6 to Mar 12, 2026. The three ticked rows are the campaigns I kept scaling (7.34X, 6.18X and 6.02X ROAS). The four rows marked Off are the campaigns I switched off once their cost per purchase drifted between $69 and $98. The totals row at the bottom is the whole account.",
    challenge:
      "KIMITH sells premium athleisure for women: sets, bras, leggings and wrap tops, with a heart-health and self-empowerment story behind the brand. Before I took over, the account paid $106.60 for each purchase, which left very little margin on every order. The brand needed sales to get cheaper before it could spend more.",
    plan: [
      "Treat the creative as the targeting: lead with the brand's own model photography, new colorways like Limoncello, and drop announcements instead of generic product shots.",
      "Run a short test window, then put most of the budget behind the few campaigns that could hold cost per purchase under $50.",
      "Match Meta purchases to Shopify orders so scaling decisions were made on real sales.",
    ],
    execution: [
      "Ran seven campaigns side by side and judged each on cost per purchase and purchase value, not clicks.",
      "Scaled the top three: 612 purchases at $33.35, 364 at $44.73 and 298 at $42.04.",
      "Switched off four campaigns that sat at 2.36X to 3.19X ROAS, so the budget stopped funding expensive sales.",
      "Kept fresh launch creative flowing (new arrivals, colorway stories, flat-lays of the wrap-top range) so frequency never wore out the winners.",
    ],
    outcome: [
      "Cost per purchase fell from $106.60 to $44.29, a 58% cut. The best campaign ran at $33.35.",
      "$63,225 in ad spend returned $360,302 in purchase value: 5.70X blended ROAS in five weeks.",
      "1,428 website purchases. The top campaign alone brought in $149,793 at 7.34X.",
    ],
    tags: ["Meta Ads", "Creative strategy", "Women's apparel", "Shopify"],
  },
  {
    slug: "performance-ac-home-services",
    category: "leadgen",
    niche: "Home services lead gen · HVAC, plumbing & electrical",
    client: "Performance Air Conditioning, Electrical & Plumbing",
    website: { label: "performanceac.com", href: "https://www.performanceac.com" },
    instagram: {
      label: "@performance.air",
      href: "https://www.instagram.com/performance.air/",
    },
    platform: "Meta Ads",
    period: "Feb 20 – Apr 7, 2026",
    headline: "From cheap form fills to 447 booked appointments and $654K in closed jobs",
    summary:
      "A West Central Florida HVAC, plumbing and electrical company had plenty of leads but not enough booked jobs. I moved the account from lead volume to booked appointments, and 119 jobs closed at about $5,500 each.",
    shift: {
      label: "Cost per booked appointment",
      from: "$390+",
      to: "$139",
    },
    metrics: [
      { value: "447", label: "Booked appointments" },
      { value: "119", label: "Jobs closed" },
      { value: "$654K", label: "Closed job value" },
      { value: "6.2X", label: "Return on ad spend" },
    ],
    image: {
      src: "/portfolio/case-studies/performance-ac-leadgen.jpg",
      width: 1024,
      height: 512,
      alt: "Performance AC Meta Ads Manager, Feb 20 to Apr 7 2026: 3,955 website leads, $105,610 spent, 447 appointments scheduled",
    },
    screenshotNote:
      "Meta Ads Manager, campaign level, Feb 20 to Apr 7, 2026. The Results column counts website leads, but the column that matters is Appointment scheduled on the right, fed by tracking from the booking step. The three Active campaigns booked appointments at about $139 each. The Off campaigns were costing $370 to $445 per appointment.",
    challenge:
      "Performance runs 24/7 HVAC, plumbing and electrical service across West Central Florida. Leads were coming in, but too few turned into booked appointments, so the sales team spent its time chasing people who were never going to buy. Cost per lead looked fine. Cost per booked job did not.",
    plan: [
      "Make the booked appointment the score, not the form fill. Send the 'appointment scheduled' event back to Meta so the algorithm learns who actually books.",
      "Split campaigns by intent: broad lead gen, local repair, high-intent installation, replacement retargeting and seasonal offers.",
      "Use creative that shows real technicians, branded vans and all three trades under one trusted team.",
    ],
    execution: [
      "Ran eight campaigns and tracked each on cost per appointment, not cost per lead.",
      "Kept the three that booked at about $139 per appointment: US broad (173 bookings), local repair (107) and high-intent installation (76).",
      "Switched off retargeting, video views, emergency, insulation and spring-offer campaigns that cost $370 to $445 per appointment.",
      "Worked with the team on fast follow-up so qualified leads were called while they were still interested.",
    ],
    outcome: [
      "3,955 leads at $26.73 each became 447 booked appointments. That is 11.3% of all leads and about 17% of qualified leads.",
      "119 jobs closed at an average of about $5,500, worth $654,000.",
      "$105,610 in ad spend returned 6.2X. Each closed job cost about $887 in ads.",
    ],
    tags: ["Meta Ads", "Lead gen", "Home services", "Booked calls"],
  },
  {
    slug: "wojo-media-investor-education",
    category: "leadgen",
    niche: "High-ticket education lead gen · Agency client",
    client: "Wojo Media client",
    clientNote:
      "Run through Wojo Media, the Inc. 5000 agency where I manage 80+ US client accounts. The client is an Airbnb and short-term rental investing education program. Its name stays private.",
    website: { label: "thewojomedia.com", href: "https://www.thewojomedia.com" },
    instagram: {
      label: "@thejasonwojo",
      href: "https://www.instagram.com/thejasonwojo/",
    },
    platform: "Meta Ads + Hyros",
    period: "Aug 4 – Sep 2, 2026",
    headline: "1,159 leads, 419 sales calls and $150K in sales in 30 days",
    summary:
      "An Airbnb rental investing program sold through sales calls. I built the funnel around audiences that actually close, tracked every lead to revenue in Hyros, and the program made $113.8K in profit after ad spend in one month.",
    shift: { label: "Profit after ad spend", from: "$36.4K spent", to: "$113.8K profit" },
    metrics: [
      { value: "$150.1K", label: "Tracked revenue" },
      { value: "419", label: "Sales calls booked" },
      { value: "28", label: "Program sales" },
      { value: "4.1X", label: "Revenue ROAS" },
    ],
    image: {
      src: "/portfolio/case-studies/wojo-airbnb-education.png",
      width: 1024,
      height: 487,
      alt: "Meta Ads Manager ad sets with Hyros overlay, Aug 4 to Sep 2 2026: 1,159 leads, 419 calls, 28 sales, $150,136 revenue, $36,371 ad spend",
    },
    screenshotNote:
      "Meta Ads Manager at ad set level with the Hyros attribution panel on top (the dark columns). Hyros ties each lead to the calls and sales that followed, so the Sales, Calls, Revenue and Profit columns are real money, not platform estimates. The totals row shows 1,159 leads, 419 calls, 28 sales and $150,136 in revenue against $36,371 in spend.",
    challenge:
      "High-ticket education does not sell on the first click. The client needed people who would book a call with the sales team and could afford the program. Cheap leads mean nothing here unless they turn into calls and sales, so every audience had to be judged on revenue, not cost per lead.",
    plan: [
      "Connect Meta to Hyros so every lead, call and sale is attributed back to the ad set that produced it.",
      "Build audience lanes for the buyer types who close: entrepreneurs, investors, broad Advantage+, and Facebook and Instagram retargeting.",
      "Judge every ad set on profit, not cost per lead, and cut anything that loses money even when its leads look cheap.",
    ],
    execution: [
      "Ran 15 ad sets across prospecting, lookalikes and retargeting, reaching 278K people.",
      "Scaled the profitable lanes. Entrepreneurs: 7 sales, $37.8K profit. Investors: 7 sales, $34.2K profit. Advantage+: 5 sales on $30K revenue. Retargeting: 4 sales, $19.4K profit.",
      "Switched off lookalike and creative tests that showed negative profit in Hyros, even when Meta made them look fine.",
    ],
    outcome: [
      "1,159 tracked leads. 36% booked a sales call (419 calls).",
      "28 program sales worth $150,136 in revenue, about $5,360 per sale.",
      "$36,371 in ad spend returned $113,767 in profit: 4.1X on revenue.",
    ],
    tags: ["Meta Ads", "Hyros", "High-ticket", "Agency"],
  },
  {
    slug: "the-lovery-jewelry",
    category: "ecommerce",
    niche: "Fine jewelry · High-ticket DTC e-commerce",
    client: "The Lovery (formerly The10 Jewelry)",
    clientNote:
      "The brand sold as The10 Jewelry when I ran this account. It now trades as The Lovery: 14K gold fine jewelry with genuine diamonds and gemstones.",
    website: { label: "thelovery.com", href: "https://thelovery.com" },
    instagram: {
      label: "@thelovery",
      href: "https://www.instagram.com/thelovery/",
    },
    platform: "Meta Ads",
    period: "Dec 2021 – Mar 2022",
    headline: "$115K managed for $1,150 jewelry orders, and cost per purchase cut 58%",
    summary:
      "The Lovery sells 14K gold fine jewelry with an average order above $1,100. Over 16 weeks on a $30K monthly budget I cut cost per purchase from $385 to $162 and brought in about $652K in tracked sales.",
    shift: { label: "Cost per purchase", from: "$385", to: "$162" },
    metrics: [
      { value: "$652K", label: "Tracked revenue" },
      { value: "5.67X", label: "Blended ROAS" },
      { value: "565", label: "Purchases" },
      { value: "$1,155", label: "Average order value" },
    ],
    image: {
      src: "/portfolio/case-studies/the-lovery-jewelry-meta.png",
      width: 1024,
      height: 391,
      alt: "The Lovery (then The10 Jewelry) Meta Ads Manager: CBO updated ad copy at 10.68 ROAS, dynamic retargeting at 5.76 ROAS",
    },
    screenshotNote:
      "Meta Ads Manager, campaign level, from the brand's account while it was still named The10 Jewelry. Read across the blue-marked columns: website purchases, purchase conversion value and purchase ROAS. The rebuilt CBO campaign with new ad copy hit 10.68X, and dynamic retargeting returned 5.76X on $9,063 in value. Weekly spend and purchase totals come from the client's weekly report.",
    challenge:
      "Selling $1,000+ jewelry on Meta is hard. Buyers take longer to decide, and this ran right after iOS 14 cut how much Meta could see. The brand had a $30K monthly budget and a target of 600 purchases in four months, starting in the expensive holiday season, with week-one cost per purchase at $385.",
    plan: [
      "Rebuild retargeting for the iOS 14 era with dynamic product ads, so window shoppers saw the exact pieces they had looked at.",
      "Rewrite the ad copy around gifting, craftsmanship and the occasion, and move prospecting into a CBO campaign so Meta could find the buyers.",
      "Report every week: spend, purchases, AOV and cost per purchase against the 600-order target.",
    ],
    execution: [
      "Spent about $8.7K a week, steadily, so the account had enough data to learn from.",
      "Relaunched campaigns for men's jewelry and iOS-updated dynamic retargeting, then moved budget to whichever was winning that week.",
      "Cut ads and audiences that brought in clicks but not purchases, even during the holiday rush.",
    ],
    outcome: [
      "Weekly purchases grew from 17 to 54, while weekly spend stayed about the same.",
      "Cost per purchase fell from $385 in week one to $162 by week 16. The four-week average went from $323 to $174.",
      "565 purchases, 94% of the 600 target, at a $1,155 average order: about $652K in revenue on $115,175 in spend.",
    ],
    tags: ["Meta Ads", "Jewelry", "High AOV", "Dynamic ads"],
  },
  {
    slug: "keto-food-google-search",
    category: "ecommerce",
    niche: "Keto meal delivery DTC · Google Search",
    client: "Ketolibriyum (now Clean Cravings)",
    clientNote:
      "Ontario keto and low-carb meal delivery brand, now selling as Clean Cravings. Currency shown as Canadian dollars, as it appears in the account.",
    website: { label: "ketolibriyum.ca", href: "https://ketolibriyum.ca" },
    instagram: {
      label: "@cleancravingskitchen",
      href: "https://www.instagram.com/cleancravingskitchen/",
    },
    platform: "Google Ads",
    period: "All-time keyword view",
    headline: "Google Search turned CA$21K into CA$633K in sales at 29.87X",
    summary:
      "Ketolibriyum, a keto meal delivery brand in Ontario, needed Google to bring orders, not browsers. I locked down brand search, tested competitor and category terms, and cut everything that did not pay back.",
    shift: { label: "Cost per conversion", from: "Generic keto CPCs", to: "CA$3.67" },
    metrics: [
      { value: "29.87X", label: "Conv. value / cost" },
      { value: "CA$633K", label: "Conversion value" },
      { value: "5,781", label: "Conversions" },
      { value: "15.27%", label: "Conversion rate" },
    ],
    image: {
      src: "/portfolio/case-studies/keto-google-search.png",
      width: 1024,
      height: 498,
      alt: "Google Ads search keywords: 37,866 clicks, 5,781 conversions, CA$633,430 conversion value, 29.87 value per cost",
    },
    screenshotNote:
      "Google Ads, search keyword view. The total row at the top is the whole account: 37,866 clicks, 15.27% conversion rate, CA$0.56 average CPC and 29.87 conversion value per dollar spent. Under it, each keyword shows which terms paid back and which ones I kept small.",
    challenge:
      "Generic keto keywords are expensive and full of people only reading recipes. The brand needed Search to bring orders at a cost that left room for food and delivery margins.",
    plan: [
      "Protect the brand name with exact match so ready-to-buy searchers land on the store, not a competitor.",
      "Test category and competitor terms (keto food box delivery, keto nut, HelloFresh keto, UnBun) and keep only what paid back.",
      "Build negative keyword lists and tune bids keyword by keyword.",
    ],
    execution: [
      "Brand exact match carried the account: 5,630 conversions at 47.84X value per cost.",
      "Kept category terms small, on tight bids, as a way to reach new customers.",
      "Held average CPC at CA$0.56 across 37,866 clicks.",
    ],
    outcome: [
      "CA$21,205 in spend returned CA$633,431 in conversion value: 29.87X.",
      "5,781 conversions at CA$3.67 each, with a 15.27% conversion rate.",
      "Ad cost was only 3.3% of revenue.",
    ],
    tags: ["Google Ads", "Search", "Food DTC", "Keyword strategy"],
  },
  {
    slug: "training-school-google-search",
    category: "leadgen",
    niche: "Education & training lead gen · Google Search",
    client: "Vocational training school (South Africa)",
    clientNote:
      "Course enquiries for a training provider. Currency shown as South African rand (ZAR), as it appears in the account.",
    platform: "Google Ads",
    period: "Mar 2018 – Mar 2019",
    headline: "4,269 course enquiries in 12 months at a 12.59% conversion rate",
    summary:
      "A training school needed steady course enquiries all year. Three Search campaigns, one per course line, brought in 4,269 conversions at about ZAR 25 each.",
    metrics: [
      { value: "4,269", label: "Conversions" },
      { value: "12.59%", label: "Conversion rate" },
      { value: "ZAR 25", label: "Cost per conversion" },
      { value: "6.24%", label: "Click-through rate" },
    ],
    image: {
      src: "/portfolio/case-studies/google-training-conversions.png",
      width: 1024,
      height: 543,
      alt: "Google Ads campaigns, Mar 2018 to Mar 2019: 35,238 clicks, 4,269 conversions, 12.59% conversion rate",
    },
    screenshotNote:
      "Google Ads campaign view, Mar 1, 2018 to Mar 31, 2019. Each row is one course line with its own Search campaign. Conversions and conversion rate (red arrows) are on the right. The total rows at the bottom show 35,238 clicks and 4,269 conversions for the whole account.",
    challenge:
      "The school sold several courses, from general training to lifting and earth-moving equipment, and needed enquiries every month of the year. Clicks are cheap in this market, but most searchers only browse, so the account had to pay for enquiries, not traffic.",
    plan: [
      "Give each course line its own Search campaign so keywords, ads and budget matched what people searched for.",
      "Track every enquiry as a conversion so each campaign was judged on leads, not clicks.",
    ],
    execution: [
      "Ran three Search campaigns side by side over 12 months.",
      "Held average CPC at ZAR 3.19 across 35,238 clicks, with a 6.24% click-through rate.",
      "Kept the strongest course lines funded all year so enquiries never dried up.",
    ],
    outcome: [
      "4,269 conversions in 12 months at ZAR 25.14 each.",
      "12.59% of clicks became an enquiry. The equipment-training campaign converted at 16.33%.",
      "The main training campaign alone brought 2,444 conversions at ZAR 18.45 each.",
    ],
    tags: ["Google Ads", "Search", "Lead gen", "Education"],
  },
];

export const moreCases: CaseStudy[] = [
  {
    slug: "skincare-7x",
    category: "ecommerce",
    niche: "Skincare · DTC",
    client: "Skincare brand (private)",
    platform: "Meta Ads",
    period: "Mar 1 – May 31, 2026",
    headline: "$11.5K in ads became $80.5K in skincare sales",
    summary:
      "Eight ad types tested side by side. Video won at 6.6X, statics lost at 1.8X, and 90% of the budget moved to four videos.",
    metrics: [
      { value: "7.01X", label: "ROAS" },
      { value: "$80.5K", label: "Revenue" },
      { value: "434", label: "Purchases" },
      { value: "$26.48", label: "Cost per purchase" },
    ],
    image: {
      src: "/portfolio/case-studies/skincare-701.jpg",
      width: 1024,
      height: 392,
      alt: "Skincare brand Meta ads, Mar to May 2026: $11,490 spent, 434 purchases, $80,539 value, 7.01 ROAS",
    },
    screenshotNote:
      "Meta Ads Manager at ad level, Mar 1 to May 31, 2026. Each row is one creative. The UGC testimonial video at the top made $31,829 at 7.37X. The paused rows lower down are static and promo ads I cut.",
    challenge:
      "Good products, but the ads were a mix of videos, promo banners and statics. Nobody knew which ones sold, so budget was spread thin and cost per purchase jumped around.",
    plan: [
      "Test eight ads side by side: UGC testimonial, product demo, before and after, best seller video, 30% off promo, brand static, GIF and review image.",
      "Track every purchase with Meta Pixel and Conversions API so the ad numbers matched Shopify.",
    ],
    execution: [
      "Paused weak ads early and moved budget to the winners every few days.",
      "Video ads returned 6.6X. Statics returned only 1.8X, so I paused them.",
    ],
    outcome: [
      "About 90% of the budget ended up on four winning videos.",
      "The UGC testimonial alone made $31,829 at 7.37X. Ad cost was 14.3% of revenue.",
    ],
    tags: ["Meta Ads", "UGC", "Skincare"],
  },
  {
    slug: "beauty-catalog-20x",
    category: "ecommerce",
    niche: "Beauty & lifestyle · Catalog ads",
    client: "Beauty brand (private)",
    platform: "Meta Ads",
    period: "Jun 1 – Jul 31, 2026",
    headline: "Catalog ads took a $3.5K budget to 20.15X ROAS",
    summary:
      "A small budget and a large catalog. Three Advantage+ catalog campaigns brought in all 406 purchases.",
    metrics: [
      { value: "20.15X", label: "ROAS" },
      { value: "$70.6K", label: "Revenue" },
      { value: "406", label: "Purchases" },
      { value: "$8.63", label: "Cost per purchase" },
    ],
    image: {
      src: "/portfolio/case-studies/beauty-catalog-2015.jpg",
      width: 1024,
      height: 430,
      alt: "Beauty brand Meta campaigns, Jun to Jul 2026: $3,502 spent, $70,582 purchase value, 20.15 ROAS",
    },
    screenshotNote:
      "Meta Ads Manager, campaign level, Jun to Jul 2026. The three Active catalog sales campaigns at the top carry every purchase. The Off rows were engagement, message, lead and video campaigns that warmed up audiences and were then switched off.",
    challenge:
      "Money was going into engagement, message, lead and video view campaigns that build interest but do not sell. The brand needed a lean setup that sold the whole catalog.",
    plan: [
      "Three catalog sales campaigns: Advantage+ Shopping for all products, best sellers, and the new collection.",
      "Clean the product feed (titles, images, prices) so dynamic ads show the right product.",
    ],
    execution: [
      "Kept small top-of-funnel campaigns only to warm up audiences, then switched them off.",
      "Moved the budget into the catalog campaigns.",
    ],
    outcome: [
      "The catalog campaigns spent $2,905 and brought in all 406 purchases: 24.3X on sales spend.",
      "Advantage+ 'All Products' hit 33.09X: $1,248 in, $41,310 out.",
    ],
    tags: ["Advantage+", "Catalog", "Beauty"],
  },
  {
    slug: "fashion-summer-scale",
    category: "ecommerce",
    niche: "Fashion & apparel · Seasonal scaling",
    client: "Apparel brand (private)",
    platform: "Meta Ads",
    period: "Jun 1 – Jul 31, 2026",
    headline: "$65.6K spend, $361K revenue in one summer",
    summary:
      "The store's biggest season. Spend went up fast without ROAS falling apart, and most of the budget went to finding new buyers.",
    metrics: [
      { value: "5.51X", label: "ROAS" },
      { value: "$361K", label: "Revenue" },
      { value: "3,155", label: "Purchases" },
      { value: "$20.80", label: "Cost per purchase" },
    ],
    image: {
      src: "/portfolio/case-studies/fashion-summer-campaigns.jpg",
      width: 1024,
      height: 390,
      alt: "Apparel brand Meta campaigns, Jun to Jul 2026: purchases, conversion value and 5 to 6 ROAS per campaign",
    },
    screenshotNote:
      "Meta Ads Manager, campaign level, Jun to Jul 2026. Each row is one part of the funnel: prospecting, broad catalog, Advantage+ summer sale, best sellers, new-customer feed, bundle offer and retargeting. Purchase value and ROAS are the two columns on the right.",
    challenge:
      "Spend a lot more in two months without ROAS falling apart, and win new customers instead of only selling again to past buyers.",
    plan: [
      "A full funnel of eight campaigns, with a bundle offer to lift order value.",
      "Keep retargeting to about 9% of the budget so most money goes to new buyers.",
    ],
    execution: [
      "Scaled winners step by step through the season.",
      "Advantage+ Summer Sale became the biggest campaign: $15,600 in, $93,600 out.",
    ],
    outcome: [
      "3,155 website purchases and $361,350 in revenue at 5.51X.",
      "Prospecting took 91% of the budget and still held 5.46X.",
    ],
    tags: ["Advantage+", "Prospecting", "Apparel"],
  },
  {
    slug: "premium-apparel-440-aov",
    category: "ecommerce",
    niche: "Premium apparel · High AOV",
    client: "Apparel brand (private)",
    platform: "Meta Ads",
    period: "Jun 1 – Jul 31, 2026",
    headline: "Finding buyers for a $440 apparel order at 5.53X",
    summary:
      "Higher-priced apparel means fewer buyers. Testing by audience showed which ones would actually pay.",
    metrics: [
      { value: "5.53X", label: "ROAS" },
      { value: "$116.8K", label: "Revenue" },
      { value: "$440.80", label: "Average order" },
      { value: "265", label: "Purchases" },
    ],
    image: {
      src: "/portfolio/case-studies/premium-apparel-adsets.jpg",
      width: 1024,
      height: 393,
      alt: "Premium apparel Meta ad sets: $21,093 spent, $116,813 purchase value, 5.53 ROAS",
    },
    screenshotNote:
      "Meta Ads Manager at ad set level, inside one campaign. Each row is one audience test. Broad 25-45 at the top is the winner. Rows marked Off are audiences I switched off because they could not keep up.",
    challenge:
      "At about $440 per order, money spent on the wrong audience gets expensive very fast.",
    plan: [
      "Split testing by audience: broad 25-45, apparel interests, 18-34 UGC, 35-55 high AOV, past purchasers, site visitors and the catalog.",
    ],
    execution: [
      "Gave the winners bigger daily budgets ($120 a day on broad) and switched off ad sets that could not keep up.",
    ],
    outcome: [
      "Broad 25-45 became the main engine: $7,842 in, $43,135 out (5.50X).",
      "Past purchasers returned 7.40X. Weak sets like 18-34 UGC (3.80X) were turned off.",
    ],
    tags: ["Audience testing", "High AOV", "Apparel"],
  },
  {
    slug: "two-year-store-53x",
    category: "ecommerce",
    niche: "E-commerce · Long-term growth",
    client: "E-commerce store (private)",
    platform: "Meta Ads",
    period: "Jan 2020 – Jan 2023",
    headline: "One store for 2+ years: $196K managed, best campaigns at 53.71X",
    summary:
      "Good results for years are harder than one good month. 119 campaigns, a strict testing system, and a client who stayed.",
    metrics: [
      { value: "53.71X", label: "Top ROAS" },
      { value: "$196K", label: "Ad spend" },
      { value: "114K", label: "Link clicks" },
      { value: "119", label: "Campaigns" },
    ],
    image: {
      src: "/portfolio/case-studies/longterm-store-50x.png",
      width: 1024,
      height: 520,
      alt: "E-commerce Meta campaigns from Jan 2020 to Jan 2023: $196,066 total spend, purchase ROAS up to 53.71",
    },
    screenshotNote:
      "Meta Ads Manager, campaign level, Jan 2020 to Jan 2023, sorted by purchase ROAS. The top rows run from 53.71X down to about 20X. The totals row shows $196,066 spent across 119 campaigns.",
    challenge:
      "Creatives get tired, costs go up, and an account needs steady care to stay profitable for years.",
    plan: [
      "A clear naming and testing system across every campaign.",
      "Track add to cart, checkout and purchase, not just clicks.",
    ],
    execution: [
      "Refreshed creatives often and moved budget into the campaigns with the best purchase ROAS.",
    ],
    outcome: [
      "Top campaigns reached 53.71X, 52.22X and 34.36X purchase ROAS.",
      "The client stayed for more than two years.",
    ],
    tags: ["Retention", "Creative refresh", "Scaling"],
  },
  {
    slug: "eu-dtc-8294-orders",
    category: "ecommerce",
    niche: "DTC e-commerce · EU, volume play",
    client: "DTC store (private)",
    platform: "Meta Ads",
    period: "12 months · 69 campaigns",
    headline: "8,294 orders in 12 months at €5.27 each",
    summary:
      "Low-priced products leave little room for ad cost. Cheap, high-quality traffic and a watched funnel kept sales steady all year.",
    metrics: [
      { value: "4.62X", label: "ROAS" },
      { value: "€202K", label: "Revenue" },
      { value: "8,294", label: "Purchases" },
      { value: "€0.15", label: "Cost per click" },
    ],
    image: {
      src: "/portfolio/case-studies/eu-dtc-462.png",
      width: 1024,
      height: 615,
      alt: "EU DTC store Meta campaigns: €43,743 spent, 8,294 purchases, €202,306 value, 4.62 average ROAS",
    },
    screenshotNote:
      "Meta Ads Manager, campaign level, sorted by spend. The circled 4.62 at the bottom is the average purchase ROAS across 69 campaigns. Add-to-cart and purchase columns show the funnel from click to order.",
    challenge:
      "About €24 per order leaves very little room for ad cost, and the store needed steady sales all year, not one good week.",
    plan: [
      "Rotate and test new angles across 69 campaigns over 12 months.",
      "Watch the full Shopify funnel from click to add to cart to purchase.",
    ],
    execution: [
      "Pushed for cheap, high-quality traffic with strong hooks: €0.15 CPC across 300K+ link clicks.",
      "Fixed drop-off points in the funnel with the client.",
    ],
    outcome: [
      "41,967 add to carts and 8,294 purchases. About 1 in 5 carts became an order.",
      "€202,307 in revenue at 4.62X, with cost per purchase held at €5.27.",
    ],
    tags: ["Volume", "Hook testing", "Funnel"],
  },
];

export const allCases = [...featuredCases, ...moreCases];

/** Case links already sent in outreach emails keep opening the right study. */
export const caseSlugAliases: Record<string, string> = {
  "vojo-media-investor-education": "wojo-media-investor-education",
  "the10-jewelry": "the-lovery-jewelry",
};

export type CreativeWork = {
  src: string;
  width: number;
  height: number;
  brand: string;
  title: string;
  note: string;
};

export type UgcVideo = {
  src: string;
  poster: string;
  title: string;
  category: string;
};

const ugc = (slug: string, title: string, category: string): UgcVideo => ({
  src: `/portfolio/ugc/${slug}.mp4`,
  poster: `/portfolio/ugc/${slug}.jpg`,
  title,
  category,
});

export const ugcVideos: UgcVideo[] = [
  ugc("glass-skin-7-days", "Glass skin in 7 days", "Skincare · Result hook"),
  ugc("stretch-denim", "Stretch denim try-on", "Apparel · Try-on"),
  ugc("lip-shades", "Which shade are you?", "Beauty · Shade lineup"),
  ugc("pet-treats", "Treats that look illegal to feed your pup", "Pet · Hook + demo"),
  ugc("ootd-breakdown", "Outfit breakdown", "Fashion · OOTD"),
  ugc("ugc-beauty-bts", "Filming a beauty UGC ad, behind the scenes", "Beauty · BTS"),
  ugc("bracelet-stack", "New bracelet stack", "Jewelry · Product"),
  ugc("shopping-app", "Shopping that gets you", "App · Demo"),
  ugc("gifting", "One for them, one for you", "Gifting · Holiday"),
  ugc("street-look", "Night-out look", "Fashion · Trend hook"),
  ugc("pet-crate-home", "A crate that fits the living room", "Pet & home · Lifestyle"),
  ugc("beauty-sale-event", "Get your cart ready for the sale", "Beauty · Promo"),
  ugc("holiday-sleep-set", "Holiday sleep set", "Loungewear · Product"),
  ugc("feature-launch", "What's new: feature launch", "Tech · Explainer"),
  ugc("university-red", "Collection drop", "Activewear · Launch"),
  ugc("on-business", "On business.", "Fashion · Short hook"),
];

export const creativeWork: CreativeWork[] = [
  {
    src: "/portfolio/creative/shapedbae-sculpting.png",
    width: 1024,
    height: 1024,
    brand: "ShapedBae",
    title: "We're sculpting, bae",
    note: "Herbal supplement ad for women: a bold promise, 200,000+ customers as social proof, a five-star review and one clear call to action.",
  },
  {
    src: "/portfolio/creative/xtreme-park-summer-camp.jpg",
    width: 819,
    height: 1024,
    brand: "Xtreme Park Adventures",
    title: "A summer they'll actually remember",
    note: "Summer camp lead gen for parents: screen-free outdoor fun, trust badges, a real review and an urgent booking CTA.",
  },
  {
    src: "/portfolio/creative/tfa-tax-planning.png",
    width: 1024,
    height: 1024,
    brand: "Tristate Financial Advisors",
    title: "A tax planning window is open",
    note: "Financial services lead gen aimed at high earners. A time-sensitive hook and a soft 'see what's available' CTA.",
  },
  {
    src: "/portfolio/creative/superhuman-blueprint.jpg",
    width: 1024,
    height: 1024,
    brand: "The Superhuman Blueprint",
    title: "How well are you actually performing?",
    note: "Quiz-funnel ad for a coaching program: calls out high achievers, then sends them to a scorecard that captures the lead.",
  },
  {
    src: "/portfolio/creative/sweet-vibes-sauna-sauce.png",
    width: 1024,
    height: 1024,
    brand: "Sweet Vibes",
    title: "Valentine's Day 30% off",
    note: "Seasonal promo static for a DTC body-care product. Product front and center, one offer, one button.",
  },
  {
    src: "/portfolio/creative/kimith-new-arrivals.jpg",
    width: 779,
    height: 1024,
    brand: "KIMITH",
    title: "New arrivals teaser",
    note: "Drop-announcement creative for the luxury athleisure launch. One bold color and one line of copy.",
  },
  {
    src: "/portfolio/creative/performance-ac-technicians.jpg",
    width: 1024,
    height: 1022,
    brand: "Performance AC",
    title: "Technicians at the door",
    note: "Trust-first creative: a real homeowner, a branded van, and a promise of comfort without the wait.",
  },
  {
    src: "/portfolio/creative/perfect-finishes-epoxy.jpg",
    width: 1024,
    height: 1024,
    brand: "Perfect Finishes",
    title: "Epoxy floor finishing",
    note: "Service-line ad for a Gulf Coast painting and finishing company, with the site and phone number on the creative.",
  },
  {
    src: "/portfolio/creative/kimith-limoncello.jpg",
    width: 815,
    height: 1024,
    brand: "KIMITH",
    title: "Charged & Chosen in Limoncello",
    note: "A colorway story that sells the feeling, not just the fabric. Editorial lighting and a serif headline.",
  },
  {
    src: "/portfolio/creative/twin-cities-fence.jpg",
    width: 1024,
    height: 1024,
    brand: "Twin Cities Fence",
    title: "Built for nonstop truck traffic",
    note: "B2B commercial fencing ad. It answers the buyer's objection, then backs it up with proof points and a real review.",
  },
  {
    src: "/portfolio/creative/performance-ac-services.jpg",
    width: 1024,
    height: 1021,
    brand: "Performance AC",
    title: "One trusted team",
    note: "HVAC, plumbing and electrical in one frame, so a single ad can sell all three trades.",
  },
  {
    src: "/portfolio/creative/kimith-dreams.jpg",
    width: 830,
    height: 1024,
    brand: "KIMITH",
    title: "My dreams come true",
    note: "Creator-style lifestyle shot, made to blend into the Instagram feed as UGC-style creative.",
  },
  {
    src: "/portfolio/creative/perfect-finishes-exterior.jpg",
    width: 1024,
    height: 1024,
    brand: "Perfect Finishes",
    title: "Protect + refresh",
    note: "Before-state exterior with a question hook that makes owners look at their own building.",
  },
  {
    src: "/portfolio/creative/kimith-wrap-tops.jpg",
    width: 1024,
    height: 1024,
    brand: "KIMITH",
    title: "Wrap top colorways",
    note: "Flat-lay product creative for catalog and carousel ads. Every colorway in one scroll-stopping frame.",
  },
  {
    src: "/portfolio/creative/perfect-finishes-repairs.jpg",
    width: 1024,
    height: 1024,
    brand: "Perfect Finishes",
    title: "Home repairs, year-round",
    note: "Local service ad for Gulf Shores, AL: service icons, a Book Now button and the location up front.",
  },
];
