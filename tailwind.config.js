/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        card: 'var(--color-card)',
        'card-border': 'var(--color-card-border)',
        'accent-pathology': 'var(--color-accent-pathology)',
        'accent-normal': 'var(--color-accent-normal)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Assuming a standard accessible font for medical apps
      }
    },
  },
  plugins: [],
}
