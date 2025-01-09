const colors = require('tailwindcss/colors'); // Import colors from Tailwind

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Adjust content paths as needed
  darkMode: 'class', // Enable dark mode toggling via class
  theme: {
    extend: {
      height: {
        "screen-minus-navbar": "calc(100vh - 4rem)", // Adjust `4rem` for your navbar height
      },
      backgroundSize: {
        "300%": "300%", // Required for gradient scrolling
      },
      animation: {
        gradient: "gradient 6s infinite linear",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      colors: {
        light: {
          primary: colors.orange['500'], // Primary orange for light theme
          secondary: colors.orange['300'],
          accent: colors.orange['600'],
        },
        dark: {
          primary: colors.cyan['500'], // Primary cyan for dark theme
          secondary: colors.cyan['300'],
          accent: colors.cyan['600'],
        },
      },
    },
  },
  plugins: [],
};
