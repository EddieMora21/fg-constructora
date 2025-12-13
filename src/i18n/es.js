// Spanish translations
const es = {
    nav: {
        home: 'Inicio',
        projects: 'Proyectos',
        services: 'Servicios',
        about: 'Nosotros',
        contact: 'Contacto',
        quote: 'Contactar',
    },
    hero: {
        title: 'Diseñamos y Construimos tu Visión',
        subtitle: 'Expertos en arquitectura e ingeniería en Costa Rica. Contáctanos por WhatsApp y platiquemos sobre tu próximo proyecto.',
        cta1: 'Ver Proyectos',
        cta2: 'Contáctanos Ahora',
    },
    home: {
        intro: {
            title: 'Nuestra Esencia',
            nosotros: 'Integradores de soluciones para tu vida.', // Short punchy tagline
            vision: 'Innovación constructiva y sostenibilidad para optimizar tu inversión.', // Summary of vision
            cliente: 'Tu proyecto es nuestra prioridad. Diseñamos para ti, adaptándonos a tus necesidades y presupuesto.', // Summary of client focus
            servicios: [ // Key pillars only
                'Diseño Arquitectónico',
                'Consultoría & Trámites',
                'Construcción General',
                'Avalúos & Inspección'
            ]
        },
        team: {
            title: 'Nuestro Equipo',
            subtitle: 'Profesionales comprometidos con tu visión',
            members: [
                { name: 'Ing. Fabian Alfaro', role: 'Director General', image: '/equipo/fabian-alfaro.webp' },
                { name: 'Ing. Andrés Mora', role: 'Líder Electromecánica', image: '/equipo/andres-mora.webp' },
                { name: 'Arq. Gilberth Sanchez', role: 'Líder de Diseño', image: '/equipo/gilberth-sanchez.webp' },
                { name: 'Enoc Peña', role: 'Presupuestos y Costos', image: '/equipo/enoc-pena.webp' },
                { name: 'Edwin Chavarria', role: 'Modelador BIM', image: '/equipo/edwin-chavarria.webp' }
            ]
        },
        stats: {
            projects: 'Proyectos Ejecutados',
            awards: 'Premios Internacionales',
            clients: 'Clientes Satisfechos',
        },
        featured: {
            title: 'Obras Destacadas',
            cta: 'Explorar Todos los Proyectos',
        },
        process: {
            title: 'Nuestro Proceso',
            steps: [
                { num: '01', title: 'Consultoría', desc: 'Analizamos la viabilidad de tu proyecto, entendemos tus necesidades y definimos los objetivos clave.' },
                { num: '02', title: 'Diseño', desc: 'Nuestro equipo creativo desarrolla propuestas arquitectónicas que equilibran forma y función.' },
                { num: '03', title: 'Ejecución', desc: 'Construcción con los más altos estándares de calidad, cumpliendo tiempos y presupuestos.' },
            ],
        },
        testimonials: {
            label: 'Lo que dicen nuestros clientes',
            items: [
                {
                    quote: '"La atención al detalle de FG Ingenieros & Arquitectos es incomparable. Lograron transformar nuestra visión corporativa en un espacio funcional y estéticamente imponente."',
                    author: '— Carlos Monge, Director Grupo Inmobiliario',
                    role: 'Proyecto Corporativo'
                },
                {
                    quote: '"Construir nuestra casa fue un proceso libre de estrés gracias a su profesionalismo. Superaron nuestras expectativas en cronograma y calidad de acabados."',
                    author: '— Sofía Ramírez, Propietaria Residencia Escazú',
                    role: 'Proyecto Residencial'
                },
                {
                    quote: '"Como desarrolladores, buscamos socios confiables. FG ha demostrado ser un aliado estratégico clave, entregando soluciones técnicas complejas con total transparencia."',
                    author: '— Javier Solís, Gerente de Desarrollo Urbano',
                    role: 'Infraestructura'
                }
            ]
        },
        cta: {
            title: '¿Listo para iniciar tu proyecto?',
            subtitle: 'Contáctanos hoy para una asesoría gratuita.',
            button: 'Hablemos',
        },
    },
    projects: {
        title: 'Portafolio de Obras',
        subtitle: 'Una selección de nuestros proyectos más emblemáticos en Costa Rica y la región. Calidad, innovación y sostenibilidad en cada metro cuadrado.',
        filters: ['Todos', 'Comercial', 'Residencial', 'Industrial', 'Hospitalario'],
        caseStudy: {
            title: 'Caso de Éxito',
            projectTitle: 'Torre Sabana: Innovación Vertical',
            desc: 'Este proyecto representó un desafío de ingeniería debido a las condiciones del suelo. Implementamos una cimentación profunda innovadora que redujo el tiempo de construcción en un 20%.',
            details: ['Altura: 120 metros', 'Certificación LEED Gold', 'Uso Mixto: Oficinas y Comercio'],
            cta: 'Leer Historia Completa',
        },
        viewProject: 'Ver Proyecto',
        explore: 'Explorar',
        projectsList: [
            {
                id: 1,
                title: 'Casa Corteza',
                category: 'Residencial',
                location: 'Costa Rica',
                year: '2023',
                client: 'Proyecto Privado',
                area: 'N/A',
                duration: '17 semanas (Mayo - Septiembre 2023)',
                description: 'Concepto Arquitectónico Central: "Contraste Cálido y Funcional". El proyecto se basa en la combinación estratégica de líneas limpias, materiales contrastantes y una optimización de la luz natural y artificial. El diseño exterior e interior busca un equilibrio entre la estética contemporánea y la calidez del hogar. Este proyecto es un excelente ejemplo de la aplicación de principios de diseño moderno residencial en el que se fusiona la funcionalidad (ventanas amplias, espacios abiertos) con una estética cuidada (juego de materiales y acentos de color/textura).',
                challenge: 'Crear espacios con luz y amplitud que maximicen la sensación de espacio y el reflejo de la luz natural a través de amplios ventanales, manteniendo la calidez del hogar.',
                solution: 'Diseño de escalera flotante como elemento arquitectónico central con escalones de madera de color claro sobre estructura metálica blanca, uso de pisos laminados en tonos de madera clara para continuidad y calidez, e iluminación con luminarias empotradas y lámpara colgante escultórica como punto focal.',
                images: [
                    '/src/assets/projects/casa-corteza/ImagenPrincipal.webp',
                    '/src/assets/projects/casa-corteza/Salayescaleras.webp',
                    '/src/assets/projects/casa-corteza/Escaleras.webp',
                    '/src/assets/projects/casa-corteza/FachadaExterior.webp',
                    '/src/assets/projects/casa-corteza/FachadaExterior2.webp',
                    '/src/assets/projects/casa-corteza/FachadaExterior3.webp',
                    '/src/assets/projects/casa-corteza/ImagenSecundaria.webp',
                    '/src/assets/projects/casa-corteza/Cocina.webp',
                    '/src/assets/projects/casa-corteza/Cocina2.webp',
                    '/src/assets/projects/casa-corteza/Cuarto.webp',
                    '/src/assets/projects/casa-corteza/Pasadillo.webp',
                    '/src/assets/projects/casa-corteza/Pasadillo2.webp',
                    '/src/assets/projects/casa-corteza/Bano.webp',
                    '/src/assets/projects/casa-corteza/Bano2.webp',
                    '/src/assets/projects/casa-corteza/Bano3.webp'
                ],
                team: ['Equipo FG Constructores']
            },
            {
                id: 2,
                title: 'Colinas del Poro',
                category: 'Residencial',
                location: 'Grecia, Alajuela',
                year: '2023',
                client: 'Proyecto Privado',
                area: 'N/A',
                duration: '5 meses (Julio - Noviembre 2023)',
                description: 'Este proyecto se enmarca claramente dentro de un estilo moderno y minimalista, con un fuerte enfoque en las líneas limpias, el contraste y la funcionalidad. El diseño exterior es de volúmenes puros y geometría marcada, característico de la arquitectura moderna. Se utiliza una composición de volúmenes rectangulares que se yuxtaponen. El diseño es de dos niveles y destaca el uso de techos planos (o inclinados con un mínimo pendiente), lo que refuerza la estética contemporánea y minimalista. La paleta de colores es neutra y de alto contraste. Predominan los tonos gris, blanco y negro, creando un impacto visual fuerte.',
                challenge: 'Lograr una arquitectura de gran impacto visual en el exterior mediante el contraste y la geometría.',
                solution: 'Diseño de un interior funcional, luminoso y pulcro, acorde con las tendencias actuales de diseño residencial moderno.',
                images: [
                    '/src/assets/projects/colinas-del-poro/ImagenPrincipal-Home.webp',
                    '/src/assets/projects/colinas-del-poro/Exterior2.webp',
                    '/src/assets/projects/colinas-del-poro/Interior.webp',
                    '/src/assets/projects/colinas-del-poro/Exterior1.webp',
                    '/src/assets/projects/colinas-del-poro/Exterior3.webp',
                    '/src/assets/projects/colinas-del-poro/sala1.webp',
                    '/src/assets/projects/colinas-del-poro/Cocina.webp',
                    '/src/assets/projects/colinas-del-poro/Escaleras1.webp',
                    '/src/assets/projects/colinas-del-poro/Escaleras2.webp',
                    '/src/assets/projects/colinas-del-poro/Escaleras3.webp',
                    '/src/assets/projects/colinas-del-poro/InteriorPuerta.webp',
                    '/src/assets/projects/colinas-del-poro/InteriorPuerta2.webp',
                    '/src/assets/projects/colinas-del-poro/Closed.webp',
                    '/src/assets/projects/colinas-del-poro/Bano.webp'
                ],
                team: ['Equipo FG Constructores']
            },
            {
                id: 3,
                title: 'Residencia D Barva',
                category: 'Residencial',
                location: 'Barva, Heredia',
                year: '2024',
                client: 'Proyecto Privado',
                area: 'N/A',
                duration: 'Finalización Enero 2024',
                description: 'Arquitectura Moderna con Influencia Industrial y Toques Minimalistas. El diseño se alinea con la arquitectura moderna y contemporánea: Volúmenes Geométricos Puros con formas rectangulares y cúbicas limpias, minimizando las ornamentaciones. Grandes Aberturas Acorazadas con ventanales de piso a techo que maximizan la entrada de luz natural y borran el límite entre el interior y el exterior. Paleta de Colores Neutros con tonos grises y blancos rotos, con el azul profundo como color de acento, creando un contraste audaz pero elegante. Interiores de Doble Altura que aumentan la sensación de amplitud y luminosidad.',
                challenge: 'Lograr la funcionalidad, la luz y la estética de líneas limpias, incorporando texturas fuertes para darle personalidad y calidez.',
                solution: 'Diseño que incorpora texturas de madera, metal y malla para combinar la modernidad con la calidez del hogar, maximizando la luz natural con grandes ventanales y doble altura en sala de estar.',
                images: [
                    '/src/assets/projects/residencia-barva/Fachadaexterior.webp',
                    '/src/assets/projects/residencia-barva/ExteriorEsquina.webp',
                    '/src/assets/projects/residencia-barva/Interiorcocina.webp',
                    '/src/assets/projects/residencia-barva/Fachadaexterior2.webp',
                    '/src/assets/projects/residencia-barva/Escaleras.webp',
                    '/src/assets/projects/residencia-barva/Escaleraspartemedio.webp',
                    '/src/assets/projects/residencia-barva/Cuarto1.webp',
                    '/src/assets/projects/residencia-barva/Cuarto2.webp',
                    '/src/assets/projects/residencia-barva/Bano.webp'
                ],
                team: ['Equipo FG Constructores']
            }
        ],
    },
    services: {
        title: 'Soluciones Integrales',
        subtitle: 'Desde la conceptualización hasta la entrega llave en mano. Ofrecemos un abanico completo de servicios para materializar su visión.',
        methodology: {
            title: 'Metodología de Trabajo',
            bimTitle: 'Enfoque BIM (Building Information Modeling)',
            bimDesc: 'Utilizamos tecnología BIM para centralizar toda la información del proyecto en un modelo digital 3D. Esto nos permite:',
            bimList: ['Detectar conflictos antes de la construcción.', 'Mejorar la precisión de los costos.', 'Facilitar la colaboración entre disciplinas.'],
        },
        whyChooseUs: {
            title: '¿Por qué elegirnos?',
            items: [
                {
                    title: 'Excelencia Insuperable',
                    desc: 'Estándares de calidad que superan la normativa. Cada detalle es supervisado rigurosamente.',
                    icon: 'Award'
                },
                {
                    title: 'Cumplimiento Riguroso',
                    desc: 'Respetamos tu tiempo e inversión. Entregas puntuales y presupuestos transparentes, sin sorpresas.',
                    icon: 'Clock'
                },
                {
                    title: 'Socio Estratégico',
                    desc: 'No somos solo constructores, somos su aliado. Asesoría experta desde la primera idea hasta la llave en mano.',
                    icon: 'Handshake'
                }
            ]
        },
        faq: {
            title: 'Preguntas Frecuentes',
            items: [
                { q: '¿Trabajan en todo Costa Rica?', a: 'Sí, tenemos capacidad operativa para ejecutar proyectos en las 7 provincias del país.' },
                { q: '¿Realizan remodelaciones?', a: 'Sí, contamos con un departamento especializado en remodelaciones corporativas y comerciales.' },
                { q: '¿Cómo se manejan los presupuestos?', a: 'Trabajamos con presupuestos detallados y transparentes. Ofrecemos modalidades de precio alzado o administración delegada.' },
            ],
        },
    },
    about: {
        title: 'Nuestra Esencia',
        subtitle: 'Más que constructores, somos socios estratégicos en el desarrollo de infraestructura que impulsa el progreso de Costa Rica.',
        history: {
            title: 'Trayectoria de Excelencia',
            p1: 'Fundada en 2005 en San José, Construct Corp nació con la visión de elevar los estándares de la construcción en la región. Lo que comenzó como un pequeño estudio de arquitectura se ha convertido en una firma integral con más de 100 colaboradores.',
            p2: 'A lo largo de casi dos décadas, hemos navegado desafíos económicos y técnicos, siempre manteniendo nuestro compromiso con la calidad y la ética profesional. Hemos sido parte fundamental del desarrollo urbano de zonas clave como Escazú, Santa Ana y Heredia.',
            p3: 'Hoy, miramos hacia el futuro invirtiendo en tecnologías sostenibles y metodologías de construcción lean, reafirmando nuestro liderazgo en el sector.',
        },
        values: {
            title: 'Nuestros Valores',
            items: [
                { title: 'Integridad', desc: 'Actuamos con transparencia y honestidad en cada transacción y decisión.' },
                { title: 'Innovación', desc: 'Buscamos constantemente nuevas formas de mejorar nuestros procesos y resultados.' },
                { title: 'Sostenibilidad', desc: 'Diseñamos pensando en el impacto ambiental y social a largo plazo.' },
            ],
        },
        team: {
            title: 'Liderazgo',
        },
    },
    contact: {
        title: 'Hablemos de tu Proyecto',
        subtitle: 'Estamos listos para escuchar tus ideas y convertirlas en realidad. Contáctanos para una consulta inicial sin compromiso.',

        directContact: 'Contacto Directo',
        hours: 'Horario',
        form: {
            title: 'Envíanos un mensaje',
            name: 'Nombre Completo',
            email: 'Correo Electrónico',
            phone: 'Teléfono',
            details: 'Detalles del Proyecto',
            submit: 'Enviar Solicitud',
        },
        faq: [
            { q: '¿Cuál es el tiempo promedio de respuesta?', a: 'Solemos responder a todas las solicitudes en un plazo de 24 horas hábiles.' },

        ],
    },
    footer: {
        tagline: 'Ingeniería y arquitectura de clase mundial en Costa Rica.',
        company: 'Empresa',
        companyLinks: ['Sobre Nosotros', 'Carreras', 'Sostenibilidad'],
        servicesTitle: 'Servicios',
        servicesLinks: ['Arquitectura', 'Ingeniería', 'Consultoría'],
        contactTitle: 'Contacto',
        copyright: 'Todos los derechos reservados.',
    },
};

export default es;
