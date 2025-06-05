// postcss.config.cjs
module.exports = {
  plugins: [
    require('@tailwindcss/postcss')(),  // ✅ Use this instead of 'tailwindcss'
    require('autoprefixer'),
  ],
};
