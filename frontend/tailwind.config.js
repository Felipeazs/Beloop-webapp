/** @type {import('tailwindcss').Config} */

const defaultFonts = require('tailwindcss/defaultTheme');
module.exports = {
	mode: 'jit',
	content: [
		'./public/**/*.html',
		'./src/**/*.{js,jsx}',
		'./pages/**/*.{html,js}',
		'./components/**/*.{html,js}',
	],
	theme: {
		backgroundColor: () => ({
			primary: '#18D17D',
			secondary: '#1B9ECC',
			btn_primary: '#0BE048',
			btn_secondary: '#1B9ECC',
		}),
		textColor: () => ({
			primary: '#18D17D',
			secondary: '#fff',
			default: '#333232',
		}),
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		fontFamily: () => ({
			metropolis: ["'Metropolis'", ...defaultFonts.fontFamily.mono],
		}),
		extend: {},
	},
	plugins: [],
};
