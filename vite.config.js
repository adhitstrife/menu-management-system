import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    server: {
        https: true,
    },
    build: {
        manifest: true,
        outDir: "public/build", // Outputs files to public/build
        assetsDir: "", // Ensures files are placed directly in public/build without extra folders
        rollupOptions: {
            input: ["resources/css/app.css", "resources/js/app.jsx"],
        },
    },
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.jsx"],
            refresh: true,
        }),
        react(),
    ],
});
