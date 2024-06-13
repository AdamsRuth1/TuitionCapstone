/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customLightBlueGray: "#F8FAFD",
        customBlack: "#0A0E27",
        customButton: "#252E6A",
        customButtonBtn: "#1B2025",
        customGray: "#51575D",
        customLightGray: "#606569",
        customLine: "#CCCCCC"
      },
     
      fontFamily: {
        Modarat: ["Moderat-Regular", "sans-serif"],
        millik: ["Millik", "sans-serif"],
      },

      fontSize: { 
        'custom-size': '60px', // Custom font size
        '2':'50px',
        '3':'38px',
        '4':'22px',
        '100':'100px',
        '26':'26px',
        '50':'50px',
        '56':'56px',
      },
      lineHeight: {
       
        '13': '72px', // Custom line height
      },
      fontWeight: {
       
        'custom-weight': '400', // Custom font weight
      },
      border:{
        '.ReactFlagsSelect-style .ReactFlagsSelect-flag-select': {
          border: 'none ! important',
        },
      },
      backgroundImage: {
        'customBackgroundImage': "url('/src/assets/images/Map background (1).png')",
      },
      
    },
  },
  plugins: [],
  
};
