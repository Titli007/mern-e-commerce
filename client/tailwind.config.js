/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
     extend: {
       colors: {
         'primary': '#B88E2F',
         'secondary': '#FFF3E3',
         'bg' : '#FCF8F3',
         'success': '#17BF63',
         'warning': '#FFAD1F',
         'danger': '#E0245E',
         'info': '#3AB7F0',
         'light': '#F3F4F6',
         'dark': '#111827',
       }
     },
  },
  plugins: [],
 }