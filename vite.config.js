import { defineConfig } from 'vite';

export default defineConfig({
    // Configuração base se estiver usando um subdiretório
    base: './',
    
    // Otimizações para evitar os warnings
    optimizeDeps: {
        exclude: ['postcss', 'source-map-js', 'url']
    },
    
    // Configuração do servidor de desenvolvimento
    server: {
        open: true // Abre o navegador automaticamente
    }
});
