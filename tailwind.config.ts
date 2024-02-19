import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			gridTemplateColumns: {
				fit: "repeat(auto-fit, 288px)",
			},
			gridTemplateRows: {
				page_layout: "100px, 1fr 100px",
			},
		},
	},
	plugins: [],
};
export default config;
