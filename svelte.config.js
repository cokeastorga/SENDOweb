import vercel from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: vercel(),
    prerender: {
      handleHttpError: 'warn', // evita que prerender falle por enlaces rotos
      handleMissingId: 'warn' // permite links a #secciones del home desde otras páginas
    },
    alias: {
      $lib: 'src/lib',
      $components: 'src/lib/components'
    }
  }
};

export default config;
