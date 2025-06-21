<script lang="ts">
  import ModalInfo from '$lib/components/ModalInfo.svelte';
  import emailjs from 'emailjs-com';
  import { onMount } from 'svelte';

  let nombre = '';
  let email = '';
  let mensaje = '';
  let enviado = false;
  let modalData = null;

  const enviarCorreo = async (e: Event) => {
    e.preventDefault();
    try {
      const result = await emailjs.send(
        'service_jqj5141',
        'template_azju3l8',
        { nombre, email, mensaje },
        'BCB_XP5C0iEhCvGJ7'
      );
      enviado = true;
      nombre = email = mensaje = '';
    } catch (error) {
      console.error('Error al enviar', error);
      alert('Error al enviar el mensaje.');
    }
  };

  const servicios = [
  {
    icon: '👩‍⚕️',
    title: 'Cuidadoras a Domicilio',
    desc: 'Control de salud en general, administración de medicamentos, compañia y cuidado integral las 24 horas.',
    video: '/temp.mp4',
    contenido:
    `
  <p>Nuestro servicio de enfermería a domicilio entrega atención profesional en el entorno del paciente. Incluye:</p>
  <ul class="list-disc pl-5 space-y-1 mt-2">
    <li>Administración de medicamentos por vía oral, subcutánea o intramuscular.</li>
    <li>Control de signos vitales: presión arterial, saturación, frecuencia respiratoria y temperatura.</li>
    <li>Apoyo clínico general y primeros auxilios.</li>
  </ul>
  <p class="mt-4">Ideal para pacientes postoperatorios, crónicos o en seguimiento médico.</p>
`
},
  {
    icon: '💉',
    title: 'Curaciones',
    desc: 'Tratamiento de heridas postoperatorias, escaras, úlceras y lesiones complejas.',
    video: '/curaciones.mp4',
    contenido:`
  <p>Realizamos curaciones avanzadas directamente en el domicilio, lo que permite mayor comodidad y seguridad para el paciente. Nuestros servicios incluyen:</p>
  <ul class="list-disc pl-5 space-y-1 mt-2">
    <li>Tratamiento de heridas quirúrgicas, úlceras por presión, escaras y quemaduras leves.</li>
    <li>Técnicas estériles y uso de apósitos especiales.</li>
    <li>Prevención de infecciones y monitoreo de evolución.</li>
  </ul>
  <p class="mt-4">Atención realizada por técnicos o enfermeros certificados, con seguimiento personalizado.</p>
`
},
  {
  icon: '🧪',
  title: 'Manejo de Sondas y Dispositivos',
  desc: 'Atención especializada para el control e higiene de sondas y equipos médicos.',
  video: '/suero.mp4',
  contenido:  `
  <p>Atendemos a pacientes que requieren dispositivos médicos en su día a día, con profesionales capacitados en su manejo. Incluye:</p>
  <ul class="list-disc pl-5 space-y-1 mt-2">
    <li>Manejo de sondas urinarias, nasogástricas y gástricas (PEG).</li>
    <li>Cuidados de colostomías y traqueostomías.</li>
    <li>Higiene, control de obstrucciones y prevención de infecciones.</li>
  </ul>
  <p class="mt-4">Un servicio esencial para garantizar el confort, la seguridad y el correcto funcionamiento de los equipos.</p>
`
}
];

function abrirModal(servicio) {
  modalData = {
    titulo: servicio.title,
    video: servicio.video,
    contenido: servicio.contenido
  };
}

  const articulos = [
    {
      titulo: 'El hogar como espacio terapéutico',
      video: '/terapia.mp4',
      contenido:
       `
  <p>El hogar no solo brinda comodidad, también promueve bienestar emocional, reduce el riesgo de hospitalizaciones y mejora el estado anímico del paciente.</p>
  <p class="mt-3">Las cuidadoras planifican actividades y brindan apoyo físico y emocional en un entorno familiar.</p>
`,
    },
    {
      titulo: '¿Cuándo buscar un cuidador?',
      video: '/medidorpresion.mp4',
      contenido:
       `
  <p>El envejecimiento trae síntomas comunes como dolores, pérdida de visión, enfermedades crónicas o demencia.</p>
  <p class="mt-3">Cuando actividades básicas se ven afectadas, es momento de contratar apoyo profesional para preservar la salud y evitar el desgaste familiar.</p>
`,
    },
    {
      titulo: 'La soledad como factor de riesgo',
      video: '/soledad.mp4',
      contenido:
      `
  <p>La soledad en adultos mayores incrementa el riesgo de depresión, ansiedad, deterioro cognitivo y enfermedades físicas.</p>
  <p class="mt-3">Un cuidador no solo asiste físicamente, también aporta compañía y contención emocional, mitigando estos riesgos.</p>
`,
    },
  ];

  onMount(() => {
    import('aos').then((AOS) => AOS.init({ once: true }));
  });
</script>

<svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
</svelte:head>

<!-- Hero -->
<section id="hero"
  class="relative min-h-screen flex items-center justify-center text-center px-4 py-16 overflow-hidden">
  <!-- Video de fondo -->
  <video autoplay loop muted playsinline class="absolute top-0 left-0 w-full h-full object-cover z-0">
    <source src="/abuela_computador.mp4" type="video/mp4" />
    Tu navegador no soporta el elemento de video.
  </video>

  <!-- Overlay con degradado -->
  <div class="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent z-10"></div>

  <!-- Contenido -->
  <div data-aos="fade-up" class="relative z-20 max-w-4xl mx-auto text-white px-4">
    <img src="/logo3.jpg" alt="Logo SENDO" class="mx-auto rounded-full mb-6 h-54 w-auto drop-shadow-lg" />

    <h1 class="text-4xl md:text-6xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
      Bienvenidos a <span class="text-green-400">SENDO</span>
    </h1>
    <p class="text-lg md:text-2xl md:text-3xl mb-10 drop-shadow">
      Servicio de Enfermería Domiciliaria.
    </p>
    <a href="#servicios"
      class="inline-flex items-center gap-3 px-8 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition text-lg font-semibold">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
      Conoce nuestros servicios
    </a>
  </div>
</section>




<!-- Beneficios -->
<section class="py-20 bg-blue-50 px-4">
  <h2 class="text-3xl md:text-5xl font-bold text-center text-green-600 mb-12" data-aos="fade-up">¿Por qué elegir SENDO?
  </h2>
  <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
    {#each [
    'Atención disponible 24/7 en todas las comunas de Santiago',
    'Personal certificado y evaluados rigurosamente',
    'Servicio cálido, humanizado y flexible',
    'Cuidadoras a domicilio según necesidad'
    ] as beneficio, index}
    <div class="flex items-start gap-3 bg-white rounded-xl p-4 shadow-md border border-blue-100" data-aos="fade-up"
      data-aos-delay="{index * 100}">
      <span class="text-xl text-green-600">✅</span>
      <p class="text-gray-700 text-m ">{beneficio}</p>
    </div>
    {/each}
  </div>
</section>

<!-- Quiénes Somos -->
<section id="quienes" class="py-20 bg-white px-4">
  <div class="max-w-3xl mx-auto text-center" data-aos="fade-up">
    <h2 class="text-3xl md:text-5xl font-bold text-green-600 mb-6">Quiénes Somos</h2>
    <p class="text-base md:text-lg text-gray-600 leading-relaxed">
      En <span class="font-semibold text-green-600">SENDO</span> somos un equipo multidisciplinario comprometido con
      entregar atención al paciente de forma personalizada, segura y profesional directamente en su hogar.
      Nuestro enfoque humano y técnico busca siempre mejorar la calidad de vida de quienes más lo necesitan.
    </p>
  </div>
</section>

<!-- Servicios -->
<section id="servicios" class="relative py-20 px-4 overflow-hidden">
  <!-- Video de fondo -->
  <video autoplay muted loop playsinline class="absolute top-0 left-0 w-full h-full object-cover z-0">
    <source src="/tomandoprecion.mp4" type="video/mp4" />
    Tu navegador no soporta videos HTML5.
  </video>

  <!-- Overlay para mejorar contraste -->
  <div class="absolute inset-0 bg-black/40 z-0"></div>

  <!-- Contenido -->
  <div class="relative z-10 text-green-400">
    <h2 class="text-3xl md:text-5xl font-bold text-center mb-12" data-aos="fade-up">
      Nuestros Servicios
    </h2>
    <div class="grid md:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
   {#each servicios as servicio, index}
  <div
    class="bg-white/90 text-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-100 backdrop-blur-md cursor-pointer"
    on:click={() => abrirModal(servicio)}
    data-aos="fade-up" data-aos-delay="{index * 100}">
    <div class="text-4xl mb-4">{servicio.icon}</div>
    <h3 class="text-lg font-semibold mb-2">{servicio.title}</h3>
    <p class="text-m">{servicio.desc}</p>
  </div>
{/each}
{#if modalData}
  <ModalInfo modalData={modalData} on:close={() => (modalData = null)} />
{/if}

    </div>
  </div>
</section>




<!-- Artículos -->
<section class="py-20 bg-gray-50 px-4">
  <h2 class="text-3xl md:text-5xl font-bold text-center text-green-600 mb-12" data-aos="fade-up">Mejorando la Calidad de
    Vida</h2>
  <div class="grid md:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {#each articulos as articulo (articulo.titulo)}
    <div role="button" tabindex="0" on:click={()=> (modalData = articulo)}
      on:keydown={(e) => e.key === 'Enter' && (modalData = articulo)}
      class="cursor-pointer bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all border border-gray-200"
      data-aos="fade-up"
      data-aos-delay="100"
      >
      <h3 class="text-lg font-semibold text-gray-900 mb-2">{articulo.titulo}</h3>
      <p class="text-md text-green-700">Haz clic para saber más.</p>
    </div>
    {/each}
  </div>
</section>

<ModalInfo {modalData} on:close={()=> (modalData = null)} />



  <!-- Testimonios -->
  <section class="relative py-20 px-4 overflow-hidden">
    <!-- Video de fondo -->
    <video autoplay muted loop playsinline class="absolute top-0 left-0 w-full h-full object-cover z-0">
      <source src="/testimonio.mp4" type="video/mp4" />
      Tu navegador no soporta videos HTML5.
    </video>

    <!-- Overlay oscuro -->
    <div class="absolute inset-0 bg-black/50 z-0"></div>

    <!-- Contenido -->
    <div class="relative z-10 text-white">
      <h2 class="text-3xl md:text-5xl font-bold text-center mb-12 text-green-400" data-aos="fade-up">
        Testimonios
      </h2>
      <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {#each [
        { quote: 'EJEMPLO: El servicio fue impecable. Mi mamá recibió atención con mucha calidez y profesionalimdo.', author:
        'Cliente anónimo' },
        { quote: 'EJEMPLO: Las enfermeras de SENDO me ayudaron a evitar una hospitalización. 100% recomendados.', author:
        'Paciente post-operatorio' }
        ] as testimonio, index}
        <blockquote class="bg-white/90 text-gray-800 p-6 rounded-xl shadow border-l-4 border-green-400 backdrop-blur-md"
          data-aos="fade-up" data-aos-delay="{index * 100}">
          <p class="italic mb-2 text-md">“{testimonio.quote}”</p>
          <footer class="text-xs text-green-800">– {testimonio.author}</footer>
        </blockquote>
        {/each}
      </div>
    </div>
  </section>


  <!-- Contacto -->
  <section id="contacto" class="py-20 bg-white px-4">
    <div class="max-w-3xl mx-auto text-center" data-aos="fade-up">
      <h2 class="text-3xl md:text-5xl font-bold text-green-600 mb-6">Contáctanos</h2>
      <p class="text-gray-600 mb-8 text-base md:text-lg">¿Tienes dudas o deseas agendar una visita? Escríbenos por
        WhatsApp, correo electrónico o completa el formulario.</p>
      <div class="flex flex-col sm:flex-row justify-center gap-4 mb-10">
        <a href="https://wa.me/56912345678" target="_blank"
          class="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 flex items-center gap-2 transition">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M20.52 3.48a11.998 11.998 0 0 0-16.96 0 11.998 11.998 0 0 0 0 16.96l-1.4 4.9 4.9-1.4a11.998 11.998 0 0 0 16.96-16.96zM12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1.2-5.9l-.9-2.6c-.1-.2-.2-.4-.4-.5s-.3-.2-.5-.2c-.3 0-.6.1-.8.4-.2.3-.3.6-.3 1 0 .5.2 1 .6 1.4l2.7 2.7c.4.4.9.6 1.4.6.4 0 .7-.1 1-.3.3-.2.5-.5.5-.8 0-.2-.1-.4-.2-.5l-2.6-.9z" />
          </svg>
          WhatsApp
        </a>
        <a href="mailto:contacto@sendo.cl"
          class="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 flex items-center gap-2 transition">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 12H8m8 0l-4 4m4-4l-4-4" />
          </svg>
          Enviar correo
        </a>
      </div>
      {#if enviado}
      <p class="text-green-600 font-medium text-center mb-6">¡Mensaje enviado con éxito!</p>
      {/if}
      <form on:submit|preventDefault={enviarCorreo}
        class="bg-white p-6 rounded-xl shadow-lg max-w-xl mx-auto space-y-4 border border-gray-100">
        <input type="text" bind:value={nombre} placeholder="Nombre" required
          class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition" />
        <input type="email" bind:value={email} placeholder="Correo electrónico" required
          class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition" />
        <textarea bind:value={mensaje} placeholder="Mensaje" required
          class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-y"
          rows="4"></textarea>
        <button type="submit"
          class="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-medium">Enviar</button>
      </form>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-green-900 text-white py-12 px-4">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

      <div class="flex flex-col items-center md:items-start">
        <h3 class="text-xl font-bold text-green-400 mb-2">SENDO</h3>
        <p class="text-sm text-white">Servicios de Enfermería Domiciliaria </p>
        <p class="text-sm text-white mt-4">&copy; {new Date().getFullYear()} <br> SENDO. Todos los derechos reservados.
        </p>
      </div>

      <div>
        <h4 class="text-xl font-bold mb-4 text-green-400">Explorar</h4>
        <ul class="space-y-2">
          <li><a href="#hero" class="text-white hover:text-green-400 transition text-md">Inicio</a></li>
          <li><a href="#servicios" class="text-white hover:text-green-400 transition text-md">Nuestros Servicios</a>
          </li>
          <li><a href="#nosotros" class="text-white hover:text-green-400 transition text-md">Sobre Nosotros</a></li>
          <li><a href="#preguntas" class="text-white hover:text-green-400 transition text-md">Preguntas Frecuentes</a>
          </li>
          <li><a href="#contacto" class="text-white hover:text-green-400 transition text-md">Contacto</a></li>
        </ul>
      </div>

      <div>
        <h4 class="text-xl font-bold mb-4 text-green-400">Contáctanos</h4>
        <ul class="space-y-2 text-white">
          <li class="flex items-center justify-center md:justify-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              class="w-4 h-4 text-green-400">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <a href="https://maps.app.goo.gl/TU_DIRECCION_AQUI" target="_blank"
              class="hover:text-green-400 transition text-md">Santiago, Chile</a>
          </li>
          <li class="flex items-center justify-center md:justify-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              class="w-4 h-4 text-green-400">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:contacto@enfermeriasendo.cl" class="hover:text-green-400 transition text-md">contacto@enfermeriasendo.cl</a>
          </li>
          <li class="flex items-center justify-center md:justify-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              class="w-4 h-4 text-green-400">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <a href="tel:+56912345678" class="hover:text-green-400 transition text-md">+56 9 9 845 1117</a>
          </li>
          <li class="flex items-center justify-center md:justify-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              class="w-4 h-4 text-green-400">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <a href="https://wa.me/56998451117" target="_blank"
              class="hover:text-green-400 transition text-md">WhatsApp</a>
          </li>
        </ul>

        <div class="mt-6 flex justify-center md:justify-start gap-4">
          <a href="https://facebook.com/tupagina" target="_blank" class="text-gray-400 hover:text-green-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              class="w-4 h-4 text-green-400"> </a>
          <a href="https://instagram.com/tuperfil" target="_blank" class="text-gray-400 hover:text-green-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              class="w-4 h-4 text-green-400"> </a>
        </div>
      </div>

    </div>
  </footer>

  <style>
    :global(body) {
      font-family: 'Poppins', sans-serif;
    }

    .animate-fade-in {
      animation: fadeIn 1s ease forwards;
      opacity: 0;
    }

    .delay-100 {
      animation-delay: 0.1s;
    }

    .delay-200 {
      animation-delay: 0.2s;
    }

    .delay-300 {
      animation-delay: 0.3s;
    }

    .delay-400 {
      animation-delay: 0.4s;
    }

    @keyframes fadeIn {
      to {
        opacity: 1;
      }
    }
  </style>