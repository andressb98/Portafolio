<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	// Importamos los componentes creados anteriormente.
	// Ajusta la ruta '$lib/components/' si los guardaste en otra carpeta.
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- Contenedor maestro: Alto mínimo de pantalla, flexbox en columna y fondo base -->
<div class="flex min-h-screen flex-col bg-gray-50 transition-colors duration-300 dark:bg-gray-950">
	<!-- Navegación superior -->
	<Navbar />

	<!-- 
      Área de contenido principal. 
      'flex-grow' permite que este contenedor se expanda y empuje el Footer hacia abajo.
    -->
	<main class="mx-auto w-full max-w-7xl flex-grow px-4 py-8 pt-24 sm:px-6 lg:px-8">
		{@render children()}
	</main>

	<!-- Pie de página -->
	<Footer />
</div>
