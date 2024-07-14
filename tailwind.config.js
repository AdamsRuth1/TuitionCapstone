/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // blur: {
      //   lg: "10px",
      // },
      // opacity: {
      //   100: "1",
      //   0: "0",
      // },
      // opacity: {
      //   100: "1",
      //   0: "0",
      // },
      transitionProperty: {
        opacity: "opacity",
      },
      colors: {
        customLightBlueGray: "#F8FAFD",
        customBlack: "#0A0E27",
        inputText: "#A1A4A8",
        BlackFont: "#000000",
        customButton: "#252E6A",
        customButtonBtn: "#1B2025",
        customGray: "#51575D",
        customLightGray: "#606569",
        borderColor: "#F5F5F5",
        customLine: "#CCCCCC",
        customEnroll: "#606569",
        customrAdd: "#F8FAFE",
        customDash: "#FAFAFB",
      },

      fontFamily: {
        Modarat: ["Moderat-Regular", "sans-serif"],
        millik: ["Millik", "sans-serif"],
      },

      fontSize: {
        "custom-size": "60px", // Custom font size
        2: "50px",
        3: "38px",
        4: "22px",
        100: "100px",
        26: "26px",
        50: "50px",
        56: "56px",
        34: "34px",
        44: "44px",
        48: "48px",
      },
      margin: {
        92: "92px", // Custom margin
      },
      lineHeight: {
        13: "72px", // Custom line height
      },
      fontWeight: {
        "custom-weight": "400", // Custom font weight
      },
      border: {
        ".ReactFlagsSelect-style .ReactFlagsSelect-flag-select": {
          border: "none ! important",
        },
      },
      backgroundImage: {
        customBackgroundImage:
          "url('/src/assets/images/Map background (1).png')",
      },
    },
  },
  plugins: [],
};
