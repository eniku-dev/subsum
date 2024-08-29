/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4169e2",
        secondary: "#a0b4ef",
        inactive: "#6a82b8",
        background: "#eff3fc",
        textColor: "#3f507d",
        border: "#d6e1f3",
        buttonHover: "#6882b6",
      },
    },
  },
  plugins: [],
};
