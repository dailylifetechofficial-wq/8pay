// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://8paycommission.com",
	trailingSlash: "always",
	build: { format: "directory" },
	integrations: [
		sitemap({
			filter: (page) => {
				const url = new URL(page);
				const path = url.pathname;

				// Do not submit template, placeholder, or utility routes.
				if (path === "/404/") return false;
				if (path === "/about/") return false;
				if (path.startsWith("/blog/")) return false;
				if (path === "/rss.xml") return false;
				if (path === "/hi/l/") return false;

				return url.origin === "https://8paycommission.com";
			},
		}),
	],
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});
