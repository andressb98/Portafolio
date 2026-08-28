<script lang="ts">
	// Asegúrate de ajustar las rutas de importación según la estructura de tu proyecto
	import { resolve } from '$app/paths';
	import { projects } from '$lib/data/projects'; // Asumiendo que guardaste projects.ts aquí
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	import Constelacion from '$lib/components/constelacion.svelte';
	import MascotaPuntoComa from '$lib/components/MascotaPuntoComa.svelte';
	import MascotaMusculosa from '$lib/components/MascotaMusculosa.svelte';
	import MascotaEjecutiva from '$lib/components/MascotaEjecutiva.svelte';

	import { reveal } from '$lib/components/actions/reveal';
	import { fall } from '$lib/components/actions/fall';
	import { fallLetters } from '$lib/components/actions/fallLetters';

	const featuredProjects = projects.slice(0, 3);
</script>

<svelte:head>
	<title>Inicio | Servicios digitales Rana</title>
	<meta name="description" content="Portafolio de desarrollo de software y sistemas web." />
</svelte:head>

<div class="space-y-24 pb-12">
	<!-- Hero Section -->
	<section
		class="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden pt-20 text-center md:pt-32"
	>
		<!-- Animación de fondo -->
		<Constelacion />

		<!-- Contenido Frontal (aseguramos que esté por encima con z-10) -->
		<div class="relative z-10 px-4">
			<h1
				use:fallLetters={{ stagger: 40, duration: 700, y: -50 }}
				class="mb-6 text-5xl font-extrabold tracking-tight text-gray-900 drop-shadow-sm md:text-7xl dark:text-white"
			>
				Soluciones
				<span class="bg-linear-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
					Digitales
				</span>
				a Medida
			</h1>

			<p
				use:fall={{ duration: 1000, y: -30, delay: 800 }}
				class="mx-auto mt-4 mb-10 max-w-3xl text-xl text-gray-600 drop-shadow-sm md:text-2xl dark:text-gray-300"
			>
				Desarrollo de software escalable, arquitecturas full-stack y optimización de procesos
				mediante tecnología moderna.
			</p>
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<a
					use:reveal
					href={resolve('/projects')}
					class="inline-flex items-center justify-center rounded-lg border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white shadow-sm transition-all hover:scale-105 hover:bg-blue-700"
				>
					Ver Proyectos
				</a>
				<a
					use:reveal
					href={resolve('/contacto')}
					class="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 bg-white/80 px-8 py-3 text-base font-medium text-gray-700 backdrop-blur-sm transition-all hover:scale-105 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900/80 dark:text-gray-200 dark:hover:bg-gray-800"
				>
					Contáctame
				</a>
			</div>
		</div>
	</section>

	<!-- Sobre Mí (Breve) -->
	<section
		class="relative mt-20 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:p-12 dark:border-gray-800 dark:bg-gray-900"
	>
		<MascotaPuntoComa />

		<div class="mx-auto max-w-4xl">
			<h2
				use:reveal
				class="mb-6 border-b border-gray-200 pb-4 text-3xl font-bold text-gray-900 dark:border-gray-700 dark:text-white"
			>
				Sobre Mí
			</h2>
			<div class="space-y-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
				<p use:reveal>
					Soy estudiante de Ingeniería en Sistemas Computacionales en la Universidad Juárez Autónoma
					de Tabasco (UJAT), con un enfoque fuertemente orientado al desarrollo de software y la
					resolución de problemas técnicos complejos.
				</p>
				<p use:reveal>
					Me especializo en la construcción de aplicaciones robustas utilizando un ecosistema
					diverso. En el frontend, aprovecho la reactividad de <strong>SvelteKit</strong> y
					<strong>JavaScript/TypeScript</strong>
					para crear interfaces fluidas. En el backend, diseño lógicas de servidor, APIs y modelos de
					datos relacionales trabajando con <strong>Python</strong>, <strong>Java</strong> y
					<strong>PHP</strong>, priorizando siempre la eficiencia del código y arquitecturas
					mantenibles.
				</p>
			</div>
		</div>
	</section>

	<!-- Habilidades Técnicas -->
	<section
		class="relative mt-20 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:p-12 dark:border-gray-800 dark:bg-gray-900"
	>
		<MascotaMusculosa />

		<div class="mx-auto max-w-5xl">
			<h2
				use:reveal
				class="mb-8 border-b border-gray-200 pb-4 text-3xl font-bold text-gray-900 dark:border-gray-700 dark:text-white"
			>
				Habilidades Técnicas
			</h2>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
				<!-- Tarjeta Frontend -->
				<div
					class="group rounded-xl border border-gray-100 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/50 dark:hover:border-blue-400"
				>
					<div
						use:reveal
						class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition-transform group-hover:scale-110 dark:bg-blue-900/30 dark:text-blue-400"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
					</div>
					<h3
						use:reveal
						class="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400"
					>
						Frontend
					</h3>
					<p use:reveal class="leading-relaxed text-gray-600 dark:text-gray-300">
						SvelteKit, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS, Bootstrap, Bulma CSS.
					</p>
				</div>

				<!-- Tarjeta Backend & DB -->
				<div
					class="group rounded-xl border border-gray-100 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/50 dark:hover:border-emerald-400"
				>
					<div
						use:reveal
						class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 transition-transform group-hover:scale-110 dark:bg-emerald-900/30 dark:text-emerald-400"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
							/>
						</svg>
					</div>
					<h3
						use:reveal
						class="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400"
					>
						Backend & Bases de Datos
					</h3>
					<p use:reveal class="leading-relaxed text-gray-600 dark:text-gray-300">
						Node.js, Java, PHP, Python, Flask, Prisma, SQLite, MySQL, SQL, Supabase.
					</p>
				</div>

				<!-- Tarjeta Herramientas & Arquitectura -->
				<div
					class="group rounded-xl border border-gray-100 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/50 dark:hover:border-purple-400"
				>
					<div
						use:reveal
						class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600 transition-transform group-hover:scale-110 dark:bg-purple-900/30 dark:text-purple-400"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
					</div>
					<h3
						use:reveal
						class="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400"
					>
						Arquitectura & Tools
					</h3>
					<p use:reveal class="leading-relaxed text-gray-600 dark:text-gray-300">
						Git / GitHub, REST APIs, Arquitectura CRUD, Programación Orientada a Objetos (POO),
						Metodologías Ágiles (Sprints).
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Experiencia Laboral -->
	<section
		class="relative mt-20 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:p-12 dark:border-gray-800 dark:bg-gray-900"
	>
		<MascotaEjecutiva />
		<div class="mx-auto max-w-5xl">
			<h2
				use:reveal
				class="mb-8 border-b border-gray-200 pb-4 text-3xl font-bold text-gray-900 dark:border-gray-700 dark:text-white"
			>
				Experiencia Profesional
			</h2>

			<div class="space-y-6">
				<!-- Experiencia UJAT -->
				<div
					class="group relative overflow-hidden rounded-xl border border-gray-100 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:shadow-lg md:p-8 dark:border-gray-700 dark:bg-gray-800/50 dark:hover:border-emerald-400"
				>
					<div
						class="absolute top-0 left-0 h-full w-1 origin-bottom scale-y-0 transform bg-emerald-500 transition-transform duration-300 group-hover:scale-y-100"
					></div>
					<div class="flex flex-col justify-between gap-4 md:flex-row md:items-start">
						<div>
							<h3 use:reveal class="text-2xl font-bold text-gray-900 dark:text-white">
								Desarrollador FullStack
							</h3>
							<p use:reveal class="mb-1 text-lg font-medium text-emerald-600 dark:text-emerald-400">
								Universidad Juárez Autónoma de Tabasco
							</p>
							<p use:reveal class="mt-3 leading-relaxed text-gray-600 dark:text-gray-300">
								Diseño de arquitectura y desarrollo de aplicación web para la gestión automatizada
								de comisiones docentes en 12 divisiones académicas. Implementación de lógica de
								negocio (roles, permisos, sedes) asegurando un sistema escalable con SvelteKit,
								TypeScript y Prisma.
							</p>
						</div>
						<div class="shrink-0">
							<span
								use:reveal
								class="inline-flex items-center rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200"
							>
								2025 - Presente
							</span>
						</div>
					</div>
				</div>

				<!-- Experiencia Integra -->
				<div
					class="group relative overflow-hidden rounded-xl border border-gray-100 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg md:p-8 dark:border-gray-700 dark:bg-gray-800/50 dark:hover:border-blue-400"
				>
					<div
						class="absolute top-0 left-0 h-full w-1 origin-bottom scale-y-0 transform bg-blue-500 transition-transform duration-300 group-hover:scale-y-100"
					></div>
					<div class="flex flex-col justify-between gap-4 md:flex-row md:items-start">
						<div>
							<h3 use:reveal class="text-2xl font-bold text-gray-900 dark:text-white">
								Desarrollador Freelancer
							</h3>
							<p use:reveal class="mb-1 text-lg font-medium text-blue-600 dark:text-blue-400">
								Integra Tecnologías
							</p>
							<p class="mt-3 leading-relaxed text-gray-600 dark:text-gray-300">
								Desarrollo y mantenimiento de módulos críticos en sistema de gestión comercial bajo
								metodología de Sprints. Implementación de Punto de Venta (POS), control de
								inventarios, pagos y cierres de caja garantizando integridad en entornos de
								producción.
							</p>
						</div>
						<div class="shrink-0">
							<span
								use:reveal
								class="inline-flex items-center rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200"
							>
								Ene 2025 - May 2025
							</span>
						</div>
					</div>
				</div>

				<!-- Experiencia AHO / Independiente -->
				<div
					class="group relative overflow-hidden rounded-xl border border-gray-100 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500 hover:shadow-lg md:p-8 dark:border-gray-700 dark:bg-gray-800/50 dark:hover:border-purple-400"
				>
					<div
						class="absolute top-0 left-0 h-full w-1 origin-bottom scale-y-0 transform bg-purple-500 transition-transform duration-300 group-hover:scale-y-100"
					></div>
					<div class="flex flex-col justify-between gap-4 md:flex-row md:items-start">
						<div>
							<h3 use:reveal class="text-2xl font-bold text-gray-900 dark:text-white">
								Desarrollador de Software Independiente
							</h3>
							<p use:reveal class="mb-1 text-lg font-medium text-purple-600 dark:text-purple-400">
								AHO Soluciones
							</p>
							<p use:reveal class="mt-3 leading-relaxed text-gray-600 dark:text-gray-300">
								Creación de soluciones integrales a medida. Desarrollo de sistemas CRUD, plataformas
								e-commerce y aplicaciones de optimización logística y enrutamiento (CVRP) para
								gestión eficiente de pedidos y vehículos.
							</p>
						</div>
						<div class="shrink-0">
							<span
								use:reveal
								class="inline-flex items-center rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200"
							>
								Proyectos Continuos
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Proyectos Destacados -->
	<section>
		<div class="mb-8 flex items-end justify-between">
			<h2 class="text-3xl font-bold text-gray-900 dark:text-white">Proyectos Destacados</h2>
			<a
				use:reveal
				href={resolve('/projects')}
				class="font-medium text-blue-600 hover:underline dark:text-blue-400"
			>
				Ver todos &rarr;
			</a>
		</div>

		<div use:reveal class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each featuredProjects as project (project.slug)}
				<ProjectCard {project} />
			{/each}
		</div>
	</section>
</div>
