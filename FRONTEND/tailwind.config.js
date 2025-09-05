/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Tailwind will look for classes in these file types
  ],
  theme: {
    extend: {
      screens: {
        xs: "500px", // custom breakpoint
      },
    },
  },
  plugins: [],
};
