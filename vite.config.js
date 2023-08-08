import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/",
    plugins: [react(), viteTsconfigPaths(), eslint()],
    server: {
        host: true,
        port: 3001,
        strictPort: true,
    },
});
