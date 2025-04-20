import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    open: true
  },
  css: {
    postcss: {
      plugins: [
        require('@tailwindcss/postcss'),
        require('autoprefixer')
      ]
    }
  },
  optimizeDeps: {
    exclude: ['postcss', 'source-map-js', 'url']
  }
});