export const projects = [
	{
		slug: 'simulador-logistico-cvrp',
		title: 'Simulador Logístico CVRP',
		description:
			'Plataforma full-stack con mapas interactivos, integración de APIs de tráfico y webhooks para optimización de rutas y peajes.',
		tech: ['SvelteKit', 'FastAPI', 'Google OR-Tools', 'Leaflet', 'PostgreSQL'],
		image: '/images/AhoRouting/agenda.png',
		github: 'https://github.com/andressb98/Simulador_CVRP',

		// Nueva sección: Galería con descripciones
		gallery: [
			{
				src: '/images/AhoRouting/agenda.png',
				alt: 'Agenda',
				description: 'Panel principal para la visualización y gestión de la agenda de entregas.'
			},
			{
				src: '/images/AhoRouting/Configuracion.png',
				alt: 'Configuración',
				description: 'Módulo de ajustes paramétricos del simulador logístico.'
			},
			{
				src: '/images/AhoRouting/productos.png',
				alt: 'Productos',
				description:
					'Catálogo de productos con variables de peso y volumen para el cálculo de capacidad.'
			},
			{
				src: '/images/AhoRouting/ruta.png',
				alt: 'Visualización de ruta',
				description: 'Mapa interactivo renderizando las rutas optimizadas con Leaflet y OSRM.'
			},
			{
				src: '/images/AhoRouting/Vehiculos.png',
				alt: 'Flota',
				description: 'Administración de la flota disponible y sus capacidades de carga.'
			},
			{
				src: '/images/AhoRouting/VehiculosSeleccion.png',
				alt: 'Asignación',
				description: 'Interfaz para la selección y asignación de vehículos a rutas específicas.'
			}
		],

		// Nueva sección: Profundidad Técnica
		challenges: [
			'Sincronización de datos en tiempo real mediante WebSockets para actualizar el tráfico.',
			'Cálculo de múltiples escenarios de enrutamiento capacitado sin bloquear el hilo principal.',
			'Integración de las APIs de TomTom y SAKBE para calcular peajes y tiempos exactos.'
		],
		solution:
			'Se implementó un backend asíncrono delegando el cómputo matemático pesado a motores especializados, mientras el frontend en SvelteKit mantiene un estado reactivo y una experiencia de usuario fluida sin recargas.',
		technologies: ['SvelteKit', 'FastAPI', 'Google OR-Tools', 'Python', 'PostgreSQL', 'Supabase']
	},
	{
		slug: 'herencia-cacao',
		title: 'Herencia de Cacao',
		description: 'Plataforma e-commerce para la comercialización de productos tradicionales.',
		tech: ['SvelteKit', 'Prisma', 'Tailwind CSS'],
		image: '/images/Herencia/inicio.png',
		github: 'https://github.com/andressb98/HerenciaCacao',
		gallery: [
			{
				src: '/images/Herencia/inicio.png',
				alt: 'Inicio',
				description: 'Página de inicio con el logotipo de la empresa.'
			},
			{
				src: '/images/Herencia/productos.png',
				alt: 'Productos',
				description: 'Página de productos con descripción y fotos de cada producto.'
			}
		],
		challenges: [
			'Implementación de un sistema para la venta de productos tradicionales derivados de la familia cacao.',
			'Integración de un sistema de gestión de pedidos con el sistema de comercio.',
			'Implementación de un sistema de gestión de clientes con CRUD y autenticación.'
		],
		solution:
			'Se implementó un sistema de gestión de pedidos y clientes con CRUD y autenticación, integrando el sistema de comercio con el sistema de gestión de pedidos.',
		technologies: ['SvelteKit', 'Tailwind CSS']
	},
	{
		slug: 'comisiones-ujat',
		title: 'Comisiones UJAT',
		description: 'Directorio y panel de control para la gestión de asignaciones académicas.',
		tech: ['SvelteKit', 'TypeScript'],
		image: '/images/Comisiones/dashboard.png',
		github: 'https://github.com/andressb98/Comisiones_UJAT',
		gallery: [
			{
				src: '/images/Comisiones/dashboard.png',
				alt: 'Dashboard',
				description: 'Página principal del panel de control con la lista de asignaciones.'
			},
			{
				src: '/images/Comisiones/comisiones.png',
				alt: 'Comisiones',
				description: 'Página de asignación con la lista de profesores y asignaciones.'
			},
			{
				src: '/images/Comisiones/unidades.png',
				alt: 'Unidades',
				description: 'Panel de control para la gestión de unidades académicas.'
			}
		],
		challenges: [
			'Implementación de un sistema para la gestión de asignaciones académicas.',
			'Integración de un sistema de gestión de clientes con CRUD y autenticación.'
		],
		solution:
			'Se implementó un sistema de gestión de asignaciones académicas con CRUD y autenticación, integrando el sistema de gestión de clientes con el sistema de gestión de asignaciones académicas.',
		technologies: ['SvelteKit', 'TypeScript', 'Prisma', 'Bulma CSS', 'SQLite']
	},
	{
		slug: 'PuntoVenta',
		title: 'Punto de Venta',
		description: 'Plataforma de comercio electrónico para la venta de productos tradicionales.',
		tech: ['SvelteKit', 'Prisma', 'Tailwind CSS'],
		image: '/images/PuntoVenta/dashboard.png',
		github: 'https://github.com/andressb98/PuntoVenta',
		gallery: [
			{
				src: '/images/PuntoVenta/nuevaVenta.png',
				alt: 'Nueva Venta',
				description: 'Página para la creación de una nueva venta.'
			},
			{
				src: '/images/PuntoVenta/Inventario.png',
				alt: 'Inventario',
				description: 'Página de inventario con la lista de productos y sus opciones.'
			},
			{
				src: '/images/PuntoVenta/almacenes.png',
				alt: 'Almacenes',
				description: 'Página de almacenes con la lista de almacenes y sus opciones.'
			}
		],
		challenges: [
			'Implementación de un sistema para la gestión de ventas y almacenes.',
			'Integración de un sistema de gestión de clientes con CRUD y autenticación.'
		],
		solution:
			'Se implementó un sistema de gestión de ventas y almacenes con CRUD y autenticación, integrando el sistema de gestión de clientes con el sistema de gestión de ventas y almacenes.',
		technologies: ['SvelteKit', 'TypeScript', 'Prisma', 'Bulma CSS', 'SQLite']
	},
	{
		slug: 'AutobusesMexicanos',
		title: 'Autobuses Mexicanos',
		description: 'Plataforma de publicidad para autobuses de manera digital.',
		tech: ['SvelteKit', 'Prisma', 'Tailwind CSS'],
		image: '/images/autobuses/autobuses2.png',
		github: 'https://github.com/andressb98/AutobusesMexicanos',
		gallery: [
			{
				src: '/images/autobuses/autobuses2.png',
				alt: 'Dashboard',
				description: 'Página principal del panel de control con la lista de servicios.'
			},
			{
				src: '/images/autobuses/autobuses1.png',
				alt: 'Servicios',
				description: 'Página de servicios con la lista de servicios y sus opciones.'
			},
			{
				src: '/images/autobuses/sobrenosotros.png',
				alt: 'Clientes',
				description: 'Página de clientes con la lista de clientes y sus opciones.'
			},
			{
				src: '/images/autobuses/sobrenosotros2.png',
				alt: 'Sobre nosotros',
				description: 'Página sobre nosotros con la lista de clientes y sus opciones.'
			}
		],
		challenges: [
			'Implementación de un sistema para la gestión de servicios de transporte.',
			'Integración de un sistema de gestión de boletos.'
		],
		solution:
			'Se implementó un sistema de gestión de servicios de transporte con publicidad, integrando el sistema de gestión de boletos.',
		technologies: ['SvelteKit', 'TypeScript', 'Prisma', 'Bulma CSS', 'SQLite']
	}
];
