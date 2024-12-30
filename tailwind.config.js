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
      },
    },
  },
  plugins: [],
};
