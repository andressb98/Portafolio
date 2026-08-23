<script lang="ts">
  import { resolve } from '$app/paths';

  // Definimos la estructura exacta que esperas recibir
  interface Project {
    slug: string;
    title: string;
    description: string;
    tech: string[];
    image: string;
    github: string;
  }

  // Recibimos el objeto del proyecto como propiedad
  let { project }: { project: Project } = $props();
</script>

<!-- 
  Envolvemos todo en una etiqueta <a>. 
  'group' nos permite animar elementos internos cuando se hace hover en la tarjeta principal.
-->
<a 
  href={resolve(`/projects/${project.slug}`)} 
  class="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
>
  <!-- Contenedor de la Imagen -->
  <div class="relative w-full h-48 overflow-hidden bg-gray-100">
    <img 
      src={project.image} 
      alt="Captura de pantalla de {project.title}" 
      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
  </div>

  <!-- Contenedor del Contenido -->
  <div class="flex flex-col flex-grow p-5">
    <!-- Título -->
    <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
      {project.title}
    </h3>

    <!-- Descripción (line-clamp-3 limita el texto a 3 líneas) -->
    <p class="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
      {project.description}
    </p>

    <!-- Píldoras de Tecnologías -->
    <ul class="flex flex-wrap gap-2 mt-auto">
      {#each project.tech as tech (tech)}
        <li class="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md border border-gray-200">
          {tech}
        </li>
      {/each}
    </ul>
  </div>
</a>