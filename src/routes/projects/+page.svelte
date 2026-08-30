<script lang="ts">
	import { projects } from '$lib/data/projects';
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	import { reveal } from '$lib/components/actions/reveal';
	import { fall } from '$lib/components/actions/fall';
	import { fallLetters } from '$lib/components/actions/fallLetters';

	const cardWidth = 320;
	const numCards = projects.length;
	const angle = 360 / numCards;
	const radius = Math.max(500, Math.round(cardWidth / 3 / Math.tan(Math.PI / numCards)) + 200);
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
			Explora mi catálogo de desarrollos girando en este espacio tridimensional.
		</p>
	</header>

	<!-- Máscara ajustada al 25% y 75% para un desvanecimiento lateral más limpio -->
	<div
		class="scene"
		style="mask-image: linear-gradient(to right, transparent, black 25%, black 75%, transparent); -webkit-mask-image: linear-gradient(to right, transparent, black 25%, black 75%, transparent);"
	>
		<div class="carousel hover:pause-animation">
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
		perspective: 1500px;
	}

	.carousel {
		position: relative;
		width: 320px;
		height: 480px;
		transform-style: preserve-3d;
		animation: spin-carousel 80s infinite linear;
	}

	.hover\:pause-animation:hover {
		animation-play-state: paused;
	}

	.carousel-item {
		position: absolute;
		top: 0;
		left: 0;
		width: 320px;
		height: 480px;
		/* ESTA ES LA CLAVE: Oculta la tarjeta en cuanto da la espalda */
		backface-visibility: hidden;
		-webkit-backface-visibility: hidden;
	}

	@keyframes spin-carousel {
		0% {
			transform: translateZ(-300px) rotateX(-5deg) rotateY(0deg);
		}
		100% {
			transform: translateZ(-300px) rotateX(-5deg) rotateY(-360deg);
		}
	}
</style>
