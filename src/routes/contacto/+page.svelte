<script lang="ts">
  import {reveal} from '$lib/components/actions/reveal';
  import { fallLetters } from '$lib/components/actions/fallLetters';

  let formData = {
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  };
  
  let enviando = false;
  let mensajeEnviado = false;

  const handleSubmit = async () => {
    enviando = true;
    await new Promise(resolve => setTimeout(resolve, 1500));
    enviando = false;
    mensajeEnviado = true;
    formData = { nombre: '', email: '', asunto: '', mensaje: '' }; // Limpiar formulario
    
    // Ocultar mensaje de éxito después de unos segundos
    setTimeout(() => {
      mensajeEnviado = false;
    }, 5000);
  };
</script>

<svelte:head>
  <title>Contacto | Servicios digitales Rana</title>
  <meta name="description" content="Ponte en contacto para desarrollar tu próximo proyecto web o sistema de gestión." />
</svelte:head>

<div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
  <div class="text-center mb-16">
    <h1 use:fallLetters={{ stagger: 40, duration: 700, y: -50 }} class="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
      Hablemos de tu <span class="text-glow-trace">Próximo Proyecto</span>
    </h1>
    <p use:reveal class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
      ¿Necesitas una solución web a medida, un punto de venta o un sistema administrativo? Escríbeme y analicemos cómo puedo ayudarte a optimizar tus procesos.
    </p>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
    
    <!-- Información de Contacto (Izquierda) -->
    <div class="p-8 md:p-12 bg-gray-50 dark:bg-gray-800/50 flex flex-col justify-center">
      <h2 use:reveal class="text-2xl font-bold text-gray-900 dark:text-white mb-8">Información Directa</h2>
      
      <div class="space-y-6">
        <!-- Teléfono -->
        <div class="flex items-start">
          <div class="flex-shrink-0 mt-1">
            <div class="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
          </div>
          <div class="ml-4">
            <p use:reveal class="text-sm font-medium text-gray-500 dark:text-gray-400">Teléfono / WhatsApp</p>
            <p use:reveal class="text-lg font-semibold text-gray-900 dark:text-white mt-1">+52 937 203 63 07</p>
          </div>
        </div>

        <!-- Correo -->
        <div class="flex items-start">
          <div class="flex-shrink-0 mt-1">
            <div class="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div class="ml-4">
            <p use:reveal class="text-sm font-medium text-gray-500 dark:text-gray-400">Correo Electrónico</p>
            <a use:reveal href="mailto:andressolisbautista15@gmail.com" class="text-lg font-semibold text-gray-900 dark:text-white mt-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              andressolisbautista15@gmail.com
            </a>
          </div>
        </div>

        <!-- Ubicación -->
        <div class="flex items-start">
          <div class="flex-shrink-0 mt-1">
            <div class="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
          <div class="ml-4">
            <p use:reveal class="text-sm font-medium text-gray-500 dark:text-gray-400">Ubicación</p>
            <p use:reveal class="text-lg font-semibold text-gray-900 dark:text-white mt-1">Centro, Cunduacán, Tab.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Formulario de Contacto (Derecha) -->
    <div class="p-8 md:p-12">
      <form on:submit|preventDefault={handleSubmit} class="space-y-6">
        {#if mensajeEnviado}
          <div class="p-4 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-lg border border-emerald-200 dark:border-emerald-800 flex items-center">
            <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            ¡Mensaje enviado con éxito! Te responderé pronto.
          </div>
        {/if}

        <!-- Input Nombre -->
        <div>
          <label use:reveal for="nombre" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nombre</label>
          <div class="relative group p-[2px] rounded-lg overflow-hidden">
            <div class="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            <!-- Efecto Glow (Borde Resplandeciente) -->
            <div class="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_70%,theme(colors.blue.500)_85%,theme(colors.emerald.400)_100%)] opacity-30 group-hover:opacity-70 group-focus-within:opacity-100 transition-opacity duration-500"></div>
            <!-- Input Real -->
            <input use:reveal
              type="text" 
              id="nombre" 
              bind:value={formData.nombre}
              required
              class="relative z-10 w-full px-4 py-3 rounded-md bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:ring-0 transition-all placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="Tu nombre completo"
            >
          </div>
        </div>

        <!-- Input Email -->
        <div>
          <label use:reveal for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Correo Electrónico</label>
          <div class="relative group p-[2px] rounded-lg overflow-hidden">
            <div class="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            <div class="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_70%,theme(colors.blue.500)_85%,theme(colors.emerald.400)_100%)] opacity-30 group-hover:opacity-70 group-focus-within:opacity-100 transition-opacity duration-500"></div>
            <input use:reveal
              type="email" 
              id="email" 
              bind:value={formData.email}
              required
              class="relative z-10 w-full px-4 py-3 rounded-md bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:ring-0 transition-all placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="ejemplo@correo.com"
            >
          </div>
        </div>

        <!-- Input Asunto -->
        <div>
          <label use:reveal for="asunto" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Asunto</label>
          <div class="relative group p-[2px] rounded-lg overflow-hidden">
            <div class="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            <div class="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_70%,theme(colors.blue.500)_85%,theme(colors.emerald.400)_100%)] opacity-30 group-hover:opacity-70 group-focus-within:opacity-100 transition-opacity duration-500"></div>
            <input use:reveal
              type="text" 
              id="asunto" 
              bind:value={formData.asunto}
              required
              class="relative z-10 w-full px-4 py-3 rounded-md bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:ring-0 transition-all placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="Desarrollo de sistema, Cotización, etc."
            >
          </div>
        </div>

        <!-- Textarea Mensaje -->
        <div>
          <label use:reveal for="mensaje" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mensaje</label>
          <div class="relative group p-[2px] rounded-lg overflow-hidden">
            <div class="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            <div class="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_70%,theme(colors.blue.500)_85%,theme(colors.emerald.400)_100%)] opacity-30 group-hover:opacity-70 group-focus-within:opacity-100 transition-opacity duration-500"></div>
            <textarea use:reveal
              id="mensaje" 
              rows="4" 
              bind:value={formData.mensaje}
              required
              class="relative z-10 w-full px-4 py-3 rounded-md bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:ring-0 transition-all resize-none placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="Cuéntame sobre los requerimientos de tu proyecto..."
            ></textarea>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={enviando}
          class="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
        >
          {#if enviando}
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Enviando...
          {:else}
            Enviar Mensaje
          {/if}
        </button>
      </form>
    </div>
  </div>
</div>

<style>
  /* Animación para el rastreo en el título (Luz pasando a través del texto) */
  .text-glow-trace {
    background: linear-gradient(
      110deg,
      #2563eb 0%,        /* blue-600 */
      #10b981 35%,       /* emerald-500 */
      #a7f3d0 50%,       /* emerald-200 (El brillo intenso) */
      #10b981 65%,       /* emerald-500 */
      #2563eb 100%       /* blue-600 */
    );
    background-size: 200% auto;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    animation: text-shine 3s linear infinite;
  }

  @keyframes text-shine {
    to {
      background-position: 200% center;
    }
  }
</style>