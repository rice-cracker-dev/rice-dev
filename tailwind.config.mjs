import catppuccin from '@catppuccin/tailwindcss';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  plugins: [catppuccin, typography],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: {
        ctp: {
          css: {
            '--tw-prose-body': `rgba(var(--ctp-text), 75%)`,
            '--tw-prose-headings': `rgb(var(--ctp-text))`,
            '--tw-prose-lead': `rgb(var(--ctp-text))`,
            '--tw-prose-links': `rgb(var(--ctp-mauve))`,
            '--tw-prose-bold': `rgb(var(--ctp-text))`,
            '--tw-prose-counters': `rgb(var(--ctp-text))`,
            '--tw-prose-bullets': `rgb(var(--ctp-text))`,
            '--tw-prose-hr': `rgba(var(--ctp-text), 25%)`,
            '--tw-prose-quotes': `rgba(var(--ctp-text), 50%)`,
            '--tw-prose-quote-borders': `rgba(var(--ctp-text), 50%)`,
            '--tw-prose-captions': `rgba(var(--ctp-text), 75%)`,
            '--tw-prose-code': `rgba(var(--ctp-text), 75%)`,
            '--tw-prose-pre-code': `rgba(var(--ctp-text), 75%)`,
            '--tw-prose-pre-bg': `rgb(var(--ctp-base))`,
            '--tw-prose-th-borders': `rgba(var(--ctp-text), 25%)`,
            '--tw-prose-td-borders': `rgba(var(--ctp-text), 25%)`,
          },
        },
      },
    },
  },
};
