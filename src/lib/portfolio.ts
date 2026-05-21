export type PortfolioSlide =
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "dashboard"; variant: DashboardVariant };

export type DashboardVariant =
  | "med-spa-summary"
  | "med-spa-leads"
  | "home-services-calls"
  | "home-services-local"
  | "hvac-seasonal"
  | "hvac-search"
  | "ecommerce-roas"
  | "google-search"
  | "google-local"
  | "meta-leads"
  | "meta-retarget";

export type PortfolioFolder = {
  slug: string;
  title: string;
  tagline: string;
  gradient: string;
  glow: string;
  icon: string;
  slides: PortfolioSlide[];
};

export const portfolioFolders: PortfolioFolder[] = [
  {
    slug: "med-spa",
    title: "Med Spa Portfolio",
    tagline: "Consult bookings & treatment leads",
    gradient: "from-rose-400 via-fuchsia-500 to-violet-700",
    glow: "shadow-fuchsia-500/30",
    icon: "✦",
    slides: [
      {
        type: "image",
        src: "/portfolio/med-spa/case-study-1.png",
        alt: "Med spa Meta ads case study dashboard",
        caption: "Meta Ads Manager · consult & purchase performance",
      },
      { type: "dashboard", variant: "med-spa-summary" },
      { type: "dashboard", variant: "med-spa-leads" },
      {
        type: "image",
        src: "/portfolio/featured/meta-ecommerce-roas.png",
        alt: "High ROAS scaled campaigns",
        caption: "Scaled winners after creative refresh",
      },
      {
        type: "image",
        src: "/portfolio/featured/google-analytics-growth.png",
        alt: "Revenue growth analytics",
        caption: "Revenue lift tied to paid traffic",
      },
    ],
  },
  {
    slug: "home-services",
    title: "Home Services Portfolio",
    tagline: "Contractors · cleaning · local leads",
    gradient: "from-amber-400 via-orange-500 to-red-700",
    glow: "shadow-orange-500/30",
    icon: "⌂",
    slides: [
      { type: "dashboard", variant: "home-services-calls" },
      { type: "dashboard", variant: "home-services-local" },
      {
        type: "image",
        src: "/portfolio/featured/google-conversions-year.png",
        alt: "Google conversions annual report",
        caption: "12 months · search lead volume",
      },
      {
        type: "image",
        src: "/portfolio/featured/google-conversions-2.png",
        alt: "Multi campaign conversion wins",
        caption: "Cross-campaign conversion wins",
      },
      {
        type: "image",
        src: "/portfolio/featured/keywords-conversion.png",
        alt: "Keyword conversion optimization",
        caption: "Keyword-level CPL optimization",
      },
    ],
  },
  {
    slug: "hvac-trades",
    title: "HVAC & Trades Portfolio",
    tagline: "Service-area targeting & booked jobs",
    gradient: "from-sky-400 via-blue-500 to-indigo-800",
    glow: "shadow-blue-500/30",
    icon: "⚙",
    slides: [
      { type: "dashboard", variant: "hvac-seasonal" },
      { type: "dashboard", variant: "hvac-search" },
      {
        type: "image",
        src: "/portfolio/featured/google-keywords-roas.png",
        alt: "Google keyword ROAS performance",
        caption: "High-intent search structure",
      },
      {
        type: "image",
        src: "/portfolio/featured/latest-google-ecommerce.png",
        alt: "Campaign scaling dashboard",
        caption: "Budget shift toward winning ad groups",
      },
      {
        type: "image",
        src: "/portfolio/featured/google-conversions-year.png",
        alt: "Annual conversion performance",
        caption: "Consistent job lead volume",
      },
    ],
  },
  {
    slug: "ecommerce",
    title: "E-commerce Portfolio",
    tagline: "DTC · purchases · ROAS scale",
    gradient: "from-teal-400 via-emerald-500 to-green-800",
    glow: "shadow-emerald-500/30",
    icon: "◆",
    slides: [
      {
        type: "image",
        src: "/portfolio/ecommerce/roas-europe.png",
        alt: "4.62X ROAS Europe ecommerce",
        caption: "€43.7K spend · 8,294 purchases · 4.62X ROAS",
      },
      { type: "dashboard", variant: "ecommerce-roas" },
      {
        type: "image",
        src: "/portfolio/featured/meta-europe-roas.png",
        alt: "Meta EU ROAS performance",
        caption: "EU market purchase scale",
      },
      {
        type: "image",
        src: "/portfolio/featured/meta-ecommerce-roas.png",
        alt: "50X+ purchase ROAS",
        caption: "Long-term store scaling",
      },
      {
        type: "image",
        src: "/portfolio/featured/google-analytics-growth.png",
        alt: "Revenue growth chart",
        caption: "895% revenue growth in 30 days",
      },
    ],
  },
  {
    slug: "google-ads",
    title: "Google Ads Portfolio",
    tagline: "Search · PMax · local intent",
    gradient: "from-yellow-300 via-amber-400 to-orange-700",
    glow: "shadow-amber-500/30",
    icon: "G",
    slides: [
      { type: "dashboard", variant: "google-search" },
      { type: "dashboard", variant: "google-local" },
      {
        type: "image",
        src: "/portfolio/featured/google-keywords-roas.png",
        alt: "Keyword ROAS dashboard",
        caption: "29.87X conversion value / cost",
      },
      {
        type: "image",
        src: "/portfolio/featured/google-conversions-year.png",
        alt: "Yearly conversions",
        caption: "4,269 conversions in 12 months",
      },
      {
        type: "image",
        src: "/portfolio/featured/keywords-conversion.png",
        alt: "Conversion rate by keyword",
        caption: "15%+ conversion rate wins",
      },
    ],
  },
  {
    slug: "meta-ads",
    title: "Meta Ads Portfolio",
    tagline: "Lead forms · retargeting · local",
    gradient: "from-indigo-400 via-violet-500 to-purple-900",
    glow: "shadow-violet-500/30",
    icon: "M",
    slides: [
      { type: "dashboard", variant: "meta-leads" },
      { type: "dashboard", variant: "meta-retarget" },
      {
        type: "image",
        src: "/portfolio/featured/meta-ecommerce-roas.png",
        alt: "Meta purchase ROAS",
        caption: "Purchase campaigns at scale",
      },
      {
        type: "image",
        src: "/portfolio/med-spa/case-study-1.png",
        alt: "Med spa campaign structure",
        caption: "Treatment-level campaign split",
      },
      {
        type: "image",
        src: "/portfolio/featured/meta-europe-roas.png",
        alt: "Meta EU performance",
        caption: "Multi-market purchase efficiency",
      },
    ],
  },
];

export function getPortfolioFolder(slug: string) {
  return portfolioFolders.find((f) => f.slug === slug);
}
