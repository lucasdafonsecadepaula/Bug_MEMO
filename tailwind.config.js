module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#dedede',
      'secondary': '#ECE9D8',
      'blueish': '#0055EA',
      'win98-p': "#C0C0C0",
      'win98-blue1': "#010583",
      'win98-blue2': "#1084D0",
        }),
    borderColor: theme => ({
      ...theme("colors"),
      'blueish': '#0055EA'
      }),
    extend: {
      backgroundImage: {
        'win98-background': "url('/windows-98-bg.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
