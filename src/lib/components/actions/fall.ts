// src/lib/componentes/acciones/fall.js
interface FallOptions {
	delay?: number;
	duration?: number;
	y?: number;
}

interface FallAction {
	destroy(): void;
}

export function fall(
	node: HTMLElement,
	{ delay = 0, duration = 800, y = -80 }: FallOptions = {}
): FallAction {
	// Estado inicial (oculto y desplazado hacia arriba)
	node.style.opacity = '0';
	node.style.transform = `translateY(${y}px)`;
	node.style.transition = `
        opacity ${duration}ms cubic-bezier(0.25, 1, 0.5, 1) ${delay}ms, 
        transform ${duration}ms cubic-bezier(0.25, 1, 0.5, 1) ${delay}ms
    `;

	// Observador para detectar cuando el elemento entra en pantalla
	const observer = new IntersectionObserver(
		(entries) => {
			if (entries[0].isIntersecting) {
				// Estado final (visible y en su posición original)
				node.style.opacity = '1';
				node.style.transform = 'translateY(0)';
				
                // Dejamos de observar para que solo caiga la primera vez
				observer.unobserve(node);
			}
		},
		{ threshold: 0.1 } // Se activa cuando el 10% del elemento es visible
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}