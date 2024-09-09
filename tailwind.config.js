/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pssec': "url('/img/pssec.png')",
        'xboxsec': "url('/img/xboxsec.png')",
      },
    },
  },
  plugins: [],
}
