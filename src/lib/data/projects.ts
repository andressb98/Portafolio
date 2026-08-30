export const projects = [
    {
        slug: 'simulador-logistico-cvrp',
        title: 'Simulador Logístico CVRP',
        description:
            'Plataforma integral de logística y enrutamiento vehicular capacitado (CVRP). Permite la gestión completa de flotas, cálculo de costos operativos y planificación automatizada de rutas de entrega.',
        tech: ['SvelteKit', 'FastAPI', 'Google OR-Tools', 'Leaflet', 'Supabase', 'Prisma'],
        image: '/images/AhoRouting/agenda.png',
        github: 'https://github.com/andressb98/Simulador_CVRP',

        gallery: [
            {
                src: '/images/AhoRouting/agenda.png',
                alt: 'Agenda Semanal',
                description: 'Calendario interactivo para la visualización, ajuste y confirmación de entregas programadas a sucursales.'
            },
            {
                src: '/images/AhoRouting/Configuracion.png',
                alt: 'Configuración Paramétrica',
                description: 'Módulo global para definir costos de combustible (gasolina/diésel), horarios operativos y restricciones de ruta.'
            },
            {
                src: '/images/AhoRouting/productos.png',
                alt: 'Catálogo de Productos',
                description: 'Gestión de inventario con variables físicas para garantizar que el cálculo de rutas respete la capacidad de cada vehículo.'
            },
            {
                src: '/images/AhoRouting/ruta.png',
                alt: 'Renderizado de Ruta',
                description: 'Mapa interactivo que traza desde el CEDIS hasta las tiendas, optimizando tiempos y distancias.'
            },
            {
                src: '/images/AhoRouting/Vehiculos.png',
                alt: 'Gestión de Flota',
                description: 'Administración detallada de vehículos (propios/externos), métricas de rendimiento y mantenimientos por kilometraje.'
            },
            {
                src: '/images/AhoRouting/VehiculosSeleccion.png',
                alt: 'Asignación de Operadores',
                description: 'Panel para vincular choferes con vehículos específicos según la demanda de la ruta.'
            }
        ],

        challenges: [
            'Modelar múltiples variables operativas (ventanas de tiempo, rendimiento de combustible, mantenimientos y capacidades físicas).',
            'Procesar cálculos matemáticos complejos para la optimización de rutas sin afectar la fluidez de la interfaz del usuario.',
            'Integrar de manera precisa las coordenadas geoespaciales del CEDIS y las sucursales con frecuencias de entrega dinámicas.'
        ],
        solution:
            'Se construyó una arquitectura escalable: un backend en Python (FastAPI + OR-Tools) procesa los algoritmos de enrutamiento pesado, mientras un frontend reactivo en SvelteKit permite a los despachadores visualizar y editar una agenda semanal. Los datos se gestionan eficientemente con Supabase y Prisma. El sistema está preparado para una futura integración con una app móvil para el tracking y checkout de los conductores.',
        technologies: ['SvelteKit', 'FastAPI', 'Google OR-Tools', 'Python', 'Supabase', 'Prisma', 'Leaflet']
    },
    {
        slug: 'herencia-cacao',
        title: 'Herencia de Cacao',
        description: 'Plataforma e-commerce inmersiva orientada a la comercialización y puesta en valor de productos artesanales derivados del cacao.',
        tech: ['SvelteKit', 'Prisma', 'Tailwind CSS'],
        image: '/images/Herencia/inicio.png',
        github: 'https://github.com/andressb98/HerenciaCacao',
        gallery: [
            {
                src: '/images/Herencia/inicio.png',
                alt: 'Inicio',
                description: 'Landing page diseñada para transmitir la riqueza cultural y el origen de los productos cacaoteros.'
            },
            {
                src: '/images/Herencia/productos.png',
                alt: 'Catálogo',
                description: 'Escaparate digital interactivo con descripciones detalladas y fotografías de alta calidad de cada derivado.'
            }
        ],
        challenges: [
            'Diseñar una experiencia de usuario que fusione la tradición agrícola del cacao con la agilidad de un comercio electrónico moderno.',
            'Estructurar un flujo de compras intuitivo que facilite la conversión de visitantes a clientes.',
            'Implementar un panel administrativo seguro para la gestión continua de inventario, pedidos y perfiles de usuario.'
        ],
        solution:
            'Se desarrolló un sistema de extremo a extremo que incluye autenticación segura, operaciones CRUD completas para la gestión de clientes y pedidos, y un escaparate digital fluido gracias a la reactividad de SvelteKit y el estilizado ágil de Tailwind CSS.',
        technologies: ['SvelteKit', 'Tailwind CSS', 'Prisma']
    },
    {
        slug: 'comisiones-ujat',
        title: 'Comisiones UJAT',
        description: 'Sistema institucional para digitalizar y agilizar la gestión, asignación y seguimiento de las comisiones académicas del cuerpo docente.',
        tech: ['SvelteKit', 'TypeScript', 'Prisma', 'SQLite'],
        image: '/images/Comisiones/dashboard.png',
        github: 'https://github.com/andressb98/Comisiones_UJAT',
        gallery: [
            {
                src: '/images/Comisiones/dashboard.png',
                alt: 'Dashboard Principal',
                description: 'Centro de control operativo que ofrece una vista panorámica de las asignaciones activas e indicadores clave.'
            },
            {
                src: '/images/Comisiones/comisiones.png',
                alt: 'Gestión de Comisiones',
                description: 'Módulo detallado para administrar el padrón de profesores y asignarles tareas o responsabilidades específicas.'
            },
            {
                src: '/images/Comisiones/unidades.png',
                alt: 'Unidades Académicas',
                description: 'Interfaz administrativa para organizar y estructurar las diferentes divisiones y unidades de la universidad.'
            }
        ],
        challenges: [
            'Centralizar la información administrativa dispersa del personal docente en una única fuente de verdad.',
            'Crear flujos de trabajo eficientes para los administradores universitarios sin curvas de aprendizaje prolongadas.'
        ],
        solution:
            'Construcción de una herramienta interna robusta que permite la administración integral del profesorado y sus comisiones. Se integró un sistema de autenticación de roles, garantizando que el acceso y las modificaciones se realicen bajo estrictos controles de seguridad institucionales.',
        technologies: ['SvelteKit', 'TypeScript', 'Prisma', 'Bulma CSS', 'SQLite']
    },
    {
        slug: 'PuntoVenta',
        title: 'Punto de Venta',
        description: 'Sistema integral de gestión comercial diseñado para optimizar el flujo de caja, el control de inventario y la administración multisucursal.',
        tech: ['SvelteKit', 'Prisma', 'Tailwind CSS', 'SQLite'],
        image: '/images/PuntoVenta/nuevaVenta.png',
        github: 'https://github.com/andressb98/PuntoVenta',
        gallery: [
            {
                src: '/images/PuntoVenta/nuevaVenta.png',
                alt: 'Terminal de Venta',
                description: 'Interfaz rápida y optimizada para el registro de transacciones comerciales y atención al cliente.'
            },
            {
                src: '/images/PuntoVenta/Inventario.png',
                alt: 'Control de Inventario',
                description: 'Panel de administración detallado para el seguimiento de existencias, precios y variantes de productos.'
            },
            {
                src: '/images/PuntoVenta/almacenes.png',
                alt: 'Gestión Multisucursal',
                description: 'Módulo para el control logístico y distribución de mercancía a través de diferentes almacenes.'
            }
        ],
        challenges: [
            'Garantizar la sincronización exacta del stock al momento de procesar transacciones para evitar desabastos.',
            'Diseñar una interfaz de cobro (caja) que minimice los clics y acelere el proceso de atención al cliente final.'
        ],
        solution:
            'Se estructuró una arquitectura relacional sólida mediante Prisma que conecta ventas, clientes y almacenes en tiempo real. La plataforma permite realizar altas, bajas y modificaciones (CRUD) de forma ágil, blindando la integridad de los datos comerciales.',
        technologies: ['SvelteKit', 'TypeScript', 'Prisma', 'Bulma CSS', 'SQLite']
    },
    {
        slug: 'AutobusesMexicanos',
        title: 'Autobuses Mexicanos',
        description: 'Portal publicitario de alto impacto visual diseñado para destacar rutas, servicios y comodidades de transporte terrestre.',
        tech: ['SvelteKit', 'Prisma', 'Tailwind CSS'],
        image: '/images/autobuses/autobuses2.png',
        github: 'https://github.com/andressb98/AutobusesMexicanos',
        gallery: [
            {
                src: '/images/autobuses/autobuses2.png',
                alt: 'Panel de Servicios',
                description: 'Vista principal que destaca de manera atractiva las unidades, rutas y horarios disponibles para los viajeros.'
            },
            {
                src: '/images/autobuses/autobuses1.png',
                alt: 'Detalle de Unidad',
                description: 'Exhibición inmersiva de las comodidades y amenidades que ofrecen los autobuses durante el viaje.'
            },
            {
                src: '/images/autobuses/sobrenosotros.png',
                alt: 'Testimonios',
                description: 'Sección dedicada a generar confianza mediante la presentación de clientes y empresas que avalan el servicio.'
            },
            {
                src: '/images/autobuses/sobrenosotros2.png',
                alt: 'Identidad Corporativa',
                description: 'Espacio narrativo que comunica la misión, visión y los valores de seguridad y puntualidad de la empresa.'
            }
        ],
        challenges: [
            'Desarrollar una interfaz que no solo informe, sino que persuada visualmente a los usuarios de elegir el servicio.',
            'Estructurar el contenido para lograr un posicionamiento SEO óptimo y tiempos de carga mínimos para usuarios móviles.'
        ],
        solution:
            'Se diseñó una experiencia web envolvente priorizando recursos visuales de alta calidad y tipografías legibles. El sitio se construyó con SvelteKit para garantizar una carga casi instantánea y transiciones fluidas, integrando sutilmente un sistema subyacente para la futura venta de boletos.',
        technologies: ['SvelteKit', 'TypeScript', 'Prisma', 'Bulma CSS', 'SQLite']
    }
];