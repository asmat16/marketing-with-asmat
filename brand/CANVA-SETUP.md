# Canva Brand Kit — step-by-step (Marketing with ASMAT)

**Time:** ~10 minutes · **Account:** your Canva Pro/Brand kit (if on free plan, some brand-kit features may be limited).

> **Security:** Never share your Canva password in chat or email. If you did, change it at [canva.com/settings](https://www.canva.com/settings/) → Password.

---

## 1. Open Brand Kit

1. Go to [canva.com](https://www.canva.com) and sign in.
2. Left sidebar → **Brand** (or **Brand Kit** / **Brand Hub**).
3. Select your brand (or **Create a brand** → name it **Marketing with ASMAT**).

---

## 2. Add brand colors (copy-paste hex)

In **Brand kit → Colors → Add color**, create these **in order** (use exact names so templates stay clear):

| Name in Canva | Hex |
|---------------|-----|
| Background | `14141F` |
| Surface | `1C1C2A` |
| Card | `232334` |
| Foreground | `F4F4F5` |
| Muted | `9CA3AF` |
| Accent Teal | `2DD4BF` |
| Accent Indigo | `818CF8` |
| Logo Marketing | `A1A1AA` |
| Logo With | `71717A` |
| CTA Text | `09090B` |

Canva often accepts hex **without** `#`; if it asks for `#`, use e.g. `#14141F`.

---

## 3. Add brand font

1. **Brand kit → Fonts**.
2. Click **Add fonts** → search **Inter**.
3. Add:
   - Inter **Regular** (400)
   - Inter **Medium** (500) — optional
   - Inter **Semi Bold** (600)
   - Inter **Bold** (700)
4. Set **Heading** = Inter Bold, **Subheading** = Inter Semi Bold, **Body** = Inter Regular.

If Inter isn’t available on your plan, use **Montserrat** or **DM Sans** as fallback (closest free alternatives).

---

## 4. Upload logos

From your project folder (or after deploy, download from site):

**Path on disk:** `public/brand/logos/`

Upload all of these to **Brand kit → Logos** (or **Uploads** then pin to brand):

| File | Use in Canva |
|------|----------------|
| `logo-horizontal.svg` | Headers, docs, wide layouts |
| `logo-horizontal-accent.svg` | Default digital (teal ASMAT) |
| `logo-horizontal-on-dark.svg` | Slides, dark posts |
| `logo-square-on-dark.svg` | Profile picture, watermark |
| `logo-square-accent.svg` | Social avatar (teal ASMAT) |

**If SVG text looks wrong after upload:**

1. Select the logo on canvas.
2. If Canva converts to editable text: set **Marketing** → Inter Semi Bold, `#A1A1AA`.
3. **with** → Inter Regular, `#71717A`.
4. **ASMAT** → Inter Bold, uppercase, letter spacing ~12–16%, `#FAFAFA` or `#2DD4BF`.

**Reliable alternative:** Upload PNG exports (export from browser at 2× size) — see section 7 below.

---

## 5. Save social post templates

Upload from `public/brand/templates/`:

1. **Create design** → **Custom size**:
   - Instagram post: **1080 × 1080**
   - Story: **1080 × 1920**
   - LinkedIn: **1200 × 627**
2. **Upload** the matching SVG (or PNG export).
3. **File → Save to Brand** / **Add to Brand templates** (wording varies by plan).
4. Rename:
   - `MWA — Square Post`
   - `MWA — Story`
   - `MWA — LinkedIn Banner`

Replace placeholder text; keep logo placement and colors from the template.

---

## 6. Build one master “square post” template in Canva

Duplicate this once; reuse for all posts.

**Canvas:** 1080 × 1080 px  
**Background:** Brand color **Background** `#14141F`  
**Optional grid:** Elements → search **grid** → thin lines, opacity ~3%, or skip (minimal is fine).

**Layout:**

| Element | Setting |
|---------|---------|
| Logo | `logo-square-accent` or horizontal centered top |
| Headline | Inter Bold 48–56px, **Foreground** |
| Subtext | Inter Regular 24–28px, **Muted** |
| Accent line | Rectangle 200×4px, **Accent Teal**, under headline |
| Footer URL | Inter Medium 18px, **Logo With** — `marketingwithasmat.pro` |

**Margins:** 80px safe zone on all sides (matches your SVG template).

Save as **Brand template**: `MWA — Feed Post Master`.

---

## 7. Export PNG logos from browser (if SVG fails in Canva)

1. Open locally or on site:
   - `file:///…/public/brand/logos/logo-horizontal-accent.svg`
   - Or `https://www.marketingwithasmat.pro/brand/logos/logo-horizontal-accent.svg` after deploy
2. Open in Chrome → zoom so logo is large → screenshot or use an SVG→PNG tool.
3. Recommended export sizes:
   - Horizontal: **1200 × 200** px transparent PNG
   - Square: **800 × 800** px PNG
4. Upload PNGs to **Brand kit → Logos**.

---

## 8. Quick checklist

- [ ] 10 brand colors added with names above
- [ ] Inter (or fallback) set as brand fonts
- [ ] 5 logo files uploaded
- [ ] 3 social templates saved to brand
- [ ] 1 master feed template saved
- [ ] Password rotated if it was shared anywhere unsafe

---

## 9. Logo typography reference (recreate in Canva text)

Use when building posts from scratch (no logo file):

**Horizontal one line:**

```
Marketing with  ASMAT
```

| Word | Font | Weight | Size (example) | Color |
|------|------|--------|----------------|-------|
| Marketing | Inter | Semi Bold | 22px | #A1A1AA |
| with | Inter | Regular | 22px | #71717A |
| ASMAT | Inter | Bold | 40px | #2DD4BF |
| ASMAT tracking | — | — | +120 to +160 | — |

**Square stacked (centered):**

- Line 1: `Marketing with` — 24px, colors as above  
- Line 2: `ASMAT` — 64px, Bold, tracking wide, #2DD4BF  

---

## Need help?

- Full brand rules: [`BRAND-KIT.md`](./BRAND-KIT.md)  
- Machine-readable colors: [`tokens.json`](./tokens.json)  
- Assets folder: `public/brand/`
