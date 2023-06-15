/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        popins: ["Poppins", "sans-serif"],
        headers: ["Aldrich", "sans-serif"],
        text: ["Rajdhani", "sans-serif"],
      },
      colors: {
        bg: "#1f1f38",
        "bg-variant": "#2c2c6c",
        primary: "#4db5ff",
        "primary-variant": "rgba(77, 181, 255, 0.4)",
        "light-gray": "rgba(255, 255, 255, 0.6)",
        "light-primary": "#145862",
        btn: "#8e44ad",
      },
      keyframes: {
        slideInFromBottom: {
          "0%": {
            transform: "translateY(100%)",
          },

          "70%": {
            transform: "translateY(-7%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        slideInFromTop: {
          "0%": {
            transform: "translateY(-600%)",
          },

          "70%": {
            transform: "translateY(7%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        cdAnimation: {
          "0%": {
            transform: "rotate(0deg)",
          },

          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        slideInFromBottom: "1s ease-out 0s 1 slideInFromBottom",
        slideInFromTop: "1s ease-out 0s 1 slideInFromTop",
        cdAnimation: "20s linear cdAnimation infinite",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
