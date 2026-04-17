/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F7F5F0',
        paper: '#FFFFFF',
        ink: '#0E1B2C',
        navy: '#1E3A5F',
        'navy-deep': '#132740',
        'navy-soft': '#DCE6F2',
        terracotta: '#C87A5D',
        'terracotta-soft': '#F5E4DB',
        slate: '#334155',
        fog: '#6B7280',
        mist: '#E5E4DE',
        approved: '#2D7D5A',
        pending: '#D4A017',
        alert: '#B83D3D',
        trust: '#1E3A5F',
      },
      fontFamily: {
        display: ['var(--font-display)', 'ui-serif', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.16em',
      },
      boxShadow: {
        soft: '0 2px 12px rgba(14,27,44,0.05)',
        lift: '0 6px 24px rgba(14,27,44,0.08)',
        ring: '0 0 0 3px rgba(30,58,95,0.15)',
      },
      maxWidth: {
        '6xl': '1200px',
      },
    },
  },
  plugins: [],
};
