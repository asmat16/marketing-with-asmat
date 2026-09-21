# Marketing with ASMAT — Brand Kit

Dark, minimal, premium. Aligned with [marketingwithasmat.pro](https://www.marketingwithasmat.pro) and your site CSS (`src/app/globals.css`).

## Colors (sync to Canva Brand Kit)

| Name | Hex | Use |
|------|-----|-----|
| Background | `#14141f` | Page & post backgrounds |
| Surface | `#1c1c2a` | Sections, alternate blocks |
| Card | `#232334` | Cards, content panels |
| Foreground | `#f4f4f5` | Headlines, primary text |
| Muted | `#9ca3af` | Body, captions |
| Accent (Teal) | `#2dd4bf` | CTAs, **ASMAT** accent, links |
| Accent Secondary | `#818cf8` | Optional highlights |
| Marketing (logo) | `#a1a1aa` | “Marketing” wordmark |
| With (logo) | `#71717a` | “with” connector |
| CTA text | `#09090b` | Text on teal buttons |

**Canva:** Brand → Brand kit → Colors → add each hex above. Name them exactly (e.g. “Background”, “Accent Teal”) so templates stay consistent.

Machine-readable copy: [`brand/tokens.json`](./tokens.json).

## Typography

| Role | Font | Weight |
|------|------|--------|
| Everything | **Inter** | 400 body, 600 labels, 700 headlines |
| Logo “Marketing” | Inter | **600** (semi-bold), smaller |
| Logo “with” | Inter | 400, muted |
| Logo “ASMAT” | Inter | **700** (bold), uppercase, wide tracking |

**Canva:** Brand kit → Fonts → add **Inter** (all weights you use: Regular, Semi Bold, Bold).

## Logo system

Typography-only wordmark — no icons, shadows, or gradients on the mark itself.

### Hierarchy

```
Marketing with  ASMAT
   ↑ smaller      ↑ bold, uppercase, hero
   semi-bold
```

### Files (`public/brand/logos/`)

| File | When to use |
|------|-------------|
| `logo-horizontal.svg` | Website header, documents (transparent) |
| `logo-horizontal-accent.svg` | Digital — **ASMAT** in teal |
| `logo-horizontal-on-dark.svg` | Export PNG for dark slides |
| `logo-square.svg` | Profile-safe mark (transparent) |
| `logo-square-on-dark.svg` | Instagram/LinkedIn avatar, app icon base |
| `logo-square-accent.svg` | Social avatar with teal **ASMAT** |

### Clear space

- Horizontal: padding ≥ height of “Marketing” on all sides  
- Square: padding ≥ 12% of canvas width  

### Minimum size

- Horizontal: ~140px wide (digital), ~1.25" print  
- Square: ~64px (favicon), 400px+ for social avatars  

### Don’t

- Stretch, rotate, or change letter-spacing on **ASMAT**
- Add drop shadows, outlines, or gradients to the wordmark
- Swap Inter for decorative fonts
- Use light backgrounds without adjusting muted text contrast

### Import into Canva

1. **Upload** SVG from `public/brand/logos/`.
2. If “with” / “Marketing” render with wrong font: select text → **Inter** → apply weights above.
3. **Download** as PNG (2×) for platforms that don’t support SVG text.
4. For editable templates, recreate the hierarchy using Inter in Canva (fastest for Stories/Reels).

## Social templates (`public/brand/templates/`)

| Template | Size | Purpose |
|----------|------|---------|
| `social-square-1080.svg` | 1080×1080 | Instagram/LinkedIn feed |
| `social-story-1080x1920.svg` | 1080×1920 | Stories/Reels |
| `social-linkedin-1200x627.svg` | 1200×627 | LinkedIn link preview / banner |

**Workflow**

1. Open SVG in Figma, Illustrator, or Canva (upload).
2. Replace placeholder headline and body copy.
3. Drop portfolio screenshots into the card area (story template).
4. Export PNG at 1× or 2×; keep background `#14141f`.

## Patterns

- **Grid:** 48px lines at `rgba(255,255,255,0.03)` — used on site (`.bg-grid`) and templates.
- **Borders:** `rgba(255,255,255,0.1)` — cards and logo frames.
- **Accent line:** 3–4px tall, `#2dd4bf`, short width under headlines.

## Voice & layout (social)

- Short headlines, one stat or proof point per slide  
- Teal only for CTA, **ASMAT**, or one accent line — not full backgrounds  
- URL footer: `marketingwithasmat.pro` in muted gray  

## Website usage

React wordmark (Inter via site font):

```tsx
import { Logo } from "@/components/Logo";

<Logo variant="horizontal" accent />
```

Static assets: `/brand/logos/logo-horizontal.svg` (served from `public/`).

## Export checklist

- [ ] Canva brand colors match table above  
- [ ] Inter added to Canva brand fonts  
- [ ] Horizontal + square logos uploaded  
- [ ] Avatar: `logo-square-accent.svg` → PNG 400×400  
- [ ] Story template saved as brand template in Canva  
