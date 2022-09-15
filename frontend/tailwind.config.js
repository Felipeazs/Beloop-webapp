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
			tertiary: '#F3F3F3',
			quaternary: '#0BE048',
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
			height: {
				header: '90px',
				hero: '700px',
			},
			width: {
				'hero-resource': '733px',
			},
			padding: {
				button: '18px 24px 17px 24px',
				header_lg: '0 100px 0 100px',
				header_md: '0 60px 0 60px',
				header_sm: '0 20px 0 20px',
			},
			lineHeight: {
				button: '25px',
				header: '18px',
				'paragraph-1': '70px',
				'paragraph-2': '18px',
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
				'paragraph-1': '70px',
				'paragraph-2': '18px',
			},
			backgroundImage: {
				'hero-image-1': "url('../public/images/hero1.png')",
				'hero-vector-1': "url('../public/images/vector1.svg')",
			},
		},
	},
	plugins: [],
};
