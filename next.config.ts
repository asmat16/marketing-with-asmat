import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  compress: true,
  poweredByHeader: false,
  async redirects() {
    const hire = "/blogs/hire-media-buyer-usa-meta-google-tiktok";
    const ecommerce = "/blogs/ecommerce-meta-google-ads-that-sell";
    const system = "/blogs/ads-creative-funnel-tracking-one-system";
    const booked = "/blogs/cost-per-lead-vs-booked-appointment";
    const pairs: [string, string][] = [
      ["/hvac-google-ads", "/who-i-help"],
      ["/plumbing-google-ads", "/who-i-help"],
      ["/roofing-google-ads", "/who-i-help"],
      ["/blogs/google-ads-hvac-home-service-leads-usa", ecommerce],
      ["/blogs/meta-ads-med-spa-book-consults", "/who-i-help"],
      ["/blogs/med-spa-home-service-ads-guide", "/who-i-help"],
      ["/blogs/facebook-ads-real-estate-lead-generation", hire],
      ["/blogs/home-service-leads-not-bookings", booked],
      ["/blogs/hire-remote-media-buyer-home-services", hire],
      ["/blogs/ads-crm-funnel-creative-one-person", system],
      ["/blogs/why-us-brands-hire-freelance-media-buyers-from-pakistan", hire],
    ];
    return pairs.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
