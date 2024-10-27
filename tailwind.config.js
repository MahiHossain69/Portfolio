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
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}