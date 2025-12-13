import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, MapPin, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { useLanguage } from '../i18n';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = () => {
    const { id } = useParams();
    const containerRef = useRef(null);
    const galleryRef = useRef(null);

    // Lightbox State
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    // Use translated projects list
    const { t } = useLanguage();

    // Debugging logs
    console.log('LanguageContext t:', t);
    console.log('t.projects:', t?.projects);
    console.log('t.projects.projectsList:', t?.projects?.projectsList);

    const projectsList = t?.projects?.projectsList || [];

    // Find current project
    const foundProject = projectsList.find(p => p.id === parseInt(id));

    // Default fallback project if not found or list is empty
    const project = foundProject || {
        title: 'Proyecto FG',
        category: 'General',
        location: 'Costa Rica',
        year: '2024',
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
    };

    // Setup for Next Project Logic
    const currentIndex = projectsList.findIndex(p => p.id === parseInt(id));
    const nextIndex = (currentIndex + 1) % projectsList.length;
    const nextProject = projectsList[nextIndex] || projectsList[0];
    const nextId = nextProject.id;

    // Scrollytelling Images (First 3)
    const scrollyImages = project.images ? project.images.slice(0, 3) : [];
    const [activeImage, setActiveImage] = useState(0);

    // Lightbox Logic
    const openLightbox = (index) => {
        setLightboxIndex(index);
        setIsLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
        setLightboxIndex(null);
        document.body.style.overflow = 'auto';
    };

    const nextLightboxImage = (e) => {
        e.stopPropagation();
        setLightboxIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevLightboxImage = (e) => {
        e.stopPropagation();
        setLightboxIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    // Keyboard navigation for lightbox
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isLightboxOpen) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev + 1) % project.images.length);
            if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isLightboxOpen, project.images.length]);

    useLayoutEffect(() => {
        // Reset scroll to top on route change
        window.scrollTo(0, 0);

        let ctx = gsap.context(() => {

            // 1. HERO: Staggered Text Reveal
            const tl = gsap.timeline();

            tl.fromTo(".hero-char",
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.03, ease: "power4.out", delay: 0.5 }
            );

            tl.fromTo(".hero-meta",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
                "-=0.5"
            );

            // 2. HERO: Parallax Background
            gsap.to(".hero-bg", {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: ".hero-section",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

            // 3. SCROLLYTELLING: Pinning & Image Swap (Desktop primarily)
            ScrollTrigger.matchMedia({
                "(min-width: 768px)": function () {
                    // Create trigger for the whole container to pin the visual
                    ScrollTrigger.create({
                        trigger: ".scrolly-container",
                        start: "top top",
                        end: "bottom bottom",
                        pin: ".scrolly-visual",
                        pinSpacing: false
                    });

                    // Triggers for changing the active image based on text section
                    const sections = gsap.utils.toArray(".story-section");
                    sections.forEach((section, i) => {
                        ScrollTrigger.create({
                            trigger: section,
                            start: "top center",
                            end: "bottom center",
                            onToggle: ({ isActive }) => {
                                if (isActive) setActiveImage(i);
                            },
                        });
                    });
                }
            });

            // 4. GALLERY: Horizontal Scroll (Desktop Only)
            ScrollTrigger.matchMedia({
                "(min-width: 768px)": function () {
                    const galleryTrack = galleryRef.current;
                    if (galleryTrack) {
                        const totalWidth = galleryTrack.scrollWidth;
                        const windowWidth = window.innerWidth;
                        const scrollAmount = totalWidth - windowWidth;

                        if (scrollAmount > 0) {
                            gsap.to(galleryTrack, {
                                x: -scrollAmount,
                                ease: "none",
                                scrollTrigger: {
                                    trigger: ".gallery-wrapper",
                                    start: "top top",
                                    end: "+=" + scrollAmount,
                                    pin: true,
                                    scrub: 1,
                                    anticipatePin: 1
                                }
                            });
                        }
                    }
                }
            });

            // 5. NEXT PROJECT: Reveal Animation
            gsap.from(".next-project-bg", {
                scale: 1.1,
                scrollTrigger: {
                    trigger: ".next-project-section",
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: true
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, [id]);

    // Split title into characters for animation
    // Split title into words, then characters to prevent breaking words mid-string
    const splitTitle = (title) => {
        return title.split(" ").map((word, wIndex) => (
            <span key={wIndex} className="inline-block whitespace-nowrap mr-2 md:mr-4">
                {word.split("").map((char, cIndex) => (
                    <span key={cIndex} className="hero-char inline-block">{char}</span>
                ))}
            </span>
        ));
    };

    return (
        <div ref={containerRef} className="bg-white min-h-screen font-sans selection:bg-brand-primary selection:text-white overflow-x-hidden">

            {/* --- HERO SECTION --- */}
            <header className="hero-section relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
                <div
                    className="hero-bg absolute inset-0 w-full h-[120%] bg-cover bg-center opacity-70"
                    style={{ backgroundImage: `url(${project.images[0]})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />

                <div className="relative z-10 text-center text-white px-4">
                    <div className="hero-meta mb-6 flex items-center justify-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-brand-accent/90">
                        <span>{project.category}</span>
                        <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                        <span>{project.year}</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-tight flex flex-wrap justify-center">
                        {splitTitle(project.title)}
                    </h1>

                    <div className="hero-meta flex justify-center items-center gap-2 opacity-80 text-sm tracking-widest uppercase">
                        <MapPin size={16} className="text-brand-accent" />
                        <span>{project.location}</span>
                    </div>
                </div>

                <button
                    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                    className="hero-meta absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 border border-white/30 bg-black/20 backdrop-blur-sm px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all duration-300 animate-bounce cursor-pointer whitespace-nowrap"
                >
                    {t.projects?.explore}
                </button>
            </header>

            {/* --- SCROLLYTELLING SECTION (CONCEPT / CHALLENGE / SOLUTION) --- */}
            <section className="scrolly-container relative">
                <div className="md:grid md:grid-cols-2">

                    {/* Sticky Visual (Left on Desktop, Top on Mobile) */}
                    {/* On Desktop: Sticky | On Mobile: Static height */}
                    <div className="scrolly-visual hidden md:block md:h-screen md:sticky md:top-0 bg-black overflow-hidden relative w-full">
                        {scrollyImages.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt={`Vista ${i}`}
                                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${activeImage === i ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                            />
                        ))}
                    </div>

                    {/* Scrolling Narrative (Right) */}
                    <div className="scrolly-content bg-white relative z-10">

                        {/* 01. INTRO / DESCRIPTION */}
                        <div className="story-section min-h-screen flex flex-col justify-center p-8 md:p-24 border-b border-gray-100">
                            {/* Mobile Image 1 */}
                            <img src={scrollyImages[0]} alt="Visión del proyecto" className="md:hidden w-full h-auto max-h-[70vh] object-contain mb-8 rounded-lg shadow-lg bg-black/5" />

                            <span className="text-brand-accent font-bold text-xs uppercase tracking-widest mb-6 block">01. La Visión</span>
                            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-8 leading-tight">
                                {project.description.split('.')[0]}.
                            </h2>
                            <p className="text-gray-500 text-lg leading-relaxed font-light">
                                {project.description.substring(project.description.split('.')[0].length + 1)}
                            </p>
                        </div>

                        {/* 02. CHALLENGE */}
                        <div className="story-section min-h-screen flex flex-col justify-center p-8 md:p-24 border-b border-gray-100 bg-gray-50/50">
                            {/* Mobile Image 2 */}
                            <img src={scrollyImages[1]} alt="Desafío del proyecto" className="md:hidden w-full h-auto max-h-[70vh] object-contain mb-8 rounded-lg shadow-lg bg-black/5" />

                            <span className="text-brand-accent font-bold text-xs uppercase tracking-widest mb-6 block">02. El Desafío</span>
                            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-8 leading-tight">
                                Superando los estándares convencionales.
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed font-light">
                                {project.challenge}
                            </p>
                        </div>

                        {/* 03. SOLUTION */}
                        <div className="story-section min-h-screen flex flex-col justify-center p-8 md:p-24">
                            {/* Mobile Image 3 */}
                            <img src={scrollyImages[2]} alt="Solución del proyecto" className="md:hidden w-full h-auto max-h-[70vh] object-contain mb-8 rounded-lg shadow-lg bg-black/5" />

                            <span className="text-brand-accent font-bold text-xs uppercase tracking-widest mb-6 block">03. La Solución</span>
                            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-8 leading-tight">
                                Ingeniería y arte en perfecta armonía.
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed font-light">
                                {project.solution}
                            </p>

                            {/* Project Stats Summary */}
                            <div className="grid grid-cols-2 gap-8 mt-16 pt-12 border-t border-gray-200">
                                <div>
                                    <h4 className="text-gray-400 text-[10px] uppercase tracking-widest mb-3">Cliente</h4>
                                    <p className="font-serif text-xl text-brand-primary">{project.client}</p>
                                </div>
                                <div>
                                    <h4 className="text-gray-400 text-[10px] uppercase tracking-widest mb-3">Duración</h4>
                                    <p className="font-serif text-xl text-brand-primary">{project.duration}</p>
                                </div>
                                <div className="col-span-2">
                                    <h4 className="text-gray-400 text-[10px] uppercase tracking-widest mb-3">Equipo</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.team.map((m, i) => (
                                            <span key={i} className="inline-block px-3 py-1 bg-gray-100 text-xs tracking-wider text-gray-600 rounded-full">{m}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- HORIZONTAL GALLERY --- */}
            <section className={`gallery-wrapper relative bg-brand-primary text-white overflow-hidden ${isLightboxOpen ? 'invisible' : ''}`}>
                <div className="pt-20 pb-8 md:pt-16 px-8 md:px-16">
                    <h3 className="text-2xl font-serif mb-2">Galería Extendida</h3>
                    <p className="text-brand-accent text-[10px] tracking-[0.3em] uppercase opacity-80 flex items-center gap-2">
                        <ArrowRight size={12} /> Desliza o haz clic para ampliar
                    </p>
                </div>

                {/* MOBILE: Swiper Carousel */}
                <div className="md:hidden pb-12">
                    <Swiper
                        modules={[FreeMode, Pagination]}
                        spaceBetween={16}
                        slidesPerView={1.2}
                        freeMode={true}
                        pagination={{ clickable: true }}
                        className="px-4"
                    >
                        {project.images.slice(3).map((img, index) => {
                            const actualIndex = index + 3;
                            return (
                                <SwiperSlide key={index}>
                                    <div
                                        onClick={() => openLightbox(actualIndex)}
                                        className="relative aspect-[3/4] overflow-hidden cursor-zoom-in"
                                    >
                                        <img
                                            src={img}
                                            alt={`Detalle ${actualIndex}`}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/20"></div>
                                        <div className="absolute bottom-4 right-4 text-xs font-mono bg-black/50 backdrop-blur px-2 py-1 rounded text-white/80">
                                            {String(actualIndex + 1).padStart(2, '0')}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>

                {/* DESKTOP: GSAP Horizontal Scroll */}
                <div className="hidden md:block h-screen">
                    <div ref={galleryRef} className="gallery-track flex gap-16 px-16 h-full items-center" style={{ width: 'fit-content' }}>
                        <div className="w-[20vw] flex-shrink-0"></div>
                        {project.images.slice(3).map((img, index) => {
                            const actualIndex = index + 3;
                            return (
                                <div
                                    key={index}
                                    onClick={() => openLightbox(actualIndex)}
                                    className="gallery-item relative w-[60vh] aspect-[4/3] flex-shrink-0 group overflow-hidden opacity-80 hover:opacity-100 transition-opacity duration-500 cursor-zoom-in"
                                >
                                    <img
                                        src={img}
                                        alt={`Detalle ${actualIndex}`}
                                        className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white transform scale-50 group-hover:scale-100 transition-transform duration-300">
                                            <ZoomIn size={24} />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 right-4 text-xs font-mono bg-black/50 backdrop-blur px-2 py-1 rounded text-white/80">
                                        {String(actualIndex + 1).padStart(2, '0')}
                                    </div>
                                </div>
                            );
                        })}
                        <div className="w-[20vw] flex-shrink-0"></div>
                    </div>
                </div>
            </section>

            {/* --- NEXT PROJECT NAV --- */}
            <Link to={`/proyectos/${nextId}`} className="next-project-section block h-[80vh] relative overflow-hidden group cursor-pointer border-t-8 border-brand-accent">
                <div
                    className="next-project-bg absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                    style={{ backgroundImage: `url(${nextProject.images[0]})` }}
                />
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-colors duration-500" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4 text-center">
                    <span className="text-xs font-bold uppercase tracking-[0.4em] mb-6 text-brand-accent animate-pulse">Siguiente Proyecto</span>
                    <h2 className="text-5xl md:text-8xl font-serif mb-8 max-w-4xl mx-auto leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70 group-hover:to-white transition-all">
                        {nextProject.title}
                    </h2>
                    <div className="flex items-center gap-3 border px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                        <span className="text-xs tracking-widest uppercase font-bold">Ver Siguiente</span>
                        <ArrowRight size={14} />
                    </div>
                </div>
            </Link>

            {/* --- LIGHTBOX MODAL --- */}
            {isLightboxOpen && lightboxIndex !== null && (
                <div
                    className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
                    onClick={closeLightbox}
                >
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-50"
                    >
                        <X size={28} />
                    </button>

                    <button
                        onClick={prevLightboxImage}
                        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 md:p-4 hover:scale-110 transition-all z-50"
                    >
                        <ChevronLeft size={32} className="md:w-12 md:h-12" />
                    </button>

                    <button
                        onClick={nextLightboxImage}
                        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 md:p-4 hover:scale-110 transition-all z-50"
                    >
                        <ChevronRight size={32} className="md:w-12 md:h-12" />
                    </button>

                    <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-12" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={project.images[lightboxIndex]}
                            alt={`Imagen grande ${lightboxIndex + 1}`}
                            className="max-w-full max-h-[75vh] md:max-h-[85vh] object-contain"
                        />
                        <div className="mt-4 text-center">
                            <h4 className="text-white text-lg md:text-xl font-serif mb-1">{project.title}</h4>
                            <p className="text-white/50 text-xs tracking-widest uppercase">
                                Vista {lightboxIndex + 1} de {project.images.length}
                            </p>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default ProjectDetail;
