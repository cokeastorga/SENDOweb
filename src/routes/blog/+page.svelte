<script lang="ts">
  import { blogPosts } from "$lib/blog/content";
</script>

<svelte:head>
  <title>Blog | SENDO - Artículos sobre Cuidado del Adulto Mayor en Santiago</title>
  <meta
    name="description"
    content="Artículos y guías sobre cuidado del adulto mayor, enfermería a domicilio, telemedicina y cuidadoras profesionales en Santiago. Consejos del equipo SENDO."
  />
  <meta
    name="keywords"
    content="blog enfermeria domicilio, articulos cuidado adulto mayor, guia cuidadoras santiago, telemedicina chile blog"
  />
  <link rel="canonical" href="https://www.enfermeriasendo.cl/blog" />
  <meta property="og:title" content="Blog | SENDO - Cuidado del Adulto Mayor" />
  <meta property="og:description" content="Artículos y guías sobre cuidado del adulto mayor, enfermería a domicilio y telemedicina en Santiago." />
  <meta property="og:url" content="https://www.enfermeriasendo.cl/blog" />
  <meta property="og:type" content="website" />
</svelte:head>

<main class="min-h-screen bg-gray-50 pt-32 pb-20 px-4">
  <div class="max-w-4xl mx-auto">
    <h1 class="text-4xl md:text-5xl font-extrabold text-green-600 mb-4 text-center">
      Blog SENDO
    </h1>
    <p class="text-center text-gray-500 text-lg mb-12 max-w-2xl mx-auto">
      Artículos, guías y consejos sobre el cuidado del adulto mayor, enfermería a domicilio y calidad de vida en el hogar.
    </p>

    <div class="space-y-6">
      {#each blogPosts as post}
        <a
          href="/blog/{post.slug}"
          class="block bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 p-6 hover:-translate-y-0.5"
        >
          <article>
            <time class="text-sm text-gray-400 font-medium">{post.date}</time>
            <h2 class="text-xl md:text-2xl font-bold text-gray-900 mt-1 mb-2 group-hover:text-green-600 transition">
              {post.title}
            </h2>
            <p class="text-gray-500 text-base">{post.metaDescription}</p>
            <span class="inline-block mt-3 text-green-600 font-semibold text-sm hover:underline">
              Leer artículo →
            </span>
          </article>
        </a>
      {/each}
    </div>

    <div class="text-center mt-12">
      <a
        href="/"
        class="inline-flex items-center gap-2 text-green-600 font-semibold hover:underline text-base"
      >
        ← Volver al inicio
      </a>
    </div>
  </div>
</main>
