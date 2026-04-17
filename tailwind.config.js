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
        // Foundation
        paper: '#FAFAF7',
        cardstock: '#FFFFFF',
        shelf: '#F4F4EF',

        // Ink
        ink: '#0A1628',
        graphite: '#3A4656',
        ash: '#6B7685',
        fog: '#9AA2AD',

        // Bureau (institutional blue)
        bureau: '#1E3A5F',
        'bureau-deep': '#142640',
        'bureau-soft': '#E4EAF2',

        // Stamp (approval green)
        stamp: '#2D7D5A',
        'stamp-soft': '#D9ECE3',

        // Seal (warm amber)
        seal: '#C4832E',
        'seal-soft': '#F5E9D2',

        // Alarm (muted red)
        alarm: '#9A3535',
        'alarm-soft': '#F0DADA',

        // Rules
        rule: '#D4D4CE',
        'rule-bold': '#6B7685',

        // Data viz
        dv1: '#1E3A5F',
        dv2: '#2D7D5A',
        dv3: '#C4832E',
        dv4: '#7A4B8F',
        dv5: '#4A6D8C',
      },
      fontFamily: {
        body: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'ui-serif', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        spec: '0.14em',
        wide: '0.08em',
      },
      maxWidth: {
        '6xl': '1200px',
        '7xl': '1320px',
      },
      boxShadow: {
        paperlift: '0 1px 3px rgba(10,22,40,0.04), 0 6px 18px rgba(10,22,40,0.06)',
        ring: '0 0 0 3px rgba(30,58,95,0.18)',
      },
      fontSize: {
        spec: ['11px', { lineHeight: '1.4', letterSpacing: '0.14em' }],
      },
    },
  },
  plugins: [],
};
