import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  define: {
    'process.env': {}
  },
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'assets/src/index.jsx'),
      name: 'Barn2Discounts',
      fileName: () => 'barn2-discounts.js'
    },
    outDir: 'assets',
    emptyOutDir: false,
    watch: {
      include: ['assets/src/**']
    },
    rollupOptions: {
      input: {
        'barn2-discounts-js': resolve(__dirname, 'assets/src/index.jsx'),
        'barn2-discounts-css': resolve(__dirname, 'assets/src/styles/main.scss')
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'barn2-discounts.css'
          }
          return assetInfo.name
        },
        entryFileNames: 'barn2-discounts.js'
      }
    }
  }
})