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
      <div class="aspect-video w-full">
        <iframe
          title="Video informativo"
          class="w-full h-full"
          src={modalData.video}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <!-- Texto -->
      <div class="p-6 flex flex-col justify-center">
        <h2 class="text-2xl font-bold text-primary mb-4">{modalData.titulo}</h2>
        <p class="text-gray-700 text-base">{modalData.contenido}</p>
      </div>
    </div>
  </div>
{/if}
