import { blogPosts } from "@/lib/blog";
import { faqs, siteConfig } from "@/lib/site";

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
      jobTitle: "Media Buyer",
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
      "Meta Ads Management",
      "Google Ads Management",
      "E-commerce Advertising",
      "Lead Generation",
      "Real Estate Advertising",
      "Home Service Advertising",
    ],
    knowsAbout: [
      "Facebook Ads",
      "Instagram Ads",
      "Google Ads",
      "E-commerce Sales",
      "Lead Generation",
      "DTC Marketing",
      "TikTok Ads",
      "Media Buying",
    ],
    sameAs: [
      siteConfig.links.linkedin,
      siteConfig.links.upwork,
      siteConfig.links.instagram,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Paid media services for US businesses",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Meta Ads for e-commerce" },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Google Ads for home services & real estate",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "TikTok ads for e-commerce",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Media buying strategy call",
          },
        },
      ],
    },
  };

  const blogList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Marketing with Asmat blog",
    itemListElement: blogPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteConfig.url}/blogs/${post.slug}`,
      name: post.title,
    })),
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
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
      "Schedule a free 15-minute strategy call for Meta and Google ads.",
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
