# Launch checklist for 8paycommission.com

No one can guarantee a Google ranking or AdSense approval. This site removes the common causes of rejection and gives you the best shot; the steps below are on you.

## Before you deploy
1. `npm install && npm run build` and fix any error the build shows.
2. Open `/up-8th-pay-commission/` after deploy and confirm it redirects to `/state-government-8th-pay-commission/`.
3. Replace the Gmail contact address with a domain address (for example contact@8paycommission.com). It appears in `about-us`, `contact-us`, `privacy-policy`, `terms-of-condition`, `editorial-policy`.
4. Add real author names, a short bio and a location to `about-us.astro`. Reviewers and readers trust named people.
5. Spot-check the state table in `state-government-8th-pay-commission.astro` and the Transport Allowance slabs in `da-hra-calculator-8th-pay-commission.astro` against official orders.

## After deploy
1. Search Console: add the property, submit `https://8paycommission.com/sitemap-index.xml`, and request indexing for the home page and the top 10 pages.
2. Check Coverage and Core Web Vitals after a week.
3. Apply for AdSense only after most pages show as indexed. Keep the site free of placeholder ad units until approved; then enable Auto ads in the AdSense dashboard.
4. If you serve users in the EEA or UK, add a Google-certified consent banner (CMP).

## Keeping rankings: the update routine
Pay-commission searches reward fresh, accurate pages. When news lands (a DA hike, an interim report, a Cabinet decision):
1. Edit `src/data/site.ts`: `DA_NOW`, `UPDATED_ISO`, `UPDATED_LABEL`.
2. Update `da-hike-latest-news` (DA table) and `8th-pay-commission-latest-news` (timeline).
3. Update `public/js/calculators.js` (`DA_NOW`).
4. Deploy and re-request indexing for the changed pages.

## What helps ranking beyond this code
- Links from relevant sites (employee forums, pensioner associations, news sites). This matters most and cannot be built in code.
- Accuracy and speed on breaking news. Established competitors publish fast; yours should cite official sources.
- Do not copy text from other sites and do not add low-value pages to pad the site.
