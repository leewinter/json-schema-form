import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "WebComponentsLib",
      fileName: "web-components-lib",
      formats: ["umd"], // or 'es', 'iife' etc.
    },
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  plugins: [react()],
});
