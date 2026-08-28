<script lang="ts">
	import { resolve } from '$app/paths';

	interface Project {
		slug: string;
		title: string;
		description: string;
		tech: string[];
		image: string;
		github: string;
	}

	let { project }: { project: Project } = $props();
</script>

<a
	href={resolve(`/projects/${project.slug}`)}
	class="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800 dark:hover:shadow-blue-500/10"
>
	<!-- Contenedor de la Imagen -->
	<!-- Añadimos border-b para separar mejor la imagen del texto en modo oscuro -->
	<div
		class="relative h-48 w-full overflow-hidden border-b border-gray-100 bg-gray-100 dark:border-slate-700 dark:bg-slate-900"
	>
		<img
			src={project.image}
			alt="Captura de pantalla de {project.title}"
			class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
		/>
		<!-- Opcional: Un pequeño overlay gradiente para hacerla ver más premium -->
		<div
			class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		></div>
	</div>

	<!-- Contenedor del Contenido -->
	<div class="flex flex-grow flex-col p-6">
		<!-- Título -->
		<h3
			class="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400"
		>
			{project.title}
		</h3>

		<!-- Descripción -->
		<p class="mb-6 line-clamp-3 flex-grow text-sm leading-relaxed text-gray-600 dark:text-gray-300">
			{project.description}
		</p>

		<!-- Píldoras de Tecnologías -->
		<ul class="mt-auto flex flex-wrap gap-2">
			{#each project.tech as tech (tech)}
				<li
					class="rounded-md border border-gray-200 bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700 transition-colors dark:border-slate-600/50 dark:bg-slate-900/50 dark:text-gray-300"
				>
					{tech}
				</li>
			{/each}
		</ul>
	</div>
</a>
