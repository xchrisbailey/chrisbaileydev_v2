const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        'Rubik',
        '-apple-system',
        'BlinkMacSystemFont',
        'avenir',
        "'helvetica neue'",
        'helvetica',
        'Ubuntu',
        'roboto',
        'noto',
        'arial',
        'sans-serif'
      ]
    },
    extend: {
      colors: {
        'accent-1': '#333',
        trueGray: colors.trueGray,
        coolGray: colors.coolGray
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.pink.600'),
              '&:hover': {
                color: theme('colors.pink.700')
              }
            },
            h1: {
              color: theme('colors.yellow.600'),
              textTransform: 'uppercase'
            },
            h2: {
              color: theme('colors.purple.700')
            },
            h3: {
              color: theme('colors.indigo.700')
            },
            h4: {
              color: theme('colors.pink.700')
            },
            code: {
              color: theme('colors.pink.700')
            }
          }
        },
        dark: {
          css: {
            color: theme('colors.white'),
            p: {
              color: theme('colors.white')
            },
            a: {
              color: theme('colors.pink.300'),
              '&:hover': {
                color: theme('colors.pink.500')
              }
            },
            h1: {
              color: theme('colors.yellow.300'),
              textTransform: 'uppercase'
            },
            h2: {
              color: theme('colors.purple.300')
            },
            h3: {
              color: theme('colors.indigo.300')
            },
            h4: {
              color: theme('colors.pink.300')
            },
            code: {
              color: theme('colors.pink.300')
            },
            blockquote: {
              color: theme('colors.grey.500'),
              borderLeftColor: theme('colors.grey.500')
            }
          }
        }
      })
    }
  },
  variants: {
    extend: { typography: ['dark'] }
  },
  plugins: [require('@tailwindcss/typography')]
};
