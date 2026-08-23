import { error } from '@sveltejs/kit';
// Ajusta la ruta a tu archivo real de projects.ts
import { projects } from '$lib/data/projects'; 

export function load({ params }) {
  // Buscamos el proyecto que coincida con el slug de la URL
  const project = projects.find((p) => p.slug === params.slug);

  // Si no se encuentra, lanzamos un error 404
  if (!project) {
    error(404, {
      message: 'Proyecto no encontrado'
    });
  }

  // Retornamos el proyecto para que esté disponible en +page.svelte
  return {
    project
  };
}