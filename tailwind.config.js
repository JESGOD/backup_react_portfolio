/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        
        "grayNb":"#2C2C2C ",
        "blackNb":"#1C1C1C ",
        "graySk":"#414141 ",
        "blackSk":"#2D2D2D ",
        "parrafos":"#E4E4E4",
        "btnG1":"#E2A300",
        "btnG2":"#E29500",
        "blueCircle":"#00C4F0"
      },
      fontFamily: {
        'gruppo': ['Gruppo'],
        'Audiowide':['Audiowide'],
        'Unbounded':['Unbounded']
      },
      boxShadow: {
        'shadowCirculo': '0px 0px 152px rgba(0, 196, 240, 0.42)',
      }
    },
  },
  plugins: [],
}