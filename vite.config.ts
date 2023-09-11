import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 102400,
      algorithm: 'gzip',
      ext: '.gz'
    })
  ],
  server: {
    port: 5000,
  },
  build: {outDir: 'public'}
})

// "build": "tsc && vite build",

// algorithm: 'brotliCompress',
// ext: '.br'