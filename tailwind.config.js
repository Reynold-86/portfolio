/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
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
        'brand-gradient': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)',
        'mesh-1': 'radial-gradient(at 20% 20%, rgba(59,130,246,0.35) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(139,92,246,0.3) 0px, transparent 50%), radial-gradient(at 0% 80%, rgba(6,182,212,0.25) 0px, transparent 50%)',
      },
      boxShadow: {
        'glow-blue': '0 0 40px -8px rgba(59,130,246,0.45)',
        'glow-purple': '0 0 40px -8px rgba(139,92,246,0.45)',
        'glow-cyan': '0 0 40px -8px rgba(34,211,238,0.4)',
        'glow-sm': '0 0 20px -6px rgba(59,130,246,0.35)',
        'glass': '0 8px 32px 0 rgba(0,0,0,0.37)',
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
          '0%, 100%': { boxShadow: '0 0 20px -8px rgba(59,130,246,0.5)' },
          '50%': { boxShadow: '0 0 32px -4px rgba(139,92,246,0.6)' },
        },
      },
    },
  },
  plugins: [],
}
