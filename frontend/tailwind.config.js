/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#000313",
        "neutral-800": "#212648",
        "shades-white": "#fff",
        "neutral-200": "#f5f6f8",
        primary: "#5b2ce7",
      },
      spacing: {},
      fontFamily: {
        "body-2": "'Benton Sans'",
        "icon-small": "'Material Icons'",
        inherit: "inherit",
        "heading-04": "Rubik",
      },
      borderRadius: {
        "31xl": "50px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      lg: "18px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      "45xl": "64px",
      inherit: "inherit",
    },
    screens: {
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
