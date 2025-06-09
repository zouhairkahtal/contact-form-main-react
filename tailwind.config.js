// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green200: 'hsl(148, 38%, 91%)', 
        green600: 'hsl(169, 82%, 27%)', 
        grey200:'hsl(186, 15%, 59%)',
        grey600:' hsl(187, 24%, 22%)'
       
      },
      fontFamily: {
          karla:'"Karla", sans-serif'
      },
      // hoverInput:{
      //   border:'green600'
      // },
      width:{
        contactUsdevWidth:'700px'
      },
      height:{
        contactUsdevHeight:'750px'
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
