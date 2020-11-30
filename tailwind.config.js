module.exports = {
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.purple.700'),
              '&:hover': {
                color: theme('colors.purple.900'),
              },
            },
            h1: {
              color: theme('colors.purple.700'),
              textTransform: 'uppercase',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.white'),
            h1: {
              color: theme('colors.purple.300'),
              textTransform: 'uppercase',
            },
            h2: {
              color: theme('colors.purple.300'),
            },
            code: {
              color: theme('colors.purple.300'),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: { typography: ['dark'] },
  },
  plugins: [require('@tailwindcss/typography')],
};
