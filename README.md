# 🍕 Cota Slice — Editorial Pizza Experience

> A modern, editorial brutalist web showcase for **Cota Slice**, a 24-hour pizza joint in Malang, Indonesia. Designed with bold typography, smooth physics-based animations, and responsive interactions.

[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TanStack Start](https://img.shields.io/badge/TanStack-Start-FF4154?style=flat-square)](https://tanstack.com/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-React-yellow?style=flat-square)](https://motion.dev/)

---

## 🌟 Key Highlights & Design Decisions

- **Brutalist Editorial Aesthetic**: High-contrast dark palette (`#0D0D0D` + `#E8522A` + `#F5F0E8`), massive typography with *Bebas Neue*, and clean zine-inspired layout.
- **Inertial Smooth Scrolling**: Powered by [Lenis](https://github.com/darkroomengineering/lenis) for a luxurious, fluid scroll feel.
- **Motion & Micro-interactions**: Parallax hero header, interactive cursor, entrance staggers, ticker strip marquee, and smooth card hover elevations using `motion/react`.
- **Accessibility & Performance First**: Semantic HTML structure, `prefers-reduced-motion` compliance, structured JSON-LD Schema (`Restaurant`), and full mobile-first responsive layout.

---

## 🛠️ Tech Stack

- **Framework**: TanStack Start / React 19 / TanStack Router
- **Styling**: Tailwind CSS v4 + PostCSS
- **Animations**: Motion (Framer Motion) + Lenis Smooth Scroll
- **Icons**: Lucide React
- **Typography**: Bebas Neue, DM Sans, DM Mono
- **Build Tool**: Vite 8

---

## 📂 Project Structure

```text
src/
├── assets/         # Optimized imagery & static assets
├── components/
│   ├── site/       # Domain components (Hero, Nav, Menu, Sections, Cursor, Loader)
│   └── ui/         # Reusable UI building blocks
├── hooks/          # Custom hooks (e.g. useLenis)
├── lib/            # Utility functions & class merger
├── routes/         # TanStack File-based routing (__root.tsx, index.tsx)
└── styles.css      # Design tokens, fonts, & custom utilities
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18+ or Bun
- npm, pnpm, or bun

### Installation

```bash
# 1. Clone repository
git clone <your-repo-url>
cd cota-slice-zine

# 2. Install dependencies
npm install
# or: bun install

# 3. Start local development server
npm run dev
# or: bun dev
```

### Production Build & Preview

```bash
npm run build
npm run preview
```

---

## 📄 License

MIT © 2025 Cota Slice Project.
