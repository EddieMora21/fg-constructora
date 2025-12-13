import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../i18n';
import imgCorteza from '../assets/projects/casa-corteza/ImagenPrincipal.webp';
import imgColinas from '../assets/projects/colinas-del-poro/ImagenPrincipal-Home.webp';
import imgBarva from '../assets/projects/residencia-barva/Fachadaexterior.webp';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const { t } = useLanguage();


    const triggerRef = useRef(null);
    const sectionRef = useRef(null);
    const teamRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Responsive Animation: Horizontal Scroll only on Desktop
            ScrollTrigger.matchMedia({
                // Desktop (Horizontal Scroll with Pinning)
                "(min-width: 768px)": function () {
                    const section = sectionRef.current;
                    const trigger = triggerRef.current;

                    if (section && trigger) {
                        const scrollAmount = section.scrollWidth - window.innerWidth;

                        gsap.to(section, {
                            x: -scrollAmount,
                            ease: "none",
                            scrollTrigger: {
                                trigger: trigger,
                                start: "top top",
                                end: "+=" + scrollAmount,
                                pin: true,
                                scrub: 1,
                                anticipatePin: 1
                            }
                        });
                    }
                },
                // Mobile (Optional: Cleanups or specific mobile animations can go here)
                "(max-width: 767px)": function () {
                    // Start from natural state
                    if (sectionRef.current) {
                        gsap.set(sectionRef.current, { x: 0 });
                    }
                }
            });

            // Reveal other sections
            gsap.utils.toArray('.reveal-on-scroll').forEach(section => {
                gsap.fromTo(section,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 80%',
                        }
                    }
                );
            });

            // Team Section reveal animation
            // Ensure elements start hidden/positioned via JS, not CSS class
            gsap.set(".team-card", { opacity: 0, y: 50 });

            gsap.fromTo(".team-card",
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: teamRef.current,
                        start: "top 75%"
                    }
                }
            );

        }); // Remove incorrect scope array, let it scope to document/root

        return () => ctx.revert();
    }, [triggerRef, sectionRef, teamRef]); // Keep dependency array for useLayoutEffect

    return (
        <>
            <Hero />

            {/* Intro / Essence - Bento Grid Section */}
            <section className="py-24 bg-white reveal-on-scroll">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-primary text-center md:text-left">Conoce FG</h2>
                        <Link to="/nosotros" className="text-brand-accent hover:text-brand-primary transition-colors flex items-center gap-2 group">
                            Ver historia completa <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(200px,auto)]">

                        {/* NOSOTROS - Large Block (Span 7) */}
                        <div className="md:col-span-7 bg-brand-primary text-white p-8 md:p-12 rounded-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[url('/src/assets/projects/casa-corteza/ImagenPrincipal.webp')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
                            <div className="relative z-10 flex flex-col justify-between h-full">
                                <div>
                                    <h3 className="text-sm font-bold tracking-[0.3em] text-brand-accent uppercase mb-4">Nosotros</h3>
                                    <p className="text-xl md:text-3xl font-serif leading-relaxed mb-6">"{t.home.intro.nosotros}"</p>
                                </div>
                                <Link to="/nosotros" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                                    Descubre quiénes somos <div className="w-8 h-[1px] bg-white/50"></div>
                                </Link>
                            </div>
                        </div>

                        {/* VISION - Medium Block (Span 5) */}
                        <div className="md:col-span-5 bg-gray-100 p-8 md:p-12 rounded-2xl flex flex-col justify-center hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand-accent/20 group">
                            <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span className="text-white text-2xl font-serif">V</span>
                            </div>
                            <h3 className="text-xl font-bold text-brand-primary mb-4">Visión</h3>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">{t.home.intro.vision}</p>
                        </div>

                        {/* CLIENTE - Wide Block (Span 5) */}
                        <div className="md:col-span-12 lg:col-span-5 bg-brand-light p-8 md:p-12 rounded-2xl flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-accent/10 rounded-full blur-3xl"></div>
                            <h3 className="text-xl font-bold text-brand-primary mb-4 flex items-center gap-2">
                                <span className="w-8 h-[1px] bg-brand-primary"></span> El Cliente
                            </h3>
                            <p className="text-gray-600 leading-relaxed italic border-l-4 border-brand-accent pl-4">
                                {t.home.intro.cliente}
                            </p>
                        </div>

                        {/* SERVICIOS - Grid Block (Span 7) */}
                        <div className="md:col-span-12 lg:col-span-7 bg-white border border-gray-100 p-8 md:p-12 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 group">
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="text-xl font-bold text-brand-primary">Nuestros Servicios</h3>
                                <Link to="/servicios" className="text-xs uppercase tracking-widest text-brand-primary/50 group-hover:text-brand-accent transition-colors">Ver todos</Link>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                {t.home.intro.servicios.map((servicio, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-brand-accent rounded-full"></div>
                                        <span className="text-gray-600 text-sm">{servicio}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Featured Projects - Horizontal Scroll Section */}
            <section ref={triggerRef} className="relative h-screen bg-black overflow-x-auto snap-x snap-mandatory md:overflow-hidden flex flex-col justify-center scrollbar-hide">

                {/* Intro Title Overlay */}
                <div className="absolute top-0 left-0 right-0 pt-24 px-8 md:px-24 md:pt-40 z-50 pointer-events-none bg-gradient-to-b from-black/90 via-black/50 to-transparent">
                    <h2 className="text-4xl md:text-6xl font-serif mb-4 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] relative z-50">{t.home.featured.title}</h2>
                    <div className="w-24 h-1 bg-brand-accent shadow-[0_0_15px_rgba(222,137,46,0.8)] relative z-50"></div>
                </div>

                {/* Horizontal Track */}
                <div ref={sectionRef} className="flex h-full w-fit"> {/* Dynamic Width matched to children */}

                    {/* Project 1: Casa Corteza */}
                    <div className="w-screen h-full relative flex-shrink-0 group overflow-hidden snap-center">
                        <Link to="/proyectos/1" className="block w-full h-full relative">
                            <img
                                src={imgCorteza}
                                alt="Casa Corteza"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>

                            <div className="absolute bottom-0 left-0 p-8 md:p-24 w-full md:w-2/3 bg-gradient-to-t from-black via-black/50 to-transparent">
                                <span className="text-brand-accent font-bold tracking-[0.3em] uppercase mb-4 block">2023</span>
                                <h3 className="text-5xl md:text-8xl font-serif text-white mb-6">Casa Corteza</h3>
                                <div className="mt-8">
                                    <span className="inline-block border border-white/30 bg-black/20 backdrop-blur-sm px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all duration-300 group-hover:border-white">
                                        Ver Proyecto
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Project 2: Colinas del Poro */}
                    <div className="w-screen h-full relative flex-shrink-0 group overflow-hidden snap-center">
                        <Link to="/proyectos/2" className="block w-full h-full relative">
                            <img
                                src={imgColinas}
                                alt="Colinas del Poro"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>

                            <div className="absolute bottom-0 left-0 p-8 md:p-24 w-full md:w-2/3 bg-gradient-to-t from-black via-black/50 to-transparent">
                                <span className="text-brand-accent font-bold tracking-[0.3em] uppercase mb-4 block">2023</span>
                                <h3 className="text-5xl md:text-8xl font-serif text-white mb-6">Colinas del Poro</h3>
                                <div className="mt-8">
                                    <span className="inline-block border border-white/30 bg-black/20 backdrop-blur-sm px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all duration-300 group-hover:border-white">
                                        Ver Proyecto
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Project 3: Residencia D Barva */}
                    <div className="w-screen h-full relative flex-shrink-0 group overflow-hidden snap-center">
                        <Link to="/proyectos/3" className="block w-full h-full relative">
                            <img
                                src={imgBarva}
                                alt="Residencia D Barva"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>

                            <div className="absolute bottom-0 left-0 p-8 md:p-24 w-full md:w-2/3 bg-gradient-to-t from-black via-black/50 to-transparent">
                                <span className="text-brand-accent font-bold tracking-[0.3em] uppercase mb-4 block">2024</span>
                                <h3 className="text-5xl md:text-8xl font-serif text-white mb-6">Residencia D Barva</h3>
                                <div className="mt-8">
                                    <span className="inline-block border border-white/30 bg-black/20 backdrop-blur-sm px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all duration-300 group-hover:border-white">
                                        Ver Proyecto
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>
            </section>

            {/* Process Section */}
            <section className="bg-brand-light py-24 reveal-on-scroll">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl text-center font-serif mb-16 relative pb-6 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-px after:bg-brand-accent text-brand-primary">
                        {t.home.process.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {t.home.process.steps.map((step, idx) => (
                            <div key={idx} className="bg-white p-10 shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-4 border-transparent hover:border-brand-accent">
                                <span className="text-6xl font-bold text-gray-200 block mb-6">{step.num}</span>
                                <h3 className="text-xl font-bold uppercase mb-4 text-brand-primary">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section ref={teamRef} className="py-24 bg-white reveal-on-scroll">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-brand-accent font-bold uppercase tracking-[4px] text-sm mb-4 block">{t.home.team.title}</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-primary">{t.home.team.subtitle}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {t.home.team.members.map((member, i) => (
                            <div key={i} className="team-card group text-center">
                                <div className="relative overflow-hidden rounded-lg mb-6 aspect-[3/4] max-w-sm mx-auto shadow-lg">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 md:grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-transparent transition-colors duration-300"></div>

                                    {/* Mobile/Desktop Presentation Overlay - Subtle default, bold on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                                </div>
                                <h3 className="text-2xl font-serif text-brand-primary mb-2">{member.name}</h3>
                                <p className="text-brand-accent font-bold uppercase text-xs tracking-widest">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-brand-primary text-white py-32 reveal-on-scroll">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-brand-accent font-bold uppercase tracking-[4px] text-sm block mb-4">{t.home.testimonials.label}</span>
                        <div className="w-24 h-px bg-brand-accent/30 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {t.home.testimonials.items.map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <span className="text-4xl text-brand-accent font-serif mb-6">"</span>
                                <p className="text-lg md:text-xl font-serif italic mb-8 leading-relaxed text-gray-200 flex-grow">
                                    {item.quote}
                                </p>
                                <div>
                                    <div className="text-brand-accent uppercase tracking-widest text-xs font-bold mb-2">{item.author}</div>
                                    <div className="text-white/50 text-xs">{item.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center container mx-auto px-4 reveal-on-scroll">
                <h2 className="text-4xl md:text-5xl font-serif mb-6 text-brand-primary">{t.home.cta.title}</h2>
                <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">{t.home.cta.subtitle}</p>
                <Link to="/contacto" className="inline-block bg-brand-accent text-brand-primary px-10 py-4 text-xs font-bold uppercase tracking-[3px] hover:bg-brand-primary hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-lg">
                    {t.home.cta.button}
                </Link>
            </section>
        </>
    );
};

export default Home;
