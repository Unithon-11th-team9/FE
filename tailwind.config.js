/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			width: {
				mobile: "375px",
			},
			colors: {
				point: "#13D20C",
				back01: "#17073A",
				back02: "#202020",
				back03: "#5C5C5C",
				white: "#FFFFFF",
				black: "#000000",
			},
			fontSize: {
				title01: "40px",
				title02: "30px",
				nameText01: "15px",
				mainText: "20px",
				subText: "12px",
			},
			lineHeight: {
				nameText01: "15px",
				mainText03: "30px",
				subText01: "25px",
				subText02: "15px",
				subText03: "25px",
			},
			borderRadius: {
				button: "5px",
			},
			padding: {
				button: "15px 20px 10px",
				button_sm: "8px 20px 5px",
			},
		},
	},
	plugins: [],
};
