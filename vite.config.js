import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base = process.env.VERCEL ? '/' : '/valencina27/'

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    port: 5177,
  },
})
