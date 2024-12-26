import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  server: {
    port: 3003,
    strictPort: true, // Don't try other ports
    host: '0.0.0.0', // Listen on all network interfaces
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 3003
    },
    watch: {
      usePolling: true
    },
    fs: {
      strict: false,
      allow: ['..']
    },
    headers: {
      // Add CSP headers with unsafe-eval for development
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' ws://localhost:3003 wss://localhost:3003 https://firebaseinstallations.googleapis.com https://*.firebaseio.com wss://*.firebaseio.com https://identitytoolkit.googleapis.com https://securetoken.googleapis.com"
    }
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'mui-vendor': ['@mui/material', '@mui/icons-material'],
          'firebase-vendor': ['firebase/app', 'firebase/auth']
        }
      }
    }
  },
  optimizeDeps: {
    force: true,
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@mui/material',
      '@mui/material/styles',
      '@mui/material/CssBaseline',
      '@mui/icons-material',
      '@mui/x-date-pickers',
      '@mui/x-date-pickers/AdapterDateFns',
      '@emotion/react',
      '@emotion/styled',
      'date-fns',
      'zustand',
      'zustand/middleware',
      'framer-motion',
      'firebase/app',
      'firebase/auth',
      'firebase/firestore'
    ],
    exclude: ['@mui/material/modern']
  }
}) 