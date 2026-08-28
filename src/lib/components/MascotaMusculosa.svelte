<script lang="ts">
	let leftEyeGroup: SVGGElement;
	let rightEyeGroup: SVGGElement;
	const maxMove = 5;

	const handleMouseMove = (e: MouseEvent) => {
		if (!leftEyeGroup || !rightEyeGroup) return;

		const moveEye = (eyeGroup: SVGGElement) => {
			const rect = eyeGroup.getBoundingClientRect();
			const eyeCenterX = rect.left + rect.width / 2;
			const eyeCenterY = rect.top + rect.height / 2;

			const dx = e.clientX - eyeCenterX;
			const dy = e.clientY - eyeCenterY;
			const angle = Math.atan2(dy, dx);

			const dist = Math.min(maxMove, Math.hypot(dx, dy) / 35);
			const moveX = Math.cos(angle) * dist;
			const moveY = Math.sin(angle) * dist;

			eyeGroup.style.transform = `translate(${moveX}px, ${moveY}px)`;
		};

		moveEye(leftEyeGroup);
		moveEye(rightEyeGroup);
	};
</script>

<svelte:window on:mousemove={handleMouseMove} />

<div
	class="absolute -top-[88px] right-8 z-20 h-28 w-32 drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)] lg:right-16"
>
	<svg viewBox="0 0 120 120" class="h-full w-full overflow-visible">
		<!-- CAPA TIPO SUPERMAN (Fondo) -->
		<!-- Usa un rojo vibrante y una clase CSS para ondear -->
		<path d="M 40,50 L 20,110 Q 60,120 100,110 L 80,50 Z" fill="#ef4444" class="capa-anim" />

		<!-- BRAZOS (Pose de doble bíceps) -->
		<!-- Brazo Izquierdo (Hombro -> Codo -> Muñeca) -->
		<path
			d="M 35,70 L 15,70 L 15,45"
			stroke="currentColor"
			stroke-width="5"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="text-emerald-500"
		/>
		<!-- Brazo Derecho -->
		<path
			d="M 85,70 L 105,70 L 105,45"
			stroke="currentColor"
			stroke-width="5"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="text-emerald-500"
		/>

		<!-- CONEJITOS (Bíceps musculosos que laten) -->
		<!-- Se posicionan justo en la curva del codo -->
		<circle
			cx="22"
			cy="67"
			r="4.5"
			fill="currentColor"
			class="bicep-anim text-emerald-500"
			style="transform-origin: 22px 67px;"
		/>
		<circle
			cx="98"
			cy="67"
			r="4.5"
			fill="currentColor"
			class="bicep-anim text-emerald-500"
			style="transform-origin: 98px 67px;"
		/>

		<!-- PUÑOS CERRADOS -->
		<circle cx="15" cy="45" r="4" fill="currentColor" class="text-emerald-500" />
		<circle cx="105" cy="45" r="4" fill="currentColor" class="text-emerald-500" />

		<!-- CUERPO (La coma) -->
		<path
			d="M 45,65 A 15,15 0 0,0 75,65 C 75,85 55,105 45,90 C 52,90 60,85 45,65 Z"
			fill="currentColor"
			class="text-emerald-400"
		/>

		<!-- CABEZA (El punto) -->
		<circle cx="60" cy="40" r="28" fill="currentColor" class="text-emerald-400" />

		<!-- OJOS BLANCOS -->
		<circle cx="46" cy="40" r="11.5" fill="#ffffff" />
		<circle cx="74" cy="40" r="11.5" fill="#ffffff" />

		<!-- GRUPO PUPILA IZQUIERDA -->
		<g bind:this={leftEyeGroup} class="transition-transform duration-[50ms] ease-linear">
			<circle cx="46" cy="40" r="5.5" fill="#0f172a" />
			<circle cx="44" cy="38" r="2" fill="#ffffff" />
		</g>

		<!-- GRUPO PUPILA DERECHA -->
		<g bind:this={rightEyeGroup} class="transition-transform duration-[50ms] ease-linear">
			<circle cx="74" cy="40" r="5.5" fill="#0f172a" />
			<circle cx="72" cy="38" r="2" fill="#ffffff" />
		</g>
	</svg>
</div>

<style>
	/* Animación de la capa ondeando al viento */
	@keyframes wave {
		0% {
			transform: rotate(-4deg) skewX(3deg);
		}
		100% {
			transform: rotate(4deg) skewX(-3deg);
		}
	}
	.capa-anim {
		transform-origin: 60px 50px; /* Anclada al cuello */
		animation: wave 1.5s ease-in-out infinite alternate;
	}

	/* Animación de los bíceps bombeando ("conejitos") */
	@keyframes flex {
		0%,
		100% {
			transform: scale(1);
		}
		15% {
			transform: scale(1.6);
		}
		30% {
			transform: scale(1.1);
		}
		45% {
			transform: scale(1.6);
		}
		60%,
		100% {
			transform: scale(1);
		}
	}
	.bicep-anim {
		animation: flex 2.5s ease-in-out infinite;
	}
</style>
