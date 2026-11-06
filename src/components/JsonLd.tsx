import { blogPosts } from "@/lib/blog";
import { foundationFaqs } from "@/lib/foundation";
import { siteConfig } from "@/lib/site";

export function JsonLd() {
  const personId = `${siteConfig.url}/#asmat`;
  const businessId = `${siteConfig.url}/#business`;
  const websiteId = `${siteConfig.url}/#website`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "en-US",
        publisher: { "@id": businessId },
      },
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/#webpage`,
        url: siteConfig.url,
        name: "Meta and Google Ads for US DTC Brands",
        description: siteConfig.description,
        inLanguage: "en-US",
        isPartOf: { "@id": websiteId },
        about: { "@id": businessId },
        primaryImageOfPage: `${siteConfig.url}/opengraph-image`,
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#direct-answer", "#answers"],
        },
        breadcrumb: { "@id": `${siteConfig.url}/#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.url}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
        ],
      },
      {
        "@type": "Person",
        "@id": personId,
        name: "Asmat",
        jobTitle: "Performance marketer for US DTC brands and lead gen",
        url: siteConfig.url,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        image: `${siteConfig.url}/asmat-portrait.jpg`,
        knowsLanguage: "en",
        knowsAbout: [
          "Meta Ads",
          "Google Ads",
          "Shopify advertising",
          "TikTok Ads",
          "Creative strategy",
          "Conversion tracking",
          "Lead generation",
        ],
        sameAs: [
          siteConfig.links.linkedin,
          siteConfig.links.upwork,
          siteConfig.links.instagram,
          siteConfig.links.facebook,
        ],
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            name: "Meta Certified",
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "Google Ads Certified",
          },
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": businessId,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        image: `${siteConfig.url}/opengraph-image`,
        priceRange: "$$",
        founder: { "@id": personId },
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "US",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            email: siteConfig.email,
            telephone: siteConfig.phone,
            availableLanguage: ["English"],
            areaServed: "US",
            url: `${siteConfig.url}/book`,
          },
        ],
        serviceType: [
          "Meta Ads for DTC brands",
          "Google Ads for e-commerce",
          "Creative strategy",
          "Funnel and landing pages",
          "CRM and email follow-up",
          "Lead generation ads",
          "Remote media buying for US brands",
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
          siteConfig.links.facebook,
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Performance marketing for US DTC brands and lead gen",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Meta Ads for DTC brands",
                areaServed: "United States",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Google Ads for e-commerce",
                areaServed: "United States",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Lead gen ads for B2B and B2C",
                areaServed: "United States",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Media buying strategy call",
                url: `${siteConfig.url}/book`,
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/#faq`,
        url: `${siteConfig.url}/#answers`,
        isPartOf: { "@id": websiteId },
        mainEntity: foundationFaqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
      {
        "@type": "WebPage",
        name: "Book a Free Strategy Call",
        url: `${siteConfig.url}/book`,
        description:
          "Schedule a free 15-minute strategy call for US brands running Meta Ads, Google Ads, creative, funnels, and CRM follow-up.",
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
      },
      {
        "@type": "ItemList",
        name: "Guides for US brands",
        itemListElement: blogPosts
          .filter((post) => !post.noindex)
          .map((post, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `${siteConfig.url}/blogs/${post.slug}`,
            name: post.title,
          })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
