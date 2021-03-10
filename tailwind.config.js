module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: (theme) => theme("colors"),
    extend: {
      colors: {
        customRed: "#E3170A",
        customBlack: "#1A1A1A",
        customDarkGray: "#373737",
        customGray: "#5C5C5C",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
