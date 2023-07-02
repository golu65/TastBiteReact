module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 200: "#e8e8e8", 400: "#b5b5b5" },
        blue_gray: { 100: "#d4d4d4" },
        black: { 900: "#000000", "900_26": "#00000026" },
        yellow: { 100: "#ffe3c9", 900: "#f48e28" },
        white: { A700: "#ffffff" },
        deep_orange: { 100: "#f5dcc4" },
      },
      fontFamily: { montserrat: "Montserrat" },
      boxShadow: { bs: "0px 20px  80px 0px #00000026" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
