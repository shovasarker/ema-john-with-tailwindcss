module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        customBlue: {
          50: '#95A0A7',
          400: '#2a414f',
          600: '#1c2b35',
          800: '#0e161a',
        },
        customOrange: {
          200: '#FFE0B3',
          400: '#ff9900',
          600: '#995c00',
          800: '#4c2e00',
        },
      },
      fontSize: {
        xs: ['12px', '14px'],
      },
    },
  },
  plugins: [],
}
