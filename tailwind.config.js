/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      maxWidth:{
        'container':"1200px"
      },
      fontFamily: {
        'play': ['Playwrite DE Grund', 'cursive',],
        
      },
      animation: {
        bounce: 'bounce 0.5s infinite',
      },
      keyframes: {
        bounce: {
          '50%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(0deg)' },
        },
      },
      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}