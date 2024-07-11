/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "weather-bg-primary": "#201c24",
        "weather-bg-secondary": "#dbf1f4",
        "primary-white": "#ffffff",
        "primary-black": "#1d1d1d",
        "weather-bg-transparent": "#595b6c",
      },
    },
    fontFamily: {
      Roboto: ["Roboto,sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
};
