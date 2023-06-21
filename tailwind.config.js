/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "custom-yellow": "#E47513",
        "light-custom-yellow": "#FFA02A",
        "transparent-black": "rgb(0, 0, 0, 0.7)"
      },
      backgroundImage: {
        'hero-image': "linear-gradient(rgba(0, 0, 41, 0.5), rgba(2, 19, 10, 0.9)) , url('/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
