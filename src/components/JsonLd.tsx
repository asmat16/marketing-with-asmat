import { siteConfig } from "@/lib/site";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    areaServed: "Worldwide",
    serviceType: [
      "Meta Ads Management",
      "Google Ads Management",
      "Lead Generation",
      "Med Spa Marketing",
      "Aesthetic Clinic Advertising",
      "Home Service Advertising",
    ],
    knowsAbout: [
      "Facebook Ads",
      "Instagram Ads",
      "Google Ads",
      "Lead Generation",
      "Med Spa Marketing",
      "Appointment Booking",
    ],
    sameAs: [
      siteConfig.links.linkedin,
      siteConfig.links.upwork,
      siteConfig.links.instagram,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
