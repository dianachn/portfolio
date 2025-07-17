import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio/", // Set base path for deployment in subfolder
  server: {
    host: "::",
    port: 8081,
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
