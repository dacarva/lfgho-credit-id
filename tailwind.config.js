/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#000313",
        "neutral-800": "#212648",
        "neutral-300": "#c8ccd8",
        mediumpurple: "#a199ff",
        "neutral-200": "#f5f6f8",
        primary: "#5b2ce7",
        "shades-white": "#fff",
        "primary-2": "#c9c4ff",
        honeydew: "#d0e8da",
        "neutral-400": "#9ca1b6",
        oldlace: "#fff7e9",
        seashell: "#ffefec",
        "neutral-600": "#727793",
        slategray: "#494e6e",
      },
      spacing: {},
      fontFamily: {
        "body-2": "'Benton Sans'",
        "heading-05": "Rubik",
        "icon-small": "'Material Icons'",
        inherit: "inherit",
        roboto: "Roboto",
      },
      borderRadius: {
        "31xl": "50px",
        "81xl": "100px",
        "13xl": "32px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      lg: "18px",
      "37xl": "56px",
      "15xl": "34px",
      "26xl": "45px",
      "21xl": "40px",
      "5xl": "24px",
      "45xl": "64px",
      "19xl": "38px",
      "29xl": "48px",
      inherit: "inherit",
    },
    screens: {
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq850: {
        raw: "screen and (max-width: 850px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
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
