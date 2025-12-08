<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';

  export let modalData: { titulo: string; videoBase?: string; contenido: string } | null;

  const dispatch = createEventDispatcher();
  const handleClose = () => dispatch('close');

  let panelEl: HTMLDivElement | null = null;

  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') handleClose();
  }

  onMount(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden'; 
    window.addEventListener('keydown', onKeydown);
    setTimeout(() => panelEl?.focus?.(), 50);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeydown);
    };
  });
</script>

{#if modalData}
  <div
    class="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6"
    role="dialog"
    aria-modal="true"
    aria-label={modalData.titulo}
  >
    <div 
      class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      on:click={handleClose}
      aria-hidden="true"
    ></div>

    <div
      bind:this={panelEl}
      tabindex="-1"
      class="relative z-[1001] w-full max-w-5xl bg-white shadow-2xl border border-gray-100
             rounded-xl sm:rounded-2xl focus:outline-none overflow-hidden
             flex flex-col max-h-[95vh] sm:max-h-[85vh] animate-modal-entry"
      on:click|stopPropagation
    >
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white sticky top-0 z-20 shrink-0">
        <h2 class="text-xl md:text-2xl font-bold text-green-700 line-clamp-1 pr-4">
          {modalData.titulo}
        </h2>
        <button
          on:click={handleClose}
          class="group relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-500 
                 hover:bg-red-50 hover:text-red-600 transition-all duration-200 focus:ring-2 focus:ring-red-200 outline-none cursor-pointer"
          aria-label="Cerrar modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 transition-transform group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="flex-1 overflow-hidden bg-gray-50/50 flex flex-col md:flex-row">
        
        {#if modalData.videoBase}
          <div class="w-full md:w-1/2 bg-black flex items-center justify-center shrink-0 h-auto md:h-auto md:min-h-[400px] relative">
             <video
              class="w-auto h-auto max-w-full max-h-[45vh] md:max-h-full object-contain mx-auto"
              autoplay
              muted
              loop
              playsinline
              controls
            >
              <source src="{modalData.videoBase}.webm" type="video/webm" />
              <source src="{modalData.videoBase}.mp4" type="video/mp4" />
              Tu navegador no soporta videos.
            </video>
          </div>
        {/if}

        <div class="flex-1 flex flex-col min-h-0 bg-white">
          <div class="flex-1 overflow-y-auto p-6 md:p-8 touch-scroll">
            <div class="prose prose-slate prose-sm md:prose-base prose-headings:text-green-800 max-w-none">
              {@html modalData.contenido}
            </div>
          </div>

          <div class="p-4 md:p-6 border-t border-gray-100 bg-white shrink-0">
            <button
              class="w-full sm:w-auto ml-auto px-6 py-2.5 rounded-lg bg-green-600 text-white font-medium 
                     hover:bg-green-700 active:transform active:scale-95 transition-all shadow-lg shadow-green-200
                     flex items-center justify-center gap-2 cursor-pointer"
              on:click={handleClose}
            >
              <span>Entendido</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
{/if}

<style>
  .touch-scroll { -webkit-overflow-scrolling: touch; }
  .animate-modal-entry { animation: modalPop 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  @keyframes modalPop {
    from { opacity: 0; transform: scale(0.95) translateY(10px); }
    to { opacity: 1; transform: scale(1) translateY(0); }
  }
</style>