/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				lightGreen: '#53c28b',
				darkGreen: '#194c33',
				gray: '#bbb'
			},
			keyframes: {
				move: {
					'0%': { transform: 'translateY(-15px)' },
					'100%': { transform: 'translateY(0px)', transform: 'scale(1.03)' }
				}
			},
			animation: {
				move: 'move 3s infinite ease alternate'
			}
		}
	},
	plugins: []
}
