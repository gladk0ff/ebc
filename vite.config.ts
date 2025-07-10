import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			assets: path.resolve(__dirname, "src/assets/"),
			components: path.resolve(__dirname, "src/components/"),
			pages: path.resolve(__dirname, "src/pages/"),
			src: path.resolve(__dirname, "src/"),
		},
	},
	plugins: [
		react(),
		svgr({
			include: "**/*.svg",
		}),
		VitePWA({
			registerType: "autoUpdate",
			injectRegister: false,

			pwaAssets: {
				disabled: false,
				config: true,
			},

			manifest: {
				name: "Электронная книга кассира",
				short_name: "ЭКС",
				description: "Электронная книга кассира для поиска товаров",
				theme_color: "#f97316",
			},

			workbox: {
				globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
				cleanupOutdatedCaches: true,
				clientsClaim: true,
			},

			devOptions: {
				enabled: true,
				navigateFallback: "index.html",
				suppressWarnings: true,
				type: "module",
			},
		}),
		checker({
			typescript: {
				tsconfigPath: "./tsconfig.json",
				buildMode: true,
			},
		}),
	],
});
