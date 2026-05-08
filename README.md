# D Varshith Reddy — Portfolio

A futuristic, premium-quality personal portfolio for **D Varshith Reddy** — CSE AIML student, AI developer, full-stack builder, and hackathon enthusiast.

Built to feel like a top AI engineer portfolio crossed with a YC startup landing page: dark UI, glassmorphism cards, neon gradient glows, particle background, cursor glow, and motion everywhere.

### 🔗 Live Site

**[https://varshithdepa45.github.io/Personal_website/](https://varshithdepa45.github.io/Personal_website/)**

Auto-deployed on every push to `main` via GitHub Actions → GitHub Pages.

---

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** + `tailwindcss-animate`
- **Framer Motion** (entrance, scroll, layout, and orbit animations)
- **Shadcn UI** patterns (Button, Card, Input, Textarea, Badge)
- **Lucide React** icons
- Fully responsive · Dark mode by default

---

## Features

- Floating glassmorphic navbar with active section indicator + mobile menu
- Hero with animated gradient text, floating blobs, orbiting tech ring, and scroll cue
- About split layout with profile card and animated stat counters
- Skills with animated progress bars, gradient borders, and shimmer
- Featured projects with alternating layouts, mock app cards, and tech badges
- Vertical journey timeline with glowing fill line
- Achievements grid with floating motion and counter animations
- Contact form with submit states + social cards + resume download
- Minimal futuristic footer
- Cursor glow tracking, scroll progress bar, particle/grid background, loading screen
- SEO metadata, OG tags, custom favicon
- Reduced-motion support

---

## Project Structure

```
ps/
├── public/
│   └── favicon.svg
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/                  # Reusable primitives (button, card, input, textarea, badge, section-heading)
│   │   ├── sections/            # Hero, About, Skills, Projects, Timeline, Achievements, Contact, Footer
│   │   ├── Counter.tsx
│   │   ├── CursorGlow.tsx
│   │   ├── GridBackground.tsx
│   │   ├── LoadingScreen.tsx
│   │   ├── Navbar.tsx
│   │   ├── ParticleBackground.tsx
│   │   └── ScrollProgress.tsx
│   ├── lib/
│   │   ├── animations.ts        # Framer Motion variants
│   │   ├── constants.ts         # All site copy, projects, skills, etc.
│   │   └── utils.ts
│   └── types/
│       └── index.ts
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
├── postcss.config.js
└── package.json
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
# or
pnpm install
# or
yarn
```

### 2. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm run start
```

---

## Customization

All site copy, projects, skills, timeline, and stats live in **`src/lib/constants.ts`**.
Update that single file to make the portfolio yours — the entire site updates automatically.

- **Personal info / email / resume:** `SITE` constant
- **Nav items:** `NAV_ITEMS`
- **Hero socials:** `SOCIALS`
- **Stats / achievements:** `STATS`, `ACHIEVEMENTS`
- **Skills & levels:** `SKILL_CATEGORIES`
- **Projects:** `PROJECTS`
- **Timeline:** `TIMELINE`
- **About highlights:** `ABOUT_HIGHLIGHTS`

Add a real `public/resume.pdf` so the **Download Resume** button works.

---

## Deployment

The live site is hosted on **GitHub Pages** from the `gh-pages` branch (which contains the static `out/` build).

### Re-deploy manually

```bash
NEXT_PUBLIC_BASE_PATH=/Personal_website npm run build
# then push the contents of out/ to the gh-pages branch
git subtree push --prefix out origin gh-pages
```

### Optional: auto-deploy on push (GitHub Actions)

A ready-to-use workflow ships with the repo at [.github/deploy-workflow.template.yml](.github/deploy-workflow.template.yml). To enable auto-deploys:

1. Grant the `workflow` scope to your GitHub token (one time):
   ```bash
   gh auth refresh -h github.com -s workflow
   ```
2. Move the template into the active workflows directory:
   ```bash
   mkdir -p .github/workflows
   git mv .github/deploy-workflow.template.yml .github/workflows/deploy.yml
   git commit -m "ci: enable Pages auto-deploy"
   git push
   ```
3. In repo **Settings → Pages**, set **Source** to **GitHub Actions**.

After this, every push to `main` rebuilds and redeploys the site automatically.

### Alternative platforms (no static-export config needed)
- **Vercel:** import the repo on [vercel.com/new](https://vercel.com/new) — auto-detects Next.js.
- **Netlify:** works out of the box with the Next.js runtime.
- **Cloudflare Pages:** select the Next.js preset.
- **Self-hosted:** `npm run build && npm run start` behind any Node-friendly reverse proxy.

For non-Pages hosts, unset `NEXT_PUBLIC_BASE_PATH` and remove `output: "export"` from `next.config.js` if you want full Next.js features (image optimization, ISR, etc.).

---

## Performance Notes

- Fonts are loaded via `next/font` (zero layout shift, self-hosted).
- The particle canvas auto-scales by viewport size and respects DPR (capped at 2).
- All section animations are tied to `viewport={{ once: true }}` so they don't re-run on scroll.
- `prefers-reduced-motion` is honored globally.

---

## License

Personal portfolio. Feel free to fork and adapt for your own use.
