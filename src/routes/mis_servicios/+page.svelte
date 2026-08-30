<script lang="ts">
	import { reveal } from '$lib/components/actions/reveal';
	import { fall } from '$lib/components/actions/fall';
	import { fallLetters } from '$lib/components/actions/fallLetters';

	const services = [
		{
			title: 'Sistemas Administrativos',
			description:
				'Plataformas robustas con bases de datos y lógica empresarial para la gestión integral de productos, inventarios y personal.',
			price: 'Desde $5,000 MXN',
			disclaimer: '*Dependiendo de la complejidad y módulos requeridos.',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>`,
			hoverBorder: 'hover:border-blue-400 dark:hover:border-blue-500',
			iconStyle: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
			priceStyle: 'text-blue-600 dark:text-blue-400'
		},
		{
			title: 'Páginas Publicitarias',
			description:
				'Sitios web modernos, rápidos y persuasivos para destacar tu negocio, captar clientes y mejorar tu presencia digital.',
			price: 'Desde $3,500 MXN',
			disclaimer: '*El costo se ajusta según el número de vistas o secciones.',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>`,
			hoverBorder: 'hover:border-emerald-400 dark:hover:border-emerald-500',
			iconStyle: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
			priceStyle: 'text-emerald-600 dark:text-emerald-400'
		},
		{
			title: 'Menús y Catálogos QR',
			description:
				'Digitalización ágil para restaurantes o comercios. Menús interactivos accesibles al instante mediante código QR desde cualquier móvil.',
			price: '$500 - $1,000 MXN',
			disclaimer: '*Pago único, incluye diseño y configuración.',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm14 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>`,
			hoverBorder: 'hover:border-amber-400 dark:hover:border-amber-500',
			iconStyle: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
			priceStyle: 'text-amber-600 dark:text-amber-400'
		},
		{
			title: 'Soluciones a la Medida',
			description:
				'¿Tienes una idea específica? Desarrollamos software especializado que se adapta exactamente a los flujos operativos de tu empresa.',
			price: 'Cotización Especial',
			disclaimer: '*Basado en análisis de requerimientos y alcance del proyecto.',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>`,
			hoverBorder: 'hover:border-purple-400 dark:hover:border-purple-500',
			iconStyle: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
			priceStyle: 'text-purple-600 dark:text-purple-400'
		}
	];
</script>

<svelte:head>
	<title>Servicios | Andrés Solís Bautista</title>
	<meta
		name="description"
		content="Conoce los servicios de desarrollo web, sistemas administrativos y soluciones digitales a la medida."
	/>
</svelte:head>

<div class="relative z-10 mx-auto max-w-7xl space-y-16 bg-transparent px-4 py-16 sm:px-6 lg:px-8">
	<!-- Encabezado -->
	<div class="mx-auto max-w-3xl text-center">
		<h1
			use:fallLetters={{ stagger: 40, duration: 700, y: -50 }}
			class="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl dark:text-white"
		>
			Servicios y <span
				class="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent"
				>Soluciones</span
			>
		</h1>
		<p use:reveal class="text-lg leading-relaxed text-gray-600 md:text-xl dark:text-gray-300">
			Transformo ideas en herramientas digitales eficientes. Desde sitios web atractivos hasta
			sistemas complejos de administración, asegurando siempre la calidad y escalabilidad.
		</p>
	</div>

	<!-- Grid de Servicios -->
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
		{#each services as service (service)}
			<!-- Tarjeta individual -->
			<div
				use:reveal
				class="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 {service.hoverBorder}"
			>
				<!-- Contenido -->
				<h3 class="mb-3 text-xl font-bold text-gray-900 dark:text-white">
					{service.title}
				</h3>

				<p class="mb-8 flex-grow text-sm leading-relaxed text-gray-600 dark:text-gray-400">
					{service.description}
				</p>

				<!-- Precio anclado al final usando mt-auto -->
				<div class="mt-auto border-t border-gray-100 pt-6 dark:border-gray-800">
					<span class="block text-2xl font-black tracking-tight {service.priceStyle}">
						{service.price}
					</span>
					<span class="mt-2 block text-xs font-medium text-gray-500 dark:text-gray-500">
						{service.disclaimer}
					</span>
				</div>
			</div>
		{/each}
	</div>
</div>
