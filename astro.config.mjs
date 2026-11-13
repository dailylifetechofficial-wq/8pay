// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

// 301 redirects for pages that were merged into stronger pages.
// This keeps any existing Google rankings and backlinks.
const redirects = {
	"/fitment-factor-2-86-vs-2-57": "/fitment-factor-8th-pay-commission/",
	"/pay-matrix-level-1-to-5": "/8th-pay-commission-pay-matrix/",
	"/pay-matrix-level-6-to-9": "/8th-pay-commission-pay-matrix/",
	"/pay-matrix-level-10-to-18": "/8th-pay-commission-pay-matrix/",
	"/8th-pay-commission-pension-hike": "/8th-pay-commission-pension-calculator/",
	"/transport-allowance-8th-pay-commission": "/da-hra-calculator-8th-pay-commission/",
	"/up-8th-pay-commission": "/state-government-8th-pay-commission/",
	"/mp-8th-pay-commission": "/state-government-8th-pay-commission/",
	"/rajasthan-8th-pay-commission": "/state-government-8th-pay-commission/",
	"/maharashtra-8th-pay-commission": "/state-government-8th-pay-commission/",
	"/karnataka-8th-pay-commission": "/state-government-8th-pay-commission/",
	"/tn-8th-pay-commission": "/state-government-8th-pay-commission/",
	"/bihar-8th-pay-commission": "/state-government-8th-pay-commission/",
	"/west-bengal-8th-pay-commission": "/state-government-8th-pay-commission/",
};

export default defineConfig({
	site: "https://8paycommission.com",
	output: "static",
	trailingSlash: "always",
	redirects,
	integrations: [
		sitemap({
			filter: (page) => !page.includes("/404"),
			changefreq: "weekly",
			priority: 0.8,
			lastmod: new Date("2026-11-03"),
		}),
	],
	adapter: cloudflare({ platformProxy: { enabled: true } }),
});
