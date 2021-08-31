module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-green": "#5CDB95",
        "deep-green": "#379683",
        "light-green": "#8EE4AF",
        "deep-blue": "#05386B",
        "cream": "#EDF5E1",
        "light-grey": "#CDCDCD"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-hamburgers')],
}
