import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import dsv from '@rollup/plugin-dsv';

import purgecss from '@fullhuman/postcss-purgecss';

const plugins = [svelte(), dsv()];

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  // Base configuration that applies to both build and dev
  const config = {
    plugins,
  };

  // Only run PurgeCSS in production builds
  if (command === 'build') {
    config.css = {
      postcss: {
        plugins: [
          purgecss({
            content: ['./**/*.html', './**/*.svelte'],
            safelist: ['pre', 'code'],
          }),
        ],
      },
    };
    config.base = './'; // For custom domain when building for production
  } else {
    config.base = '/'; // Base set to / for development
  }

  return config;
});
