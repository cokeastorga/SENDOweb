<script lang="ts">
  import { comunasData } from '$lib/comunas/content';

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Cobertura de Enfermería a Domicilio en Santiago por Comunas",
    "description": "Encuentra servicios de cuidadoras y enfermería a domicilio en tu comuna. Cobertura en Las Condes, Providencia, Maipú, La Florida y todo Santiago.",
    "url": "https://www.enfermeriasendo.cl/comunas"
  };
</script>

<svelte:head>
  <title>Cobertura en Comunas de Santiago | SENDO Enfermería a Domicilio</title>
  <meta name="description" content="Nuestras cuidadoras y enfermeras llegan a todas las comunas de Santiago. Encuentra tu comuna y conoce nuestros planes de salud a domicilio." />
  <link rel="canonical" href="https://www.enfermeriasendo.cl/comunas" />
  {@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>

<main class="bg-gray-50 min-h-screen pt-24 pb-16">
  <div class="max-w-6xl mx-auto px-4">
    <!-- Header -->
    <div class="text-center mb-16">
      <div class="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-4">
        <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
      </div>
      <h1 class="text-4xl md:text-5xl font-bold text-green-700 mb-4">Cobertura en Santiago</h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">Selecciona tu comuna para conocer los servicios específicos, equipo disponible y ventajas locales que SENDO Enfermería tiene para tu familia.</p>
    </div>

    <!-- Comunas Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each comunasData as comuna}
        <a href={`/comunas/${comuna.slug}`} class="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
          <div class="h-32 bg-gray-200 relative overflow-hidden">
            <video autoplay loop muted playsinline class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
              <source src={`/${comuna.heroVideo}.webm`} type="video/webm" />
              <source src={`/${comuna.heroVideo}.mp4`} type="video/mp4" />
            </video>
            <div class="absolute inset-0 bg-gradient-to-t from-green-900/90 to-transparent flex items-end p-4">
              <h2 class="text-xl font-bold text-white group-hover:text-green-300 transition">📍 {comuna.comunaNombre}</h2>
            </div>
          </div>
          <div class="p-5">
            <p class="text-gray-600 text-sm mb-4 line-clamp-3">{comuna.metaDescription}</p>
            <span class="text-green-600 font-semibold text-sm group-hover:underline">Ver detalles de cobertura →</span>
          </div>
        </a>
      {/each}
    </div>

    <!-- Info Banner -->
    <div class="mt-16 bg-blue-50 border border-blue-100 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
      <div class="text-4xl">🚗</div>
      <div>
        <h3 class="text-xl font-bold text-gray-800 mb-2">¿No ves tu comuna en la lista principal?</h3>
        <p class="text-gray-600">Nuestra red de profesionales abarca toda la Región Metropolitana. También llegamos a <strong>San Miguel, Macul, Peñalolén, Recoleta, San Bernardo, Independencia, Huechuraba</strong> y zonas periféricas como <strong>Colina, Lampa y Padre Hurtado</strong>.</p>
      </div>
      <div class="md:ml-auto whitespace-nowrap">
        <a href="/#contacto" class="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition">
          Consultar mi comuna
        </a>
      </div>
    </div>
  </div>
</main>
