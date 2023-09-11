import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteCompression from 'vite-plugin-compression';

import { Plugin } from 'vite';

interface VitePluginCompressionOptions {
  verbose?: boolean;
  disable?: boolean;
  threshold?: number | { js?: number; css?: number };
  algorithm?: 'gzip' | 'brotliCompress' | 'deflate' | 'deflateRaw';
  ext?: string;
}

interface VitePluginCompression extends Plugin {
  (options?: VitePluginCompressionOptions): Plugin;
}

declare const viteCompression: VitePluginCompression;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: {
        js: 1024000,
        css: 10240
      },
      algorithm: 'gzip',
      ext: '.gz'
    }) as VitePluginCompression
  ],
  server: {
    port: 5000,
  },
  build: {outDir: 'public'}
})

// "build": "tsc && vite build",

// algorithm: 'brotliCompress',
// ext: '.br'