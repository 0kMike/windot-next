module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './styles/**.{js,ts,jsx,tsx,css}',
  ],
  theme: {
    colors: {
      grey: {
        DEFAULT: '#777777',
        50: '#D3D3D3',
        100: '#C9C9C9',
        200: '#B4B4B4',
        300: '#A0A0A0',
        400: '#8B8B8B',
        500: '#777777',
        600: '#5B5B5B',
        700: '#3F3F3F',
        800: '#2e2e2e',
        900: '#1c1c1c',
      },
    },
    extend: {},
  },
  plugins: [],
};
