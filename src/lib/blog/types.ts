export type BlogFaq = {
  q: string;
  a: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  keywords: string[];
  category: string;
  tags: string[];
  excerpt: string;
  cover: string;
  coverAlt: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  faqs: BlogFaq[];
  content: string;
};
