<script lang="ts">
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';

	// Definición de las rutas
	interface NavLink {
		name: string;
		href: string;
	}

	const links: NavLink[] = [
		{ name: 'Inicio', href: '/' },
		{ name: 'Proyectos', href: '/projects' },
		{ name: 'Sobre Mí', href: '/sobre_mi' },
		{ name: 'Contacto', href: '/contacto' }
	];

	// Estado del componente (usando runas de Svelte 5, si usas Svelte 4 cambia a let normal)
	let isMenuOpen = $state(false);
	let isDarkMode = $state(false);

	// Lógica para detectar y aplicar el tema al montar el componente
	onMount(() => {
		// Revisa si ya hay una preferencia guardada o si el sistema prefiere modo oscuro
		const isDark =
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

		if (isDark) {
			isDarkMode = true;
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	});

	// Función para alternar el tema
	function toggleTheme() {
		isDarkMode = !isDarkMode;
		if (isDarkMode) {
			document.documentElement.classList.add('dark');
			localStorage.theme = 'dark';
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.theme = 'light';
		}
	}

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<nav
	class="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900"
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<!-- Marca -->
			<div class="flex flex-shrink-0 items-center">
				<a href={resolve('/')} class="text-xl font-bold text-gray-900 dark:text-white">
					Servicios digitales Rana
				</a>
			</div>

			<!-- Enlaces de Escritorio (Ocultos en móvil) -->
			<div class="hidden md:flex md:items-center md:space-x-8">
				{#each links as link (link.href)}
					<a
						href={resolve(link.href as any)}
						class="rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
					>
						{link.name}
					</a>
				{/each}

				<!-- Botón Dark Mode (Escritorio) -->
				<button
					onclick={toggleTheme}
					class="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-800"
					aria-label="Alternar modo oscuro"
				>
					{#if isDarkMode}
						<!-- Icono Sol -->
						<svg
							class="h-5 w-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
							></path></svg
						>
					{:else}
						<!-- Icono Luna -->
						<svg
							class="h-5 w-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
							></path></svg
						>
					{/if}
				</button>
			</div>

			<!-- Botón Menú Hamburguesa (Móvil) -->
			<div class="flex items-center md:hidden">
				<!-- Botón Dark Mode (Móvil) -->
				<button
					onclick={toggleTheme}
					class="mr-2 rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-800"
				>
					{#if isDarkMode}
						<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
							></path></svg
						>
					{:else}
						<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
							></path></svg
						>
					{/if}
				</button>

				<button
					onclick={toggleMenu}
					class="text-gray-500 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:text-white"
					aria-label="Abrir menú"
				>
					{#if isMenuOpen}
						<!-- Icono Cerrar (X) -->
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/></svg
						>
					{:else}
						<!-- Icono Hamburguesa -->
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/></svg
						>
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Menú Desplegable (Móvil) -->
	{#if isMenuOpen}
		<div class="border-t border-gray-200 bg-white md:hidden dark:border-gray-800 dark:bg-gray-900">
			<div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
				{#each links as link (link.href)}
					<a
						href={resolve(link.href as any)}
						onclick={() => (isMenuOpen = false)}
						class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
					>
						{link.name}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>
