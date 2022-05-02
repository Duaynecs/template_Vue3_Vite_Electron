const { defaults } = require("autoprefixer");

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      theme: {
        fontFamily: {
          'sans': ['Lato']
        }
      }
    },
  },
  plugins: [],
}
