import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = () => {
    const { id } = useParams();

    // Mock Database - In a real app this would be an API call
    const projectdb = {
        1: {
            title: 'Torre Sabana',
            category: 'Corporativo',
            location: 'San José, Costa Rica',
            year: '2024',
            client: 'Grupo Inmobiliario del Valle',
            area: '45,000 m²',
            duration: '24 meses',
            description: 'Un hito arquitectónico en el corazón de la capital. Torre Sabana redefine el skyline de San José con su diseño vanguardista y sostenible. Este edificio de 25 pisos cuenta con certificación LEED Gold, integrando sistemas inteligentes de gestión energética y recolección de agua pluvial.',
            challenge: 'El principal desafío fue la cimentación en un terreno con nivel freático alto, lo que requirió técnicas de ingeniería avanzada y muros pantalla de gran profundidad.',
            solution: 'Implementamos un sistema de losa de cimentación compensada y pilotes de fricción, garantizando la estabilidad sísmica y estructural del edificio.',
            images: [
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop'
            ],
            team: ['Arq. Ricardo Legorreta', 'Ing. María Campos', 'Dis. Ana Solís']
        },
        2: {
            title: 'Centro Corporativo Escazú',
            category: 'Comercial',
            location: 'Escazú, Costa Rica',
            year: '2023',
            client: 'Desarrollos Comerciales SA',
            area: '32,000 m²',
            duration: '18 meses',
            description: 'Espacios de oficina de clase A+ integrados con áreas comerciales de lujo. El diseño prioriza la luz natural y las vistas a las montañas de Escazú.',
            challenge: 'Integrar el flujo vehicular y peatonal en una zona de alto tránsito sin sacrificar la privacidad de las oficinas.',
            solution: 'Diseño de accesos multinivel y plazas elevadas que separan las dinámicas públicas de las privadas.',
            images: [
                'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2070&auto=format&fit=crop'
            ],
            team: ['Arq. Sofia Mendez', 'Ing. Carlos Ruiz']
        },
        3: {
            title: 'Residencial Santa Ana',
            category: 'Residencial',
            location: 'Santa Ana, Costa Rica',
            year: '2022',
            client: 'Inversiones Habitacionales',
            area: '28,000 m²',
            duration: '20 meses',
            description: 'Condominio vertical que combina lujo y naturaleza. Amenidades de primer nivel rodeadas de jardines autóctonos.',
            challenge: 'Preservar la mayor cantidad de árboles existentes en el lote.',
            solution: 'Adaptación de la huella constructiva para respetar la vegetación, integrando árboles centenarios en el diseño del lobby y áreas comunes.',
            images: [
                'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop'
            ],
            team: ['Arq. Luis Torres', 'Paisajista Elena Gómez']
        },
        // Fallback for other IDs for demo purposes
        default: {
            title: 'Proyecto FG',
            category: 'General',
            location: 'Costa Rica',
            year: '2023',
            client: 'Confidencial',
            area: 'N/A',
            duration: 'N/A',
            description: 'Detalles de este proyecto estarán disponibles muy pronto.',
            challenge: 'N/A',
            solution: 'N/A',
            images: [
                'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
            ],
            team: ['Equipo FG Constructores']
        }
    };

    const project = projectdb[id] || projectdb['default'];

    useEffect(() => {
        window.scrollTo(0, 0);

        // Hero Image Parallax
        gsap.to('.hero-img', {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: ".hero-container",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

        // Content Fade In
        gsap.fromTo('.project-content',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
        );

        // Gallery Stagger
        gsap.fromTo('.gallery-img',
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 0.8, stagger: 0.2, scrollTrigger: {
                    trigger: ".gallery",
                    start: "top 80%"
                }
            }
        );

    }, [id]);

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="hero-container relative h-[70vh] overflow-hidden">
                <div
                    className="hero-img absolute inset-0 bg-cover bg-center w-full h-[120%]"
                    style={{ backgroundImage: `url(${project.images[0]})` }}
                ></div>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white pb-24 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="container mx-auto">
                        <span className="inline-block py-1 px-3 bg-brand-accent text-brand-primary font-bold text-xs uppercase tracking-widest mb-4">
                            {project.category}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif mb-4">{project.title}</h1>
                        <p className="text-xl opacity-90 font-light">{project.location}</p>
                    </div>
                </div>
            </div>

            {/* Project Details */}
            <div className="container mx-auto px-4 py-20 -mt-10 relative z-10">
                <div className="bg-white p-8 md:p-12 shadow-xl rounded-t-lg project-content">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Left Column: Info */}
                        <div className="lg:col-span-1 space-y-8 border-r border-gray-100 pr-8">
                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">Cliente</h3>
                                <p className="text-lg font-serif text-brand-primary">{project.client}</p>
                            </div>
                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">Año</h3>
                                <p className="text-lg font-serif text-brand-primary">{project.year}</p>
                            </div>
                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">Área</h3>
                                <p className="text-lg font-serif text-brand-primary">{project.area}</p>
                            </div>
                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">Duración</h3>
                                <p className="text-lg font-serif text-brand-primary">{project.duration}</p>
                            </div>
                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">Equipo</h3>
                                <ul className="text-gray-600 space-y-1">
                                    {project.team.map((member, i) => (
                                        <li key={i}>{member}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Column: Narrative */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h3 className="text-2xl font-serif text-brand-primary mb-4">Sobre el Proyecto</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {project.description}
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 pt-8">
                                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-brand-accent">
                                    <h4 className="font-bold text-brand-primary mb-2">El Desafío</h4>
                                    <p className="text-sm text-gray-600">{project.challenge}</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-brand-primary">
                                    <h4 className="font-bold text-brand-primary mb-2">La Solución</h4>
                                    <p className="text-sm text-gray-600">{project.solution}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gallery */}
                <div className="gallery mt-24">
                    <h3 className="text-3xl font-serif text-center mb-12 text-brand-primary">Galería del Proyecto</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {project.images.map((img, i) => (
                            <div key={i} className={`gallery-img overflow-hidden rounded-lg shadow-lg ${i === 0 ? 'md:col-span-2 h-[500px]' : 'h-[350px]'}`}>
                                <img
                                    src={img}
                                    alt={`Vista ${i + 1} de ${project.title}`}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation CTA */}
                <div className="mt-24 text-center border-t border-gray-200 pt-16">
                    <p className="text-gray-500 mb-6 uppercase tracking-widest text-sm">¿Te interesa un proyecto similar?</p>
                    <div className="flex justify-center gap-6">
                        <Link
                            to="/proyectos"
                            className="inline-block border-2 border-brand-primary text-brand-primary font-bold text-xs uppercase tracking-[2px] py-4 px-8 hover:bg-brand-primary hover:text-white transition-colors"
                        >
                            ← Volver a Proyectos
                        </Link>
                        <Link
                            to="/contacto"
                            className="inline-block bg-brand-primary text-white font-bold text-xs uppercase tracking-[2px] py-4 px-8 hover:bg-brand-accent hover:text-brand-primary transition-colors shadow-xl"
                        >
                            Cotizar Ahora
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
