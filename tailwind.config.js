/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "3rem",
        lg: "6rem",
        xl: "8rem",
        "2xl": "10rem",
      },
    },
    colors: {
      dark: "#0D0D0D",
      gray: "#BFBFBF",
      light: "#F2F2F2",
      link: "#6179DE",
      violet: "#2e215d",
    },
  },
  plugins: [],
};
