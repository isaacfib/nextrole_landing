import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    open: true,
    historyApiFallback: {
      index: '/index.html'
    }
  },
  base: '/',  // Use absolute paths for GitHub Pages
  build: {
    outDir: 'docs',  // Output built files to /docs
    rollupOptions: {
      input: {
        main: resolve(new URL('public/index.html', import.meta.url).pathname)  // Entry point is root index.html
      }
    }
  }
});