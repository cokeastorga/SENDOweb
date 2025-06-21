<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let modalData;
  const dispatch = createEventDispatcher();

  const handleClose = () => dispatch('close');
</script>


{#if modalData}
  <div class="fixed inset-0 z-50 bg-gray-100 bg-opacity-50 flex items-center justify-center p-4" on:click={handleClose}>
    <div
      class="bg-white max-w-4xl w-full rounded-lg overflow-hidden shadow-xl relative grid md:grid-cols-2"
      on:click|stopPropagation
    >
      <button
        on:click={handleClose}
        class="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl font-bold px-3"
        aria-label="Cerrar modal"
      >
        &times;
      </button>

      <!-- Video -->
      <div class="w-full h-full max-h-[360px] overflow-hidden flex items-center justify-center mt-5 bg-black">
  <video
    src={modalData.video}
    class="max-h-full max-w-full object-contain"
    
    autoplay muted loop playsinline
  />
</div>


      <!-- Texto -->
      <div class="p-6 flex flex-col justify-center">
        <h2 class="text-2xl font-bold text-primary mb-4">{modalData.titulo}</h2>
       <div class="text-gray-700 text-base leading-relaxed space-y-2">
  {@html modalData.contenido}
</div>
      </div>
    </div>
  </div>
{/if}
