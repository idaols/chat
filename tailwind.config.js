/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "mm-pale-pink": "#fde4e8ff",
        "mm-key-lime": "#ecf877ff",
        "mm-fiery-rose": "#fe586fff",
        "mm-dark-sienna": "#2d0001ff",
        "mm-sky-blue-crayola": "#71d8f5ff",
        "mm-baby-powder": "#f7f7f2ff",
      },
      backgroundImage: {
        "bg-image": "url('./img/wave-bg.svg')",
        "nav-bg": "url('./img/nav-bg4.svg')",
      },
    },
  },
  plugins: [],
};
