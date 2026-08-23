<script lang="ts">
  // Importamos el arreglo completo de proyectos
  // Ajusta la ruta '$lib/data/projects' según la ubicación real de tu archivo projects.ts
  import { projects } from '$lib/data/projects'; 
  
  // Importamos tu componente ProjectCard
  import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<svelte:head>
  <title>Proyectos | Servicios digitales Rana</title>
  <meta name="description" content="Catálogo completo de proyectos de desarrollo de software, aplicaciones web y plataformas full-stack." />
</svelte:head>

<div class="py-8 md:py-12">
  
  <!-- Encabezado de la Galería -->
  <header class="mb-12 text-center md:text-left">
    <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
      Mi Trabajo
    </h1>
    <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
      Explora mi catálogo completo de desarrollos, que abarca desde simuladores logísticos con mapas interactivos y plataformas e-commerce, hasta sistemas integrales de gestión.
    </p>
  </header>

  <!-- Cuadrícula CSS (CSS Grid) para las tarjetas -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each projects as project (project.slug)}
      <!-- 
        Pasamos la variable 'project' de la iteración como prop al componente.
        Usar (project.slug) como clave de iteración ayuda a Svelte a renderizar la lista más rápido.
      -->
      <ProjectCard {project} />
    {/each}
  </div>

</div>