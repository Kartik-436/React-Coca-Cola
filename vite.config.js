import { defineConfig } from 'vite';
import glsl from 'vite-plugin-glsl';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), glsl()],
  optimizeDeps: {
    exclude: ['sheryjs'], // Ensure the library is excluded from optimization issues
  },
  resolve: {
    alias: {
      'sheryjs': 'sheryjs/src/Shery.js',
    },
  },
});
