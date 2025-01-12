import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'jsdom',
        setupFiles: './config/test-runner-global-setup.ts',
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
