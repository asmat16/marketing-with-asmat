export type Testimonial = {
  id: string;
  name: string;
  role: string;
  location: string;
  image: string;
  imageClass?: string;
  frameClass?: string;
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
    id: "jason-wojo",
    name: "Jason Wojo",
    role: "WOJO LLC",
    location: "",
    image: "/testimonials/jason-wojo.jpg",
    imageClass: "object-[center_18%]",
    quote:
      "Asmat spent four years inside our agency and helped us manage 30+ clients at a time. He made a real difference in AI acquisition, client revenue, content strategy, ads management, and full-funnel strategy. He works as a growth and performance marketing expert.",
    linkedin: "https://www.linkedin.com/in/jason-wojo/",
  },
];
