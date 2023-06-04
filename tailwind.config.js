/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#FFD54F",
        "secondary-color": "#FFE082",
      },
      screens: {
        400: "400px",
      },
    },
  },
  plugins: [],
};
