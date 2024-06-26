
import {resolve} from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  base : "/e-commerce/",

  build: {
    chunkSizeWarningLimit: 5000,
    assetsInlineLimit: 0,
    rollupOptions: {      
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    },
    
  }
})

