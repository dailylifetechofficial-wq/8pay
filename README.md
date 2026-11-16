8PayCommission
Independent 8th Pay Commission guides and calculators. Astro 5 (static pages) deployed on Cloudflare Workers.
Commands
`npm ci` then `npm run build` (output in `dist/`)
`npm run dev` for local preview
`npm run deploy` to publish with Wrangler
Structure
`src/pages/` one `.astro` file per page (English), `src/pages/hi/` for Hindi pages
`src/layouts/SiteLayout.astro` header, footer, SEO tags, schema, FAQ and related links for every page
`src/data/site.ts` single source for the DA rate, update dates, page list, navigation and image registry
`src/components/Calc.astro` and `Figure.astro` calculator and image blocks
`public/js/calculators.js` all calculators (salary, arrears, pension, gratuity, allowances, current salary, in-hand salary, pay matrix)
`public/images/` chart images (`*.webp`) and share images (`og/<slug>.png`, one per page)
`public/downloads/` downloadable PDF
Adding a page
Copy a similar page in `src/pages/` and change the text.
Add the page to `PAGES` (and `NAV_GROUPS` if it belongs in the menu) in `src/data/site.ts`.
Add its chart image to `public/images/` and register it in `IMAGES` in `site.ts`.
Add a share image at `public/images/og/<slug>.png` (1200x630).
Links must end with a trailing slash (`trailingSlash: "always"` is set in `astro.config.mjs`).
