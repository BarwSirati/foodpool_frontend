/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FF6056',
        logo: '#FFB6B6',
        line: '#DB5227',
        button: '#F47A72',
        body: '#FFB7B7',
        headcard: '#353474',
        bodycard: '#FAF5FF',
      },
    },
  },
  
  plugins: [require('daisyui')],
}
