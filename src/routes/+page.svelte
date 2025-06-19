<script>
  import ModalInfo from '$lib/components/ModalInfo.svelte';
  import emailjs from 'emailjs-com';

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
        {
          nombre,
          email,
          mensaje,
        },
        'BCB_XP5C0iEhCvGJ7'
      );
      enviado = true;
      nombre = email = mensaje = '';
    } catch (error) {
      console.error('Error al enviar', error);
      alert('Error al enviar el mensaje.');
    }
  };

  const articulos = [
    {
      titulo: 'El hogar como espacio terapéutico',
      video: 'https://www.youtube.com/embed/Zs1eZfLG4rA',
      contenido: 'El hogar no solo brinda comodidad, también promueve bienestar emocional, reduce el riesgo de hospitalizaciones y mejora el estado anímico del paciente. Las cuidadoras planifican actividades y brindan apoyo físico y emocional en un entorno familiar.'
    },
    {
      titulo: '¿Cuándo buscar un cuidador?',
      video: 'https://www.youtube.com/embed/_6Q2tN-fH3U',
      contenido: 'El envejecimiento trae síntomas comunes como dolores, pérdida de visión, enfermedades crónicas o demencia. Cuando actividades básicas se ven afectadas, es momento de contratar apoyo profesional para preservar la salud y evitar el desgaste familiar.'
    },
    {
      titulo: 'La soledad como factor de riesgo',
      video: 'https://www.youtube.com/embed/lZIX-t_gv10',
      contenido: 'La soledad en adultos mayores incrementa el riesgo de depresión, ansiedad, deterioro cognitivo y enfermedades físicas. Un cuidador no solo asiste físicamente, también aporta compañía y contención emocional, mitigando estos riesgos.'
    }
  ];
</script>

<!-- 1. Hero principal -->
<section id="hero" class="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-4">
  <h1 class="text-5xl font-extrabold text-primary mb-4 animate-fade-in">Bienvenido a <span class="text-accent">SENDO</span></h1>
  <p class="text-xl text-gray-700 animate-fade-in delay-200">Atención de Salud Domiciliaria Humanizada y Profesional</p>
  <button class="mt-6 px-6 py-3 bg-primary text-white rounded-xl shadow hover:bg-secondary transition-all animate-fade-in delay-400">
    Conoce nuestros servicios
  </button>
</section>

<!-- 2. Servicios destacados -->
<section id="servicios" class="py-20 bg-white px-6">
  <h2 class="text-3xl font-bold text-center text-primary mb-10">Nuestros Servicios</h2>
  <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    <div class="bg-gray-50 p-6 rounded-lg shadow text-center">
      <div class="text-4xl mb-4">👩‍⚕️</div>
      <h3 class="text-xl font-semibold mb-2">Cuidadoras a Domicilio</h3>
      <p>Asistencia en aseo, alimentación, compañía y cuidado integral las 24 horas del día.</p>
    </div>
    <div class="bg-gray-50 p-6 rounded-lg shadow text-center">
      <div class="text-4xl mb-4">💉</div>
      <h3 class="text-xl font-semibold mb-2">Enfermería Profesional</h3>
      <p>Curaciones avanzadas, administración de medicamentos, control de signos y más.</p>
    </div>
    <div class="bg-gray-50 p-6 rounded-lg shadow text-center">
      <div class="text-4xl mb-4">🦵</div>
      <h3 class="text-xl font-semibold mb-2">Kinesiología y Rehabilitación</h3>
      <p>Recuperación física con planes personalizados directamente en el hogar.</p>
    </div>
  </div>
</section>

<!-- 3. Beneficios y ventajas -->
<section class="py-20 bg-blue-50 px-6">
  <h2 class="text-3xl font-bold text-center text-primary mb-10">¿Por qué elegir SENDO?</h2>
  <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto text-gray-700">
    <div>✅ Atención disponible 24/7 en todas las comunas de Santiago</div>
    <div>✅ Profesionales certificados y evaluados rigurosamente</div>
    <div>✅ Servicio cálido, humanizado y flexible</div>
    <div>✅ Equipamiento clínico a domicilio según necesidad</div>
  </div>
</section>

<!-- 4. Quiénes somos -->
<section id="quienes" class="py-20 bg-white px-6">
  <div class="max-w-4xl mx-auto text-center">
    <h2 class="text-3xl font-bold text-primary mb-6">Quiénes Somos</h2>
    <p class="text-lg text-gray-700">
      En SENDO somos un equipo multidisciplinario dedicado a entregar atención de salud personalizada, segura y profesional directamente en el hogar de nuestros pacientes.
    </p>
  </div>
</section>

<!-- 5. Artículos destacados con modales -->
<section class="py-20 bg-gray-50 px-6">
  <h2 class="text-3xl font-bold text-center text-primary mb-10">Mejorando la Calidad de Vida</h2>
  <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {#each articulos as articulo (articulo.titulo)}
      <div
  role="button"
  tabindex="0"
  on:click={() => modalData = articulo}
  on:keydown={(e) => e.key === 'Enter' && (modalData = articulo)}
  class="cursor-pointer bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
>
        <h3 class="text-xl font-semibold mb-2">{articulo.titulo}</h3>
        <p class="text-sm text-gray-700">Haz clic para saber más.</p>
      </div>
    {/each}
  </div>
</section>

<ModalInfo {modalData} on:close={() => modalData = null} />

<!-- 6. Testimonios -->
<section class="py-20 bg-gray-100 px-6">
  <h2 class="text-3xl font-bold text-center text-primary mb-10">Testimonios</h2>
  <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
    <blockquote class="bg-white p-6 rounded-lg shadow">
      "El servicio fue impecable. Mi mamá recibió atención con mucha calidez y profesionalismo."
      <footer class="text-sm mt-2 text-gray-500">– Cliente anónimo</footer>
    </blockquote>
    <blockquote class="bg-white p-6 rounded-lg shadow">
      "Las enfermeras de SENDO me ayudaron a evitar una hospitalización. 100% recomendados."
      <footer class="text-sm mt-2 text-gray-500">– Paciente post-operatorio</footer>
    </blockquote>
  </div>
</section>

<!-- 7. Contacto -->
<section id="contacto" class="py-20 bg-white px-6">
  <div class="max-w-3xl mx-auto text-center">
    <h2 class="text-3xl font-bold text-primary mb-6">Contáctanos</h2>
    <p class="text-gray-700 mb-6">¿Tienes dudas o deseas agendar una visita? Escríbenos por WhatsApp, correo electrónico o completa el siguiente formulario.</p>
    <div class="flex flex-col sm:flex-row justify-center gap-4 mb-10">
      <a href="https://wa.me/56912345678" target="_blank" class="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">WhatsApp</a>
      <a href="mailto:contacto@sendo.cl" class="px-6 py-3 bg-accent text-white rounded-lg shadow hover:bg-blue-400">Enviar correo</a>
    </div>

{#if enviado}
  <p class="text-green-600 font-medium text-center mb-6">¡Mensaje enviado con éxito!</p>
{/if}
    <!-- Formulario -->
   <form on:submit|preventDefault={enviarCorreo} class="grid gap-4 text-left max-w-xl mx-auto">
  <input type="text" bind:value={nombre} placeholder="Nombre" required class="w-full px-4 py-2 border rounded" />
  <input type="email" bind:value={email} placeholder="Correo electrónico" required class="w-full px-4 py-2 border rounded" />
  <textarea bind:value={mensaje} placeholder="Mensaje" required class="w-full px-4 py-2 border rounded"></textarea>
  <button type="submit" class="bg-primary text-white px-6 py-2 rounded hover:bg-secondary transition">Enviar</button>
</form>
  </div>
</section>

<!-- 8. Footer -->
<footer class="bg-gray-200 text-center py-6 text-sm text-gray-600">
  &copy; {new Date().getFullYear()} SENDO - Servicios de Salud Domiciliaria
</footer>

<!-- Tailwind animations -->
<style>
  .animate-fade-in {
    animation: fadeIn 1s ease forwards;
    opacity: 0;
  }
  .delay-200 {
    animation-delay: 0.2s;
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
