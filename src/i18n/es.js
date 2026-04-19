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
        title: 'Estructura, función y estética en cada proyecto',
        subtitle: 'Materializamos su visión mediante la integración de ingeniería de precisión y diseño de vanguardia. Iniciemos hoy la conversación sobre su próximo gran proyecto.',
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
                { name: 'Edwin Chavarria', role: 'Modelador BIM', image: '/equipo/edwin-chavarria.webp' },
                { name: 'Ing. Luciana Miranda', role: 'Departamento de ingeniería de costos y logística', image: '/equipo/luciana-miranda.webp' }
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
        filters: ['Construidos', 'Diseñados'],
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
                id: 'casa-theo',
                title: 'Casa Theo',
                category: 'Construidos',
                location: 'Patarra, San José',
                year: '2025',
                duration: '20 semanas (Julio - Noviembre 2025)',
                description: 'Este proyecto presenta una propuesta de arquitectura contemporánea de corte industrial y minimalista, diseñada bajo una lógica de aprovechamiento del terreno y búsqueda de transparencia hacia el paisaje. La casa utiliza una tipología de planta libre elevada, donde el volumen principal se suspende sobre una estructura de columnas para liberar el nivel inferior como garaje o área social techada. Predomina una silueta asimétrica bajo un techo a dos aguas de baja pendiente, reforzada por una fachada en tonos oscuros que aporta un carácter moderno y elegante en contraste con el entorno natural.',
                challenge: 'Resolver una vivienda elevada con acceso jerarquizado, integrando una rampa metálica de lenguaje industrial, espacios sociales abiertos y una relación franca con el paisaje sin perder funcionalidad ni claridad estructural.',
                solution: 'Se desarrolló un área social diáfana que integra sala, comedor y cocina bajo techos altos que siguen la pendiente de la cubierta, con ventanales de piso a techo en marcos de aluminio negro para maximizar luz natural y vistas. La propuesta se complementa con terraza social tipo BBQ, baños de estética minimalista con espejos retroiluminados y sobres en concreto pulido, además de una escalera interior limpia con huellas claras y pasamanos de madera que aporta calidez al conjunto.',
                images: [
                    '/projects/casa-theo/CasaPatarraFG-88.webp',
                    '/projects/casa-theo/CasaPatarraFG-1.webp',
                    '/projects/casa-theo/CasaPatarraFG-3.webp',
                    '/projects/casa-theo/CasaPatarraFG-30.webp',
                    '/projects/casa-theo/CasaPatarraFG-11.webp',
                    '/projects/casa-theo/CasaPatarraFG-10.webp',
                    '/projects/casa-theo/CasaPatarraFG-12.webp',
                    '/projects/casa-theo/CasaPatarraFG-20.webp',
                    '/projects/casa-theo/CasaPatarraFG-21.webp',
                    '/projects/casa-theo/CasaPatarraFG-22.webp',
                    '/projects/casa-theo/CasaPatarraFG-15.webp',
                    '/projects/casa-theo/CasaPatarraFG-18.webp',
                    '/projects/casa-theo/CasaPatarraFG-73.webp',
                    '/projects/casa-theo/CasaPatarraFG-31.webp',
                    '/projects/casa-theo/CasaPatarraFG-33.webp'
                ],
                team: ['Equipo FG Constructores']
            },
            {
                id: 'casa-corteza',
                title: 'Casa Corteza',
                category: 'Construidos',
                location: 'Grecia, Alajuela',
                year: '2023',
                area: 'N/A',
                duration: '17 semanas (Mayo - Septiembre 2023)',
                description: 'Concepto Arquitectónico Central: "Contraste Cálido y Funcional". El proyecto se basa en la combinación estratégica de líneas limpias, materiales contrastantes y una optimización de la luz natural y artificial. El diseño exterior e interior busca un equilibrio entre la estética contemporánea y la calidez del hogar. Este proyecto es un excelente ejemplo de la aplicación de principios de diseño moderno residencial en el que se fusiona la funcionalidad (ventanas amplias, espacios abiertos) con una estética cuidada (juego de materiales y acentos de color/textura).',
                challenge: 'Crear espacios con luz y amplitud que maximicen la sensación de espacio y el reflejo de la luz natural a través de amplios ventanales, manteniendo la calidez del hogar.',
                solution: 'Diseño de escalera flotante como elemento arquitectónico central con escalones de madera de color claro sobre estructura metálica blanca, uso de pisos laminados en tonos de madera clara para continuidad y calidez, e iluminación con luminarias empotradas y lámpara colgante escultórica como punto focal.',
                images: [
                    '/projects/casa-corteza/ImagenPrincipal.webp',
                    '/projects/casa-corteza/Salayescaleras.webp',
                    '/projects/casa-corteza/Escaleras.webp',
                    '/projects/casa-corteza/FachadaExterior.webp',
                    '/projects/casa-corteza/FachadaExterior2.webp',
                    '/projects/casa-corteza/FachadaExterior3.webp',
                    '/projects/casa-corteza/ImagenSecundaria.webp',
                    '/projects/casa-corteza/Cocina.webp',
                    '/projects/casa-corteza/Cocina2.webp',
                    '/projects/casa-corteza/Cuarto.webp',
                    '/projects/casa-corteza/Pasadillo.webp',
                    '/projects/casa-corteza/Pasadillo2.webp',
                    '/projects/casa-corteza/Bano.webp',
                    '/projects/casa-corteza/Bano2.webp',
                    '/projects/casa-corteza/Bano3.webp'
                ],
                team: ['Equipo FG Constructores']
            },
            {
                id: 'colinas-del-poro',
                title: 'Colinas del Poro',
                category: 'Construidos',
                location: 'Grecia, Alajuela',
                year: '2023',
                area: 'N/A',
                duration: '5 meses (Julio - Noviembre 2023)',
                description: 'Este proyecto se enmarca claramente dentro de un estilo moderno y minimalista, con un fuerte enfoque en las líneas limpias, el contraste y la funcionalidad. El diseño exterior es de volúmenes puros y geometría marcada, característico de la arquitectura moderna. Se utiliza una composición de volúmenes rectangulares que se yuxtaponen. El diseño es de dos niveles y destaca el uso de techos planos (o inclinados con un mínimo pendiente), lo que refuerza la estética contemporánea y minimalista. La paleta de colores es neutra y de alto contraste. Predominan los tonos gris, blanco y negro, creando un impacto visual fuerte.',
                challenge: 'Lograr una arquitectura de gran impacto visual en el exterior mediante el contraste y la geometría.',
                solution: 'Diseño de un interior funcional, luminoso y pulcro, acorde con las tendencias actuales de diseño residencial moderno.',
                images: [
                    '/projects/colinas-del-poro/ImagenPrincipal-Home.webp',
                    '/projects/colinas-del-poro/Exterior2.webp',
                    '/projects/colinas-del-poro/Interior.webp',
                    '/projects/colinas-del-poro/Exterior1.webp',
                    '/projects/colinas-del-poro/Exterior3.webp',
                    '/projects/colinas-del-poro/sala1.webp',
                    '/projects/colinas-del-poro/Cocina.webp',
                    '/projects/colinas-del-poro/Escaleras1.webp',
                    '/projects/colinas-del-poro/Escaleras2.webp',
                    '/projects/colinas-del-poro/Escaleras3.webp',
                    '/projects/colinas-del-poro/InteriorPuerta.webp',
                    '/projects/colinas-del-poro/InteriorPuerta2.webp',
                    '/projects/colinas-del-poro/Closed.webp',
                    '/projects/colinas-del-poro/Bano.webp'
                ],
                team: ['Equipo FG Constructores']
            },
            {
                id: 'residencia-barva',
                title: 'Residencia D Barva',
                category: 'Construidos',
                location: 'Barva, Heredia',
                year: 'Septiembre 2023 - Enero 2024',
                area: 'N/A',
                duration: '5 Meses',
                description: 'Arquitectura Moderna con Influencia Industrial y Toques Minimalistas. El diseño se alinea con la arquitectura moderna y contemporánea: Volúmenes Geométricos Puros con formas rectangulares y cúbicas limpias, minimizando las ornamentaciones. Grandes Aberturas Acorazadas con ventanales de piso a techo que maximizan la entrada de luz natural y borran el límite entre el interior y el exterior. Paleta de Colores Neutros con tonos grises y blancos rotos, con el azul profundo como color de acento, creando un contraste audaz pero elegante. Interiores de Doble Altura que aumentan la sensación de amplitud y luminosidad.',
                challenge: 'Lograr la funcionalidad, la luz y la estética de líneas limpias, incorporando texturas fuertes para darle personalidad y calidez.',
                solution: 'Diseño que incorpora texturas de madera, metal y malla para combinar la modernidad con la calidez del hogar, maximizando la luz natural con grandes ventanales y doble altura en sala de estar.',
                images: [
                    '/projects/residencia-barva/Fachadaexterior.webp',
                    '/projects/residencia-barva/ExteriorEsquina.webp',
                    '/projects/residencia-barva/Interiorcocina.webp',
                    '/projects/residencia-barva/Fachadaexterior2.webp',
                    '/projects/residencia-barva/Escaleras.webp',
                    '/projects/residencia-barva/Escaleraspartemedio.webp',
                    '/projects/residencia-barva/Cuarto1.webp',
                    '/projects/residencia-barva/Cuarto2.webp',
                    '/projects/residencia-barva/Bano.webp'
                ],
                team: ['Equipo FG Constructores']
            },
            {
                id: 'casita-mora',
                title: 'Casita Mora',
                category: 'Diseñados',
                location: 'Quepos, Puntarenas',
                year: '2024',
                description: 'Propuesta residencial compacta pero de gran impacto visual. Un estudio sobre cómo la pequeña escala puede albergar lujo y funcionalidad sin compromisos.',
                challenge: 'Optimizar cada metro cuadrado para ofrecer una experiencia habitable premium en un área reducida.',
                solution: 'Diseño de mobiliario integrado, dobles alturas estratégicas y una conexión directa con áreas exteriores para ampliar la percepción del espacio.',
                images: [
                    '/projects/casita-mora/enhanced_1.webp',
                    '/projects/casita-mora/enhanced_7-1.webp',
                    '/projects/casita-mora/img-1.webp',
                    '/projects/casita-mora/img-3.webp',
                    '/projects/casita-mora/img-4.webp',
                    '/projects/casita-mora/img.webp',
                    '/projects/casita-mora/_75hrspb3t83zikyko07w_0.webp',
                    '/projects/casita-mora/ENB42E~1.webp',
                    '/projects/casita-mora/ENHANC~3.webp',
                    '/projects/casita-mora/ENHANC~4.webp',
                    '/projects/casita-mora/TU6BEB~1.webp',
                    '/projects/casita-mora/TUD5F9~1.webp',
                    '/projects/casita-mora/TURN_T~1.webp',
                    '/projects/casita-mora/TURN_T~2.webp',
                    '/projects/casita-mora/TURN_T~3.webp',
                    '/projects/casita-mora/TURN_T~4.webp'
                ],
                team: ['Equipo FG Constructores']
            },
            {
                id: 'san-mateo',
                title: 'San Mateo',
                category: 'Diseñados',
                location: 'San Mateo, Costa Rica',
                year: '2024',
                description: 'Proyecto que fusiona la arquitectura contemporánea con el clima tropical. Espacios abiertos que promueven la ventilación cruzada y la protección solar pasiva.',
                challenge: 'Diseñar una vivienda que sea térmica mente eficiente en una de las zonas más cálidas del país sin renunciar a grandes ventanales.',
                solution: 'Implementación de aleros profundos, pantallas arquitectónicas y una orientación solar óptima que reduce drásticamente el consumo energético.',
                images: [
                    '/projects/san-mateo/E1.webp',
                    '/projects/san-mateo/E10.webp',
                    '/projects/san-mateo/E2.webp',
                    '/projects/san-mateo/E3.webp',
                    '/projects/san-mateo/E4.webp',
                    '/projects/san-mateo/E7.webp',
                    '/projects/san-mateo/E9.webp',
                    '/projects/san-mateo/i11.webp',
                    '/projects/san-mateo/i2.webp',
                    '/projects/san-mateo/i3.webp',
                    '/projects/san-mateo/i4.webp',
                    '/projects/san-mateo/i5.webp',
                    '/projects/san-mateo/i6.webp',
                    '/projects/san-mateo/i7.webp'
                ],
                team: ['Equipo FG Constructores']
            },
            {
                id: 'sibo',
                title: 'Sibo',
                category: 'Diseñados',
                location: 'San Antonio Escazú',
                year: '2024',
                description: 'Exploración de formas orgánicas y materiales vernáculos aplicados a un estilo de vida moderno. Sibo representa el retorno a lo esencial con un lenguaje sofisticado.',
                challenge: 'Integrar curvas arquitectónicas fluidas con sistemas constructivos estándares de manera eficiente.',
                solution: 'Modelado BIM detallado para la coordinación de precisión en elementos no lineales y selección de proveedores locales especializados.',
                images: [
                    '/projects/sibo/imagen-10.webp',
                    '/projects/sibo/13-imagen.webp',
                    '/projects/sibo/imagen-11.webp',
                    '/projects/sibo/imagen-12.webp',
                    '/projects/sibo/imagen-13.webp',
                    '/projects/sibo/imagen-14.webp',
                    '/projects/sibo/imagen-15.webp',
                    '/projects/sibo/imagen-16.webp',
                    '/projects/sibo/imagen-17.webp',
                    '/projects/sibo/imagen-18.webp',
                    '/projects/sibo/imagen-19.webp',
                    '/projects/sibo/imagen-20.webp',
                    '/projects/sibo/imagen-21.webp',
                    '/projects/sibo/imagen-22.webp',
                    '/projects/sibo/imagen-23.webp',
                    '/projects/sibo/imagen-24.webp',
                    '/projects/sibo/imagen-25.webp',
                    '/projects/sibo/imagen-26.webp',
                    '/projects/sibo/imagen-27.webp',
                    '/projects/sibo/imagen-28.webp',
                    '/projects/sibo/imagen-29.webp',
                    '/projects/sibo/imagen-30.webp',
                    '/projects/sibo/imagen-31.webp',
                    '/projects/sibo/imagen-32.webp'
                ],
                team: ['Equipo FG Constructores']
            },
            {
                id: 'residencia-city-view',
                title: 'Residencia City View',
                category: 'Construidos',
                location: 'Escazú',
                year: '2020',
                area: '350 m²',
                duration: '6 Meses (Enero 20 - Junio 20)',
                description: 'El proyecto se define como una vivienda unifamiliar de lenguaje contemporáneo y volumetría dinámica, ubicada en un terreno de topografía irregular que se aprovecha para jerarquizar su presencia en esquina. La arquitectura busca un equilibrio entre la solidez visual y la apertura hacia el entorno natural. Los exteriores emplean una paleta cromática sobria en tonos blanco, gris grafito y negro. El Área Social integra un concepto moderno con isla de cuarzo negro, mientras que los baños destacan por revestimientos tipo madera y grifería de alta gama.',
                challenge: 'Integrar la vivienda en un terreno de topografía irregular en esquina, aprovechando los niveles para mejorar la perspectiva arquitectónica y la evacuación pluvial.',
                solution: 'La vivienda se eleva sutilmente sobre el nivel de acera mediante taludes enzacatados y una escalinata de concreto. El diseño de ventanería estratégica y balcones permite una conexión constante con las zonas verdes, utilizando materiales como concreto acabado, vidrio templado y estructuras metálicas con iluminación LED eficiente.',
                images: [
                    '/projects/residencia-city-view/residencia-city-view-11.webp',
                    '/projects/residencia-city-view/residencia-city-view-10.webp',
                    '/projects/residencia-city-view/residencia-city-view-1.webp',
                    '/projects/residencia-city-view/residencia-city-view-2.webp',
                    '/projects/residencia-city-view/residencia-city-view-3.webp',
                    '/projects/residencia-city-view/residencia-city-view-4.webp',
                    '/projects/residencia-city-view/residencia-city-view-5.webp',
                    '/projects/residencia-city-view/residencia-city-view-6.webp',
                    '/projects/residencia-city-view/residencia-city-view-7.webp',
                    '/projects/residencia-city-view/residencia-city-view-8.webp',
                    '/projects/residencia-city-view/residencia-city-view-9.webp'
                ],
                team: ['Equipo FG Constructores']
            },
            {
                id: 'cabana-cedrales',
                title: 'Cabaña Cedrales',
                category: 'Construidos',
                location: 'Tarbaca, San José',
                year: '2024',
                duration: '4 Meses (Abril 19 - Julio 19)',
                description: 'Residencia contemporánea que se integra armoniosamente con su entorno arbolado. El diseño prioriza la luz natural y la ventilación cruzada, utilizando materiales nobles como madera y piedra para crear una atmósfera cálida y moderna.',
                challenge: 'Construir en un terreno con pendiente pronunciada manteniendo la mayoría de los árboles existentes.',
                solution: 'Sistema de cimentación escalonada y voladizos estructurales que minimizan la huella en el suelo y permiten que la arquitectura flote sobre el paisaje.',
                images: [
                    '/projects/casa-cedrales/DSC_312.webp',
                    '/projects/casa-cedrales/DSC_0181.webp',
                    '/projects/casa-cedrales/DSC_0183.webp',
                    '/projects/casa-cedrales/DSC_0185.webp',
                    '/projects/casa-cedrales/DSC_0230.webp',
                    '/projects/casa-cedrales/DSC_0231.webp',
                    '/projects/casa-cedrales/DSC_239.webp'
                ],
                team: ['Equipo FG Constructores']
            },
            {
                id: 'habitat-ps',
                title: 'Habitat P&S',
                category: 'Diseñados',
                location: 'Costa Rica',
                year: '2024',
                description: 'Habitat P&S es una propuesta residencial que redefine la relación entre el habitante y su entorno natural. El diseño se enfoca en la fluidez espacial, la eficiencia estructural y una estética contemporánea que utiliza materiales cálidos para crear un refugio moderno y acogedor. Cada espacio ha sido pensado para fomentar la conexión con el exterior, permitiendo que la luz y la naturaleza formen parte integral de la experiencia habitable.',
                challenge: 'Integrar una estructura moderna en un entorno natural preservando la privacidad y maximizando las vistas panorámicas, manteniendo un equilibrio entre la apertura y la seguridad.',
                solution: 'Uso de plantas libres, ventanales de piso a techo y una selección cuidadosa de texturas que mimetizan la obra con el paisaje, asegurando confort térmico y lumínico mediante el uso de aleros estratégicos y ventilación cruzada.',
                images: [
                    '/projects/habitat-ps/1.webp',
                    '/projects/habitat-ps/2.webp',
                    '/projects/habitat-ps/3.webp',
                    '/projects/habitat-ps/4.webp',
                    '/projects/habitat-ps/5.webp',
                    '/projects/habitat-ps/6.webp',
                    '/projects/habitat-ps/7.webp',
                    '/projects/habitat-ps/8.webp',
                    '/projects/habitat-ps/9.webp',
                    '/projects/habitat-ps/10.webp',
                    '/projects/habitat-ps/11.webp',
                    '/projects/habitat-ps/12.webp',
                    '/projects/habitat-ps/13.webp',
                    '/projects/habitat-ps/14.webp',
                    '/projects/habitat-ps/15.webp',
                    '/projects/habitat-ps/16.webp'
                ],
                team: ['Equipo FG Constructores']
            }
        ],
    },
    services: {
        title: 'Soluciones Integrales',
        subtitle: 'Desde la conceptualización hasta la entrega llave en mano. Ofrecemos un abanico completo de servicios para materializar su visión.',
        list: [
            {
                title: 'Consultoría arquitectónica',
                desc: 'Brindamos asesoría integral y experta para definir el rumbo de su proyecto. Analizamos sus necesidades, objetivos y el potencial del sitio para optimizar cada espacio y recurso desde la conceptualización inicial, garantizando que su visión sea viable y funcional.',
                icon: 'Briefcase',
                image: '/services/consultoria.png'
            },
            {
                title: 'Estudios preliminares',
                desc: 'Realizamos análisis técnicos exhaustivos que incluyen estudios de suelos, levantamientos topográficos y evaluaciones de factibilidad. Estos estudios son fundamentales para identificar posibles retos y asegurar que su construcción descanse sobre una base técnica sólida y segura.',
                icon: 'FileText',
                image: '/services/estudios.png'
            },
            {
                title: 'Diseño arquitectónico',
                desc: 'Creamos espacios innovadores y vanguardistas que fusionan estética con funcionalidad. Nuestro proceso de diseño se centra en entender su estilo de vida e identidad corporativa para desarrollar propuestas arquitectónicas únicas que superen sus expectativas y mejoren su calidad de vida.',
                icon: 'Home',
                image: '/services/diseno.png'
            },
            {
                title: 'Planos constructivos',
                desc: 'Desarrollamos documentación técnica detallada y precisa, necesaria para la ejecución impecable de la obra. Nuestros planos cumplen rigurosamente con todas las normativas nacionales e internacionales, asegurando que cada sistema (estructural, eléctrico, mecánico) esté perfectamente coordinado.',
                icon: 'ClipboardCheck',
                image: '/services/planos.png'
            },
            {
                title: 'Trámites institucionales',
                desc: 'Gestionamos de manera ágil y profesional todos los permisos y visados requeridos ante las autoridades competentes en Costa Rica, como el CFIA, municipalidades y ministerios. Nos encargamos del proceso burocrático para que usted pueda avanzar sin contratiempos legales.',
                icon: 'FileText',
                image: '/services/tramites.png'
            },
            {
                title: 'Inspección de obras',
                desc: 'Ofrecemos supervisión técnica profesional constante en el sitio de construcción. Verificamos que cada fase del proyecto se ejecute estrictamente de acuerdo con los planos aprobados y las normas de calidad, protegiendo su inversión mediante un control riguroso de materiales y procesos.',
                icon: 'HardHat',
                image: '/services/inspeccion.png'
            },
            {
                title: 'Administración de obras',
                desc: 'Llevamos un control integral de su proyecto, gestionando presupuestos, cronogramas y la interacción con proveedores y subcontratistas. Nuestro enfoque en la eficiencia administrativa garantiza que su obra se complete a tiempo, dentro del presupuesto acordado y con un manejo transparente de los recursos.',
                icon: 'ClipboardCheck',
                image: '/services/administracion.png'
            },
            {
                title: 'Avalúos de inmuebles',
                desc: 'Proporcionamos valoraciones precisas, técnicas y profesionales de sus propiedades, ya sean terrenos o edificaciones. Nuestros avalúos son reconocidos por entidades bancarias y comerciales, siendo herramientas esenciales para gestiones de financiamiento, compraventa o procesos legales.',
                icon: 'Calculator',
                image: '/services/avalos.png'
            },
            {
                title: 'Construcción en general',
                desc: 'Ejecutamos íntegramente sus proyectos constructivos, desde el movimiento de tierras hasta los acabados finales. Contamos con mano de obra altamente calificada, equipos de última tecnología y una selección de los mejores materiales para entregar obras de durabilidad y estética superior.',
                icon: 'Building2',
                image: '/services/construccion.png'
            }
        ],
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
        curriculum: {
            title: 'Nuestra Trayectoria al Alcance de tu Mano',
            subtitle: 'Explora nuestro currículum empresarial de forma interactiva y conoce por qué somos el aliado que tu proyecto necesita.',
            viewButton: 'Ver Currículum Interactivo',
            downloadButton: 'Descargar PDF',
        }
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
        companyLinks: ['Sobre Nosotros', 'Currículum Empresarial'],
        servicesTitle: 'Servicios',
        servicesLinks: ['Arquitectura', 'Ingeniería', 'Consultoría'],
        contactTitle: 'Contacto',
        copyright: 'Todos los derechos reservados.',
    },
};

export default es;
