/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				dmsans: ['DM Sans', 'comic sans ms'],
			},
			width: {
				movie: '300px',
			},
		},
	},
	plugins: [require('tailwindcss-animated')],
};
