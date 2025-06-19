<script lang="ts">
	import '../app.css';
	
	
	 
  let menuAbierto = false;

  const scrollA = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      menuAbierto = false;
    }
  };

</script>
<!-- Navbar -->
<nav class="fixed top-0 left-0 right-0 z-50 bg-white shadow-md px-4 sm:px-10 py-3 flex justify-between items-center">
  <div class="text-xl font-bold text-primary">SENDO</div>
  <div class="hidden sm:flex gap-6 text-sm font-medium text-gray-700">
    <button on:click={() => scrollA('hero')} class="text-sm font-medium text-gray-700 hover:underline">Inicio</button>
    <button on:click={() => scrollA('servicios')} class="text-sm font-medium text-gray-700 hover:underline">Servicios</button>
    <button on:click={() => scrollA('quienes')} class="text-sm font-medium text-gray-700 hover:underline">Quiénes Somos</button>
    <button on:click={() => scrollA('contacto')} class="text-sm font-medium text-gray-700 hover:underline">Contacto</button>
  </div>
  <!-- Móvil -->
  <button class="sm:hidden" on:click={() => (menuAbierto = !menuAbierto)}>
    ☰
  </button>
</nav>

<!-- Botón flotante WhatsApp -->
<a
  href="https://wa.me/56912345678"
  target="_blank"
  aria-label="Enviar mensaje por WhatsApp"
  class="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 flex items-center justify-center"
>
  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path
      d="M20.5 3.5A11.94 11.94 0 0012 0C5.373 0 0 5.373 0 12c0 2.11.55 4.09 1.51 5.82L0 24l6.26-1.64A11.97 11.97 0 0012 24c6.627 0 12-5.373 12-12 0-3.18-1.24-6.104-3.5-8.5zM12 22c-1.794 0-3.49-.475-4.97-1.31l-.353-.207L4 22l1.519-2.684-.248-.368A9.957 9.957 0 012 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.004-6.582l-1.897-.556a.945.945 0 00-.887.17l-.587.445a7.586 7.586 0 01-3.61-3.61l.446-.587a.945.945 0 00.169-.887l-.556-1.897a.944.944 0 00-.894-.662c-.45 0-.882.187-1.195.518a3.96 3.96 0 00-1.008 2.438c0 2.225 1.836 4.06 4.06 4.06.872 0 1.699-.271 2.438-1.008.331-.313.518-.745.518-1.195a.944.944 0 00-.662-.894z"
    />
  </svg>
</a>

<slot />
