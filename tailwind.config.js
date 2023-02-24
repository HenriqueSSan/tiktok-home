module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],

  content: ['./src/**/*.{js,ts,tsx}'],
  theme: {
    screens: {
      sm: '0px',
      ns: '769px',
      md: '1025px',
      lg: '1441px',
      xl: '1921px',
      xxl: '2500px',
    },

    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
    },

    colors: {
      transparent: 'transparent',

      bodyWindow: {
        dark: {
          DEFAULT: 'rgb(18,18,18)',
        },
        light: {
          DEFAULT: '#fefefe',
        },
      },

      primary: '#ff3b5c',

      common: {
        white: {
          DEFAULT: '#fff',
          100: '#ffffff14',
          200: '#ffffffe6',
          300: '#ffffffbf',
        },
      },
    },

    fontFamily: {
      primary: ['Proxima Nova', 'Roboto', 'Arial', 'Helvetica', 'sans-serif'],
      secondary: ['SofiaPro', 'Roboto', 'Arial', 'Helvetica', 'sans-serif'],
    },

    extend: {},
  },
  plugins: [],
};
