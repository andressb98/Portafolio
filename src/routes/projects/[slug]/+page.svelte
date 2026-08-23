<script lang="ts">
  import { resolve } from '$app/paths';

  // Recibimos los datos exportados por la función load en +page.ts
  let { data } = $props();
  let project = data.project;
  
  // Extraemos las nuevas propiedades con valores por defecto para evitar errores
  const gallery = project.gallery || [];
  const challenges = project.challenges || [];
  const solution = project.solution || '';
  // Usamos 'technologies' si existe, de lo contrario usamos 'tech'
  const techStack = project.technologies || project.tech || [];
</script>

<svelte:head>
  <title>{project.title} | Detalles del Proyecto</title>
  <meta name="description" content={project.description} />
</svelte:head>

<article class="max-w-5xl mx-auto py-8 md:py-12 px-4 sm:px-6">
  
  <!-- Enlace para regresar -->
  <a 
    href={resolve('/projects')} 
    class="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline mb-8 transition-colors"
  >
    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
    Volver a Proyectos
  </a>

  <!-- Cabecera e Imagen Principal -->
  <header class="mb-12">
    <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6">
      {project.title}
    </h1>
    
    <div class="flex flex-wrap gap-2 mb-8">
      {#each techStack as tech (tech)}
        <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm font-semibold rounded-md border border-gray-200 dark:border-gray-700">
          {tech}
        </span>
      {/each}
    </div>

    <!-- Imagen Principal Grande -->
    <div class="w-full aspect-video rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
      <img 
        src={project.image} 
        alt="Interfaz principal de {project.title}" 
        class="w-full h-full object-cover object-top"
      />
    </div>
  </header>

  <!-- Contenido Principal -->
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
    
    <!-- Columna Izquierda: Detalles, Retos y Galería -->
    <div class="lg:col-span-2 space-y-12">
      
      <!-- Descripción General -->
      <section>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Descripción del Proyecto</h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {project.description}
        </p>
      </section>

      <!-- Retos y Solución -->
      {#if challenges.length > 0 || solution}
        <section class="pt-8 border-t border-gray-200 dark:border-gray-800">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Retos Técnicos y Solución</h2>
          
          {#if challenges.length > 0}
            <div class="mb-8">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Desafíos Principales</h3>
              <ul class="space-y-3">
                {#each challenges as challenge (challenge)}
                  <li class="flex items-start text-gray-600 dark:text-gray-300">
                    <svg class="w-6 h-6 text-emerald-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span class="leading-relaxed">{challenge}</span>
                  </li>
                {/each}
              </ul>
            </div>
          {/if}

          {#if solution}
            <div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-xl">
              <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">Enfoque y Solución</h3>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                {solution}
              </p>
            </div>
          {/if}
        </section>
      {/if}

      <!-- Galería de Imágenes -->
      {#if gallery.length > 0}
        <section class="pt-8 border-t border-gray-200 dark:border-gray-800">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Exploración de la Interfaz</h2>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {#each gallery as item (item.src)}
              <div class="group bg-gray-50 dark:bg-gray-800/50 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
                <div class="aspect-video overflow-hidden bg-gray-200 dark:bg-gray-900">
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div class="p-5">
                  <h3 class="font-bold text-gray-900 dark:text-white mb-2">{item.alt}</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            {/each}
          </div>
        </section>
      {/if}

    </div>

    <!-- Columna Derecha: Panel de Acciones -->
    <div class="lg:col-span-1">
      <div class="bg-gray-50 dark:bg-gray-800/30 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 sticky top-8">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6">Enlaces del Proyecto</h3>
        
        <div class="flex flex-col space-y-4">
          {#if project.github}
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex justify-center items-center w-full px-5 py-3 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 text-sm font-semibold rounded-xl transition-colors shadow-sm"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
              Ver Repositorio
            </a>
          {/if}
          
          <!-- Botón de Contacto Rápido -->
          <a 
            href={resolve('/contacto')}
            class="flex justify-center items-center w-full px-5 py-3 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-gray-200 text-sm font-semibold rounded-xl transition-all"
          >
            Preguntar por este desarrollo
          </a>
        </div>
      </div>
    </div>
    
  </div>
</article>