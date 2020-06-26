module.exports = {
  purge: ['./src/**/*.tsx'],
  theme: {
    extend: {
      rotate: {
        '360': '360deg',
      },
    },
  },
  variants: {
    backgroundColor: ['hover', 'active'],
  },
  plugins: [],
}
