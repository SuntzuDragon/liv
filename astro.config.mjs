import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://liv.ianmcbride.com',
  // Clean URLs like /santorini that Cloudflare Workers static assets serves
  // from santorini/index.html without a redirect hop.
  trailingSlash: 'never',
  output: 'static',
  build: { format: 'directory', inlineStylesheets: 'always' },
  // Astro 7 defaults this to 'jsx', which can swallow the space between two
  // adjacent inline elements. Not worth the risk on a page full of them.
  compressHTML: true,
  // No prefetch. Cloudflare refuses speculative requests for worker routes
  // (`cf-speculation-refused`), and on iOS Safari Astro falls back to fetch(),
  // which is not refused - so it pulls HTML that must-revalidate makes
  // unreusable, and the service worker then fetches it all again anyway.
  prefetch: false,
  // No global `image.layout`: it makes Astro treat every image as responsive
  // and point the `src` fallback at the full-size original, which the service
  // worker then dutifully precaches. The components set their own widths.
  devToolbar: { enabled: false },
});
