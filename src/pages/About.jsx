import React, { useEffect, useRef } from 'react';
import visionImg from '../assets/about/equipo.webp';
import logoImg from '../assets/about/Logo.webp';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eye, Users, Briefcase, Home, FileText, ClipboardCheck, HardHat, Calculator, Building2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const { language } = useLanguage();
    const heroRef = useRef(null);
    const teamRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Animate elements on scroll
            gsap.utils.toArray('.fade-up').forEach(el => {
                gsap.fromTo(el,
                    { y: 60, opacity: 0 },
                    {
                        y: 0, opacity: 1, duration: 1, ease: 'power3.out',
                        scrollTrigger: { trigger: el, start: 'top 85%' }
                    }
                );
            });

            // Animate service cards with stagger
            gsap.fromTo('.service-item',
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out',
                    scrollTrigger: { trigger: '.services-grid', start: 'top 80%' }
                }
            );

            // Team Presentation Animation
            // Ensure elements start hidden/positioned via JS, not CSS class
            gsap.set(".team-card", { opacity: 0, y: 50 });

            gsap.fromTo(".team-card",
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.2, // Presentation effect
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: teamRef.current,
                        start: "top 80%"
                    }
                }
            );

            // Counter animation
            const counters = document.querySelectorAll('.counter');
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                gsap.fromTo(counter,
                    { innerText: 0 },
                    {
                        innerText: target, duration: 2, ease: 'power2.out', snap: { innerText: 1 },
                        scrollTrigger: { trigger: counter, start: 'top 90%' }
                    }
                );
            });
        });

        return () => ctx.revert();
    }, []);

    const content = {
        es: {
            heroTitle: 'Construimos más que edificios',
            heroSubtitle: 'Construimos sueños',
            intro: 'Somos integradores de soluciones enfocados en ayudar a nuestros clientes a satisfacer sus necesidades de vivienda.',
            vision: {
                title: 'Nuestra Visión',
                text: 'Ser una empresa diversificada en el sector construcción con un enfoque hacia las nuevas tecnologías constructivas, las cuales permitan a nuestros clientes optimizar recursos para así obtener obras, estéticas y amigables con el ambiente.',
                icon: Eye
            },
            client: {
                title: 'El Cliente es Nuestra Razón de Ser',
                p1: 'Nos tomamos cada proyecto como si fuera propio, siempre bajo la premisa de que cada uno de estos es una inversión importante en la vida de su propietario.',
                p2: 'Nuestro público meta son personas que quieran diseñar su proyecto bajo estándares de gama media alta, sin embargo, también podemos adaptar nuestra arquitectura a sistemas constructivos que requieren menores inversiones económicas.',
                icon: Users
            },
            stats: {
                years: { num: 15, label: 'Años de experiencia' },
                projects: { num: 150, label: 'Proyectos completados' },
                clients: { num: 98, label: '% Clientes satisfechos' }
            },
            services: {
                title: 'Nuestros Servicios',
                list: [
                    { name: 'Consultoría arquitectónica', icon: Briefcase },
                    { name: 'Estudios preliminares', icon: FileText },
                    { name: 'Diseño arquitectónico', icon: Home },
                    { name: 'Planos constructivos', icon: ClipboardCheck },
                    { name: 'Trámites institucionales', icon: FileText },
                    { name: 'Inspección de obras', icon: HardHat },
                    { name: 'Administración de obras', icon: ClipboardCheck },
                    { name: 'Avalúos de inmuebles', icon: Calculator },
                    { name: 'Construcción en general', icon: Building2 }
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
            cta: '¿Listo para comenzar?'
        },
        en: {
            heroTitle: 'We build more than buildings',
            heroSubtitle: 'We build dreams',
            intro: 'We are solution integrators focused on helping our clients meet their housing needs.',
            vision: {
                title: 'Our Vision',
                text: 'To be a diversified company in the construction sector with a focus on new construction technologies, which allow our clients to optimize resources to obtain aesthetic and environmentally friendly works.',
                icon: Eye
            },
            client: {
                title: 'The Client is Our Reason for Being',
                p1: 'We take each project as if it were our own, always under the premise that each one of these is an important investment in the life of its owner.',
                p2: 'Our target audience is people who want to design their project under medium-high range standards. However, we can also adapt our architecture to construction systems that require lower economic investments.',
                icon: Users
            },
            stats: {
                years: { num: 15, label: 'Years of experience' },
                projects: { num: 150, label: 'Completed projects' },
                clients: { num: 98, label: '% Satisfied clients' }
            },
            services: {
                title: 'Our Services',
                list: [
                    { name: 'Architectural consulting', icon: Briefcase },
                    { name: 'Preliminary studies', icon: FileText },
                    { name: 'Architectural design', icon: Home },
                    { name: 'Construction plans', icon: ClipboardCheck },
                    { name: 'Institutional procedures', icon: FileText },
                    { name: 'Work inspection', icon: HardHat },
                    { name: 'Works administration', icon: ClipboardCheck },
                    { name: 'Property appraisals', icon: Calculator },
                    { name: 'General construction', icon: Building2 }
                ]
            },
            team: {
                title: 'Our Team',
                subtitle: 'Professionals committed to your vision',
                members: [
                    { name: 'Eng. Fabian Alfaro', role: 'CEO', image: '/equipo/fabian-alfaro.webp' },
                    { name: 'Eng. Andrés Mora', role: 'Electromechanical Lead', image: '/equipo/andres-mora.webp' },
                    { name: 'Arch. Gilberth Sanchez', role: 'Design Lead', image: '/equipo/gilberth-sanchez.webp' },
                    { name: 'Enoc Peña', role: 'Budget & Costs', image: '/equipo/enoc-pena.webp' },
                    { name: 'Edwin Chavarria', role: 'BIM Modeler', image: '/equipo/edwin-chavarria.webp' }
                ]
            },
            cta: 'Ready to start?'
        }
    };

    const t = content[language];

    return (
        <div className="min-h-screen overflow-hidden">
            {/* Hero - Full Screen with Parallax Effect */}
            <section
                ref={heroRef}
                className="relative h-[70vh] flex items-center justify-center bg-brand-primary overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, rgba(0,30,85,0.95) 0%, rgba(0,21,51,0.98) 100%), url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop") center/cover'
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-primary/50"></div>
                <div className="container mx-auto px-4 text-center z-10">
                    <h1 className="text-5xl md:text-7xl font-serif mb-4 text-white leading-tight">
                        {t.heroTitle}
                    </h1>
                    <p className="text-3xl md:text-5xl font-serif text-brand-accent mb-8 italic">
                        {t.heroSubtitle}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        {t.intro}
                    </p>
                </div>
                {/* Decorative Gold Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent"></div>
            </section>

            {/* Vision Section - Split Layout */}
            <section className="py-20 container mx-auto px-4">
                <div className="fade-up grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                    {/* Visual Element */}
                    <div className="relative">
                        <div className="bg-brand-light h-[400px] rounded-lg overflow-hidden relative group shadow-2xl">
                            <img
                                src={visionImg}
                                alt="Visión FG Constructores"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                        {/* Floating accent box */}
                        {/* Floating accent box */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-lg shadow-xl flex items-center justify-center overflow-hidden p-4">
                            <img src={logoImg} alt="FG Logo" className="w-full h-full object-contain mix-blend-multiply" />
                        </div>
                    </div>
                    {/* Text */}
                    <div>
                        <span className="text-brand-accent font-bold uppercase tracking-[4px] text-sm mb-4 block">Visión</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-primary mb-8 leading-tight">{t.vision.title}</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">{t.vision.text}</p>
                        <div className="w-20 h-1 bg-brand-accent"></div>
                    </div>
                </div>
            </section>

            {/* Client Section - Full Width Dark */}
            <section className="bg-brand-primary py-24 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #BE961E 0, #BE961E 1px, transparent 0, transparent 50%)', backgroundSize: '30px 30px' }}></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="fade-up max-w-4xl mx-auto text-center">
                        <Users className="w-16 h-16 text-brand-accent mx-auto mb-8" />
                        <h2 className="text-4xl md:text-5xl font-serif text-white mb-10 leading-tight">{t.client.title}</h2>
                        <p className="text-xl text-gray-300 leading-relaxed mb-8">{t.client.p1}</p>
                        <p className="text-lg text-gray-400 leading-relaxed">{t.client.p2}</p>
                    </div>
                </div>
            </section>

            {/* Services Section - Modern Grid */}
            <section className="py-24 bg-brand-light">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 fade-up">
                        <span className="text-brand-accent font-bold uppercase tracking-[4px] text-sm mb-4 block">Lo que hacemos</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-primary">{t.services.title}</h2>
                    </div>
                    <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {t.services.list.map((service, i) => {
                            const IconComponent = service.icon;
                            return (
                                <div key={i} className="service-item group bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-brand-accent cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-full bg-brand-light flex items-center justify-center group-hover:bg-brand-accent transition-colors duration-300">
                                            <IconComponent className="w-6 h-6 text-brand-primary group-hover:text-brand-primary transition-colors duration-300" />
                                        </div>
                                        <span className="text-brand-primary font-bold text-lg group-hover:text-brand-primary transition-colors">{service.name}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section ref={teamRef} className="py-24 bg-white">
                <div className="container mx-auto px-4 fade-up">
                    <div className="text-center mb-16">
                        <span className="text-brand-accent font-bold uppercase tracking-[4px] text-sm mb-4 block">{t.team.title}</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-primary">{t.team.subtitle}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {t.team.members.map((member, i) => (
                            <div key={i} className="team-card group text-center">
                                <div className="relative overflow-hidden rounded-lg mb-6 aspect-[3/4] max-w-sm mx-auto">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 md:grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-transparent transition-colors duration-300"></div>
                                </div>
                                <h3 className="text-2xl font-serif text-brand-primary mb-2">{member.name}</h3>
                                <p className="text-brand-accent font-bold uppercase text-xs tracking-widest">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-brand-primary text-center relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 fade-up">
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">{t.cta}</h2>
                    <Link
                        to="/contacto"
                        className="inline-block bg-brand-accent text-brand-primary px-12 py-5 text-sm font-bold uppercase tracking-[3px] hover:bg-white transition-all duration-300 shadow-2xl hover:shadow-lg transform hover:-translate-y-1"
                    >
                        {language === 'es' ? 'Contáctanos Ahora' : 'Contact Us Now'}
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
