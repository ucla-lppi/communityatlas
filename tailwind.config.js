// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  './pages/**/*.{js,ts,jsx,tsx,mdx}',
	  './components/**/*.{js,ts,jsx,tsx,mdx}',
	  './src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
	  extend: {
		colors: {
		  background: "var(--background)",
		  foreground: "var(--foreground)",
		  primary: {
			DEFAULT: "#003B5C", // Primary color in hexadecimal
			dark: "#003B5C",   // Dark variant of the primary color
		  },
		},
		typography: (theme) => ({
		  DEFAULT: {
			css: {
			  color: theme('colors.gray.700'),
			  a: {
				color: theme('colors.blue.500'),
				'&:hover': {
				  color: theme('colors.blue.700'),
				},
			  },
			  h1: {
				color: theme('colors.gray.900'),
			  },
			  h2: {
				color: theme('colors.gray.900'),
			  },
			  h3: {
				color: theme('colors.gray.900'),
			  },
			  h4: {
				color: theme('colors.gray.900'),
			  },
			  code: {
				color: theme('colors.pink.500'),
			  },
			  'blockquote p:first-of-type::before': {
				content: 'none',
			  },
			  'blockquote p:last-of-type::after': {
				content: 'none',
			  },
			},
		  },
		}),
	  },
	},
	plugins: [require('@tailwindcss/typography')],
  };