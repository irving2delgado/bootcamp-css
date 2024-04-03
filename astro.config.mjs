import { defineConfig } from 'astro/config';
import tailwindcss from 'tailwindcss';

// https://astro.build/config
export default defineConfig({
    postcss: {
        plugins: [
          tailwindcss,
          // Add any other PostCSS plugins if needed
        ],
      },
});
