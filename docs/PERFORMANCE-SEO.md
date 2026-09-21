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

### Target keywords (home services, USA)

Primary phrases on-site: “best media buyer for home service business”, “media buyer for my business”, “home service media buyer USA”. Ranking takes weeks–months; depends on backlinks, content depth, and competition.

### What actually moves rankings

| Action | Why |
|--------|-----|
| Case studies / blog posts for HVAC, roofing, etc. | Dedicated URLs rank better than one homepage |
| Backlinks (Upwork, LinkedIn, guest posts, directories) | Authority signals |
| Reviews on Upwork + LinkedIn recommendations | Trust + branded searches |
| Fast mobile site (PageSpeed 90+) | Core Web Vitals |
| Internal links from social bios to `/book` | Crawl paths + conversions |

### Avoid

- Buying backlinks or fake traffic
- Keyword stuffing in hidden text
- Multiple duplicate domains for the same content

## After deploy

Submit sitemap: `https://www.marketingwithasmat.pro/sitemap.xml`
