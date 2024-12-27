module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
    },
  },
  plugins: [],
};
