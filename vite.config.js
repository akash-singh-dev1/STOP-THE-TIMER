import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    // If mode is "gh-pages", use GitHub Pages base path, else use root "/"
    base: mode === "gh-pages" ? "/STOP-THE-TIMER/" : "/",
  };
});
