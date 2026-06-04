// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { lastmodForPath } from './src/lib/lastmod.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://forward-nrg.com',
  trailingSlash: 'never',
  integrations: [
    mdx(),
    sitemap({
      // emit <xhtml:link rel="alternate" hreflang> pairs for the es/en versions
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-PA',
          en: 'en-US',
        },
      },
      // keep placeholder/template pages out of the index
      filter: (page) => !page.includes('/projects/proyecto-ejemplo'),
      // stamp each url with its source file's last git-commit date
      serialize(item) {
        try {
          const { pathname } = new URL(item.url);
          item.lastmod = lastmodForPath(pathname).toISOString();
        } catch {
          /* leave lastmod unset on failure */
        }
        return item;
      },
    }),
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
});
