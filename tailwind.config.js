/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        opacity: "opacity",
      },
      colors: {
        navbarandfooter: '#1a202c', // 60% (dominant color)
        sixty: '#1a202c', // 60% (dominant color)
        thirty: '#2d3748', // 30% (secondary color)
        ten: '#2f855a', // 10% (highlight/accent color)
      },
    },
  },
  plugins: [],
};
