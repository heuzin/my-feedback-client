import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        proxy: {
            '/feedback': {
                target: 'https://my-feedbacks.herokuapp.com',
                changeOrigin: true,
                secure: false,
                ws: true,
            },
        },
    },
});