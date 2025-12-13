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

    const projects = t.projects.projectsList || [];

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
                                style={{ backgroundImage: `url(${proj.images[0]})` }}
                            ></div>

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-2 block opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">
                                    {proj.category} — {proj.year}
                                </span>
                                <h3 className="text-3xl font-serif text-white mb-2">{proj.title}</h3>
                                <p className="text-gray-300 text-sm mb-6 opacity-100 md:opacity-0 md:h-0 md:group-hover:h-auto md:group-hover:opacity-100 transition-all duration-300 delay-200">
                                    {proj.location}
                                </p>
                                <span className="inline-block border border-white/30 bg-black/20 backdrop-blur-sm px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 md:translate-y-4 md:group-hover:translate-y-0 delay-300">
                                    {t.projects?.viewProject}
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
