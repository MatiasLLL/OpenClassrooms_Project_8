import { defineConfig } from 'vite'
// import ssr from 'vite-plugin-ssr'
import react from '@vitejs/plugin-react-swc'
import compression from 'vite-plugin-compression2'
// import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // ssr({
    //   onBeforeRoute(url, { pageContext }) {
    //     pageContext.i18n = i18n.cloneInstance({ lng: pageContext.locale })
    //   },
    // }),
    react(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz'
    })
  ],
  server: {
    port: 5000,
  },
  build: {outDir: '.'}
})
