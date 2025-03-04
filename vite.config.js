import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  root: resolve(__dirname, './'), // Project root
  publicDir: resolve(__dirname, './public'), // Public directory
  base: './', // Relative base path
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    open: true,
    historyApiFallback: {
      index: '/index.html'
    }
  },
  build: {
    outDir: 'docs',  // Output to 'docs' folder
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'public/index.html') // Point to index.html in public directory
      }
    }
  }
});