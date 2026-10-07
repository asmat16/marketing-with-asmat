import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BlogInsights } from "@/components/BlogInsights";
import { BookSection } from "@/components/BookSection";
import { Contact } from "@/components/Contact";
import { CtaBanner } from "@/components/CtaBanner";
import { Faq } from "@/components/Faq";
import { FeaturedPortfolio } from "@/components/FeaturedPortfolio";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScrollToTop } from "@/components/ScrollToTop";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { TestimonialTicker } from "@/components/TestimonialTicker";
import { Testimonials } from "@/components/Testimonials";
import { ProblemSelector } from "@/components/foundation/ProblemSelector";
import { ReachOut } from "@/components/foundation/ReachOut";
import { WorkJourney } from "@/components/foundation/WorkJourney";
import { demoChannels, demoWhatsapp } from "@/lib/demo-content";
import {
  capabilities,
  footerBlurb,
  foundationFaqs,
  foundationHero,
  foundationNav,
  foundationProof,
  foundationStats,
  foundationStudies,
  problemCards,
} from "@/lib/foundation";
import { pageMeta, siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Performance Marketer for DTC Brands and Lead Gen",
  description: siteConfig.description,
  ogTitle: "You bring the business. I build the system that brings the customers.",
});

export default function Home() {
  return (
    <>
      <JsonLd />
      <TestimonialTicker />
      <Header home="/" ctaLabel="Book a call" navItems={foundationNav} />
      <main className="min-h-screen bg-[var(--background)] pb-20 md:pb-0">
        <Hero
          copy={foundationHero}
          stats={foundationStats}
          primaryHref={siteConfig.links.book}
          secondaryHref="/systems"
          imageSrc="/asmat-portrait.jpg"
          portrait
        />

        <Testimonials
          label="Client words"
          title="What my clients say about me"
          description="Real people I worked with. Their words. Their LinkedIn."
        />
        <ReachOut />

        <section className="border-t border-white/[0.08] py-16 sm:py-20">
          <div className="page-shell">
            <article
              data-reveal
              className="rounded-2xl border border-teal-500/25 bg-teal-500/5 p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                DTC brands and lead gen businesses
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-300">
                I work with e-commerce brands that sell online. Women's apparel,
                skincare, beauty, jewelry, and other DTC brands, most of them
                on Shopify. I also run lead gen for B2B and B2C companies that
                need qualified calls, not cheap form fills. Meta Ads. Google
                Ads. TikTok and LinkedIn when they fit. Creative, funnel,
                tracking, and follow-up. $20M+ managed. The goal is sales,
                ROAS, and qualified leads that turn into customers.
              </p>
            </article>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {problemCards.map((card) => (
                <article
                  key={card.title}
                  data-reveal
                  className="rounded-2xl border border-white/10 bg-[var(--card)] p-6"
                >
                  <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {card.question}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <WorkJourney />

        <section className="border-t border-white/[0.08] bg-[var(--surface)] py-24 sm:py-28">
          <div className="page-shell max-w-3xl">
            <p className="text-xs font-medium tracking-widest text-teal-400/90 uppercase">
              Me and AI
            </p>
            <h2 data-split className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              AI can help. It cannot replace a person on the ads.
            </h2>
            <div data-reveal className="mt-6 space-y-4 text-base leading-relaxed text-zinc-400">
              <p>
                AI is doing a lot of work now. Research. First drafts. Fast
                reads of a report. That is useful. I use it.
              </p>
              <p>
                AI cannot sit in your account and decide like a person.
                It does not have your customer in mind. It does not feel when
                an ad is tired. It does not know when a buyer needs one more
                reason to check out. That takes human judgment. Emotional
                intelligence. Campaign decisions.
              </p>
              <p>
                You cannot sit on a computer, turn on AI, and call the ads
                done. I will run the work. I will use AI where it saves time.
                My skill with it matters more than the tool by itself.
              </p>
            </div>
          </div>
        </section>

        <section
          id="capabilities"
          className="scroll-mt-28 border-t border-white/[0.08] py-24 sm:py-28"
        >
          <div className="page-shell">
            <p className="text-xs font-medium tracking-widest text-teal-400/90 uppercase">
              What I do
            </p>
            <h2 data-split className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              The work from first click to the sale
            </h2>
            <ol className="mt-12 grid gap-4 sm:grid-cols-2">
              {capabilities.map((item) => (
                <li
                  key={item.step}
                  data-reveal
                  className="flex gap-4 rounded-2xl border border-white/10 bg-[var(--card)] p-5"
                >
                  <span
                    data-motion="step"
                    className="text-3xl font-bold text-teal-300 drop-shadow-[0_0_22px_rgba(45,212,191,0.55)]"
                  >
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{item.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-sm text-zinc-500">
              <Link href="/systems" className="text-teal-300 hover:text-teal-200">
                Read the full path
              </Link>
              , step by step, including what AI cannot do for you.
            </p>
          </div>
        </section>

        <FeaturedPortfolio
          sectionId="proof"
          heading={foundationProof}
          studies={foundationStudies.slice(0, 6)}
          columns={3}
          slideshow
        />
        <ReachOut />

        <ProblemSelector />

        <section
          id="about"
          className="scroll-mt-28 border-t border-white/[0.08] py-24 sm:py-28"
        >
          <div className="page-shell grid items-center gap-10 lg:grid-cols-[280px_1fr]">
            <div
              data-motion="media"
              className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-[1.75rem] border border-white/10"
            >
              <Image
                src="/asmat-portrait.jpg"
                alt="Asmat, performance marketer and media buyer for DTC brands and lead gen businesses"
                fill
                className="object-cover object-[center_18%]"
                sizes="280px"
              />
            </div>
            <div>
              <p className="text-xs font-medium tracking-widest text-teal-400/90 uppercase">
                About
              </p>
              <h2 data-split className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                I build the system around your ads.
              </h2>
              <div data-reveal className="mt-5 space-y-4 text-base leading-relaxed text-zinc-400">
                <p>
                  I have spent 7+ years inside Meta, Google, TikTok, and
                  LinkedIn ad accounts. $20M+ managed. Four of those years were
                  inside an agency, running 30+ client accounts at a time.
                </p>
                <p>
                  Most of my best numbers come from e-commerce. Women's apparel,
                  skincare, beauty, jewelry, and other DTC brands. I also run
                  lead gen for B2B and B2C companies where the goal is a
                  qualified call, not a cheap form fill.
                </p>
                <p>
                  I am not just the person who runs the ads. I look at the
                  creative, the offer, the page, the tracking, and the
                  follow-up. That is where most of the money is lost.
                </p>
              </div>
              <Link
                href="/who-i-help"
                className="mt-6 inline-flex text-sm font-semibold text-teal-300 hover:text-teal-200"
              >
                Who this is for
              </Link>
            </div>
          </div>
        </section>

        <div id="insights">
          <BlogInsights
            count={4}
            whatsappHref={demoWhatsapp}
            copy={{
              label: "Insights",
              title: "Notes on ads that actually sell",
              description:
                "Why ads stall after the click, why creative matters more than targeting now, and how one person can own ads, funnel, and follow-up.",
              hireLead: "Want to talk about your brand?",
              hireCta: "Book a 15-min call",
            }}
          />
        </div>

        <Faq
          heading={{
            label: "FAQ",
            title: "Questions before you book",
            description:
              "Who I work with, what I do, and how a first call works.",
          }}
          items={foundationFaqs}
        />

        <CtaBanner
          copy={{
            title: "Tell me about your brand and what you sell.",
            description:
              "Book a 15-minute call. We will look at your ads, your store or landing page, your tracking, and what happens after someone clicks.",
            primary: "Book a 15-min call",
            secondary: "Hire on Upwork",
          }}
        />

        <BookSection
          copy={{
            label: "Book a strategy call",
            title: "Fifteen minutes on the problem",
            description:
              "Pick a time. Bring your ad account, your store or landing page link, and the one thing you want to fix first.",
          }}
        />

        <Contact
          channels={demoChannels}
          showShortcuts={false}
          copy={{
            label: "Contact",
            title: "Message me or book the call",
            description:
              "WhatsApp, Upwork, email, or LinkedIn. The US WhatsApp number is +1 667 788 2088.",
            bookTitle: "Book on the calendar",
            bookDescription: "Pick a time for a strategy call",
          }}
        />
      </main>
      <Footer blurb={footerBlurb} />
      <StickyMobileCta label="Book a call" whatsappHref={demoWhatsapp} />
      <ScrollToTop />
    </>
  );
}
