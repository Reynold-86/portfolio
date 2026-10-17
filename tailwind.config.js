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
          DEFAULT: '#b7655d',
          light: '#cf8177',
          dark: '#914a45',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#070c17',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'brand-gradient': 'linear-gradient(135deg, #b7655d 0%, #a5534d 55%, #914a45 100%)',
        'mesh-1': 'radial-gradient(at 20% 20%, rgba(183,101,93,0.18) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(207,129,119,0.12) 0px, transparent 50%), radial-gradient(at 0% 80%, rgba(145,74,69,0.14) 0px, transparent 50%)',
      },
      boxShadow: {
        'glow-blue': '0 8px 28px -10px rgba(183,101,93,0.3)',
        'glow-purple': '0 8px 28px -10px rgba(183,101,93,0.3)',
        'glow-cyan': '0 8px 28px -10px rgba(183,101,93,0.3)',
        'glow-sm': '0 8px 24px -10px rgba(183,101,93,0.26)',
        'glass': '0 12px 36px 0 rgba(0,0,0,0.25)',
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
          '0%, 100%': { boxShadow: '0 8px 24px -10px rgba(183,101,93,0.26)' },
          '50%': { boxShadow: '0 8px 30px -8px rgba(183,101,93,0.34)' },
        },
      },
    },
  },
  plugins: [],
}
