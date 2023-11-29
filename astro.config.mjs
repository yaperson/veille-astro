import { defineConfig } from 'astro/config';

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  markdown: {
    drafts: true
  },
  site: 'https://yaperson.github.io',
  base: '/veille-astro',
  experimental: {
    i18n: {
      defaultLocale: "en",
      locales: ["en", "fr"],
      routingStrategy: "prefix-other-locales",
      fallback: {
        fr: "en"
      }
    }
  }
});