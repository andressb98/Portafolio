<script lang="ts">
	let leftEyeGroup: SVGGElement;
	let rightEyeGroup: SVGGElement;
	const maxMove = 4;

	const handleMouseMove = (e: MouseEvent) => {
		if (!leftEyeGroup || !rightEyeGroup) return;

		requestAnimationFrame(() => {
			const moveEye = (eyeGroup: SVGGElement) => {
				const rect = eyeGroup.getBoundingClientRect();
				const eyeCenterX = rect.left + rect.width / 2;
				const eyeCenterY = rect.top + rect.height / 2;

				const dx = e.clientX - eyeCenterX;
				const dy = e.clientY - eyeCenterY;
				const angle = Math.atan2(dy, dx);

				const dist = Math.min(maxMove, Math.hypot(dx, dy) / 40);
				const moveX = Math.cos(angle) * dist;
				const moveY = Math.sin(angle) * dist;

				eyeGroup.style.transform = `translate(${moveX}px, ${moveY}px)`;
			};

			moveEye(leftEyeGroup);
			moveEye(rightEyeGroup);
		});
	};
</script>

<svelte:window on:mousemove={handleMouseMove} />

<!-- Aumentamos el tamaño (h-28 w-32) y el top para ajustar la nueva perspectiva -->
<div
	class="absolute -top-[82px] right-8 z-20 h-28 w-32 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] lg:right-16"
>
	<!-- El viewBox creció a 120 de alto para que entre la laptop completa -->
	<svg viewBox="0 0 100 120" class="h-full w-full overflow-visible">
		<!-- CUERPO -->
		<path
			d="M 35,65 A 15,15 0 0,0 65,65 C 65,85 45,105 35,90 C 42,90 50,85 35,65 Z"
			fill="currentColor"
			class="text-blue-600 dark:text-emerald-400"
		/>

		<!-- CORBATA -->
		<polygon points="48,65 52,65 53,82 50,88 47,82" fill="#ef4444" class="drop-shadow-sm" />
		<polygon points="47,65 53,65 51,68 49,68" fill="#b91c1c" />

		<!-- CABEZA -->
		<circle
			cx="50"
			cy="38"
			r="25"
			fill="currentColor"
			class="text-blue-600 dark:text-emerald-400"
		/>

		<!-- OJOS BLANCOS -->
		<circle cx="38" cy="38" r="10" fill="#ffffff" />
		<circle cx="62" cy="38" r="10" fill="#ffffff" />

		<!-- GRUPOS DE PUPILAS -->
		<g bind:this={leftEyeGroup} class="origin-center">
			<circle cx="38" cy="38" r="4.5" fill="#0f172a" />
			<circle cx="36.5" cy="36.5" r="1.5" fill="#ffffff" />
		</g>

		<g bind:this={rightEyeGroup} class="origin-center">
			<circle cx="62" cy="38" r="4.5" fill="#0f172a" />
			<circle cx="60.5" cy="36.5" r="1.5" fill="#ffffff" />
		</g>

		<!-- LENTES EJECUTIVOS -->
		<line
			x1="48"
			y1="38"
			x2="52"
			y2="38"
			stroke="#1e293b"
			stroke-width="3"
			stroke-linecap="round"
			class="dark:stroke-gray-300"
		/>
		<rect
			x="26"
			y="26"
			width="24"
			height="24"
			rx="4"
			fill="none"
			stroke="#1e293b"
			stroke-width="3"
			class="dark:stroke-gray-300"
		/>
		<rect
			x="50"
			y="26"
			width="24"
			height="24"
			rx="4"
			fill="none"
			stroke="#1e293b"
			stroke-width="3"
			class="dark:stroke-gray-300"
		/>
		<path
			d="M 26,38 Q 20,38 18,30"
			fill="none"
			stroke="#1e293b"
			stroke-width="3"
			stroke-linecap="round"
			class="dark:stroke-gray-300"
		/>
		<path
			d="M 74,38 Q 80,38 82,30"
			fill="none"
			stroke="#1e293b"
			stroke-width="3"
			stroke-linecap="round"
			class="dark:stroke-gray-300"
		/>

		<!-- ============================================== -->
		<!-- LAPTOP 3D (Perspectiva Realista)               -->
		<!-- ============================================== -->

		<!-- PANTALLA (Se inclina hacia atrás, más angosta arriba) -->
		<path
			d="M 24,76 L 76,76 L 82,102 L 18,102 Z"
			fill="#1e293b"
			class="dark:fill-gray-800"
			stroke="#334155"
			stroke-width="1.5"
			stroke-linejoin="round"
		/>
		<!-- Display Brillante -->
		<path d="M 26,79 L 74,79 L 79,99 L 21,99 Z" fill="#0f172a" class="dark:fill-gray-900" />

		<!-- Líneas de Código en Pantalla -->
		<rect x="29" y="84" width="20" height="2" rx="1" fill="#3b82f6" class="dark:fill-emerald-400" />
		<rect x="51" y="84" width="15" height="2" rx="1" fill="#94a3b8" class="dark:fill-gray-500" />

		<rect x="28" y="89" width="10" height="2" rx="1" fill="#ef4444" />
		<rect x="40" y="89" width="25" height="2" rx="1" fill="#94a3b8" class="dark:fill-gray-500" />

		<rect x="27" y="94" width="35" height="2" rx="1" fill="#94a3b8" class="dark:fill-gray-500" />

		<!-- TECLADO (Viene hacia nosotros, más ancho abajo) -->
		<polygon points="18,102 82,102 94,116 6,116" fill="#334155" class="dark:fill-gray-700" />
		<!-- Área profunda de las teclas -->
		<polygon points="23,104 77,104 84,112 16,112" fill="#1e293b" class="dark:fill-gray-900" />
		<!-- Trackpad -->
		<polygon points="43,113 57,113 59,115 41,115" fill="#475569" class="dark:fill-gray-800" />

		<!-- Borde frontal de la laptop -->
		<rect x="4" y="116" width="92" height="4" rx="2" fill="#0f172a" class="dark:fill-gray-600" />

		<!-- MANOS TECLEANDO (Animadas y sobre el teclado) -->
		<circle
			cx="28"
			cy="110"
			r="4.5"
			fill="currentColor"
			class="mano-izq text-blue-500 dark:text-emerald-500"
		/>
		<circle
			cx="72"
			cy="110"
			r="4.5"
			fill="currentColor"
			class="mano-der text-blue-500 dark:text-emerald-500"
		/>
	</svg>
</div>

<style>
	/* Animaciones suaves simulando teclear en distintas áreas del teclado */
	@keyframes typing-izq {
		0%,
		100% {
			transform: translateY(0px) translateX(0px);
		}
		25% {
			transform: translateY(-3px) translateX(2px);
		}
		50% {
			transform: translateY(1px) translateX(-1px);
		}
		75% {
			transform: translateY(-2px) translateX(3px);
		}
	}

	@keyframes typing-der {
		0%,
		100% {
			transform: translateY(-1px) translateX(0px);
		}
		25% {
			transform: translateY(1px) translateX(-2px);
		}
		50% {
			transform: translateY(-3px) translateX(1px);
		}
		75% {
			transform: translateY(0px) translateX(-1px);
		}
	}

	.mano-izq {
		animation: typing-izq 0.4s infinite linear;
	}

	.mano-der {
		animation: typing-der 0.5s infinite linear;
	}
</style>
