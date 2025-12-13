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
        title: 'Building tomorrow, today.',
        subtitle: 'Leaders in sustainable architecture and engineering in Costa Rica. We transform visions into tangible structures with precision and elegance.',
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
                { name: 'Edwin Chavarria', role: 'BIM Modeler', image: '/equipo/edwin-chavarria.webp' }
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
        filters: ['All', 'Commercial', 'Residential', 'Industrial', 'Healthcare'],
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
                id: 1,
                title: 'Casa Corteza',
                category: 'Residential',
                location: 'Costa Rica',
                year: '2023',
                client: 'Private Project',
                area: 'N/A',
                duration: '17 weeks (May - September 2023)',
                description: 'Central Architectural Concept: "Warm and Functional Contrast". The project is based on the strategic combination of clean lines, contrasting materials, and an optimization of natural and artificial light. The exterior and interior design seeks a balance between contemporary aesthetics and the warmth of home. This project is an excellent example of the application of modern residential design principles where functionality (wide windows, open spaces) merges with a careful aesthetic (play of materials and color/texture accents).',
                challenge: 'Create spaces with light and spaciousness that maximize the sensation of space and the reflection of natural light through large windows, maintaining the warmth of the home.',
                solution: 'Floating staircase design as a central architectural element with light wood steps on a white metal structure, use of light wood laminate floors for continuity and warmth, and lighting with recessed fixtures and a sculptural pendant lamp as a focal point.',
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
                team: ['FG Construction Team']
            },
            {
                id: 2,
                title: 'Colinas del Poro',
                category: 'Residential',
                location: 'Grecia, Alajuela',
                year: '2023',
                client: 'Private Project',
                area: 'N/A',
                duration: '5 months (July - November 2023)',
                description: 'This project falls clearly within a modern and minimalist style, with a strong focus on clean lines, contrast, and functionality. The exterior design features pure volumes and marked geometry, characteristic of modern architecture. A composition of rectangular volumes is used in juxtaposition. The design is two-level and highlights the use of flat roofs (or pitched with minimal slope), reinforcing the contemporary and minimalist aesthetic. The color palette is neutral and high contrast. Gray, white, and black tones predominate, creating a strong visual impact.',
                challenge: 'Achieve an architecture of great visual impact on the exterior through contrast and geometry.',
                solution: 'Design of a functional, bright, and neat interior, consistent with current modern residential design trends.',
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
                team: ['FG Construction Team']
            },
            {
                id: 3,
                title: 'Residencia D Barva',
                category: 'Residential',
                location: 'Barva, Heredia',
                year: '2024',
                client: 'Private Project',
                area: 'N/A',
                duration: 'Completion January 2024',
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
            }
        ],
    },
    services: {
        title: 'Comprehensive Solutions',
        subtitle: 'From conceptualization to turnkey delivery. We offer a complete range of services to materialize your vision.',
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
        companyLinks: ['About Us', 'Careers', 'Sustainability'],
        servicesTitle: 'Services',
        servicesLinks: ['Architecture', 'Engineering', 'Consulting'],
        contactTitle: 'Contact',
        copyright: 'All rights reserved.',
    },
};

export default en;
