import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Resolve o pacote local diretamente da fonte, sem precisar fazer build antes
      "@aurora-ds-theme": resolve(__dirname, "../src/theme.css"),
      "@cpxlabs/aurora-ds": resolve(__dirname, "../src/index.ts"),
    },
  },
});
