// English translations
const en = {
    nav: {
        home: 'Home',
        projects: 'Projects',
        services: 'Services',
        about: 'About',
        contact: 'Contact',
        quote: 'Get Quote',
    },
    hero: {
        title: 'Structure, function and aesthetics in every project',
        subtitle: 'We materialize your vision through the integration of precision engineering and avant-garde design. Let’s start the conversation about your next great project today.',
        cta1: 'View Portfolio',
        cta2: 'Request Quote',
    },
    home: {
        intro: {
            title: 'Our Essence',
            nosotros: 'Integrators of solutions for your life.', // Short punchy tagline
            vision: 'Constructive innovation and sustainability to optimize your investment.', // Summary of vision
            cliente: 'Your project is our priority. We design for you, adapting to your needs and budget.', // Summary of client focus
            servicios: [ // Key pillars only
                'Architectural Design',
                'Consulting & Permits',
                'General Construction',
                'Appraisals & Inspection'
            ]
        },
        team: {
            title: 'Our Team',
            subtitle: 'Professionals committed to your vision',
            members: [
                { name: 'Ing. Fabian Alfaro', role: 'General Director', image: '/equipo/fabian-alfaro.webp' },
                { name: 'Ing. Andrés Mora', role: 'Electromechanical Leader', image: '/equipo/andres-mora.webp' },
                { name: 'Arq. Gilberth Sanchez', role: 'Design Leader', image: '/equipo/gilberth-sanchez.webp' },
                { name: 'Enoc Peña', role: 'Budgets & Costs', image: '/equipo/enoc-pena.webp' },
                { name: 'Edwin Chavarria', role: 'BIM Modeler', image: '/equipo/edwin-chavarria.webp' },
                { name: 'Milagro Araya', role: 'Engineering Costs and Logistics Department', image: '/equipo/luciana-miranda-portrait.webp' }
            ]
        },
        stats: {
            projects: 'Projects Completed',
            awards: 'International Awards',
            clients: 'Satisfied Clients',
        },
        featured: {
            title: 'Featured Works',
            cta: 'Explore All Projects',
        },
        process: {
            title: 'Our Process',
            steps: [
                { num: '01', title: 'Consulting', desc: 'We analyze the feasibility of your project, understand your needs and define key objectives.' },
                { num: '02', title: 'Design', desc: 'Our creative team develops architectural proposals that balance form and function.' },
                { num: '03', title: 'Execution', desc: 'Construction with the highest quality standards, meeting deadlines and budgets.' },
            ],
        },
        testimonials: {
            label: 'What our clients say',
            items: [
                {
                    quote: '"Working with Construct Corp was a transformative experience. Their attention to detail and responsiveness exceeded all our expectations."',
                    author: '— Carlos Monge, Director Real Estate Group',
                    role: 'Corporate Project'
                },
                {
                    quote: '"Building our home was a stress-free process thanks to their professionalism. They exceeded our expectations in schedule and finish quality."',
                    author: '— Sofía Ramírez, Homeowner',
                    role: 'Residential Project'
                },
                {
                    quote: '"As developers, we look for reliable partners. FG has proven to be a key strategic ally, delivering complex technical solutions with total transparency."',
                    author: '— Javier Solís, Urban Development Manager',
                    role: 'Infrastructure'
                }
            ]
        },
        cta: {
            title: 'Ready to start your project?',
            subtitle: 'Contact us today for a free consultation.',
            button: "Let's Talk",
        },
    },
    projects: {
        title: 'Project Portfolio',
        subtitle: 'A selection of our most emblematic projects in Costa Rica and the region. Quality, innovation and sustainability in every square meter.',
        filters: ['Built', 'Designed', 'In Progress'],
        caseStudy: {
            title: 'Success Story',
            projectTitle: 'Torre Sabana: Vertical Innovation',
            desc: 'This project represented an engineering challenge due to soil conditions. We implemented an innovative deep foundation that reduced construction time by 20%.',
            details: ['Height: 120 meters', 'LEED Gold Certification', 'Mixed Use: Offices and Commerce'],
            cta: 'Read Full Story',
        },
        viewProject: 'View Project',
        explore: 'Explore',
        projectsList: [
            {
                id: 'obra-patarra',
                title: 'Patarra Worksite',
                category: 'In Progress',
                location: 'Patarra, San Jose',
                duration: 'In progress',
                description: 'Visual log of an active job site in Patarra, San Jose. The image set documents structure, vertical circulation, wall systems, and on-site technical follow-up.',
                challenge: 'To maintain construction continuity across structure, walls, and early spatial definition while the project remains active.',
                solution: 'Each key stage is documented to show the real evolution of the project and support technical control during execution.',
                images: [
                    '/projects/en-proceso/en-proceso-11.webp',
                    '/projects/en-proceso/en-proceso-12.webp',
                    '/projects/en-proceso/en-proceso-13.webp',
                    '/projects/en-proceso/en-proceso-14.webp',
                    '/projects/en-proceso/en-proceso-15.webp',
                    '/projects/en-proceso/en-proceso-20.webp'
                ],
                team: ['FG Construction Team']
            },
            {
                id: 'obra-monte-abajo',
                title: 'Monte Abajo Worksite',
                category: 'In Progress',
                location: 'San Antonio, San Jose',
                duration: 'In progress',
                description: 'Progress follow-up for a job site in Monte Abajo, San Antonio. The gallery brings together foundations, slab, wall construction, roofing, and early interior work.',
                challenge: 'To coordinate the transition from structural work to cleaner enclosure and roofing stages without losing execution rhythm.',
                solution: 'The process is documented by stage so the project can be read clearly from foundation works through the first visible finishing phases.',
                images: [
                    '/projects/en-proceso/en-proceso-02.webp',
                    '/projects/en-proceso/en-proceso-08.webp',
                    '/projects/en-proceso/en-proceso-09.webp',
                    '/projects/en-proceso/en-proceso-16.webp',
                    '/projects/en-proceso/en-proceso-17.webp',
                    '/projects/en-proceso/en-proceso-18.webp',
                    '/projects/en-proceso/en-proceso-19.webp'
                ],
                team: ['FG Construction Team']
            },
            {
                id: 'obra-heredia',
                title: 'Heredia Worksite',
                category: 'In Progress',
                location: 'Heredia, Costa Rica',
                duration: 'In progress',
                description: 'A series of images from an active worksite in Heredia across early construction phases. It includes layout, drilling, foundations, gray structure, and technical details in progress.',
                challenge: 'To organize very different early and mid-stage images so the project follow-up remains readable and useful.',
                solution: 'The gallery was grouped by construction logic: site preparation, foundations, initial structure, and technical on-site details.',
                images: [
                    '/projects/en-proceso/en-proceso-01.webp',
                    '/projects/en-proceso/en-proceso-03.webp',
                    '/projects/en-proceso/en-proceso-04.webp',
                    '/projects/en-proceso/en-proceso-05.webp',
                    '/projects/en-proceso/en-proceso-06.webp',
                    '/projects/en-proceso/en-proceso-07.webp',
                    '/projects/en-proceso/en-proceso-10.webp'
                ],
                team: ['FG Construction Team']
            },
            {
                id: 'casa-theo',
                title: 'Casa Theo',
                category: 'Built',
                location: 'Patarra, San José',
                year: '2025',
                duration: '20 weeks (July - November 2025)',
                description: 'This project presents a contemporary architectural proposal with industrial and minimalist character, designed around efficient land use and a strong search for transparency toward the landscape. The house uses an elevated open-plan typology, where the main volume is suspended on columns to free the lower level for a garage or covered social area. An asymmetrical silhouette under a low-pitched gable roof dominates the composition, while the dark facade reinforces its modern and elegant identity against the natural surroundings.',
                challenge: 'To resolve an elevated home with a hierarchical access sequence, integrating an industrial-style metal ramp, open social spaces, and a direct relationship with the landscape without sacrificing functionality or structural clarity.',
                solution: 'An open social area was developed to integrate living room, dining room, and kitchen under high ceilings that follow the roof slope, with floor-to-ceiling black aluminum windows to maximize natural light and views. The proposal is completed with a social BBQ terrace, minimalist bathrooms with backlit mirrors and polished concrete countertops, and a clean interior stair with light treads and a wood handrail that adds warmth to the overall palette.',
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
                team: ['FG Construction Team']
            },
            {
                id: 'casa-corteza',
                title: 'Casa Corteza',
                category: 'Built',
                location: 'Grecia, Alajuela',
                year: '2023',
                area: 'N/A',
                duration: '17 weeks (May - September 2023)',
                description: 'Central Architectural Concept: "Warm and Functional Contrast". The project is based on the strategic combination of clean lines, contrasting materials, and an optimization of natural and artificial light. The exterior and interior design seeks a balance between contemporary aesthetics and the warmth of home. This project is an excellent example of the application of modern residential design principles where functionality (wide windows, open spaces) merges with a careful aesthetic (play of materials and color/texture accents).',
                challenge: 'Create spaces with light and spaciousness that maximize the sensation of space and the reflection of natural light through large windows, maintaining the warmth of the home.',
                solution: 'Floating staircase design as a central architectural element with light wood steps on a white metal structure, use of light wood laminate floors for continuity and warmth, and lighting with recessed fixtures and a sculptural pendant lamp as a focal point.',
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
                team: ['FG Construction Team']
            },
            {
                id: 'colinas-del-poro',
                title: 'Colinas del Poro',
                category: 'Built',
                location: 'Grecia, Alajuela',
                year: '2023',
                area: 'N/A',
                duration: '5 months (July - November 2023)',
                description: 'This project falls clearly within a modern and minimalist style, with a strong focus on clean lines, contrast, and functionality. The exterior design features pure volumes and marked geometry, characteristic of modern architecture. A composition of rectangular volumes is used in juxtaposition. The design is two-level and highlights the use of flat roofs (or pitched with minimal slope), reinforcing the contemporary and minimalist aesthetic. The color palette is neutral and high contrast. Gray, white, and black tones predominate, creating a strong visual impact.',
                challenge: 'Achieve an architecture of great visual impact on the exterior through contrast and geometry.',
                solution: 'Design of a functional, bright, and neat interior, consistent with current modern residential design trends.',
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
                team: ['FG Construction Team']
            },
            {
                id: 'residencia-barva',
                title: 'Residencia D Barva',
                category: 'Built',
                location: 'Barva, Heredia',
                year: 'September 2023 - January 2024',
                area: 'N/A',
                duration: '5 Months',
                description: 'Modern Architecture with Industrial Influence and Minimalist Touches. The design aligns with modern and contemporary architecture: Pure Geometric Volumes with clean rectangular and cubic forms, minimizing ornamentation. Large Armored Openings with floor-to-ceiling windows maximizing natural light entry and blurring the boundary between interior and exterior. Neutral Color Palette with gray and off-white tones, with deep blue as an accent color, creating a bold but elegant contrast. Double Height Interiors increasing the sensation of spaciousness and brightness.',
                challenge: 'Achieve functionality, light, and clean line aesthetics, incorporating strong textures to give it personality and warmth.',
                solution: 'Design incorporating wood, metal, and mesh textures to combine modernity with home warmth, maximizing natural light with large windows and double height in the living room.',
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
                team: ['FG Construction Team']
            },
            {
                id: 'casita-mora',
                title: 'Casita Mora',
                category: 'Designed',
                location: 'Quepos, Puntarenas',
                year: '2024',
                description: 'Compact residential proposal but with great visual impact. A study on how small-scale can house luxury and functionality without compromise.',
                challenge: 'Optimize every square meter to offer a premium habitable experience in a small area.',
                solution: 'Integrated furniture design, strategic double heights and a direct connection with outdoor areas to broaden the perception of space.',
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
                team: ['FG Construction Team']
            },
            {
                id: 'san-mateo',
                title: 'San Mateo',
                category: 'Designed',
                location: 'San Mateo, Costa Rica',
                year: '2024',
                description: 'Project that merges contemporary architecture with the tropical climate. Open spaces that promote cross ventilation and passive solar protection.',
                challenge: 'To design a home that is thermally efficient in one of the warmest areas of the country without giving up large windows.',
                solution: 'Implementation of deep eaves, architectural screens and an optimal solar orientation that drastically reduces energy consumption.',
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
                team: ['FG Construction Team']
            },
            {
                id: 'sibo',
                title: 'Sibo',
                category: 'Designed',
                location: 'San Antonio Escazú',
                year: '2024',
                description: 'Exploration of organic shapes and vernacular materials applied to a modern lifestyle. Sibo represents the return to essentials with a sophisticated language.',
                challenge: 'Efficiently integrate fluid architectural curves with standard building systems.',
                solution: 'Detailed BIM modeling for precision coordination in non-linear elements and selection of specialized local suppliers.',
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
                team: ['FG Construction Team']
            },
            {
                id: 'residencia-city-view',
                title: 'Residencia City View',
                category: 'Built',
                location: 'Escazú',
                year: '2020',
                area: '350 m²',
                duration: '6 Months (January 20 - June 20)',
                description: 'The project is defined as a single-family home with a contemporary language and dynamic volumetry, located on irregular terrain that is used to prioritize its corner presence. The architecture seeks a balance between visual solidity and openness to the natural surroundings. The exteriors use a sober chromatic palette in white, graphite gray, and black. The Social Area integrates a modern concept with a black quartz island, while the bathrooms stand out for wood-like cladding and high-end fixtures.',
                challenge: 'Integrating the home into an irregular corner terrain, taking advantage of the levels to improve the architectural perspective and rainwater drainage.',
                solution: 'The house is subtly elevated above the sidewalk level by means of grassy slopes and a concrete staircase. The design of strategic windows and balconies allows for a constant connection with the green areas, using materials such as finished concrete, tempered glass, and metal structures with efficient LED lighting.',
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
                team: ['FG Construction Team']
            },
            {
                id: 'cabana-cedrales',
                title: 'Cabaña Cedrales',
                category: 'Built',
                location: 'Tarbaca, San José',
                year: '2024',
                duration: '4 Months (April 19 - July 19)',
                description: 'Contemporary residence that integrates harmoniously with its wooded surroundings. The design prioritizes natural light and cross ventilation, using noble materials such as wood and stone to create a warm and modern atmosphere.',
                challenge: 'Building on a steep slope while maintaining most of the existing trees.',
                solution: 'Stepped foundation system and structural cantilevers that minimize the footprint on the ground and allow the architecture to float over the landscape.',
                images: [
                    '/projects/casa-cedrales/DSC_312.webp',
                    '/projects/casa-cedrales/DSC_0181.webp',
                    '/projects/casa-cedrales/DSC_0183.webp',
                    '/projects/casa-cedrales/DSC_0185.webp',
                    '/projects/casa-cedrales/DSC_0230.webp',
                    '/projects/casa-cedrales/DSC_0231.webp',
                    '/projects/casa-cedrales/DSC_239.webp'
                ],
                team: ['FG Construction Team']
            },
            {
                id: 'habitat-ps',
                title: 'Habitat P&S',
                category: 'Designed',
                location: 'Costa Rica',
                year: '2024',
                description: 'Habitat P&S is a residential proposal that redefines the relationship between the inhabitant and their natural environment. The design focuses on spatial fluidity, structural efficiency, and a contemporary aesthetic that uses warm materials to create a modern and cozy refuge. Each space has been designed to foster the connection with the exterior, allowing light and nature to be an integral part of the living experience.',
                challenge: 'Integrating a modern structure into a natural environment while preserving privacy and maximizing panoramic views, maintaining a balance between openness and security.',
                solution: 'Use of open floor plans, floor-to-ceiling windows, and a careful selection of textures that mimic the work with the landscape, ensuring thermal and lighting comfort through the use of strategic eaves and cross ventilation.',
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
                team: ['FG Construction Team']
            }
        ],
    },
    services: {
        title: 'Comprehensive Solutions',
        subtitle: 'From conceptualization to turnkey delivery. We offer a complete range of services to materialize your vision.',
        list: [
            {
                title: 'Architectural Consulting',
                desc: 'We provide comprehensive and expert advice to define the course of your project. We analyze your needs, objectives, and site potential to optimize every space and resource from initial conceptualization, ensuring your vision is viable and functional.',
                icon: 'Briefcase',
                image: '/services/consultoria.png'
            },
            {
                title: 'Preliminary Studies',
                desc: 'We carry out exhaustive technical analyses including soil studies, topographic surveys, and feasibility evaluations. These studies are essential to identify potential challenges and ensure that your construction rests on a solid and safe technical foundation.',
                icon: 'FileText',
                image: '/services/estudios.png'
            },
            {
                title: 'Architectural Design',
                desc: 'We create innovative and avant-garde spaces that merge aesthetics with functionality. Our design process focuses on understanding your lifestyle and corporate identity to develop unique architectural proposals that exceed your expectations and improve your quality of life.',
                icon: 'Home',
                image: '/services/diseno.png'
            },
            {
                title: 'Construction Plans',
                desc: 'We develop detailed and precise technical documentation necessary for the impeccable execution of the work. Our plans strictly comply with all national and international regulations, ensuring that every system (structural, electrical, mechanical) is perfectly coordinated.',
                icon: 'ClipboardCheck',
                image: '/services/planos.png'
            },
            {
                title: 'Institutional Procedures',
                desc: 'We manage all permits and visas required before competent authorities in Costa Rica, such as CFIA, municipalities, and ministries, in an agile and professional manner. We take care of the bureaucratic process so you can move forward without legal setbacks.',
                icon: 'FileText',
                image: '/services/tramites.png'
            },
            {
                title: 'Work Inspection',
                desc: 'We offer constant professional technical supervision at the construction site. We verify that each phase of the project is executed strictly in accordance with approved plans and quality standards, protecting your investment through rigorous control of materials and processes.',
                icon: 'HardHat',
                image: '/services/inspeccion.png'
            },
            {
                title: 'Works Administration',
                desc: 'We carry out integral control of your project, managing budgets, schedules, and interaction with suppliers and subcontractors. Our focus on administrative efficiency guarantees that your work is completed on time, within the agreed budget, and with transparent management of resources.',
                icon: 'ClipboardCheck',
                image: '/services/administracion.png'
            },
            {
                title: 'Property Appraisals',
                desc: 'We provide accurate, technical, and professional valuations of your properties, whether land or buildings. Our appraisals are recognized by banking and commercial entities, being essential tools for financing, sales, or legal processes.',
                icon: 'Calculator',
                image: '/services/avalos.png'
            },
            {
                title: 'General Construction',
                desc: 'We fully execute your construction projects, from earth moving to final finishes. We have highly qualified labor, latest technology equipment, and a selection of the best materials to deliver works of superior durability and aesthetics.',
                icon: 'Building2',
                image: '/services/construccion.png'
            }
        ],
        methodology: {
            title: 'Work Methodology',
            bimTitle: 'BIM Approach (Building Information Modeling)',
            bimDesc: 'We use BIM technology to centralize all project information in a 3D digital model. This allows us to:',
            bimList: ['Detect conflicts before construction.', 'Improve cost accuracy.', 'Facilitate collaboration between disciplines.'],
        },
        whyChooseUs: {
            title: 'Why Choose Us?',
            items: [
                {
                    title: 'Unsurpassed Excellence',
                    desc: 'Quality standards that exceed regulations. Every detail is rigorously supervised.',
                    icon: 'Award'
                },
                {
                    title: 'Rigorous Compliance',
                    desc: 'We respect your time and investment. Punctual deliveries and transparent budgets, no surprises.',
                    icon: 'Clock'
                },
                {
                    title: 'Strategic Partner',
                    desc: 'We are not just builders, we are your partner. Expert advice from the first idea to turnkey delivery.',
                    icon: 'Handshake'
                }
            ]
        },
        faq: {
            title: 'Frequently Asked Questions',
            items: [
                { q: 'Do you work throughout Costa Rica?', a: 'Yes, we have operational capacity to execute projects in all 7 provinces of the country.' },
                { q: 'Do you do renovations?', a: 'Yes, we have a department specialized in corporate and commercial renovations.' },
                { q: 'How are budgets handled?', a: 'We work with detailed and transparent budgets. We offer fixed price or delegated administration modalities.' },
            ],
        },
    },
    about: {
        title: 'Our Essence',
        subtitle: 'More than builders, we are strategic partners in developing infrastructure that drives the progress of Costa Rica.',
        history: {
            title: 'Track Record of Excellence',
            p1: 'Founded in 2005 in San José, Construct Corp was born with the vision of raising construction standards in the region. What started as a small architecture studio has become a comprehensive firm with over 100 collaborators.',
            p2: 'Throughout almost two decades, we have navigated economic and technical challenges, always maintaining our commitment to quality and professional ethics. We have been a fundamental part of the urban development of key areas such as Escazú, Santa Ana, and Heredia.',
            p3: 'Today, we look to the future by investing in sustainable technologies and lean construction methodologies, reaffirming our leadership in the sector.',
        },
        values: {
            title: 'Our Values',
            items: [
                { title: 'Integrity', desc: 'We act with transparency and honesty in every transaction and decision.' },
                { title: 'Innovation', desc: 'We constantly seek new ways to improve our processes and results.' },
                { title: 'Sustainability', desc: 'We design thinking about long-term environmental and social impact.' },
            ],
        },
        team: {
            title: 'Leadership',
        },
        curriculum: {
            title: 'Our Track Record at Your Fingertips',
            subtitle: 'Explore our company curriculum interactively and discover why we are the partner your project needs.',
            viewButton: 'View Interactive Curriculum',
            downloadButton: 'Download PDF',
        }
    },
    contact: {
        title: "Let's Talk About Your Project",
        subtitle: 'We are ready to listen to your ideas and turn them into reality. Contact us for an initial consultation with no obligation.',

        directContact: 'Direct Contact',
        hours: 'Hours',
        form: {
            title: 'Send us a message',
            name: 'Full Name',
            email: 'Email Address',
            phone: 'Phone',
            details: 'Project Details',
            submit: 'Submit Request',
        },
        faq: [
            { q: 'What is the average response time?', a: 'We usually respond to all requests within 24 business hours.' },

        ],
    },
    footer: {
        tagline: 'World-class engineering and architecture in Costa Rica.',
        company: 'Company',
        companyLinks: ['About Us', 'Company Curriculum'],
        servicesTitle: 'Services',
        servicesLinks: ['Architecture', 'Engineering', 'Consulting'],
        contactTitle: 'Contact',
        copyright: 'All rights reserved.',
    },
};

export default en;
