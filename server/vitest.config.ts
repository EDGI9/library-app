import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      exclude: [
        ...configDefaults.exclude,
        './config/**',
        './vitest.config.ts',
      ],
    },
  },
});