/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './node_modules/flyonui/flyonui.js'],
  theme: {
    extend: {
      gridTemplateColumns: {
        '70-30': '70% 30%',
      },
      fontFamily: {
        sans: [
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
        ],
      },
    },
  },
  plugins: [require('flyonui'), require('flyonui/plugin')],

  flyonui: {
    themes: ['light', 'dark', 'gourmet', 'corporate', 'luxury', 'soft'],
  },
};
