/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'soft-pink': '#FADADD',
        'lavender': '#E6E6FA',
        'coral': '#FF6F61',
        'coral-400': '#FF8A75',
        'coral-500': '#FF6F61',
        'mint': '#98FF98',
        'beige': '#F5F5DC',
        'pink': {
          50: '#FDF2F8',
          100: '#FCE7F3',
          200: '#FBCFE8',
          300: '#F9A8D4',
          400: '#F472B6',
          500: '#EC4899',
          600: '#DB2777',
        },
        'purple': {
          50: '#FAF5FF',
          100: '#F3E8FF',
          200: '#E9D5FF',
          300: '#D8B4FE',
          400: '#C084FC',
          500: '#A855F7',
          600: '#9333EA',
        },
        'lavender': {
          50: '#F8F7FF',
          100: '#F1EFFF',
          200: '#E6E6FA',
          300: '#D8D5F0',
          400: '#C4C0E8',
          500: '#B0ABDF',
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'fade-in-up': 'fadeInUp 0.8s ease-in-out',
        'slide-down': 'slideDown 0.3s ease-in-out',
        'bounce-soft': 'bounceSoft 2s infinite',
        'pulse-soft': 'pulseSoft 3s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 8px 30px rgba(0, 0, 0, 0.08)',
        'pink': '0 4px 20px rgba(244, 114, 182, 0.15)',
        'purple': '0 4px 20px rgba(168, 85, 247, 0.15)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};