import tailwindcss from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{html,js,jsx,ts,tsx}',
    './src/scripts/main.js'
  ],
  plugins: [
    tailwindcss
  ]
}