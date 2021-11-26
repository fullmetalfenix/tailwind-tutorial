module.exports = {
  purge: {
    enabled: true,
    content: ["./**/*.jsx", "./index.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        brand:{
          light:'#546E7A',
          DEFAULT:'#263238',
        }
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
}
