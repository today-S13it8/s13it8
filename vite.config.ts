import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// BASE_PATH: "/" for a custom domain (s13it8.com), "/s13it8/" for a GitHub Pages project URL.
export default defineConfig({
  base: process.env.BASE_PATH ?? '/',
  plugins: [react(), tailwindcss()],
  // React + Motion + Router land around 190 KB gzipped; fine for this site.
  build: { chunkSizeWarningLimit: 700 },
  resolve: { alias: { '@': path.resolve(import.meta.dirname, 'src') } },
})
