/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fantasy theme colors for Karkonosze
        forest: {
          50: '#f0f9f0',
          100: '#dcf4dc',
          500: '#16a34a',
          600: '#15803d',
          900: '#14532d'
        },
        mountain: {
          50: '#f8fafc',
          100: '#f1f5f9', 
          500: '#64748b',
          600: '#475569',
          900: '#0f172a'
        }
      }
    },
  },
  plugins: [],
}