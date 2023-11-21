/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", ],
  theme: {
    extend: {
      width:{
        90:"90%"
      },
      // backgroundColor:{
      //  'banner':{
      //   backgroundColor:""
      //  }
      // },
      keyframes: {
        drop: {
          '0%, 100%': { transform: 'translateY(-5px)' },
          '50%': { transform: 'translateY(5px)' },
        }
      }
,
      fontFamily:{
        bodyFont:"'Montserrat', sans-serif",
        raleway:"'Raleway', sans-serif",
        italiano:"'Italianno', cursive"
      },
      height:{
        76:"76vh",
        fullvh:"100vh"
      },
      colors:{
        paxlar:"#FF9B1A",
        paxlarLight:"rgba(255, 156, 26,0.4)",
        orangeRed:"#F26C4F",
        footerTop:"#101010",
        ftc:"#989898",
        footerBottom:"#5D5D5D",
        banner:"rgba(0,0,0,0.2)"
      },
      backgroundSize:{
        '2x':{transform:"scale(2)"}
      }
    },
  },
  plugins: [],
}

