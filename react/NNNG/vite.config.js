// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     hmr: true,
//     watch: {
//       usePolling: true
//     }
//   },
//   base:"/E-commerce-website/",
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/E-commerce-website/",
  build: {
    outDir: "dist",
  },
  server: {
    hmr: true,
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
