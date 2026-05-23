import { error } from '@sveltejs/kit';
import { servicesData } from '$lib/services/content';

export const prerender = true;

export function entries() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export function load({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    throw error(404, 'Servicio no encontrado');
  }

  return {
    service
  };
}
