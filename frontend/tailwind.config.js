/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	content: ['./pages/**/*.{html,js}', './components/**/*.{html,js}'],
	theme: {
		backgroundColor: (theme) => ({
			primary: '#4B4A67',
			secondary: '#564256',
			other: '#4D5057',
		}),
		extend: {},
	},
	variants: {
		backgroundColor: ['responsive', 'hover', 'focus', 'active'],
	},
	plugins: [],
};
