import { Contact } from "@/components/Contact";
import { CtaBanner } from "@/components/CtaBanner";
import { Faq } from "@/components/Faq";
import { FeaturedPortfolio } from "@/components/FeaturedPortfolio";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { MedSpaHighlight } from "@/components/MedSpaHighlight";
import { NicheBar } from "@/components/NicheBar";
import { Process } from "@/components/Process";
import { Results } from "@/components/Results";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Services } from "@/components/Services";
import { StickyMobileCta } from "@/components/StickyMobileCta";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main className="min-h-screen bg-[var(--background)] pb-20 md:pb-0">
        <Hero />
        <NicheBar />
        <FeaturedPortfolio />
        <MedSpaHighlight />
        <Results />
        <Services />
        <Process />
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
