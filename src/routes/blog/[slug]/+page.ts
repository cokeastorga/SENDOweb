import { blogPosts } from '$lib/blog/content';

export const prerender = true;

export function entries() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}
