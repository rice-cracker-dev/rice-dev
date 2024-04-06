import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import icon from 'astro-icon';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), icon(), mdx()],
  site: 'https://rice-dev.tech',
  markdown: {
    shikiConfig: {
      theme: 'catppuccin-macchiato',
    },
  },
});
