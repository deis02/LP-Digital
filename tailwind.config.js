/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ghostwhite: "#f8f7fc",
        gainsboro: {
          "100": "#e4e4e4",
          "200": "#e0e0e0",
          "300": "#dfdfdf",
        },
        gray: {
          "100": "#929292",
          "200": "#848484",
          "300": "#12182a",
          "400": "#111729",
        },
        white: "#fff",
        lightgoldenrodyellow: "#dbf0c0",
        whitesmoke: {
          "100": "#f3f3f3",
          "200": "#ebebeb",
        },
        darkgray: "#b0b0b0",
      },
      fontFamily: {
        urbanist: "Urbanist",
      },
      padding: {
        lg: "18px",
        xl: "20px",
        "2xs": "11px",
        "2xl": "21px",
        "3xs": "10px",
        "20xl": "39px",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      "3xs": "10px",
      xl: "20px",
      lg: "18px",
      "5xl": "24px",
      "11xl": "30px",
      inherit: "inherit",
    },
    screens: {
      sm: {
        max: "420px",
      },
      mq338: {
        raw: "screen and (max-width: 338px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
