<script lang="ts">
  import { onMount } from 'svelte';
  import { servicesData } from '$lib/services/content';
  export let data;
  const { service } = data;

  let relatedServices = servicesData.filter(s => service.relatedSlugs.includes(s.slug));

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.metaDescription,
    "provider": {
      "@type": "MedicalBusiness",
      "name": "SENDO - Servicios de Enfermería a Domicilio",
      "image": "https://www.enfermeriasendo.cl/logo4.png",
      "telephone": "+56998451117",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Pasaje Teno #262",
        "addressLocality": "Quilicura",
        "addressRegion": "Región Metropolitana",
        "addressCountry": "CL"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Santiago"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.pregunta,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.respuesta
      }
    }))
  };
</script>

<svelte:head>
  <title>{service.title}</title>
  <meta name="description" content={service.metaDescription} />
  <meta name="keywords" content={service.keywords} />
  <link rel="canonical" href={`https://www.enfermeriasendo.cl/servicios/${service.slug}`} />
  
  <meta property="og:title" content={service.title} />
  <meta property="og:description" content={service.metaDescription} />
  <meta property="og:url" content={`https://www.enfermeriasendo.cl/servicios/${service.slug}`} />
  <meta property="og:type" content="article" />
  
  {@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
  {@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`}
</svelte:head>

<main class="bg-gray-50 min-h-screen pt-20">
  <!-- Hero Section with Video -->
  <section class="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-center overflow-hidden">
    <video autoplay loop muted playsinline class="absolute top-0 left-0 w-full h-full object-cover z-0">
      <source src={`/${service.heroVideo}.webm`} type="video/webm" />
      <source src={`/${service.heroVideo}.mp4`} type="video/mp4" />
    </video>
    <div class="absolute inset-0 bg-black/60 z-10"></div>
    <div class="relative z-20 px-4 max-w-4xl mx-auto">
      <div class="text-5xl md:text-6xl mb-4">{service.icon}</div>
      <h1 class="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">{service.title.split(' |')[0]}</h1>
      <p class="text-lg md:text-xl text-gray-200 drop-shadow">{service.metaDescription}</p>
    </div>
  </section>

  <!-- Breadcrumbs -->
  <div class="bg-white border-b border-gray-200 py-3 px-4">
    <div class="max-w-4xl mx-auto text-sm text-gray-500">
      <a href="/" class="hover:text-green-600">Inicio</a>
      <span class="mx-2">›</span>
      <a href="/servicios" class="hover:text-green-600">Servicios</a>
      <span class="mx-2">›</span>
      <span class="text-gray-800 font-medium">{service.title.split(' |')[0]}</span>
    </div>
  </div>

  <div class="max-w-4xl mx-auto px-4 py-12 md:py-16">
    <!-- Main Content -->
    <article class="prose prose-lg prose-green max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 mb-12">
      {@html service.content}
    </article>

    <!-- FAQs -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold text-green-700 mb-8 text-center">Preguntas Frecuentes</h2>
      <div class="space-y-4">
        {#each service.faqs as faq}
          <details class="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <summary class="flex items-center justify-between cursor-pointer px-6 py-4 text-gray-900 font-semibold text-lg hover:bg-gray-50 transition">
              <span>{faq.pregunta}</span>
              <svg class="w-5 h-5 text-green-600 transition-transform group-open:rotate-180 shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div class="px-6 pb-4 text-gray-600 text-base leading-relaxed border-t border-gray-100 pt-4">
              {faq.respuesta}
            </div>
          </details>
        {/each}
      </div>
    </section>

    <!-- Related Services -->
    {#if relatedServices.length > 0}
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Otros servicios que podrían interesarte</h2>
        <div class="grid md:grid-cols-3 gap-6">
          {#each relatedServices as related}
            <a href={`/servicios/${related.slug}`} class="block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 group">
              <div class="text-3xl mb-3">{related.icon}</div>
              <h3 class="font-semibold text-gray-900 group-hover:text-green-600 transition mb-2">{related.title.split(' |')[0]}</h3>
              <p class="text-sm text-gray-500 line-clamp-3">{related.metaDescription}</p>
            </a>
          {/each}
        </div>
      </section>
    {/if}

    <!-- CTA Contact -->
    <section class="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-8 md:p-12 text-center text-white shadow-lg">
      <h2 class="text-3xl font-bold mb-4">¿Listo para mejorar la calidad de vida de tu familiar?</h2>
      <p class="text-lg text-green-100 mb-8 max-w-2xl mx-auto">Nuestro equipo de coordinación está disponible para orientarte. Cuéntanos tu caso y te presentaremos la mejor solución de cuidado domiciliario.</p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a href="https://wa.me/56998451117" target="_blank" rel="noopener noreferrer" class="px-8 py-4 bg-white text-green-700 font-bold rounded-lg shadow-md hover:bg-gray-100 flex items-center justify-center gap-2 transition text-lg">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48a11.998 11.998 0 0 0-16.96 0 11.998 11.998 0 0 0 0 16.96l-1.4 4.9 4.9-1.4a11.998 11.998 0 0 0 16.96-16.96zM12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1.2-5.9l-.9-2.6c-.1-.2-.2-.4-.4-.5s-.3-.2-.5-.2c-.3 0-.6.1-.8.4-.2.3-.3.6-.3 1 0 .5.2 1 .6 1.4l2.7 2.7c.4.4.9.6 1.4.6.4 0 .7-.1 1-.3.3-.2.5-.5.5-.8 0-.2-.1-.4-.2-.5l-2.6-.9z"></path></svg>
          Hablar por WhatsApp
        </a>
        <a href="/#contacto" class="px-8 py-4 bg-green-700 text-white font-bold rounded-lg shadow-md hover:bg-green-600 flex items-center justify-center gap-2 transition text-lg border border-green-500">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 12H8m8 0l-4 4m4-4l-4-4"></path></svg>
          Solicitar Llamada
        </a>
      </div>
    </section>
  </div>
</main>
