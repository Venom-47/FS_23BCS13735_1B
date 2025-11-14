import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  // Dev server proxy: forward /api requests to the backend at localhost:8080
  // Note: you can set VITE_API_URL in an .env file for production or different targets.
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
        // rewrite: path => path.replace(/^\/api/, '') // uncomment if backend doesn't use /api prefix
      }
    }
  }
})
