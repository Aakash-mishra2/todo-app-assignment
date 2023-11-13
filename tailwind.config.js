/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'arch_daug' : ["Architects Daughter", 'cursive'],
        'ubuntu': ["Ubuntu", 'cursive'],
        'default': ['-apple-system', 'BlinkMacSystemFont','Segoe UI', 'Roboto', 'Oxygen', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Architects Daughter']
      }
    },
  },
  plugins: [],
}

