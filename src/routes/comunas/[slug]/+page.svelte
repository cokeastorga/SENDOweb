<script lang="ts">
  import { comunasData } from '$lib/comunas/content';
  export let data;
  const { comuna } = data;

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `SENDO Enfermería a Domicilio - ${comuna.comunaNombre}`,
    "description": comuna.metaDescription,
    "image": "https://www.enfermeriasendo.cl/logo4.png",
    "parentOrganization": {
      "@type": "MedicalBusiness",
      "name": "SENDO - Servicios de Enfermería a Domicilio"
    },
    "areaServed": {
      "@type": "City",
      "name": comuna.comunaNombre
    },
    "telephone": "+56998451117",
    "priceRange": "$$"
  };
</script>

<svelte:head>
  <title>{comuna.title}</title>
  <meta name="description" content={comuna.metaDescription} />
  <meta name="keywords" content={comuna.keywords} />
  <link rel="canonical" href={`https://www.enfermeriasendo.cl/comunas/${comuna.slug}`} />
  
  <meta property="og:title" content={comuna.title} />
  <meta property="og:description" content={comuna.metaDescription} />
  <meta property="og:url" content={`https://www.enfermeriasendo.cl/comunas/${comuna.slug}`} />
  <meta property="og:type" content="article" />
  
  {@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>

<main class="bg-gray-50 min-h-screen pt-20">
  <!-- Hero Section -->
  <section class="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-center overflow-hidden">
    <video autoplay loop muted playsinline class="absolute top-0 left-0 w-full h-full object-cover z-0">
      <source src={`/${comuna.heroVideo}.webm`} type="video/webm" />
      <source src={`/${comuna.heroVideo}.mp4`} type="video/mp4" />
    </video>
    <div class="absolute inset-0 bg-gradient-to-r from-green-900/80 to-black/60 z-10"></div>
    <div class="relative z-20 px-4 max-w-4xl mx-auto">
      <div class="inline-block bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full px-6 py-2 text-sm font-semibold mb-6">
        📍 Cobertura Total en {comuna.comunaNombre}
      </div>
      <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-md">
        Enfermería a Domicilio en <span class="text-green-400">{comuna.comunaNombre}</span>
      </h1>
      <p class="text-lg md:text-xl text-gray-200 drop-shadow max-w-2xl mx-auto">{comuna.metaDescription}</p>
    </div>
  </section>

  <!-- Breadcrumbs -->
  <div class="bg-white border-b border-gray-200 py-3 px-4">
    <div class="max-w-5xl mx-auto text-sm text-gray-500">
      <a href="/" class="hover:text-green-600">Inicio</a>
      <span class="mx-2">›</span>
      <a href="/comunas" class="hover:text-green-600">Cobertura</a>
      <span class="mx-2">›</span>
      <span class="text-gray-800 font-medium">{comuna.comunaNombre}</span>
    </div>
  </div>

  <div class="max-w-5xl mx-auto px-4 py-12 md:py-16">
    <div class="grid md:grid-cols-3 gap-8">
      
      <!-- Main Content (Left, 2 columns) -->
      <div class="md:col-span-2">
        <article class="prose prose-lg prose-green max-w-none bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
          {@html comuna.content}
        </article>
      </div>

      <!-- Sidebar (Right, 1 column) -->
      <div class="space-y-6">
        <!-- Highlights Box -->
        <div class="bg-green-50 p-6 rounded-2xl border border-green-100">
          <h3 class="text-xl font-bold text-green-800 mb-4 flex items-center">
            <svg class="w-6 h-6 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Ventajas en {comuna.comunaNombre}
          </h3>
          <ul class="space-y-3">
            {#each comuna.highlights as highlight}
              <li class="flex items-start text-gray-700 text-sm">
                <span class="text-green-500 mr-2 mt-0.5">•</span>
                {highlight}
              </li>
            {/each}
          </ul>
        </div>

        <!-- Quick Links Services -->
        <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 class="text-lg font-bold text-gray-800 mb-4">Nuestros Servicios</h3>
          <div class="space-y-2">
            <a href="/servicios/cuidadoras-a-domicilio-santiago" class="block p-3 bg-gray-50 hover:bg-green-50 rounded-lg text-sm text-gray-700 hover:text-green-700 transition font-medium border border-transparent hover:border-green-100">👩‍⚕️ Cuidadoras de Adulto Mayor</a>
            <a href="/servicios/auxiliar-enfermeria-turnos-12-24-horas" class="block p-3 bg-gray-50 hover:bg-green-50 rounded-lg text-sm text-gray-700 hover:text-green-700 transition font-medium border border-transparent hover:border-green-100">🕐 Auxiliares (TENS) en Turnos</a>
            <a href="/servicios/enfermeria-a-domicilio-santiago" class="block p-3 bg-gray-50 hover:bg-green-50 rounded-lg text-sm text-gray-700 hover:text-green-700 transition font-medium border border-transparent hover:border-green-100">🧪 Procedimientos Clínicos</a>
            <a href="/servicios/telemedicina-consulta-medica-online" class="block p-3 bg-gray-50 hover:bg-green-50 rounded-lg text-sm text-gray-700 hover:text-green-700 transition font-medium border border-transparent hover:border-green-100">💻 Médico Online</a>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Contact -->
    <section class="mt-16 bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-8 md:p-12 text-center text-white shadow-lg relative overflow-hidden">
      <!-- Decoraciones -->
      <div class="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-white opacity-10"></div>
      
      <div class="relative z-10">
        <h2 class="text-3xl font-bold mb-4">¿Necesitas personal de salud en {comuna.comunaNombre}?</h2>
        <p class="text-lg text-green-100 mb-8 max-w-2xl mx-auto">Nuestro equipo de coordinación local te atenderá rápidamente. Escríbenos para evaluar el perfil que necesita tu familiar.</p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a href="https://wa.me/56998451117" target="_blank" rel="noopener noreferrer" class="px-8 py-4 bg-white text-green-700 font-bold rounded-lg shadow-md hover:bg-gray-100 flex items-center justify-center gap-2 transition text-lg">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48a11.998 11.998 0 0 0-16.96 0 11.998 11.998 0 0 0 0 16.96l-1.4 4.9 4.9-1.4a11.998 11.998 0 0 0 16.96-16.96zM12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1.2-5.9l-.9-2.6c-.1-.2-.2-.4-.4-.5s-.3-.2-.5-.2c-.3 0-.6.1-.8.4-.2.3-.3.6-.3 1 0 .5.2 1 .6 1.4l2.7 2.7c.4.4.9.6 1.4.6.4 0 .7-.1 1-.3.3-.2.5-.5.5-.8 0-.2-.1-.4-.2-.5l-2.6-.9z"></path></svg>
            WhatsApp (Respuesta rápida)
          </a>
          <a href="/#contacto" class="px-8 py-4 bg-green-700 text-white font-bold rounded-lg shadow-md hover:bg-green-600 flex items-center justify-center gap-2 transition text-lg border border-green-500">
            Ir al formulario
          </a>
        </div>
      </div>
    </section>
  </div>
</main>
