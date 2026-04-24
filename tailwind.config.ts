import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060d1c',
          900: '#080f1e',
          800: '#0a1220',
          700: '#0c1a2e',
          600: '#0f1e35',
          500: '#1a2340',
          400: '#1e2d4a',
          300: '#2a3a5a',
          200: '#3a4a6a',
          100: '#5a6a8a',
          50:  '#8899bb',
        },
        gold: {
          DEFAULT: '#d4af37',
          light: '#f5d87a',
          dark: '#c9a84c',
        },
        signal: {
          strong_buy: '#00e676',
          buy: '#69f0ae',
          neutral: '#c9a84c',
          sell: '#ff7043',
          strong_sell: '#ff5252',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
