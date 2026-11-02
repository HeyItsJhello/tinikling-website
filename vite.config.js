import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readdirSync } from 'node:fs'
import { sep } from 'node:path'

const ASSET_IMAGES = 'virtual:asset-images'

function assetImages() {
  return {
    name: 'asset-images',
    resolveId: (id) => (id === ASSET_IMAGES ? '\0' + ASSET_IMAGES : null),
    load(id) {
      if (id !== '\0' + ASSET_IMAGES) return
      const files = readdirSync('public/assets', { recursive: true })
        .filter((f) => f.endsWith('.webp'))
        .map((f) => '/assets/' + f.split(sep).join('/'))
      return `export default ${JSON.stringify(files)}`
    },
  }
}

export default defineConfig({
  plugins: [react(), assetImages()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'motion': ['framer-motion'],
        },
      },
    },
  },
})
