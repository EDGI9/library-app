import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    base: 'https://edgi9.github.io/library-app/',
    plugins: [react()],
});
