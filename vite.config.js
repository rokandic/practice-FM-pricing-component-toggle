import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // DODAJ: base: '/<REPO>/' primer: '/practice-FM-pricing-component-toggle/'
  base: '/practice-FM-pricing-component-toggle/', 
})
