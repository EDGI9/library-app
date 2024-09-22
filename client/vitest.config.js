import { configDefaults, defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      exclude: [
        ...configDefaults.exclude,
        './src/router/**',
        './src/App.jsx',
        './vite.config.js',
        './vitest.config.js',
        './tailwind.config.js',
      ],
    },
  },
  plugins: [react()],
});