// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/", // ✅ correto para Vercel

  plugins: [tailwindcss()],

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        dashboard: resolve(__dirname, "dashboard.html"),
        perfil: resolve(__dirname, "perfil.html"),
        cadastro: resolve(__dirname, "cadastroForm.html"),
        inscricao: resolve(__dirname, "inscrever.html"),
        dicas: resolve(__dirname, "dicasNutri.html"),
        imc: resolve(__dirname, "imc.html"),
        prato: resolve(__dirname, "lembreiDoPrato.html"),
      },
    },
  },

  server: {
    open: true,
  },
});
