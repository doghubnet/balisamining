import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0F172A',
        gold: '#D4AF37',
        stone: '#F5EDE1'
      },
      fontFamily: {
        serif: ['var(--font-playfair)'],
        sans: ['var(--font-inter)']
      },
      boxShadow: {
        luxury: '0 20px 50px rgba(212, 175, 55, 0.15)'
      }
    }
  },
  plugins: []
};

export default config;
