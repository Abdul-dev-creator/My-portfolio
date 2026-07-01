/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090B",
        surface: "#111827",
        card: "#18181B",
        border: "#27272A",
        text: "#FAFAFA",
        muted: "#A1A1AA",
        primary: "#06B6D4",
        secondary: "#06B6D4",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        'card': '24px',
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(0, 0, 0, 0.7), 0 1px 1px 0 rgba(255, 255, 255, 0.05) inset',
        'glow-primary': '0 0 40px -5px rgba(59, 130, 246, 0.15)',
        'glow-secondary': '0 0 40px -5px rgba(139, 92, 246, 0.15)',
      }
    },
  },
  plugins: [],
}
