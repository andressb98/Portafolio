// src/lib/componentes/acciones/fallLetters.ts
export interface FallLettersOptions {
	delay?: number;
	duration?: number;
	y?: number;
	stagger?: number;
}

export interface FallLettersActionReturn {
	destroy: () => void;
}

export function fallLetters(
	node: HTMLElement,
	{ delay = 0, duration = 600, y = -40, stagger = 30 }: FallLettersOptions = {}
): FallLettersActionReturn {
	let charIndex = 0;

	function wrapTextNodes(element: Node): void {
		const childNodes = Array.from(element.childNodes);

		childNodes.forEach((child: ChildNode) => {
			if (child.nodeType === 3) {
				const text = child.textContent;
				if (!text || !text.trim()) return;

				const fragment = document.createDocumentFragment();
				const chars = text.split('');

				chars.forEach((char: string) => {
					// Corrección 1: Detectar espacios, tabulaciones y saltos de línea del HTML
					if (char.trim() === '') {
						fragment.appendChild(document.createTextNode(char));
					} else {
						const span = document.createElement('span');
						span.textContent = char;

						// Corrección 2: Usar relative/top en lugar de transform para no romper el bg-clip-text
						span.style.display = 'inline-block';
						span.style.position = 'relative';
						span.style.opacity = '0';
						span.style.top = `${y}px`;

						const currentDelay = delay + charIndex * stagger;
						span.style.transition = `
							opacity ${duration}ms cubic-bezier(0.25, 1, 0.5, 1) ${currentDelay}ms, 
							top ${duration}ms cubic-bezier(0.25, 1, 0.5, 1) ${currentDelay}ms
						`;

						span.setAttribute('data-letter', '');
						fragment.appendChild(span);
						charIndex++;
					}
				});
				element.replaceChild(fragment, child);
			} else if (child.nodeType === 1) {
				wrapTextNodes(child);
			}
		});
	}

	wrapTextNodes(node);

	const observer = new IntersectionObserver(
		(entries: IntersectionObserverEntry[]) => {
			if (entries[0].isIntersecting) {
				const letters = node.querySelectorAll<HTMLElement>('[data-letter]');

				// requestAnimationFrame asegura que el navegador registre el estado inicial antes de animar
				requestAnimationFrame(() => {
					letters.forEach((letter: HTMLElement) => {
						letter.style.opacity = '1';
						letter.style.top = '0px'; // Finaliza el movimiento sin usar transform
					});
				});

				observer.unobserve(node);
			}
		},
		{ threshold: 0.1 }
	);

	observer.observe(node);

	return {
		destroy(): void {
			observer.disconnect();
		}
	};
}
