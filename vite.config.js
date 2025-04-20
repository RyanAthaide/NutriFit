import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  server: {
    open: true
  },
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer')
      ]
    }
  }
})