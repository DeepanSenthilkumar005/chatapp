// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: { 
        'xsm': { 'min': '0px' },
        'stm': { 'min': '10px', 'max': '768px' },
      },
    },
  },
  plugins: [],
}
