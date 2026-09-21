export type Testimonial = {
  id: string;
  name: string;
  role: string;
  location: string;
  image: string;
  imageClass?: string;
  quote: string;
  linkedin: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "dallas-bell",
    name: "Dallas Bell",
    role: "CEO, Finding Forever Investments",
    location: "Houston, TX",
    image: "/testimonials/dallas-bell.jpg",
    quote:
      "Asmat helped us approach real estate lead generation from a completely different angle. Instead of simply chasing inexpensive leads, he focused on generating qualified prospects with a real intent to engage with listings. The campaigns produced strong conversion rates, while ROAS remained a key performance metric.",
    linkedin: "https://www.linkedin.com/in/dallas-bell-983203272/",
  },
  {
    id: "holly-bruns",
    name: "Holly Bruns",
    role: "Co-Founder & COO, Local Image Co.",
    location: "Maine, US",
    image: "/testimonials/holly-bruns.jpg",
    quote:
      "What stood out about working with Asmat was how closely he connected creative strategy with media buying. He understood the audience, tested different hooks and messaging, and used the data to guide decisions. The campaigns became much more efficient, with ROAS being a clear focus throughout.",
    linkedin: "https://www.linkedin.com/in/hollybruns/",
  },
  {
    id: "stephen-krain",
    name: "Stephen Krain",
    role: "Cofounder & COO, TKX Media",
    location: "St. Augustine, FL",
    image: "/testimonials/stephen-krain.jpg",
    quote:
      "Asmat has a strong command of both Meta and Google Ads and, more importantly, understands how they work together within a larger acquisition strategy. His campaign optimization was methodical, his testing process was clear, and ROAS was always part of the conversation.",
    linkedin: "https://www.linkedin.com/in/stephenkrain/",
  },
  {
    id: "goalmogul",
    name: "GoalMogul",
    role: "Michael Cheng, Founder",
    location: "New York, NY",
    image: "/testimonials/michael-cheng.jpg",
    quote:
      "Working with Asmat gave us a clearer customer acquisition strategy. He connected audience research, creative messaging, paid media, and conversion optimization into one process. That approach helped us generate more meaningful prospects while keeping ROAS at the center of the decision-making.",
    linkedin: "https://www.linkedin.com/in/goalmogul/",
  },
];
