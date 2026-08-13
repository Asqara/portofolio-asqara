# ALFATH_ Engineering Portfolio

A statically generated engineering portfolio for Alfath Asqar Tsani. The site presents full-stack systems, data infrastructure, platform engineering, production operations, experience, and education through a cyber-brutalist editorial interface.

## Stack

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Framer Motion
- `lottie-react`
- `next-themes`
- Local JSON content and local artwork

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

Production verification:

```bash
pnpm build
pnpm start
```

## Content editing

Portfolio content is kept outside the presentation layer:

```text
data/
  projects.json
  experience.json
  skills.json
  education.json
  site.json
```

Edit these files directly. Project components automatically omit unavailable links, empty galleries, and empty metric collections.

## Adding a project

Add a new object to `data/projects.json` with a unique `id` and `slug`. The reusable schema supports title, subtitle, year, role, category, descriptions, challenge, solution, impact, URLs, artwork, gallery, stack, capabilities, metrics, featured/highlight state, production status, and platform description.

Set `featured` to `true` for inclusion on the home page. The `/work/[slug]` case-study route and its metadata are generated automatically.

## Project artwork

- Cover: `1600 × 1000` (8:5)
- Gallery: `1600 × 1000` or `1920 × 1200`
- Store assets under `public/images/projects/`
- Use stable 8:5 framing; dashboard captures should be composed for top-center positioning

The starter artwork is local SVG system art so the repository ships without remote image dependencies.

## Theme behavior

Theme preference uses `next-themes`, follows the operating-system preference initially, and persists the user choice. Light and dark modes have separate surface, text, and border tokens documented in `design.md`.

## Deployment

No API, database, environment variable, or persistent service is required.

1. Import the repository into Vercel.
2. Keep the detected Next.js defaults.
3. Deploy.

Update the canonical origin (`https://asqara.dev`) in `src/app/layout.tsx`, `src/app/sitemap.ts`, and `src/app/robots.ts` if the production domain differs.
