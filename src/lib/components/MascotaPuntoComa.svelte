<script lang="ts">
	// Ahora referenciamos el grupo (g) completo que contiene la pupila y su brillo
	let leftEyeGroup: SVGGElement;
	let rightEyeGroup: SVGGElement;

	// Aumentamos el límite de movimiento ya que el ojo blanco es más grande
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

			// Redujimos el divisor a 35 para que los ojos sigan el cursor con más ganas
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

<!-- 
  Ajustes del contenedor: 
  -top-[76px] y h-24 aseguran que las manos queden exactamente mordiendo el borde de la tarjeta.
  W-28 lo hace un poco más ancho para los brazos.
-->
<div
	class="absolute -top-[76px] right-8 z-20 h-24 w-28 drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:-translate-y-1 lg:right-16"
>
	<svg viewBox="0 0 100 100" class="h-full w-full overflow-visible">
		<!-- BRAZOS (Curvados hacia abajo para sostenerse) -->
		<path
			d="M 25,45 Q 5,60 15,93"
			stroke="currentColor"
			stroke-width="5"
			fill="none"
			stroke-linecap="round"
			class="text-emerald-500"
		/>
		<path
			d="M 75,45 Q 95,60 85,93"
			stroke="currentColor"
			stroke-width="5"
			fill="none"
			stroke-linecap="round"
			class="text-emerald-500"
		/>

		<!-- MANOS (Aferradas al borde imaginario) -->
		<rect x="7" y="90" width="14" height="10" rx="5" fill="currentColor" class="text-emerald-500" />
		<rect
			x="79"
			y="90"
			width="14"
			height="10"
			rx="5"
			fill="currentColor"
			class="text-emerald-500"
		/>

		<!-- CUERPO (La coma, un poco más ancha en la base) -->
		<path
			d="M 35,65 A 15,15 0 0,0 65,65 C 65,85 45,105 35,90 C 42,90 50,85 35,65 Z"
			fill="currentColor"
			class="text-emerald-400"
		/>

		<!-- CABEZA (El punto del punto y coma, más grande) -->
		<circle cx="50" cy="40" r="28" fill="currentColor" class="text-emerald-400" />

		<!-- OJOS (Fondo Blanco - Más grandes) -->
		<circle cx="36" cy="40" r="11.5" fill="#ffffff" />
		<circle cx="64" cy="40" r="11.5" fill="#ffffff" />

		<!-- GRUPO PUPILA IZQUIERDA (Sana y sobria) -->
		<!-- Se agrupa para mover el negro y el brillo juntos sin bugs -->
		<g bind:this={leftEyeGroup} class="transition-transform duration-[50ms] ease-linear">
			<!-- Pupila negra -->
			<circle cx="36" cy="40" r="5.5" fill="#0f172a" />
			<!-- Brillo (estático dentro de la pupila) -->
			<circle cx="34" cy="38" r="2" fill="#ffffff" />
		</g>

		<!-- GRUPO PUPILA DERECHA -->
		<g bind:this={rightEyeGroup} class="transition-transform duration-[50ms] ease-linear">
			<!-- Pupila negra -->
			<circle cx="64" cy="40" r="5.5" fill="#0f172a" />
			<!-- Brillo -->
			<circle cx="62" cy="38" r="2" fill="#ffffff" />
		</g>
	</svg>
</div>
