const { nextui } = require('@nextui-org/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(card|ripple).js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'), // Use 'daisyui' as a string
    nextui() // Ensure nextui is properly used
  ],
  daisyui: {
    themes: ["light", "cupcake"], // This should be inside 'plugins'
  },
}
