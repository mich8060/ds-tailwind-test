import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@chg-ds/unified-design-system/styles.css': path.resolve(__dirname, './src/styles.css'),
      'uds-tailwind-test/styles.css': path.resolve(__dirname, './src/styles.css'),
      '@chg-ds/unified-design-system': path.resolve(__dirname, './src/index.ts'),
      '@': path.resolve(__dirname, './src'),
      'uds-tailwind-test': path.resolve(__dirname, './src/index.ts'),
    },
  },
  build: {
    outDir: 'docs-dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        appShellDemo: path.resolve(__dirname, 'app-shell-demo.html'),
        menuDemo: path.resolve(__dirname, 'menu-demo.html'),
        patternsDashboard: path.resolve(__dirname, 'patterns-dashboard.html'),
      },
    },
  },
})
