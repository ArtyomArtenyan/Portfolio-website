/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				'max-w-2xl': { max: '1536px' },
				'max-w-xl': { max: '1280px' },
				'max-w-lg': { max: '1024px' },
				'max-w-md': { max: '768px' },
				'max-w-sm': { max: '640px' },
				'max-w-ss': { max: '425px' },
			},
		},
	},
	plugins: [],
};
