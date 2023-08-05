/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        secondaryWhite: "#f3f2ef",
        blueWhite: "#eef3f8",
        gray: "#666666",
        linkedinBlue: "#0a66c2",
        borderLine: "#d1d1d1",
      },
    },
  },
  plugins: [],
};
