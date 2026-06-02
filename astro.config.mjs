import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Jack's Garage — static build for Cloudflare Pages.
// No SSR, no adapter — output is plain HTML in /dist.
export default defineConfig({
  site: 'https://demo-jacks-garage.pages.dev',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    // applyBaseStyles:false → we own the @tailwind directives in global.css
    // so our @layer base / @layer components rules sit at the correct cascade level.
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  build: { inlineStylesheets: 'auto' },
});
