DevClario — AI Software Studio

This Next.js (App Router) project is a minimal, production-oriented starter for an enterprise-grade AI software studio website built with:

- Next.js (App Router)
- JSX (JavaScript)
- Tailwind CSS
- Component-based architecture (React)

What’s included
- Reusable components for a complete marketing site: `Navbar`, `Hero`, `Services`, `AIFocus`, `HowWeWork`, `Industries`, `WhyDevClario`, `CTA`, and `Footer`.
- Dark, enterprise AI design system (deep navy/slate backgrounds, white/soft-gray text, blue→purple accents for primary CTAs).
- Each major section uses `min-h-screen` so it fills a full viewport height.

Running locally

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open the site in your browser:

```
http://localhost:3000
```

Files & structure

- Main app entry: `src/app/layout.js` and `src/app/page.js`.
- Global styles: `src/app/globals.css` (dark theme variables + Tailwind base).
- Components: `src/components/*.jsx` (see component list above).
- Path alias `@/` is configured in `jsconfig.json` to map to `./src`.

Design notes

- Theme: deep navy backgrounds (#0a0f1a / #0f172a) with slate text and subtle dividers.
- Accent gradient (blue→purple) is used only for primary CTAs and highlights.
- No glassmorphism or heavy shadows; minimal borders and accessible typography.

Preview & development notes

- Dev server runs by default on port 3000 (`http://localhost:3000`).
- The project uses `next/font` for optimized web fonts (Geist in this starter).

Deploy

You can deploy to Vercel or another Node-compatible host. See Next.js docs for deployment options.

Contact

hello@devclario.com

---

This README was updated to reflect the project's current structure and components.
