<script lang="ts">
	import { projects } from '$lib/data/projects';
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	import { reveal } from '$lib/components/actions/reveal';
	import { fall } from '$lib/components/actions/fall';
	import { fallLetters } from '$lib/components/actions/fallLetters';

	let currentIndex = $state(0);

	const cardWidth = 320;
	const numCards = projects.length;
	const angle = 360 / numCards;

	// Aumentamos el +120 a +280 para hacer el cilindro más ancho y separar las tarjetas
	const radius = Math.round(cardWidth / 2 / Math.tan(Math.PI / numCards)) + 280;

	function next() {
		currentIndex--;
	}

	function prev() {
		currentIndex++;
	}
</script>

<div class="relative flex min-h-[90vh] flex-col justify-center overflow-hidden py-12 md:py-16">
	<div
		class="pointer-events-none absolute top-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[120px]"
	></div>
	<div
		class="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[800px] -translate-x-1/2 rounded-[100%] bg-emerald-500/10 blur-[100px]"
	></div>

	<header class="relative z-10 mb-16 text-center">
		<h1
			use:fallLetters={{ stagger: 40, duration: 700, y: -50 }}
			class="mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-5xl"
		>
			Mi Trabajo
		</h1>
		<p
			use:fall={{ duration: 1000, y: -30, delay: 800 }}
			class="mx-auto max-w-3xl text-lg text-gray-400"
		>
			Explora mi catálogo de desarrollos y proyectos relevantes
		</p>
	</header>

	<button
		onclick={prev}
		class="absolute top-[60%] left-4 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-slate-800/40 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-slate-700/60 md:left-12 lg:left-32"
		aria-label="Proyecto anterior"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="m15 18-6-6 6-6" />
		</svg>
	</button>

	<button
		onclick={next}
		class="absolute top-[60%] right-4 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-slate-800/40 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-slate-700/60 md:right-12 lg:right-32"
		aria-label="Siguiente proyecto"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="m9 18 6-6-6-6" />
		</svg>
	</button>

	<div
		class="scene"
		style="mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent); -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);"
	>
		<!-- Al empujar el contenedor completo hacia atrás (-radius), aseguramos que la tarjeta central quede exactamente en el foco visual original -->
		<div
			class="carousel"
			style="transform: translateZ({-radius}px) rotateX(-2deg) rotateY({currentIndex * angle}deg);"
		>
			{#each projects as project, i (project.slug)}
				<div
					use:reveal
					class="carousel-item rounded-xl shadow-2xl shadow-black/50"
					style="transform: rotateY({i * angle}deg) translateZ({radius}px);"
				>
					<div class="h-[480px] w-[320px]">
						<ProjectCard {project} />
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.scene {
		position: relative;
		width: 100%;
		height: 550px;
		display: flex;
		justify-content: center;
		align-items: center;
		/* Aumentamos de 1200px a 2000px para relajar la perspectiva y evitar que las tarjetas laterales se vean tan "aplastadas" */
		perspective: 2000px;
	}

	.carousel {
		position: relative;
		width: 320px;
		height: 480px;
		transform-style: preserve-3d;
		transition: transform 0.7s cubic-bezier(0.25, 1, 0.5, 1);
	}

	.carousel-item {
		position: absolute;
		top: 0;
		left: 0;
		width: 320px;
		height: 480px;

		/* Estas dos líneas son la clave: ocultan las tarjetas cuando rotan hacia la espalda del carrusel */
		backface-visibility: hidden;
		-webkit-backface-visibility: hidden;

		transition: opacity 0.3s ease;
	}
</style>
