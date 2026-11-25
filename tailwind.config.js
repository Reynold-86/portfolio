/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#6c151e',
          light: '#84232c',
          dark: '#0f3d3a',
        },
        slate: {
          50: '#fff8f0',
          100: '#f5dabf',
          200: '#ead0bd',
          300: '#8a9993',
          400: '#657873',
          500: '#45605b',
          600: '#294c48',
          700: '#173f3c',
          800: '#0f3d3a',
          900: '#0b302e',
          950: '#071f1e',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'brand-gradient': 'linear-gradient(135deg, #84232c 0%, #6c151e 55%, #0f3d3a 100%)',
        'mesh-1': 'radial-gradient(at 20% 20%, rgba(108,21,30,0.16) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(15,61,58,0.12) 0px, transparent 50%), radial-gradient(at 0% 80%, rgba(108,21,30,0.12) 0px, transparent 50%)',
      },
      boxShadow: {
        'glow-blue': '0 10px 28px -12px rgba(108,21,30,0.32)',
        'glow-purple': '0 10px 28px -12px rgba(108,21,30,0.32)',
        'glow-cyan': '0 10px 28px -12px rgba(108,21,30,0.32)',
        'glow-sm': '0 8px 24px -10px rgba(108,21,30,0.22)',
        'glass': '0 12px 36px 0 rgba(15,61,58,0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-in': 'slideIn 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'blob': 'blob 18s infinite ease-in-out',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 8px 24px -10px rgba(108,21,30,0.22)' },
          '50%': { boxShadow: '0 8px 30px -8px rgba(108,21,30,0.3)' },
        },
      },
    },
  },
  plugins: [],
}
