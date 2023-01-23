/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {},
    extend: {
      gridTemplateColumns: {
        card: "repeat(auto-fill, minmax(250px, 1fr))",
      },
      minHeight: {
        calc: "calc(100vh - 14rem)",
      },
    },
  },
  plugins: [],
};
