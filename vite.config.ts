import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        modules: {
            localsConvention: 'camelCase',
            generateScopedName: '[name]-[hash:base64:2]',
        },
    },
    resolve: {
        alias: {
            app: '/src/app',
            entities: '/src/entities',
            pages: '/src/pages',
            widgets: '/src/widgets',
            features: '/src/features',
            shared: '/src/shared',
        },
    },
});
