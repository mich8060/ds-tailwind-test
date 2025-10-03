import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    plugins: [react()],
    css: {
        devSourcemap: true,
        // Optional: allows @use "scss/..." later if you want it
        preprocessorOptions: {
            scss: {
                includePaths: [resolve(__dirname, "src"), resolve(__dirname, "src/scss")]
            }
        }
    },
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.js"),
            name: "ChgUds",
            formats: ["es", "cjs"],
            fileName: (format) => `chg-uds.${format}.js`
        },
        rollupOptions: {
            external: ["react", "react-dom", "@phosphor-icons/react"],
            output: {
                globals: { react: "React", "react-dom": "ReactDOM" },
                assetFileNames: (info) =>
                    info.name?.endsWith(".css") ? "styles.css" : "assets/[name]-[hash][extname]",
            }
        },
        cssCodeSplit: false,
        sourcemap: true
    }
});
