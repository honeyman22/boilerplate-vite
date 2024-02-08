/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryblue: "#34405F",
        blueshade1: "#41527A",
        blueshade2: "#4C5D8B",
        blueshade3: "#5A6EA3",
        blueshade4: "#81BFB5",
        blueshade5: "#A2ACC9",
        blueshade6: "#C0C9E3",
        blueshade7: "#EAEFFF",
        blueshade8: "#F4F6FB",
        blueshade9: "#F4F6FB",
        pirmaryorange: "#EB6C00",
        orange1: "#FD8520",
        orange2: "#F79E52",
        orange3: "#F7B57C",
        orange4: "#F8C9A2",
        orange5: "#FBE1CC",
        orange6: "#FEF8F3",
        black: "#505157",
        black1: "#626265",
        black2: "#757575",
        black3: "#8C8C8C",
        black4: "#A1A1A1",
        black5: "#BBBBBB",
      },
      fontFamily: {
        roboto: "Roboto, sans-serif",
      },
    },
  },
  plugins: [],
};
