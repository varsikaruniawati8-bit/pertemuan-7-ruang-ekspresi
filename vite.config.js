import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // Plugin v4 baru

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
