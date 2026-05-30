import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import jsconfigPaths from 'vite-jsconfig-paths'
import eslint from 'vite-plugin-eslint'
import svgr from 'vite-plugin-svgr'
import tailwindcss from "@tailwindcss/vite"
import path from "path"

export default defineConfig({
  base:'/vestia',
  plugins: [
    react(),
    jsconfigPaths(),
    svgr(),
    eslint(),
    tailwindcss(),
  ],
})
