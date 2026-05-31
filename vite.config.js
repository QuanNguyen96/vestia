import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import jsconfigPaths from 'vite-jsconfig-paths'
import eslint from 'vite-plugin-eslint'
import svgr from 'vite-plugin-svgr'
import tailwindcss from "@tailwindcss/vite"
import path from "path"


export default defineConfig((mode) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    base: env?.BASE_URL || '/',
    plugins: [
      react(),
      jsconfigPaths(),
      svgr(),
      eslint(),
      tailwindcss(),
    ],
  };
});
