import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  root: resolve(__dirname, './'), // Explicitly set root
  publicDir: resolve(__dirname, './public'), // Public assets directory
  base: './', // Relative base path
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), // Optional: create src alias
    },
  },
  server: {
    port: 5173,
    strictPort: true,
    open: true,
  },
  build: {
    outDir: 'docs', // Output directory
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'public/index.html')
      }
    }
  }
});