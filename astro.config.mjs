import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeRapide from "starlight-theme-rapide";
import { sidebar } from "./config/sidebar.config.ts";

export default defineConfig({
	integrations: [
		starlight({
			title: "Lazy Docs",
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/SOUMITRO-SAHA/neovim-config-doc",
				},
				{
					icon: "twitter",
					label: "Twitter",
					href: "https://x.com/SOUMITRO_SAHA",
				},
			],
			sidebar: sidebar,
			plugins: [starlightThemeRapide()],
		}),
	],
});
