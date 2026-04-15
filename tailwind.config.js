/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#05070B",
        "ink-2": "#0B0E14",
        bone: "#F5F2EA",
        mist: "#0F141C",
        sage: "#162028",
        "sage-2": "#1F2D36",
        teal: "#14B8A6",
        "teal-2": "#0D9488",
        clay: "#C9B5A4",
        line: "#1C232E",
      },
      fontFamily: {
        heading: ['Syne', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        display: '-0.035em',
      },
      fontSize: {
        '7xl': ['5rem', { lineHeight: '1', letterSpacing: '-0.035em' }],
        '8xl': ['6.5rem', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
      },
    },
  },
  plugins: [],
};
