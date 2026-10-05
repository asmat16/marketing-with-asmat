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
import { Process } from "@/components/Process";
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
  engagement,
  foundationFaqs,
  foundationHero,
  foundationNav,
  foundationProof,
  foundationStats,
  foundationStudies,
  problemCards,
} from "@/lib/foundation";
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
                US home service companies only
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-300">
                I work with HVAC, roofing, plumbing, landscaping, and home
                repair companies in the United States. Paid social ads. Google
                Search ads. Google Business Profile. Website and funnel work.
                CRM automations. $20M+ managed. The goal is booked jobs,
                booked appointments, free quotes, and estimates.
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
                an ad is tired. It does not know when a lead should get a
                call right now. That takes human judgment. Emotional
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
              The work from finding a customer to booking the job
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

        <Process
          sectionId="engagement"
          gridClassName="sm:grid-cols-2 xl:grid-cols-5"
          heading={{
            label: "How we start",
            title: "Onboarding, ads, funnel, then daily growth",
            description:
              "Plain steps. From first call to more booked jobs and more revenue.",
          }}
          steps={engagement}
        />
        <ReachOut />

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
                alt="Asmat, media buyer for US home service companies"
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
                I run paid ads for US home service companies.
              </h2>
              <div data-reveal className="mt-5 space-y-4 text-base leading-relaxed text-zinc-400">
                <p>
                  I have spent 7+ years inside Meta, Google, and TikTok
                  accounts. $20M+ managed. I now take US home service companies
                  only. HVAC, roofing, plumbing, home repair, landscaping,
                  remodeling, interior, solar, and EV chargers.
                </p>
                <p>
                  I do not take med spas, clinics, e-commerce, or real estate.
                  The work is booked jobs and qualified estimates, not cheap
                  form fills.
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
              title: "Leads that turn into booked jobs",
              description:
                "Why home service companies stall after the click, how to hire one remote operator, and how ads, funnel, and CRM sit in one seat.",
              hireLead: "Want to talk about your company?",
              hireCta: "Book a 15-min call",
            }}
          />
        </div>

        <Faq
          heading={{
            label: "FAQ",
            title: "Questions before you book",
            description:
              "Who I take, what I do not take, and how a first call works.",
          }}
          items={foundationFaqs}
        />

        <CtaBanner
          copy={{
            title: "Tell me about the company and the service area.",
            description:
              "Book a 15-minute call. We will look at the ads, Google Business Profile, the website, and how a lead becomes a job.",
            primary: "Book a 15-min call",
            secondary: "Hire on Upwork",
          }}
        />

        <BookSection
          copy={{
            label: "Book a strategy call",
            title: "Fifteen minutes on the problem",
            description:
              "Pick a time. Bring the current ads, the service area, and how you follow up a lead today.",
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
      <Footer blurb="Paid ads for US HVAC, roofing, plumbing, and similar home service companies." />
      <StickyMobileCta label="Book a call" whatsappHref={demoWhatsapp} />
      <ScrollToTop />
    </>
  );
}
