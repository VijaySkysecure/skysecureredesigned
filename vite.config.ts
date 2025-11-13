import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    cors: {
      origin: [
        'https://skysecure.ai',
        'http://skysecure.ai',
        'https://www.skysecure.ai',
        'http://www.skysecure.ai',
      ],
      credentials: true,
    },
    allowedHosts: [
      'skysecure.ai',
      'www.skysecure.ai'
    ],
  },
});

