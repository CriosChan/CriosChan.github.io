/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

//npx tailwindcss --watch -i ./css/input.css -o ./css/tailwind.css