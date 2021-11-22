module.exports = {
  purge: [
    './**/*.{js,jsx,ts,tsx}',
    './index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
}
