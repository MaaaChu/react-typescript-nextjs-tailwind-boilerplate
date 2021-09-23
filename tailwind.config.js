const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Karla", ...defaultTheme.fontFamily.sans],
      heading: ["Karla", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        background: "var(--background)",
        "background-2": "var(--background-2)",
        foreground: "var(--foreground)",
        "foreground-2": "var(--foreground-2)",
        link: "var(--link-colour)",
        accent: "var(--accents-1)",
        "accent-2": "var(--accents-2)",
        buttonForeground: "#fff",
        "button-foreground": "var(--button-foreground)",
        buttonBackground: "#000",
        "button-background": "var(--button-background)",
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["hover"],
      borderOpacity: ["hover"],
    },
  },
  plugins: [],
};
