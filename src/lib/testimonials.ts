export type Testimonial = {
  id: string;
  name: string;
  role: string;
  location: string;
  niche: string;
  image: string;
  quote: string;
  caseStudy?: string;
};

/** Natural, candid Unsplash portraits — not AI-generated stock */
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
      "We were throwing money at boosted posts before Asmat. He rebuilt our Meta lead funnel in about ten days — our front desk started joking they needed a second person just for consult calls. Cost per booked appointment finally made sense.",
  },
  {
    id: "mike-r",
    name: "Mike R.",
    role: "Operations manager",
    location: "Phoenix, AZ",
    niche: "HVAC",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces",
    quote:
      "Our last agency stacked keywords and prayed. Asmat actually mapped service areas and call tracking. Phone felt different within a few weeks — real homeowners, not wrong numbers.",
    caseStudy:
      "Google Search rebuild · $4.2k/mo spend · 29 booked jobs in month two · ~$145 cost per booked job (peak summer).",
  },
  {
    id: "sarah-k",
    name: "Sarah K.",
    role: "Founder",
    location: "Denver, CO",
    niche: "Home cleaning",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces",
    quote:
      "I'm not a ads person at all. Asmat sends a short weekly Loom and plain-English notes — I always know what we're testing and why. Feels like having marketing in-house without the full-time hire.",
  },
  {
    id: "priya-n",
    name: "Dr. Priya N.",
    role: "Medical director",
    location: "Edison, NJ",
    niche: "Dermatology clinic",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=faces",
    quote:
      "Injectable campaigns are picky — offers, disclaimers, before/after rules. Asmat actually reads that stuff. We filled Tuesday and Thursday consult blocks three weeks straight after he refreshed creative.",
  },
  {
    id: "tom-v",
    name: "Tom V.",
    role: "Owner",
    location: "Atlanta, GA",
    niche: "Landscaping",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces",
    quote:
      "First time running Meta and Google together for a spring push. I was skeptical. Estimate requests jumped — and the leads weren't tire-kickers.",
    caseStudy:
      "Spring promo · $6k total budget · 41 estimate requests · 18 closed jobs · junk leads paused fast instead of burning another month.",
  },
  {
    id: "amanda-l",
    name: "Amanda L.",
    role: "Co-founder",
    location: "Scottsdale, AZ",
    niche: "IV wellness",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=faces",
    quote:
      "Hired on Upwork after a rough experience elsewhere. Clear scope, escrow, no fluff deck. Our drip-offer ROAS finally looked like real numbers — we're on month four and still going.",
  },
];
