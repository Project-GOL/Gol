/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        snow: "#fffbfb",
        black: "#000",
        dodgerblue: "#4285f4",
        cornflowerblue: {
          "100": "#5c9eff",
          "200": "rgba(92, 158, 255, 0.09)",
        },
        mediumseagreen: {
          "100": "#4dc26e",
          "200": "#34a853",
        },
        gainsboro: "#d9d9d9",
        tomato: {
          "100": "#ff5c4f",
          "200": "#ea4335",
        },
        dimgray: "#5f6368",
        gray: "#030303",
        orange: "#f9ab00",
      },
      spacing: {},
      fontFamily: {
        "roboto-serif": "'Roboto Serif'",
        "open-sans-hebrew": "'Open Sans Hebrew'",
        "roboto-flex": "'Roboto Flex'",
        roboto: "Roboto",
      },
      borderRadius: {
        "41xl": "60px",
        "65xl": "84px",
        "493xl": "512px",
        "2xs": "11px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      sm: "14px",
      mini: "15px",
      "5xl": "24px",
      "77xl": "96px",
      "10xl": "29px",
      "29xl": "48px",
      "51xl": "70px",
      "23xl": "42px",
      "37xl": "56px",
      inherit: "inherit",
    },
    screens: {
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
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
