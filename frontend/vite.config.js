import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Todo-FastAPI-main/', // ✅ This makes GitHub Pages & Vite agree on the sub-path
});
