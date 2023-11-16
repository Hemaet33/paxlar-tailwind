/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", ],
  theme: {
    extend: {
      width:{
        90:"90%"
      },
      fontFamily:{
        bodyFont:"'Montserrat', sans-serif",
        raleway:"'Raleway', sans-serif"
      },
      height:{
        76:"76vh",
        fullvh:"100vh"
      },
      colors:{
        paxlar:"#FF9B1A",
        orangeRed:"#F26C4F",
        footerTop:"#101010",
        ftc:"#989898",
        footerBottom:"#5D5D5D"
      }
    },
  },
  plugins: [],
}

