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
      // colors: {
      //   Primary: '#ECECEC',
      //   Secondary: '#211D50',
      //   Third: '#00E890',
      // },
      
    },
  },
  plugins: [],
};
