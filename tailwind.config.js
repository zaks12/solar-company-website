/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#E8ECF3',
          100: '#C8D1E0',
          200: '#9CADC8',
          300: '#6B82A8',
          400: '#3D557D',
          500: '#1E3658',
          600: '#16294A',
          700: '#101D32',
          800: '#0C1626',
          900: '#080F1B',
        },
        solar: {
          50: '#FFF8EC',
          100: '#FDEDD0',
          200: '#FBDBA0',
          300: '#F9C570',
          400: '#F7B04A',
          500: '#F5A623',
          600: '#D98E15',
          700: '#B07110',
          800: '#82540C',
          900: '#5C3A07',
        },
        energy: {
          50: '#E6F4ED',
          100: '#C2E5D4',
          200: '#8FCFAE',
          300: '#5BB988',
          400: '#3AA06B',
          500: '#21845B',
          600: '#1A6A49',
          700: '#15543A',
          800: '#103E2A',
          900: '#0A281C',
        },
        cream: '#F7F8FA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.7s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
