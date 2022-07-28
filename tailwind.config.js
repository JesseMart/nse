const { calculateNewValue } = require("@testing-library/user-event/dist/utils")

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Poppins', 'sans-serif'],
      body: ['Poppins', 'sans-serif'],
    },
    screens: {
      'xs' : '400px',
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px',
      '3xl': '1700px',
    },
    extend: {
      backgroundImage: {
        'hero-whyus' : "url('/src/utils/media/why-us.jpg')"
      },
      fontSize: {
        14: '14px',
      },
      backgroundColor: {
        'main-bg': '#20232A',
        'main-light-bg': '#FAFBFB',
        'secondary-main-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
        'hero-height': 'calc(100vh - 98px)',
      },
      textColor : {
        primary : 'rgb(31 36 40) ',
      },
    },
  },
  plugins: [],
};