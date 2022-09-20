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
			fifth: '#F5F5F5',
			sixth: '#fff',
		}),
		textColor: () => ({
			primary: '#18D17D',
			secondary: '#fff',
			tertiary: 'rgb(209 213 219)',
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
				'middle-a': '400px',
				'middle-b': '500px',
				footer: '260px',
				copy: '24px',
				3: '3px',
				100: '150vh',
			},
			width: {
				'hero-resource': '833px',
				'logo-2': '320px',
				'logo-3': '264px',
				1050: '1050px',
				720: '720px',
			},
			padding: {
				button: '18px 24px 17px 24px',
				header_lg: '0 100px 0 100px',
				header_md: '0 60px 0 60px',
				header_sm: '0 20px 0 20px',
			},
			lineHeight: {
				25: '25px',
				18: '18px',
				70: '70px',
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
				25: '25px',
				70: '70px',
				18: '18px',
				35: '35px',
			},
			backgroundImage: {
				heroImage1: "url('../public/images/hero1.png')",
				heroImage2: "url('../public/images/hero2.png')",
				'hero-vector-1': "url('../public/images/vector1.svg')",
				'res-1': "url('../public/images/recurso2.png')",
				'res-3': "url('../public/images/recurso3.png')",
				'vector-2': "url('../public/images/vector2.svg')",
			},
		},
	},
	plugins: [],
};
