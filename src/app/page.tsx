import type { Metadata } from "next";
import { BlogInsights } from "@/components/BlogInsights";
import { BookSection } from "@/components/BookSection";
import { Contact } from "@/components/Contact";
import { CtaBanner } from "@/components/CtaBanner";
import { Faq } from "@/components/Faq";
import { FeaturedPortfolio } from "@/components/FeaturedPortfolio";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HireChannels } from "@/components/HireChannels";
import { JsonLd } from "@/components/JsonLd";
import { MedSpaHighlight } from "@/components/MedSpaHighlight";
import { NicheBar } from "@/components/NicheBar";
import { Process } from "@/components/Process";
import { Results } from "@/components/Results";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SeoContent } from "@/components/SeoContent";
import { Services } from "@/components/Services";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { TestimonialTicker } from "@/components/TestimonialTicker";
import { Testimonials } from "@/components/Testimonials";
import { UpworkReviews } from "@/components/UpworkReviews";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function Home() {
  return (
    <>
      <JsonLd />
      <TestimonialTicker />
      <Header />
      <main className="min-h-screen bg-[var(--background)] pb-20 md:pb-0">
        <Hero />
        <Testimonials />
        <UpworkReviews />
        <HireChannels />
        <NicheBar />
        <FeaturedPortfolio />
        <MedSpaHighlight />
        <Results />
        <Services />
        <Process />
        <SeoContent />
        <BlogInsights />
        <BookSection />
        <CtaBanner />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <StickyMobileCta />
      <ScrollToTop />
    </>
  );
}
