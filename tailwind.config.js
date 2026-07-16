/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
      },
      colors: {
        brand: {
          orange: "#FF770F",
          purple: "#3B2B78",
          deep: "#352969",
        },
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
