import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { useLanguage } from '../i18n';

const Projects = () => {
    const { t } = useLanguage();

    useEffect(() => {
        gsap.fromTo('.project-card',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
        );
    }, []);

    const projects = [
        {
            id: 1,
            title: 'Torre Sabana',
            cat: 'Corporativo',
            loc: 'San José',
            year: '2024',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
        },
        {
            id: 2,
            title: 'Centro Escazú',
            cat: 'Comercial',
            loc: 'Escazú',
            year: '2023',
            image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop'
        },
        {
            id: 3,
            title: 'Residencial Santa Ana',
            cat: 'Residencial',
            loc: 'Santa Ana',
            year: '2022',
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop'
        },
        {
            id: 4,
            title: 'Planta Industrial Heredia',
            cat: 'Industrial',
            loc: 'Heredia',
            year: '2023',
            image: 'https://images.unsplash.com/photo-1581094794329-cd1096a7a5ea?q=80&w=2068&auto=format&fit=crop'
        },
        {
            id: 5,
            title: 'Hospital Metropolitano',
            cat: 'Hospitalario',
            loc: 'San José',
            year: '2021',
            image: 'https://images.unsplash.com/photo-1587351021759-3e566b9af922?q=80&w=2070&auto=format&fit=crop'
        },
        {
            id: 6,
            title: 'Hotel Guanacaste',
            cat: 'Comercial',
            loc: 'Guanacaste',
            year: '2024',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop'
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <section className="bg-brand-primary py-32 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-serif mb-6">{t.projects.title}</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-xl font-light">{t.projects.subtitle}</p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-20">
                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-8 mb-20">
                    {t.projects.filters.map((filter, i) => (
                        <button key={i} className={`text-sm tracking-[2px] uppercase font-bold transition-all duration-300 ${i === 0 ? 'text-brand-primary border-b-2 border-brand-accent pb-1' : 'text-gray-400 hover:text-brand-primary'}`}>
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {projects.map((proj) => (
                        <Link
                            to={`/proyectos/${proj.id}`}
                            key={proj.id}
                            className="project-card group relative h-[500px] overflow-hidden cursor-pointer block"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${proj.image})` }}
                            ></div>

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-2 block opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">
                                    {proj.cat} — {proj.year}
                                </span>
                                <h3 className="text-3xl font-serif text-white mb-2">{proj.title}</h3>
                                <p className="text-gray-300 text-sm mb-6 opacity-0 h-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 delay-200">
                                    {proj.loc}
                                </p>
                                <span className="inline-block text-white border-b border-brand-accent pb-1 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity delay-300 duration-300">
                                    Ver Proyecto →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
