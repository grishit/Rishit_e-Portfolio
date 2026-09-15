import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // Relative base keeps the portfolio portable:
  // - local preview
  // - any GitHub Pages repository name
  // - future custom domain
  base: './',
})
