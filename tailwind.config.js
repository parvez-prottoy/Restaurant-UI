/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    maxWidth: {
      container: "1320px",
    },
    extend: {
      fontSize: {
        sm: ["15px", "17.61px"],
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(123.4deg, #BD1F17 40.8%, #A61D13 76.4%, #8E1B0F 120.69%)",
      },
      colors: {
        primary: "#B52B1D",
        secondary: "#FEBF00",
        info1: "#181818",
        info2: "#0A1425",
        info3: "#333333",
      },
    },
  },
  plugins: [],
};
