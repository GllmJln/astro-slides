import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
    },
  },
  prefetch: true,

  site: "https://gllmjln.github.io",
  base: "astro-slides",
});
