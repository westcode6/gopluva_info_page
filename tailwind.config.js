module.exports = {
  purge: {
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
      backgroundColor: [
        "responsive", "hover", "focus", "active"
      ]
  },
  plugins: [],
}
