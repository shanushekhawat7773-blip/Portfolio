# Arun Singh — Cinematic AI/ML Portfolio ("Cinder")

A production-ready, dark amber-lit personal portfolio website built for **Arun Singh**, AI/ML Scholar at **IIT Jodhpur**.

> *"I build AI systems that watch, predict and protect."*

---

## ✦ Key Highlights & Signature Moments

- **Hero "Cinder" Signature**:
  - Full-viewport outlined "ARUN SINGH" display typography in condensed Bebas Neue.
  - High-precision portrait cutout layered *in front* of the burning giant text with amber rim lighting (`drop-shadow` + gradient backlight).
  - Floating HTML5 Canvas ember particles drifting upward with physics and sine-wave drift.
  - Parallax motion across text, portrait, and glow on scroll.
  - Dynamic rotating role specialization line.
  - Quick action buttons ("View Projects", "Download Resume" `/resume.pdf`).
  - Side rail with LinkedIn, GitHub, and Email triggers.
- **Cinematic Project Cards**:
  - Live interactive dark abstract UI mockups in the ember palette (HUD viewfinders, anomaly SHAP impact charts, perimeter surveillance radars, latent embedding clusters).
  - Complete data coverage of Arun's 5 GitHub projects: **TrafficGuard-AI**, **SocietySecurity-AI**, **FinGuard-AI**, **MindCheck-AI**, and **CineMind-AI**.
  - Clearly marked validation & benchmark placeholders (strictly avoiding fabricated statistics).
  - GitHub links and interactive deployment preview modals.
- **Biographical Profile & Animated Counters**:
  - High-impact narrative framing Arun's full-stack model-to-cloud methodology.
  - Framed portrait with cinematic corner brackets and ambient backlighting.
  - 3 animated counters: **5+** Production Projects, **4** Programs & Badges, **3** Core Stack Disciplines.
- **Categorized Skills Matrix & Live Marquee**:
  - Filterable by *Languages*, *AI & Machine Learning*, *Web & App Engineering*, *Cloud, Data & DevOps*, and *Tools & Testing*.
  - Infinite horizontal marquee ribbon displaying core competencies.
  - Hover states with ambient ember aura.
- **Global Recognition**:
  - Official cards for **Google Cloud Innovator**, **NVIDIA Community Member**, **Google Developer**, **Google Maps Platform Innovator**, and **IIT Jodhpur (AI/ML)**.
- **Open Source GitHub Section**:
  - Featured repository cards with one-click `git clone` command copiers.
- **Interactive Contact Transmission**:
  - Client-side validation with real-time feedback.
  - Confetti burst celebration upon dispatch.
  - One-click copy email button with tooltip feedback.
- **Motion & Audio-Visual Polish**:
  - Smooth inertia scrolling via **Lenis**.
  - Custom dual-tier amber-glow cursor that expands on interactive elements (disabled on touch devices).
  - Scroll-drawing divider lines and top ember progress bar.
  - 35mm film grain texture and cinematic edge vignette.
  - Full compliance with `prefers-reduced-motion`.

---

## 🛠 Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js](https://nextjs.org/) 16 (App Router, Turbopack) |
| **Library** | [React](https://react.dev/) 19 + TypeScript |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) v4 |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) |
| **Smooth Scroll** | [Lenis](https://lenis.darkroom.engineering/) |
| **Icons & Visuals** | [Lucide React](https://lucide.dev/) + Custom SVG Icons |
| **Typography** | Bebas Neue, Inter, JetBrains Mono (via `next/font/google`) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📁 Project Architecture

```
portfolio/
├── public/
│   ├── arun.png              # Optimized cutout portrait with amber rim treatment
│   ├── arun-original.jpg     # Source portrait
│   └── resume.pdf            # Arun's up-to-date AI/ML resume
├── src/
│   ├── app/
│   │   ├── apple-icon.tsx    # High-DPI Apple touch icon (amber "A")
│   │   ├── globals.css       # Cinder theme, ember gradients, film grain & Lenis styling
│   │   ├── icon.tsx          # Dynamic favicon (amber "A" on cinder black)
│   │   ├── layout.tsx        # Root layout, fonts, meta tags, and global smooth scroll
│   │   ├── opengraph-image.tsx # Edge-rendered social sharing preview card
│   │   └── page.tsx          # Main page aggregating all cinematic sections
│   ├── components/
│   │   ├── About.tsx         # Bio narrative, framed portrait, and animated counters
│   │   ├── Contact.tsx       # Contact form with validation, confetti & channels
│   │   ├── CustomCursor.tsx  # Dual-tier trailing amber cursor
│   │   ├── EmberCanvas.tsx   # Canvas particle system for upward drifting embers
│   │   ├── FilmGrain.tsx     # SVG fractal noise overlay + radial vignette
│   │   ├── Footer.tsx        # Bleeding "ARUN SINGH" wordmark & quick navigation
│   │   ├── GitHubSection.tsx # Open-source repo grid with clone copiers
│   │   ├── Hero.tsx          # Signature moment: burning text, cutout & role flipper
│   │   ├── Icons.tsx         # Crisp SVG icons for LinkedIn, GitHub, etc.
│   │   ├── MagneticButton.tsx# Spring-physics magnetic hover button wrapper
│   │   ├── Navbar.tsx        # Glassmorphic header with active section tracking
│   │   ├── ProjectCard.tsx   # Cinematic card with abstract telemetry UI mockup
│   │   ├── Projects.tsx      # Projects feed with category filter
│   │   ├── Recognition.tsx   # Google Cloud, NVIDIA, Google Maps, IIT Jodhpur cards
│   │   ├── ScrollProgress.tsx# Top ember gradient scroll progress indicator
│   │   ├── Skills.tsx        # Categorized skill badges and marquee ticker
│   │   └── SmoothScroll.tsx  # Lenis scroll controller
│   └── data/
│       ├── portfolioData.ts  # Bio, stats, badges, and skill taxonomy
│       └── projectsData.ts   # Detailed project definitions and tags
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Test
```bash
npm run build
npm run start
```

---

## 🌐 Step-by-Step Vercel Deployment Instructions

### Method A: Deploy via GitHub (Recommended)

1. **Commit and push your portfolio to GitHub**:
   ```bash
   git add .
   git commit -m "feat: complete cinematic portfolio for Arun Singh"
   git remote add origin https://github.com/shanushekhawat7773-blip/portfolio.git
   git push -u origin main
   ```
2. **Open Vercel**:
   - Navigate to [vercel.com](https://vercel.com/) and sign in with your GitHub account.
3. **Import Project**:
   - Click **"Add New..."** → **"Project"**.
   - Select the `portfolio` repository from your GitHub list.
4. **Configure Project**:
   - **Framework Preset**: Next.js (automatically detected).
   - **Root Directory**: `./` (default).
   - **Build Command**: `next build` (default).
   - **Output Directory**: `.next` (default).
5. **Deploy**:
   - Click **"Deploy"**. Vercel will build the project and output your live production URL (e.g., `https://portfolio-arun-singh.vercel.app`).

### Method B: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```
2. **Log in to Vercel**:
   ```bash
   vercel login
   ```
3. **Deploy from project directory**:
   ```bash
   vercel
   ```
4. **Deploy to production**:
   ```bash
   vercel --prod
   ```

---

## 🎨 Design Tokens ("Cinder" Palette)

- **Cinder Void**: `#0A0806` (Primary canvas background)
- **Cinder Surface**: `#120F0C` (Card backgrounds)
- **Cinder Surface Elevated**: `#181310` (Pill badges and inset containers)
- **Ember Core Light**: `#FFA843`
- **Ember Primary**: `#FF9A2E`
- **Ember Torch**: `#FF5A1F`
- **Primary Text**: `#F3EDE4` (Off-white, 85%+ contrast on dark background)
- **Muted Text**: `#8A8178`
- **Border**: `rgba(255, 154, 46, 0.15)`

---

## 📄 License & Credits

Designed and engineered for **Arun Singh**. Built with **Next.js**, **Tailwind CSS**, and **Framer Motion**.
