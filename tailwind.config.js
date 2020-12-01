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
            h2: {
              color: theme('colors.purple.700'),
              borderBottom: `3px solid ${theme('colors.purple.700')}`,
            },
            h3: {
              color: theme('colors.purple.700'),
            },
            h4: {
              color: theme('colors.purple.700'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.white'),
            p: {
              color: theme('colors.white'),
            },
            h1: {
              color: theme('colors.purple.300'),
              textTransform: 'uppercase',
            },
            h2: {
              color: theme('colors.purple.300'),
              borderBottom: `3px solid ${theme('colors.purple.300')}`,
            },
            code: {
              color: theme('colors.purple.300'),
            },
            blockquote: {
              color: theme('colors.grey.500'),
              borderLeftColor: theme('colors.grey.500'),
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
