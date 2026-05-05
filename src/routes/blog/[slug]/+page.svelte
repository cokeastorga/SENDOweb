<script lang="ts">
  import { page } from "$app/stores";
  import { blogPosts } from "$lib/blog/content";

  $: slug = $page.params.slug;
  $: post = blogPosts.find((p) => p.slug === slug);
</script>

<svelte:head>
  {#if post}
    <title>{post.title} | SENDO Blog</title>
    <meta name="description" content={post.metaDescription} />
    <meta name="keywords" content={post.keywords} />
    <link rel="canonical" href="https://www.enfermeriasendo.cl/blog/{post.slug}" />
    <meta property="og:title" content={post.title} />
    <meta property="og:description" content={post.metaDescription} />
    <meta property="og:url" content="https://www.enfermeriasendo.cl/blog/{post.slug}" />
    <meta property="og:type" content="article" />
    <meta property="og:locale" content="es_CL" />
    <meta property="article:published_time" content={post.date} />
    <meta property="article:author" content={post.author} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={post.title} />
    <meta name="twitter:description" content={post.metaDescription} />
  {:else}
    <title>Artículo no encontrado | SENDO Blog</title>
  {/if}
</svelte:head>

{#if post}
  <main class="min-h-screen bg-white pt-32 pb-20 px-4">
    <article class="max-w-3xl mx-auto">
      <nav class="mb-8" aria-label="Breadcrumb">
        <ol class="flex items-center gap-2 text-sm text-gray-400">
          <li><a href="/" class="hover:text-green-600 transition">Inicio</a></li>
          <li class="text-gray-300">/</li>
          <li><a href="/blog" class="hover:text-green-600 transition">Blog</a></li>
          <li class="text-gray-300">/</li>
          <li class="text-gray-600 font-medium truncate max-w-[200px]">{post.title}</li>
        </ol>
      </nav>

      <header class="mb-10">
        <time class="text-sm text-gray-400 font-medium">{post.date}</time>
        <h1 class="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-3 leading-tight">
          {post.title}
        </h1>
        <p class="text-gray-500 text-sm">Por <span class="font-medium text-green-600">{post.author}</span></p>
      </header>

      <div class="prose prose-lg prose-slate prose-headings:text-green-800 max-w-none">
        {@html post.content}
      </div>

      <div class="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a
          href="/blog"
          class="text-green-600 font-semibold hover:underline"
        >
          ← Todos los artículos
        </a>
        <a
          href="/#contacto"
          class="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition font-medium"
        >
          Contáctanos
        </a>
      </div>
    </article>
  </main>
{:else}
  <main class="min-h-screen flex items-center justify-center bg-gray-50 pt-32">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Artículo no encontrado</h1>
      <p class="text-gray-500 mb-6">El artículo que buscas no existe o fue eliminado.</p>
      <a href="/blog" class="text-green-600 font-semibold hover:underline">Ver todos los artículos</a>
    </div>
  </main>
{/if}
