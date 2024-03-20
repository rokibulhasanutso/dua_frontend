/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "var(--font-primary)",
      },
      colors: {
        primary: "#1fa45b",
        "content-color": "#E8F0F5",
        "icon-color": "#868686",
      },
    },
  },
  plugins: [],
};
