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

      primary: {
        '@100': '#ff3b5c',
      },

      common: {
        white: '#ffffff',
        black: '#161823',
      },

      gray: {
        '100-opacity-90': '#ffffffe6',
        '100-opacity-75': '#ffffffbf',
        '100-opacity-40': '#ffffff0a',
        '100-opacity-12': '#ffffff1f',
        '200-opacity-75': '#161823bf',
        '100-opacity-08': '#ffffff14',
      },

      app: {
        dark: {
          window: '#121212',
          text: '#ffffffe6',
        },

        light: {
          window: '#ffffff',
          text: '#161823',
        },
      },
    },

    fontFamily: {
      primary: ['ProximaNova', 'Roboto', 'Arial', 'Helvetica', 'sans-serif'],
      secondary: ['SofiaPro', 'Roboto', 'Arial', 'Helvetica', 'sans-serif'],
    },

    extend: {},
  },
  plugins: [],
};
