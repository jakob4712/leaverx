/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220",
        "ink-2": "#151C2E",
        bone: "#FAFAF7",
        mist: "#F1F3EE",
        sage: "#E7EFE8",
        "sage-2": "#CDE0D2",
        teal: "#0F766E",
        "teal-2": "#14A08F",
        clay: "#C9B5A4",
        line: "#E6E3DB",
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
