<script lang="ts">
	import { onMount } from 'svelte';

	const techs = [
		'SvelteKit',
		'JavaScript',
		'TypeScript',
		'Python',
		'Supabase',
		'PostgreSQL',
		'Tailwind',
		'Docker',
		'Prisma',
		'Git',
		'FastAPI',
		'Node.js',
		'SQLite',
		'HTML5',
		'CSS3'
	];

	const nodes = techs.map((label, i) => {
		const phi = Math.acos(1 - (2 * i) / techs.length);
		const theta = Math.PI * (1 + Math.sqrt(5)) * i;
		return {
			label,
			x: Math.cos(theta) * Math.sin(phi),
			y: Math.sin(theta) * Math.sin(phi),
			z: Math.cos(phi)
		};
	});

	const links: { source: number; target: number }[] = [];
	for (let i = 0; i < nodes.length; i++) {
		for (let j = i + 1; j < nodes.length; j++) {
			const dist = Math.hypot(
				nodes[i].x - nodes[j].x,
				nodes[i].y - nodes[j].y,
				nodes[i].z - nodes[j].z
			);
			if (dist < 1.4) links.push({ source: i, target: j });
		}
	}

	type ProjectedNode = (typeof nodes)[number] & {
		px: number;
		py: number;
		scale: number;
		opacity: number;
	};

	let projectedNodes = $state<ProjectedNode[]>([]);
	let angleX = 0;
	let angleY = 0;

	onMount(() => {
		let frame: number;
		// 1. AUMENTO DE RADIO: Pasamos de 250 a 320 para expandir la esfera y que ocupe más pantalla
		const radius = 320;

		const update = () => {
			angleY += 0.002;
			angleX += 0.001;

			projectedNodes = nodes.map((node) => {
				const y1 = node.y * Math.cos(angleX) - node.z * Math.sin(angleX);
				const z1 = node.y * Math.sin(angleX) + node.z * Math.cos(angleX);

				const x2 = node.x * Math.cos(angleY) + z1 * Math.sin(angleY);
				const z2 = -node.x * Math.sin(angleY) + z1 * Math.cos(angleY);

				const scale = 400 / (400 + z2 * radius);

				return {
					...node,
					px: x2 * radius * scale,
					py: y1 * radius * scale,
					scale,
					z: z2,
					// Reducimos ligeramente la opacidad mínima trasera para dar más profundidad
					opacity: Math.max(0.1, (z2 + 1) / 2)
				};
			});

			frame = requestAnimationFrame(update);
		};

		update();
		return () => cancelAnimationFrame(frame);
	});
</script>

<!-- 2. CONTENEDOR: Opacidad base subida a 90/80 y máscara radial ampliada al 45%-85% -->
<div
	class="pointer-events-none absolute inset-0 flex items-center justify-center opacity-90 dark:opacity-80"
	style="mask-image: radial-gradient(circle, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 85%); -webkit-mask-image: radial-gradient(circle, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 85%);"
>
	<!-- 3. TAMAÑO SVG: Altura subida a 750px y max-width a 5xl -->
	<svg viewBox="-400 -400 800 800" class="h-[750px] w-full max-w-5xl">
		{#if projectedNodes.length > 0}
			<!-- Líneas de conexión -->
			{#each links as link (link)}
				{@const p1 = projectedNodes[link.source]}
				{@const p2 = projectedNodes[link.target]}
				<line
					x1={p1.px}
					y1={p1.py}
					x2={p2.px}
					y2={p2.py}
					stroke="currentColor"
					stroke-width="1.5"
					class="text-slate-400/60 transition-all duration-75 dark:text-blue-400/40"
				/>
			{/each}

			<!-- Nodos (Puntos y Nombres) -->
			{#each projectedNodes as node (node)}
				<g transform="translate({node.px}, {node.py}) scale({node.scale})">
					<!-- 4. PUNTOS: Radio subido a 5. Colores sólidos: Azul oscuro (claro) y Esmeralda (oscuro) -->
					<circle
						r="5"
						fill="currentColor"
						class="text-blue-700 dark:text-emerald-400"
						fill-opacity={node.opacity + 0.3}
					/>
					<!-- 5. TEXTO: Gris muy oscuro en claro (slate-800) y gris muy claro en oscuro (slate-200) -->
					<text
						x="12"
						y="5"
						font-size="16"
						font-family="system-ui, -apple-system, sans-serif"
						font-weight="700"
						fill="currentColor"
						class="text-slate-800 dark:text-slate-200"
						fill-opacity={node.opacity + 0.1}
					>
						{node.label}
					</text>
				</g>
			{/each}
		{/if}
	</svg>
</div>
