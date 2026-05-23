<script lang="ts">
  import { servicesData } from '$lib/services/content';

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Servicios de Enfermería y Cuidadoras a Domicilio en Santiago",
    "description": "Explora todos los servicios de salud a domicilio que SENDO ofrece en Santiago: cuidadoras, enfermería, telemedicina y más.",
    "url": "https://www.enfermeriasendo.cl/servicios"
  };
</script>

<svelte:head>
  <title>Servicios de Cuidadoras y Enfermería a Domicilio en Santiago | SENDO</title>
  <meta name="description" content="Conoce todos nuestros servicios a domicilio en Santiago: cuidadoras 24/7, TENS, procedimientos de enfermería, cuidados postoperatorios y telemedicina." />
  <link rel="canonical" href="https://www.enfermeriasendo.cl/servicios" />
  {@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>

<main class="bg-gray-50 min-h-screen pt-24 pb-16">
  <div class="max-w-6xl mx-auto px-4">
    <!-- Header -->
    <div class="text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-bold text-green-700 mb-4">Nuestros Servicios a Domicilio</h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">Soluciones integrales de salud y cuidado para el adulto mayor en todas las comunas de Santiago, adaptadas a las necesidades de tu familia.</p>
    </div>

    <!-- Services Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each servicesData as service}
        <a href={`/servicios/${service.slug}`} class="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col group">
          <div class="relative h-48 overflow-hidden bg-gray-200">
            <video autoplay loop muted playsinline class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
              <source src={`/${service.heroVideo}.webm`} type="video/webm" />
              <source src={`/${service.heroVideo}.mp4`} type="video/mp4" />
            </video>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div class="text-4xl mr-3">{service.icon}</div>
              <h2 class="text-xl font-bold text-white leading-tight">{service.title.split(' |')[0]}</h2>
            </div>
          </div>
          <div class="p-6 flex-grow flex flex-col">
            <p class="text-gray-600 mb-6 flex-grow">{service.metaDescription}</p>
            <div class="inline-flex items-center text-green-600 font-semibold group-hover:text-green-800 transition">
              Saber más
              <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </div>
          </div>
        </a>
      {/each}
    </div>

    <!-- Bottom CTA -->
    <div class="mt-20 bg-green-700 rounded-2xl p-8 md:p-12 text-center text-white shadow-lg relative overflow-hidden">
      <!-- Decoración de fondo -->
      <div class="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-10"></div>
      <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-48 h-48 rounded-full bg-white opacity-10"></div>
      
      <div class="relative z-10">
        <h2 class="text-3xl font-bold mb-4">¿No estás seguro de qué servicio necesitas?</h2>
        <p class="text-lg text-green-100 mb-8 max-w-2xl mx-auto">Cada paciente es único. Contáctanos y nuestra coordinadora clínica te orientará sin costo sobre la mejor alternativa para el cuidado de tu familiar.</p>
        <a href="https://wa.me/56998451117" target="_blank" rel="noopener noreferrer" class="inline-flex px-8 py-4 bg-white text-green-700 font-bold rounded-lg shadow-md hover:bg-gray-100 items-center justify-center gap-2 transition text-lg">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48a11.998 11.998 0 0 0-16.96 0 11.998 11.998 0 0 0 0 16.96l-1.4 4.9 4.9-1.4a11.998 11.998 0 0 0 16.96-16.96zM12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1.2-5.9l-.9-2.6c-.1-.2-.2-.4-.4-.5s-.3-.2-.5-.2c-.3 0-.6.1-.8.4-.2.3-.3.6-.3 1 0 .5.2 1 .6 1.4l2.7 2.7c.4.4.9.6 1.4.6.4 0 .7-.1 1-.3.3-.2.5-.5.5-.8 0-.2-.1-.4-.2-.5l-2.6-.9z"></path></svg>
          Asesoría Gratuita por WhatsApp
        </a>
      </div>
    </div>
  </div>
</main>
