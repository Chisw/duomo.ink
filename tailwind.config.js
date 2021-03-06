const base = {
  '8': '2rem',
  '12': '3rem',
  '16': '4rem',
  '24': '6rem',
  '32': '8rem',
  '40': '10rem',
  '48': '12rem',
  '56': '14rem',
  '64': '16rem',
}

const extra = {
  '72': '18rem',
  '80': '20rem',
  '88': '22rem',
  '96': '24rem',
  '104': '26rem',
  '112': '28rem',
  '120': '30rem',
  '128': '32rem',
  '136': '34rem',
  '144': '36rem',
  '152': '38rem',
  '160': '40rem',
}

const percent = {
  '1/2': '50%',
  '1/3': '33.33%',
  '2/3': '66.66%',
  '1/4': '25%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
}

module.exports = {
  purge: ['./src/**/*.tsx'],
  theme: {
    extend: {
      width: Object.assign({

      }, extra, percent),
      height: Object.assign({

      }, extra, percent),
      minWidth: Object.assign({

      }, base, extra, percent),
      minHeight: Object.assign({

      }, base, extra, percent),
      maxWidth: Object.assign({

      }, base, extra, percent),
      maxHeight: Object.assign({

      }, base, extra, percent),
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
