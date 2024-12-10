/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          h1: {
            '@apply text-4xl font-extrabold text-black': {}
          },
          h2: {
            '@apply text-3xl font-bold text-black': {}
          },
          h3: {
            '@apply text-2xl font-bold text-black': {}
          },
          h4: {
            '@apply text-xl font-semibold': {}
          }
        }
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

