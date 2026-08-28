// src/lib/actions/reveal.ts
export function reveal(node: HTMLElement) {
	// Añadimos las clases iniciales de Tailwind (invisible y desplazado hacia abajo)
	node.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700', 'ease-out');

	const observer = new IntersectionObserver(
		(entries) => {
			if (entries[0].isIntersecting) {
				// Cuando entra en el viewport, cambiamos las clases
				node.classList.remove('opacity-0', 'translate-y-10');
				node.classList.add('opacity-100', 'translate-y-0');

				// Dejamos de observar para que la animación solo ocurra una vez
				observer.unobserve(node);
			}
		},
		{
			threshold: 0.15 // Se activa cuando el 15% del elemento es visible
		}
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
