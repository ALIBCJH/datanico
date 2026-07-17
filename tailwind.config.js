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
          // Single source of truth for the brand orange family.
          orange: {
            DEFAULT: "#FF770F", // primary — fills, buttons, icons
            dark: "#E86500", // text/links & hover (better contrast on white)
            soft: "#FFE5D3", // soft pill / ghost-button background
            tint: "#FFF4EA", // faint hover background
            muted: "#FFE7D2", // icon-circle background
            line: "#FDD3AC", // soft border
          },
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
