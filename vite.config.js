import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          commons: ['lodash', 'moment'],
          three: ['three', 'three-stdlib'],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Optional: Erhöhen Sie das Limit für Chunk-Warnungen auf 1000kB
  },
});
