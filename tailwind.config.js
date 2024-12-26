/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./05_pageLayout/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "japan-street": "url('./IMG/Japan Street illustration.jpg')",
        "digital-art": "url('./IMG/digital art.jpg')",
      },
    },
  },
  plugins: [],
};
