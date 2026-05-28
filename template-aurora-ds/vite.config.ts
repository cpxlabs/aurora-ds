import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@aurora-ds-theme": resolve(__dirname, "../src/theme.css"),
      "@cpxlabs/aurora-ds": resolve(__dirname, "../src/index.ts"),
    },
  },
});
