import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/GeorgeFlorian.github.io",
  plugins: [react(), viteTsconfigPaths()],
  server: {
    host: true,
    port: 3000,
    strictPort: true,
  },
});
