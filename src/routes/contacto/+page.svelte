<script lang="ts">
  // Variables para manejar el estado del formulario (puedes conectarlas a tu backend/API después)
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
    // Aquí iría tu lógica para enviar el correo (ej. fetch a tu endpoint, Formspree, Resend, etc.)
    // Simulamos un retraso
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
    <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
      Hablemos de tu <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Próximo Proyecto</span>
    </h1>
    <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
      ¿Necesitas una solución web a medida, un punto de venta o un sistema administrativo? Escríbeme y analicemos cómo puedo ayudarte a optimizar tus procesos.
    </p>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
    
    <!-- Información de Contacto (Izquierda) -->
    <div class="p-8 md:p-12 bg-gray-50 dark:bg-gray-800/50 flex flex-col justify-center">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">Información Directa</h2>
      
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
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Teléfono / WhatsApp</p>
            <p class="text-lg font-semibold text-gray-900 dark:text-white mt-1">+52 937 203 63 07</p>
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
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Correo Electrónico</p>
            <a href="mailto:andressolisbautista15@gmail.com" class="text-lg font-semibold text-gray-900 dark:text-white mt-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
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
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Ubicación</p>
            <p class="text-lg font-semibold text-gray-900 dark:text-white mt-1">Centro, Cunduacán, Tab.</p>
          </div>
        </div>
      </div>

      <!-- Redes Sociales -->
      <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <p class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Encuéntrame en</p>
        <div class="flex space-x-4">
          <!-- GitHub Icon -->
          <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
            <span class="sr-only">GitHub</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
            </svg>
          </a>
          <!-- LinkedIn Icon -->
          <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-blue-600 transition-colors">
            <span class="sr-only">LinkedIn</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" />
            </svg>
          </a>
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

        <div>
          <label for="nombre" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nombre</label>
          <input 
            type="text" 
            id="nombre" 
            bind:value={formData.nombre}
            required
            class="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            placeholder="Tu nombre completo"
          >
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Correo Electrónico</label>
          <input 
            type="email" 
            id="email" 
            bind:value={formData.email}
            required
            class="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            placeholder="ejemplo@correo.com"
          >
        </div>

        <div>
          <label for="asunto" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Asunto</label>
          <input 
            type="text" 
            id="asunto" 
            bind:value={formData.asunto}
            required
            class="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            placeholder="Desarrollo de sistema, Cotización, etc."
          >
        </div>

        <div>
          <label for="mensaje" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mensaje</label>
          <textarea 
            id="mensaje" 
            rows="4" 
            bind:value={formData.mensaje}
            required
            class="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
            placeholder="Cuéntame sobre los requerimientos de tu proyecto..."
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={enviando}
          class="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-sm"
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