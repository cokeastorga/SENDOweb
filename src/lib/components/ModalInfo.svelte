<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';

  export let modalData: { titulo: string; video?: string; contenido: string } | null;

  const dispatch = createEventDispatcher();
  const handleClose = () => dispatch('close');

  let panelEl: HTMLDivElement | null = null;

  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') handleClose();
  }

  onMount(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden'; // bloquea el fondo
    window.addEventListener('keydown', onKeydown);
    setTimeout(() => panelEl?.focus?.(), 0);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeydown);
    };
  });
</script>

{#if modalData}
  <div
    class="fixed inset-0 z-[1000] flex items-center justify-center p-4"
    role="dialog"
    aria-modal="true"
    aria-label={modalData.titulo}
    on:click={handleClose}
  >
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

    <!-- Panel -->
    <div
      bind:this={panelEl}
      tabindex="0"
      class="relative z-[1001] w-full max-w-4xl bg-white shadow-2xl border border-gray-200
             rounded-none sm:rounded-2xl focus:outline-none
             flex flex-col min-h-0 max-h-[90vh]"  
      on:click|stopPropagation
    >
      <!-- Header sticky con título y cerrar -->
      <div class="sticky top-0 z-10 flex items-center gap-3 bg-white/95 backdrop-blur px-4 py-3 border-b">
        <h2 class="text-lg font-semibold text-gray-900 flex-1 line-clamp-1">{modalData.titulo}</h2>
        <button
          on:click={handleClose}
          class="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-2.5 py-2 text-gray-700 hover:bg-gray-50 focus:outline-none shadow"
          aria-label="Cerrar modal"
        >
          ✕
        </button>
      </div>

      <!-- Contenido scrolleable -->
      <div class="flex-1 min-h-0 overflow-y-auto -webkit-overflow-scrolling-touch">
        <!-- Grid responsiva -->
        <div class="grid md:grid-cols-2">
          <!-- Video -->
          <div class="w-full bg-black flex items-center justify-center">
            {#if modalData.video}
              <video
                src={modalData.video}
                class="w-full h-auto max-h-[40vh] md:max-h-[360px] object-contain"
                autoplay
                muted
                loop
                playsinline
                controls
              />
            {/if}
          </div>

          <!-- Texto -->
          <div class="p-6">
            <div class="prose prose-sm max-w-none text-gray-700 leading-relaxed">
              {@html modalData.contenido}
            </div>

            <div class="mt-6">
              <button
                class="w-full rounded-lg bg-green-600 text-white py-2.5 hover:bg-green-700 transition"
                on:click={handleClose}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  /* iOS scroll suave dentro del modal */
  .touch-scroll { -webkit-overflow-scrolling: touch; }

  .fade-in {
    animation: fadeIn 180ms ease-out forwards;
    opacity: 0;
    transform: translateY(4px);
  }
  @keyframes fadeIn {
    to { opacity: 1; transform: translateY(0); }
  }
</style>
