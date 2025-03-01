import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
    open: true,
    host: true
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true
  },
  base: "./" // Critical change
});
