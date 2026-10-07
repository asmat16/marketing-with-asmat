import { blogPosts } from "@/lib/blog";
import { foundationFaqs } from "@/lib/foundation";
import { siteConfig } from "@/lib/site";

export function JsonLd() {
  const business = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    image: `${siteConfig.url}/opengraph-image`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.email,
        telephone: siteConfig.phone,
        availableLanguage: ["English"],
        url: siteConfig.links.book,
      },
    ],
    founder: {
      "@type": "Person",
      name: "Asmat",
      jobTitle: "Performance marketer for DTC brands and lead gen",
      url: siteConfig.url,
      sameAs: [
        siteConfig.links.linkedin,
        siteConfig.links.upwork,
        siteConfig.links.instagram,
      ],
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    priceRange: "$$",
    serviceType: [
      "Meta Ads for DTC brands",
      "Google Ads for e-commerce",
      "Creative strategy",
      "Funnel and landing pages",
      "CRM and email follow-up",
      "Lead generation ads",
      "Remote media buying",
    ],
    knowsAbout: [
      "Google Ads",
      "Facebook Ads",
      "Instagram Ads",
      "TikTok Ads",
      "Shopify ads",
      "DTC advertising",
      "Lead Generation",
      "CRM automations",
      "Funnel management",
      "Creative strategy",
      "Performance marketing",
    ],
    sameAs: [
      siteConfig.links.linkedin,
      siteConfig.links.upwork,
      siteConfig.links.instagram,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Performance marketing for DTC brands and lead gen",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Meta Ads for DTC brands" },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Google Ads for e-commerce",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Lead gen ads for B2B and B2C",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Media buying strategy call",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Remote growth operator for ads, funnel, and CRM",
          },
        },
      ],
    },
  };

  const blogList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Marketing with Asmat blog",
    itemListElement: blogPosts
      .filter((post) => !post.noindex)
      .map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteConfig.url}/blogs/${post.slug}`,
      name: post.title,
    })),
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: foundationFaqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const booking = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Book a Free Strategy Call",
    url: `${siteConfig.url}/book`,
    description:
      "Schedule a free 15-minute strategy call for Meta Ads, Google Ads, creative, funnels, and CRM follow-up.",
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: siteConfig.calendly.eventUrl,
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      name: siteConfig.calendly.eventName,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(booking) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogList) }}
      />
    </>
  );
}
