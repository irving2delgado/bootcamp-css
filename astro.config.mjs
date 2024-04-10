import { defineConfig } from 'astro/config';
import tailwindcss from 'tailwindcss';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  postcss: {
    plugins: [tailwindcss
    // Add any other PostCSS plugins if needed
    ]
  },
  integrations: [tailwind()]
});