/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#040404',
          900: '#080808',
          850: '#0d0d0d',
          800: '#121212',
          700: '#1a1a1a',
          600: '#262626',
        },
        brand: {
          red: '#FF2020',
          'red-bright': '#FF3B3B',
          'red-dark': '#B30000',
          'red-glow': 'rgba(255, 32, 32, 0.4)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        heading: ['Sora', 'sans-serif'],
      },
      boxShadow: {
        'red-glow': '0 0 25px rgba(255, 32, 32, 0.35)',
        'red-glow-lg': '0 0 50px rgba(255, 32, 32, 0.5)',
        'card-glow': '0 10px 30px -10px rgba(255, 32, 32, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(255, 32, 32, 0.2)' },
          '100%': { boxShadow: '0 0 35px rgba(255, 32, 32, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
