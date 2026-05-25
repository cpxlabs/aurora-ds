import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ["src/"],
      exclude: [
        "src/**/*.stories.tsx",
        "src/**/*.test.tsx",
        "src/docs/**",
        "src/test/**",
      ],
    }),
  ],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.ts",
    css: true,
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "AuroraDS",
      formats: ["es", "cjs"],
      cssFileName: "theme",
      fileName: (format) => (format === "es" ? "index.mjs" : "index.cjs"),
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        /^@radix-ui\/.*/,
        "clsx",
      ],
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
