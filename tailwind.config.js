/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './assets/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0D2A3F', deep: '#081922' },
        'blue-brand': {
          DEFAULT: '#2E7AB8',
          mid: '#2568A0',
          light: '#4A9AD4',
          pale: '#D6E8F5',
        },
        gold: { DEFAULT: '#C9A84C', light: '#E8C96E' },
        cream: { DEFAULT: '#F2EDE0', light: '#FAF7F2', mid: '#EDE5D2' },
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
