<script lang="ts">
	import { reveal } from '$lib/components/actions/reveal';
	import { fall } from '$lib/components/actions/fall';
	import { fallLetters } from '$lib/components/actions/fallLetters';

	export function matrixAnimation(canvas: HTMLCanvasElement) {
		const ctx = canvas.getContext('2d');
		if (!ctx) {
			throw new Error('No se pudo obtener el contexto 2D del canvas');
		}
		const context = ctx;
		let width: number, height: number, columns: number;
		let drops: number[] = [];
		const fontSize = 16;
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()<>{}[]';

		let frameCount = 0;
		const waveInterval = 350;
		let animationId: number;

		function initCanvas() {
			width = canvas.width = window.innerWidth;
			height = canvas.height = window.innerHeight;
			columns = Math.floor(width / fontSize);
			drops = [];
			for (let x = 0; x < columns; x++) {
				drops[x] = -Math.floor(Math.random() * 50);
			}
		}

		function draw() {
			frameCount++;
			const isDark = document.documentElement.classList.contains('dark');

			if (isDark) {
				context.fillStyle = 'rgba(15, 23, 42, 0.1)';
			} else {
				context.fillStyle = 'rgba(255, 255, 255, 0.15)';
			}
			context.fillRect(0, 0, width, height);

			if (isDark) {
				context.fillStyle = 'rgba(16, 185, 129, 0.8)';
			} else {
				context.fillStyle = 'rgba(37, 99, 235, 0.8)';
			}
			context.font = `${fontSize}px monospace`;

			if (frameCount % waveInterval === 0) {
				for (let i = 0; i < drops.length; i++) {
					drops[i] = -Math.floor(Math.random() * 30);
				}
			}

			for (let i = 0; i < drops.length; i++) {
				const text = characters.charAt(Math.floor(Math.random() * characters.length));

				if (drops[i] * fontSize > -20 && drops[i] * fontSize < height + 20) {
					context.fillText(text, i * fontSize, drops[i] * fontSize);
				}

				drops[i] += 0.5;
			}

			animationId = requestAnimationFrame(draw);
		}

		initCanvas();
		window.addEventListener('resize', initCanvas);
		animationId = requestAnimationFrame(draw);

		return {
			destroy() {
				window.removeEventListener('resize', initCanvas);
				cancelAnimationFrame(animationId);
			}
		};
	}
</script>

<svelte:head>
	<title>Sobre Mí | Andrés Solís Bautista</title>
	<meta
		name="description"
		content="Conoce más sobre mi trayectoria como desarrollador, mi formación y lo que me apasiona."
	/>
</svelte:head>

<canvas use:matrixAnimation class="pointer-events-none fixed inset-0 z-0 h-full w-full"> </canvas>

<div class="relative z-10 mx-auto max-w-7xl space-y-20 bg-transparent px-4 py-16 sm:px-6 lg:px-8">
	<!-- Encabezado de la página -->
	<div class="mx-auto max-w-3xl text-center">
		<h1
			use:fallLetters={{ stagger: 40, duration: 700, y: -50 }}
			class="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl dark:text-white"
		>
			Conoce al <span
				class="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent"
				>Desarrollador</span
			>
		</h1>
		<p use:reveal class="text-xl leading-relaxed text-gray-600 dark:text-gray-300">
			Soy Andrés Solís Bautista, un Desarrollador Web apasionado por la creación y ampliación de
			soluciones administrativas en entornos de producción. Me especializo en transformar lógica
			compleja en aplicaciones eficientes.
		</p>
	</div>

	<!-- Sección Principal: Historia y Perfil -->
	<div class="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
		<!-- Columna Izquierda: Texto Descriptivo -->
		<div class="space-y-6 text-lg leading-relaxed text-gray-600 lg:col-span-8 dark:text-gray-300">
			<h2 use:reveal class="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
				Mi Enfoque Profesional
			</h2>
			<p use:reveal>
				Me caracterizo por mi rápida adaptación tecnológica y mi capacidad de aprendizaje autónomo.
				A lo largo de mi trayectoria, he participado en proyectos reales para empresas de servicios,
				enfocándome fuertemente en la automatización de procesos institucionales y comerciales.
			</p>
			<p use:reveal>
				Tengo 28 años y mi filosofía de trabajo se centra en desarrollar soluciones reales. Ya sea
				construyendo sistemas CRUD en Java con bases de datos SQL, integrando módulos en PHP, o
				creando aplicaciones web full-stack con SvelteKit y TypeScript, mi objetivo siempre es
				garantizar la integridad de los datos y la escalabilidad del sistema.
			</p>
			<p>
				Para mantener mis habilidades afiladas, dedico tiempo a leer documentación de software en
				inglés, lo que me permite estar al tanto de las últimas prácticas y enriquecer mi
				vocabulario técnico.
			</p>
		</div>

		<!-- Columna Derecha: Tarjeta de Características -->
		<div
			class="rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm lg:col-span-4 dark:border-gray-700 dark:bg-gray-800/50"
		>
			<div
				class="mx-auto mb-6 h-32 w-20 overflow-hidden rounded-full border-4 border-white bg-gray-200 shadow-md dark:border-gray-800 dark:bg-gray-700"
			>
				<!-- Aquí puedes poner la ruta de tu foto -->
				<img
					use:reveal
					src="/images/papoi.jpg"
					alt="Andrés Solís Bautista"
					class="h-full w-full object-cover"
				/>
			</div>
			<h3 use:reveal class="mb-6 text-center text-xl font-bold text-gray-900 dark:text-white">
				Características
			</h3>

			<ul class="space-y-4">
				<li class="flex items-center">
					<svg
						class="mr-3 h-5 w-5 shrink-0 text-emerald-500"
						fill="currentColor"
						viewBox="0 0 20 20"
						><path
							fill-rule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
							clip-rule="evenodd"
						></path></svg
					>
					<span use:reveal class="text-gray-700 dark:text-gray-300">Autodidacta por Naturaleza</span
					>
				</li>
				<li class="flex items-center">
					<svg
						class="mr-3 h-5 w-5 shrink-0 text-emerald-500"
						fill="currentColor"
						viewBox="0 0 20 20"
						><path
							fill-rule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
							clip-rule="evenodd"
						></path></svg
					>
					<span use:reveal class="text-gray-700 dark:text-gray-300"
						>Enfoque en Soluciones Reales</span
					>
				</li>
				<li class="flex items-center">
					<svg
						class="mr-3 h-5 w-5 shrink-0 text-emerald-500"
						fill="currentColor"
						viewBox="0 0 20 20"
						><path
							fill-rule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
							clip-rule="evenodd"
						></path></svg
					>
					<span use:reveal class="text-gray-700 dark:text-gray-300">Adaptabilidad y Compromiso</span
					>
				</li>
			</ul>
		</div>
	</div>

	<!-- Sección: Educación y Certificaciones -->
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
		<!-- Educación -->
		<div
			class="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
		>
			<div class="mb-6 flex items-center">
				<div
					class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path d="M12 14l9-5-9-5-9 5 9 5z" />
						<path
							d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
						/>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
						/>
					</svg>
				</div>
				<h2 class="text-2xl font-bold text-gray-900 dark:text-white">Educación</h2>
			</div>

			<div class="space-y-6">
				<div class="relative border-l-2 border-blue-200 pl-6 dark:border-blue-800">
					<div class="absolute top-1.5 -left-[7px] h-3 w-3 rounded-full bg-blue-500"></div>
					<h3 class="text-lg font-bold text-gray-900 dark:text-white">
						Ingeniero en Sistemas Computacionales
					</h3>
					<p class="font-medium text-blue-600 dark:text-blue-400">
						Universidad Juárez Autónoma de Tabasco
					</p>
					<p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Presente</p>
				</div>

				<div class="relative border-l-2 border-blue-200 pl-6 dark:border-blue-800">
					<div
						class="absolute top-1.5 -left-[7px] h-3 w-3 rounded-full bg-gray-300 dark:bg-gray-600"
					></div>
					<h3 class="text-lg font-bold text-gray-900 dark:text-white">Técnico en Informática</h3>
					<p class="font-medium text-gray-600 dark:text-gray-400">
						Centro de Bachillerato Tecnológico Agropecuario
					</p>
					<p class="mt-1 text-sm text-gray-500 dark:text-gray-400">2013 - 2016</p>
				</div>
			</div>
		</div>

		<!-- Certificaciones -->
		<div
			class="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
		>
			<div class="mb-6 flex items-center">
				<div
					class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
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
							d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
						/>
					</svg>
				</div>
				<h2 class="text-2xl font-bold text-gray-900 dark:text-white">Certificaciones</h2>
			</div>

			<div class="space-y-4">
				<div
					class="flex items-start rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/50"
				>
					<svg
						class="mt-1 mr-3 h-6 w-6 shrink-0 text-purple-500"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 13l4 4L19 7"
						></path></svg
					>
					<div>
						<h3 class="font-bold text-gray-900 dark:text-white">
							Scrum Foundation Professional Certification (SFPC)
						</h3>
						<p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Obtenida en 2024</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Sección Personal: Más allá del código -->
	<div
		class="mt-12 rounded-3xl border border-gray-100 bg-gray-50 p-8 md:p-12 dark:border-gray-800 dark:bg-gray-800/30"
	>
		<div class="mx-auto mb-10 max-w-4xl text-center">
			<h2 class="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100">Más allá del código</h2>
			<p class="dark:text-gray text-lg text-gray-600">
				Creo que un buen desarrollador se nutre de diversas disciplinas. Cuando me desconecto de los
				servidores y el código, me dedico a otras pasiones que mantienen mi mente creativa y
				analítica.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
			<!-- Hobby 1 -->
			<div
				class="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-colors hover:border-emerald-400 dark:border-gray-700 dark:bg-gray-900"
			>
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400"
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
							d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
						/>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
						/>
					</svg>
				</div>
				<h3 class="mb-2 font-bold text-gray-900 dark:text-white">Fotografía de Naturaleza</h3>
				<p class="text-sm text-gray-600 dark:text-gray-400">
					Capturando la flora silvestre y perfeccionando el encuadre y la profundidad de campo en
					paisajes naturales.
				</p>
			</div>

			<!-- Hobby 2 -->
			<div
				class="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-colors hover:border-blue-400 dark:border-gray-700 dark:bg-gray-900"
			>
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
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
				<h3 class="mb-2 font-bold text-gray-900 dark:text-white">Mecánica de Motocicletas</h3>
				<p class="text-sm text-gray-600 dark:text-gray-400">
					Disfruto diagnosticando y reparando sistemas eléctricos o mecánicos. Un buen
					*troubleshooting* aplica tanto en el taller como en el código.
				</p>
			</div>

			<!-- Hobby 3 -->
			<div
				class="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-colors hover:border-purple-400 dark:border-gray-700 dark:bg-gray-900"
			>
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
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
							d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
						/>
					</svg>
				</div>
				<h3 class="mb-2 font-bold text-gray-900 dark:text-white">Música y Composición</h3>
				<p class="text-sm text-gray-600 dark:text-gray-400">
					Aficionado al rock, metal y las estructuras líricas del rap. También exploro la teoría
					musical y la creación de beats a través de software de producción.
				</p>
			</div>
		</div>
	</div>
</div>
