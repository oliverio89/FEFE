/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#0b0b0b",
        "dark-gold": "#cd9c20",
        oldlace: {
          "100": "#f2ecdd",
          "200": "rgba(242, 236, 221, 0.15)",
        },
        darkslategray: "#333533",
        darkgoldenrod: "#996900",
        black1: "#000",
        goldenrod: "#f5cb5c",
        gray: "rgba(0, 0, 0, 0.25)",
      },
      spacing: {},
      fontFamily: {
        milonga: "Milonga",
        "titulo-2": "'Alegreya Sans'",
      },
      borderRadius: {
        "31xl": "50px",
        "12xs": "1px",
        "11xl": "30px",
      },
    },
    fontSize: {
      "13xl": "32px",
      "7xl": "26px",
      lgi: "19px",
      "5xl": "24px",
      lg: "18px",
      xl: "20px",
      base: "16px",
      "61xl": "80px",
      "21xl": "40px",
      "45xl": "64px",
      "32xl": "51px",
      "19xl": "38px",
      "81xl": "100px",
      "11xl": "30px",
      "29xl": "48px",
      "10xl": "29px",
      "23xl": "42px",
      "15xl": "34px",
      "6xl": "25px",
      "101xl": "120px",
      "4xs": "9px",
      "9xl": "28px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
    scrollbar: ['rounded'],
  
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
