# Marketing with Asmat

Custom Next.js site for [marketingwithasmat.pro](https://www.marketingwithasmat.pro).

## Development

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000).

## Deploy to Vercel (replace Carrd)

1. Push this folder to a GitHub repository
2. Go to [vercel.com/new](https://vercel.com/new) → Import the repo
3. Deploy (defaults work for Next.js)
4. In Vercel → **Settings → Domains**, add `www.marketingwithasmat.pro` and `marketingwithasmat.pro`
5. Update DNS at your registrar (Vercel shows the records — usually A/CNAME to Vercel)
6. In Carrd, remove or redirect the old site once Vercel is live

## Site sections

- Hero (animated, stats, CTAs)
- Niche bar (med spa, clinics, home services)
- Case study portfolio (click to enlarge)
- Med spa highlight CTA
- Results & credentials
- Services & process
- FAQ accordion
- Contact form (FormSubmit → asmat.llh@gmail.com)
- Mobile sticky “Book free call” bar
- Auto-generated OG image for LinkedIn/social shares

## Assets

- Hero: `public/asmat-hero.png`
- Case studies: `public/portfolio/featured/`
- Add more screenshots to `featured/` and edit `src/lib/site.ts` → `featuredCaseStudies`

## Contact form

First form submission triggers a FormSubmit activation email — click confirm in your inbox.
