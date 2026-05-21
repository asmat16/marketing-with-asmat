export type Testimonial = {
  id: string;
  name: string;
  role: string;
  location: string;
  niche: string;
  image: string;
  quote: string;
  caseStudy?: string;
  upworkReview: string;
  upworkProject?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "jessica-m",
    name: "Jessica M.",
    role: "Owner",
    location: "Austin, TX",
    niche: "Med spa",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces",
    quote:
      "We were basically lighting money on fire with boosted posts before Asmat. He rebuilt our Meta lead setup in maybe ten days. Front desk kept joking they need a second person just for consult calls. Cost per booked appointment finally looks normal.",
    upworkProject: "Meta lead gen for aesthetic clinic",
    upworkReview:
      "Asmat is the real deal for med spa ads. He fixed our tracking, rebuilt lead forms, and actually understands compliance around injectable offers. Booked consults went up without us feeling spammy on Instagram. Communicates clearly and works fast.",
  },
  {
    id: "mike-r",
    name: "Mike R.",
    role: "Operations manager",
    location: "Phoenix, AZ",
    niche: "HVAC",
    image: "/testimonials/mike.png",
    quote:
      "Our last agency stacked keywords and crossed their fingers. Asmat mapped service areas and fixed call tracking. Took a few weeks but the phone felt different. Actual homeowners, not wrong numbers or spam.",
    caseStudy:
      "Google rebuild, about $4.2k a month. Month two we booked 29 jobs, roughly $145 per job in peak summer. That's the number I watch.",
    upworkProject: "Google Ads for HVAC lead generation",
    upworkReview:
      "Hired Asmat for Google Search and Performance Max. He cleaned up geo targeting, call extensions, and junk keywords. Cost per booked job dropped and call quality improved. Would hire again for seasonal pushes.",
  },
  {
    id: "holly-burns",
    name: "Holly Burns",
    role: "Founder",
    location: "Denver, CO",
    niche: "Home cleaning",
    image: "/testimonials/holly.png",
    quote:
      "I'm not an ads person at all. Asmat sends a short Loom every week and explains it like a normal human. I always know what we're testing and why. Feels like we got marketing in-house without hiring full time.",
    upworkProject: "Facebook & Instagram lead ads",
    upworkReview:
      "Super easy to work with. Asmat set up our local lead campaigns, explained the numbers without jargon, and kept creative fresh. Lead volume is steadier and my team finally trusts what we're spending.",
  },
  {
    id: "priya-n",
    name: "Dr. Priya N.",
    role: "Medical director",
    location: "Edison, NJ",
    niche: "Dermatology clinic",
    image: "/testimonials/priya.png",
    quote:
      "Injectable ads are picky with offers, disclaimers, before/after rules, all of it. Asmat actually reads that stuff instead of guessing. We filled Tuesday and Thursday consult blocks three weeks in a row after he refreshed creative.",
    upworkProject: "Meta ads for dermatology & injectables",
    upworkReview:
      "Professional, detail oriented, and respectful of medical advertising rules. Asmat improved our consult booking flow and gave honest feedback on offers that would not pass review. Strong results on booked appointments.",
  },
  {
    id: "tom-v",
    name: "Tom V.",
    role: "Landscaping business owner",
    location: "Chicago, IL",
    niche: "Landscaping",
    image: "/testimonials/tom.png",
    quote:
      "First time we ran Meta and Google together for spring. I was skeptical honestly. Estimate requests went up and the leads weren't just tire kickers wasting our estimators' time.",
    caseStudy:
      "Spring promo, $6k total spend. 41 estimate requests, we closed 18 jobs. He paused the junk leads fast instead of letting them burn budget another month.",
    upworkProject: "Meta + Google for landscaping leads",
    upworkReview:
      "Tom here, landscaping company in Chicago. Asmat ran spring campaigns on Meta and Google, set up proper tracking, and killed bad zip codes quick. Got real estimate requests, not random clicks. Solid Upwork experience start to finish.",
  },
  {
    id: "amanda-l",
    name: "Amanda L.",
    role: "Co-founder",
    location: "Scottsdale, AZ",
    niche: "IV wellness",
    image: "/testimonials/amanda.png",
    quote:
      "Hired him on Upwork after a rough agency experience. Escrow, clear scope, no fluff proposal deck. Our drip offer ROAS finally looked like real numbers. Still working together on month four.",
    upworkProject: "Paid social for IV wellness brand",
    upworkReview:
      "Top Rated talent for a reason. Clear milestones, weekly updates, and ROAS reporting that finally matched our Shopify numbers. Asmat knows wellness offers and retargeting. Month four and still scaling winners.",
  },
];
