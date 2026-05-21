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
      "We were basically lighting money on fire with boosted posts before Asmat. He rebuilt our Meta lead setup in maybe ten days. Front desk kept joking they need a second person just for consult calls. Cost per booked appointment finally looks normal.",
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
      "Our last agency stacked keywords and crossed their fingers. Asmat mapped service areas and fixed call tracking. Took a few weeks but the phone felt different. Actual homeowners, not wrong numbers or spam.",
    caseStudy:
      "Google rebuild, about $4.2k a month. Month two we booked 29 jobs, roughly $145 per job in peak summer. That's the number I watch.",
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
      "I'm not an ads person at all. Asmat sends a short Loom every week and explains it like a normal human. I always know what we're testing and why. Feels like we got marketing in-house without hiring full time.",
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
      "Injectable ads are picky with offers, disclaimers, before/after rules, all of it. Asmat actually reads that stuff instead of guessing. We filled Tuesday and Thursday consult blocks three weeks in a row after he refreshed creative.",
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
      "First time we ran Meta and Google together for spring. I was skeptical honestly. Estimate requests went up and the leads weren't just tire kickers wasting our estimators' time.",
    caseStudy:
      "Spring promo, $6k total spend. 41 estimate requests, we closed 18 jobs. He paused the junk leads fast instead of letting them burn budget another month.",
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
      "Hired him on Upwork after a rough agency experience. Escrow, clear scope, no fluff proposal deck. Our drip offer ROAS finally looked like real numbers. Still working together on month four.",
  },
];
