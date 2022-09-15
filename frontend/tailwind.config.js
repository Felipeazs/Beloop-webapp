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
			tertiary: '#D9D9D9',
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
		extend: {
			padding: {
				button: '18px 24px 17px 24px',
			},
			lineHeight: {
				button: '25px',
			},
			borderRadius: {
				button: '30px',
			},
			borderColor: {
				button: '#fff',
			},
			borderWidth: {
				button: '3px',
			},
			fontSize: {
				button: '25px',
			},
		},
	},
	plugins: [],
};
