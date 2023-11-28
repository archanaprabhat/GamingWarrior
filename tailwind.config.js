/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mob:"420px",
      tab: "640px",
      // => @media (min-width: 640px) { ... }
      lap: "1024px",
      // => @media (min-width: 1024px) { ... }
      desk: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
