import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://al375840.github.io',
  base: 'main',
  root: './AsianSushi',
  integrations: [tailwind()]
});