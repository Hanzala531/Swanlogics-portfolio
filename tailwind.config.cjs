/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: {
        'custom': '(min-width: 635px) and (max-width: 765px)',
      },
      colors: {
        brand: {
          purple: '#9B82F6',
          lime: '#D0FF71',
          navy: '#071E42',
          ink: '#000A17',
          moss: '#101700',
          gray: '#696969',
          carbon: '#010202',
        },
      },
      fontFamily: {
        hanken: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
        dewi: ['"RF Dewi Extended"', '"Hanken Grotesk"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        surface: '0 0 10px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
