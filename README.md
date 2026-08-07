# Cota Slice Zine

Build a modern, minimalist pizza restaurant website for "Cota Slice" — a 24-hour pizza joint in Malang, Indonesia. The design should feel like a premium editorial food magazine meets a brutalist street food brand: bold typography, clean whitespace, seamless scroll-driven animations, and mouth-watering food photography placeholders.

---

## TECH STACK

- Next.js (App Router) — routing, SSR, image optimization with <Image/>
- React — component-based UI
- Tailwind CSS — utility-first styling, responsive design
- shadcn/ui — base components (Dialog, Badge, Tabs)
- Lucide React — icons
- clsx + tailwind-merge — dynamic class handling
- Framer Motion — page transitions, scroll animations, hover micro-interactions, shared layout animations
- Lenis Scroll — smooth inertia scrolling (wrap the app in Lenis provider)

---

## BRAND & VISUAL IDENTITY

**Color Palette:**
- Primary: #E8522A (burnt orange / brand orange, dominant accent)
- Background: #0D0D0D (near-black, main page background)
- Surface: #F5F0E8 (warm cream, used for menu cards and sections)
- Text Primary: #FFFFFF (white, on dark backgrounds)
- Text Dark: #0D0D0D (on cream backgrounds)
- Muted: #888888 (secondary labels, prices)

**Typography:**
- Display: Use a bold, condensed sans-serif (Bebas Neue via Google Fonts, or Anton). Used for the massive "COTA SLICE" logotype and section headers. Letter-spacing: tight.
- Body: Use Inter or DM Sans. Clean, readable, modern.
- Prices and labels: Monospace or tabular numbers for alignment.

**Aesthetic Direction:**
- Brutalist-minimal: large type, heavy contrast, generous negative space
- No gradients — flat color blocks only
- Rounded corners only on menu cards (radius: 24px), everything else is sharp
- The website feels like a zine / editorial spread brought to life with motion

---

## PAGES & SECTIONS

### 1. NAVIGATION (Sticky, transparent → solid on scroll)
- Logo: "COTA SLICE" in Bebas Neue, left-aligned, #E8522A color
- Nav links: Menu, About, Reviews, Contact — right aligned, white, uppercase, small tracking
- On scroll past hero: background becomes #0D0D0D with a 1px bottom border in #E8522A
- Mobile: hamburger menu → full-screen overlay in #E8522A, black text, animated open/close with Framer Motion

### 2. HERO SECTION (Full-screen, viewport height)
- Background: #0D0D0D
- MASSIVE display text: "COTA" on line 1, "SLICE" on line 2 — each word ~40vw font size, Bebas Neue, white. Mirror the rotated/stacked layout from the brand's existing visual identity.
- Subtitle beneath: "Pizza. Malang. 24 Jam." — small, spaced, #E8522A color
- A large, high-quality pizza image (use placeholder from https://source.unsplash.com/random/1200x800/?pizza or a static placeholder) positioned overlapping the text — slightly rotated (-5deg), animate it floating gently (subtle up/down loop with Framer Motion)
- Scroll indicator at bottom: animated downward arrow in #E8522A
- Entry animation: text slides up with staggered delay, pizza image fades + scales in

### 3. MARQUEE / TICKER STRIP
- Full-width horizontal scrolling ticker strip between hero and next section
- Background: #E8522A, text: #0D0D0D
- Content repeating: "OPEN 24 JAM · PIZZA · PASTA · SPARKLING · OAT M*LK · COTATO FRIET · MALANG · COTA SLICE ·"
- Infinite loop animation, CSS or Framer Motion
- Font: Bebas Neue, large, uppercase

### 4. MENU SECTION
- Section header: "THE MENU" in huge Bebas Neue, white, left-aligned
- Background: #0D0D0D
- Display menu in categorized layout. Use Framer Motion staggered fade-in as cards enter viewport.

**Menu Categories and Items (exact data):**

**SPARKLING**
- Honey Lime — 15K (honey · lime · milk fermented)
- Yuzu Moon — 18K (yuzu pure · peach · berry)
- Leco Tropica — 18K (lychee · lemon · coconut water)
- Berry Flower — 20K (forest berry · lemon · honey · rose)

**COTA MILK**
- Ice Cold — 13K
- Flurry Oreo — 16K
- Chocolate — 15K
- Matcha — 16K
- Berries — 15K

**OAT M*LK**
- Chocoside — 18K
- Matcha M*lk — 18K
- Oatside Mango — 19K

**PIZZA**
- Beefumo — 38K (beef · mozzarella · dry basil · fresh basil · cota sauce with olive oil)
- Peppe Delight — 38K (pepperoni · fresh basil · dry basil · tomato sauce with olive oil)
- Cota Bufala — 35K (bufallo cheese · parmesan cheese · fresh basil · tomato sauce with olive oil)
- Packaging — +2K

**PASTA**
- Fettucini Bolognesia — 20K (smoke beef · basil · tomato sauce)
- Fettucini Carboneira — 22K (smoke beef · mushroom · basil · parmesan cheese cream sauce)

**COTATO FRIET**
- Reguler — 18K
- Large — 20K

Menu card design:
- Background: #F5F0E8 (cream), dark text
- Category label: #E8522A, Bebas Neue, large
- Item name: bold Inter, 18px
- Ingredients: small, muted (#888888), italic
- Price: monospace, right-aligned, #E8522A
- On hover: card lifts slightly (translateY: -4px), shadow deepens — Framer Motion whileHover

### 5. ABOUT / VIBE SECTION
- Split layout: left side is a large pizza photo, right side is text
- Headline: "Pizza Tipis. Harga Masuk Akal." in Bebas Neue, huge
- Body copy: "Cota Slice buka 24 jam di jantung Kota Malang. Satu ukuran pizza. Loyang penuh. Delapan slice. Tempat kecil, suasana cozy, dan cermin besar buat foto. Karena pizza ini terlalu bagus untuk disimpan sendiri."
- Rating badge: show "4.7 ★ · 2.416 ulasan" as an orange pill badge
- Location: "Jl. Brigjend Slamet Riadi No.19a, Malang"
- Scroll-triggered animation: text slides in from right, image from left

### 6. REVIEWS SECTION
- Background: #F5F0E8 (cream), dark text
- Section header: "KATA MEREKA" in Bebas Neue
- Display 4 review cards in a horizontal scroll or masonry layout
- Reviews:
  1. Nindy Aristi — ★★★★★ — "Harga 38ribuan, kualitas premium. Tempat minimalis, aesthetic, ada full mirror buat selfie."
  2. Afrashani Sha — ★★★★★ — "Pizza tipis ukuran loyang 40-50cm, dapat 8 slices. Harga bersaing banget di 35-38K."
  3. Ratna Sari Loebis — ★★★★★ — "ONE SIZE pizza tapi gede banget. Porsi yang bikin takjub. Next mau coba pastanya!"
  4. Uni S — ★★★★★ — "Bakal balik lagi JELAS. Harga dan rasa sesuai. Bisa dine in, bisa take out."
- Card style: white background, sharp corners, #E8522A top border (3px), Inter body text
- Reviewer name: bold, small avatar circle with initials

### 7. CONTACT / FIND US SECTION
- Background: #0D0D0D, white text
- Large CTA text: "YAUDAH, KESINI AJA." in Bebas Neue, massive
- Contact info displayed cleanly:
  - 📍 Jl. Brigjend Slamet Riadi No.19a, Malang
  - 📞 0822-2659-3355
  - 🌐 cotaslice.id
  - ⏰ Open 24 Jam
- Two CTA buttons styled as outlined (#E8522A border, transparent bg, #E8522A text):
  - "Lihat Menu WhatsApp" → links to https://wa.me/c/6282226593355
  - "Kunjungi Website" → links to https://cotaslice.id
- On hover: buttons fill with #E8522A, text turns black — Framer Motion transition

### 8. FOOTER
- Background: #E8522A
- Text: #0D0D0D, Bebas Neue
- "COTA SLICE © 2025 · MALANG · OPEN 24 JAM"
- Minimal, single line

---

## ANIMATION REQUIREMENTS (Framer Motion + Lenis)

1. **Lenis**: Initialize Lenis smooth scroll globally. Connect to Framer Motion's useScroll via requestAnimationFrame loop.

2. **Page load sequence**: 
   - Black screen fades out (0.6s)
   - "COTA" slides up (0.5s, delay 0.2s)
   - "SLICE" slides up (0.5s, delay 0.35s)
   - Pizza image scales from 0.8 to 1.0 and fades in (0.8s, delay 0.5s)

3. **Scroll reveals**: Use Framer Motion `whileInView` with `viewport={{ once: true, margin: "-100px" }}` for all sections. Default: `{ opacity: 0, y: 40 }` → `{ opacity: 1, y: 0 }`, duration 0.6s.

4. **Menu cards**: Staggered children animation — `staggerChildren: 0.08s` from parent container.

5. **Floating pizza**: Infinite loop animation on hero pizza image: `y: [0, -12, 0]`, duration 4s, ease "easeInOut", repeat Infinity.

6. **Hover interactions**: All interactive cards and buttons use `whileHover` with subtle scale (1.02) and transition duration 0.2s.

7. **Ticker strip**: CSS `@keyframes marquee` infinite horizontal scroll, or use Framer Motion `animate={{ x: [0, -50%] }}` with `repeat: Infinity, duration: 20s, ease: "linear"`.

---

## RESPONSIVE DESIGN

- Mobile first. All font sizes scale down (hero text: 48px on mobile vs 20vw on desktop)
- Menu section: single column cards on mobile, 2-col on tablet, 3-col on desktop
- Nav collapses to hamburger on mobile
- About section: stacks vertically on mobile
- Touch-friendly tap targets (min 44px)

---

## QUALITY DETAILS

- Use next/image for all images with proper width/height and priority on hero image
- Add `prefers-reduced-motion` media query: disable all Framer Motion animations if user prefers reduced motion
- Semantic HTML: ``, ``, `

`, `

`, `

`
- Meta tags in layout.tsx: title "Cota Slice | Pizza Malang 24 Jam", description from the vibe copy
- Loading states: skeleton shimmer on menu cards while data loads
- Smooth anchor scrolling for nav links

reduce the AI-slop making website

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ace2d8d0-b3b8-4672-a64e-6de38cf24023).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
