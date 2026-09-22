# Performance & SEO checklist

## PageSpeed optimizations (built in)

- Next.js Image: AVIF/WebP, responsive sizes, lazy load portfolio
- Calendly iframe: loads only when user scrolls to `#book` (saves ~500KB on first paint)
- `preconnect` + `dns-prefetch` for Calendly
- Font: Inter with `display: swap`
- `optimizePackageImports` for framer-motion
- Compression enabled on Vercel

## Test PageSpeed

1. [PageSpeed Insights](https://pagespeed.web.dev/) → enter `https://www.marketingwithasmat.pro`
2. Target: **90+** mobile performance (portfolio images are the main weight)

## SEO content (built in)

- Title, description, keywords, canonical URL
- Open Graph + Twitter card + auto OG image
- JSON-LD: ProfessionalService, FAQPage, Book page ReserveAction
- `/book` page indexed in sitemap
- Visible **Expertise** section with H2s for med spa, home services, Meta/Google
- FAQ section with schema markup

## SEO evaluation tools

- [Google Search Console](https://search.google.com/search-console) — add property `marketingwithasmat.pro`
- [Rich Results Test](https://search.google.com/test/rich-results) — paste homepage URL
- [Schema Markup Validator](https://validator.schema.org/) — verify JSON-LD

## Favicon

- `src/app/icon.tsx` — 32×32 PNG (browser tab)
- `src/app/apple-icon.tsx` — 180×180 PNG (iOS home screen)
- Replace with a real logo file (`app/icon.png`) when you have brand assets

## Indexing & organic traffic (USA)

### One-time setup

1. **Google Search Console** — [search.google.com/search-console](https://search.google.com/search-console)
   - Add property: `https://www.marketingwithasmat.pro`
   - Verify via DNS (recommended) or HTML tag
   - Submit sitemap: `https://www.marketingwithasmat.pro/sitemap.xml`
   - Use **URL Inspection** → “Request indexing” on `/` and `/book`
2. **Bing Webmaster Tools** — [bing.com/webmasters](https://www.bing.com/webmasters) (imports from GSC)
3. **Google Business Profile** — only if you have a US service address; optional for solo/freelance media buying

### Target keywords (hire intent, USA)

Primary: hire media buyer USA, best media buyer, Meta ads expert, Google ads specialist USA, TikTok ads expert, e-commerce media buyer, real estate Facebook ads, home service Google Ads.

Ranking takes weeks to months. It depends on dedicated URLs, recrawl, and backlinks. PageSpeed 90+ is already in place.

### Search Console (do this after every content deploy)

1. Sitemaps → submit `https://www.marketingwithasmat.pro/sitemap.xml` again (last GSC read was 14 Jun 2026, only 3 pages discovered).
2. URL Inspection → Request indexing on `/`, `/book`, `/blogs`, and each new post.
3. Performance → filter queries for “media buyer”, “meta ads”, “google ads”, “tiktok”, not only med spa.
4. Page indexing → open the 10 not-indexed URLs and fix or request recrawl.

### What actually moves rankings

| Action | Why |
|--------|-----|
| Money-keyword posts (hire, e-commerce, TikTok, real estate) | Dedicated URLs match hire intent better than one homepage |
| Resubmit sitemap after deploys | Google was reading a 3-page snapshot from June |
| WhatsApp, email, LinkedIn, Calendly on every page | Organic visitors can hire without hunting |
| Backlinks (Upwork, LinkedIn, directories, guest posts) | Authority for competitive “best media buyer” terms |
| Reviews on Upwork + LinkedIn | Trust + branded searches |

### Avoid

- Buying backlinks or fake traffic
- Keyword stuffing in hidden text
- Multiple duplicate domains for the same content

## After deploy

Submit sitemap: `https://www.marketingwithasmat.pro/sitemap.xml`
