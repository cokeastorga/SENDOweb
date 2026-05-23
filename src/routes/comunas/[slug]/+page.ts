import { error } from '@sveltejs/kit';
import { comunasData } from '$lib/comunas/content';

export const prerender = true;

export function entries() {
  return comunasData.map((comuna) => ({ slug: comuna.slug }));
}

export function load({ params }: { params: { slug: string } }) {
  const comuna = comunasData.find((c) => c.slug === params.slug);

  if (!comuna) {
    throw error(404, 'Comuna no encontrada');
  }

  return {
    comuna
  };
}
