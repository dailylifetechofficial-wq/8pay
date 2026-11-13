# 8PayCommission

Astro 5 static site deployed on Cloudflare (Workers assets).

- `src/layouts/SiteLayout.astro` – one shared layout: SEO meta, JSON-LD (Article, BreadcrumbList, FAQPage), header, footer, AdSense auto-ads script.
- `src/data/site.ts` – page registry, navigation, image captions, DA rate and update date. Update `DA_NOW`, `UPDATED_ISO` and `UPDATED_LABEL` when facts change.
- `src/pages/*.astro` – content pages. Each passes `faq`, `toc` and `related` to the layout.
- `public/js/calculators.js` – all calculators (no dependencies). 8th CPC inputs are scenarios.
- `public/images/` – infographics (webp) and `public/images/og/` social images (png).
- `astro.config.mjs` – 301 redirects for merged pages.

Commands: `npm install`, `npm run dev`, `npm run build`, `npm run deploy`.
