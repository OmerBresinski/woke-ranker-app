/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFEFC",
      },
      fontFamily: {
        martian: ["Martian Mono", "sans-serif"],
        inria: ["Inria Sans", "sans"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        slider: "linear-gradient(90deg, #99fdc1 0%, #1ab3b4 100%)",
      },
    },
  },
  plugins: [
    require("tailwindcss/plugin")(({ addVariant }) => {
      addVariant("search-cancel", "&::-webkit-search-cancel-button");
    }),
  ],
};
