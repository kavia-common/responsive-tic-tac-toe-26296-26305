import { defineConfig } from 'vite';

// Basic Vite config. React 18 with the new JSX transform does not require a plugin for simple setups.
export default defineConfig({
  server: {
    port: 3000
  }
});
