/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary': '#4388e5',
          'accent': "#caeeff"
        },
        backgroundImage: {
          'main-background': "url('/src/assets/background.webp')",
        }
      },
    },
    plugins: [],
  }