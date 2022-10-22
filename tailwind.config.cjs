/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"]
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      limeGreen: "hsl(163, 72%, 41%)",
      brightRed: "hsl(356, 69%, 56%)",
      facebook: "hsl(208, 92%, 53%)",
      twitter: "hsl(203, 89%, 53%)",
      instagramFrom: "hsl(37, 97%, 70%)",
      instagramTo: "hsl(329, 70%, 58%)",
      youtube: "hsl(348, 97%, 39%)",
      light: {
        toggle: "hsl(230, 22%, 74%)",
        blue: {
          dark: "hsl(230, 17%, 14%)",
          pattern: "hsl(225, 100%, 98%)",
          card: "hsl(227, 47%, 96%)",
          text: "hsl(228, 12%, 44%)",
        },
      },
      dark: {
        toggleFrom: "hsl(210, 78%, 56%)",
        toggleTo: "hsl(146, 68%, 55%)",
        blue: {
          dark: "hsl(230, 17%, 14%)",
          pattern: "hsl(232, 19%, 15%)",
          card: "hsl(228, 28%, 20%)",
          text: "hsl(228, 34%, 66%)",
        },
      }
    },
    container: {
      padding: "1rem",
      center: true,
      default: "1rem",
      sm: "2rem",
      lg: "3rem",
      xl: "4rem",
    },
  },
}
