/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				point: "#13D20C",
				back01: "#17073A",
				back02: "#202020",
				white: "#FFFFFF",
				black: "#000000",
			},
		},
	},
	plugins: [],
};
