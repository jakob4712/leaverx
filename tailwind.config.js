/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#1B2845",
        "navy-2": "#243456",
        "soft-blue": "#4A90D9",
        "warm-gray": "#F7F7F7",
        "accent-green": "#2ECC71",
      },
      fontFamily: {
        heading: ['Syne', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(27, 40, 69, 0.15)",
        card: "0 4px 24px -8px rgba(27, 40, 69, 0.12)",
      },
    },
  },
  plugins: [],
};
