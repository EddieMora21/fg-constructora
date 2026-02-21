import React, { useEffect, useRef, useState } from 'react';
import visionImg from '../assets/about/equipo.webp';
import logoImg from '../assets/about/Logo.webp';
import { useLanguage } from '../i18n';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Eye,
    Users,
    Briefcase,
    Home,
    FileText,
    ClipboardCheck,
    HardHat,
    Calculator,
    Building2,
    CheckCircle2,
    X,
    Maximize2,
    Download
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const { t, language } = useLanguage();
    const heroRef = useRef(null);
    const teamRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.utils.toArray('.fade-up').forEach(el => {
                gsap.fromTo(el,
                    { y: 60, opacity: 0 },
                    {
                        y: 0, opacity: 1, duration: 1, ease: 'power3.out',
                        scrollTrigger: { trigger: el, start: 'top 85%' }
                    }
                );
            });

            gsap.fromTo('.service-item',
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out',
                    scrollTrigger: { trigger: '.services-grid', start: 'top 80%' }
                }
            );

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
                        start: "top 80%"
                    }
                }
            );

            // Important: Refresh ScrollTrigger to catch lazy loaded content or dynamic sections
            ScrollTrigger.refresh();
        });

        return () => ctx.revert();
    }, [isModalOpen]);

    // Icon mapping
    const iconMap = {
        'Briefcase': Briefcase,
        'FileText': FileText,
        'Home': Home,
        'ClipboardCheck': ClipboardCheck,
        'HardHat': HardHat,
        'Calculator': Calculator,
        'Building2': Building2
    };

    const team = t.home.team || { members: [] };

    return (
        <div className="min-h-screen overflow-hidden bg-white dark:bg-night transition-colors duration-500">
            <title>Nosotros - FG Constructores</title>
            <meta name="description" content="Conoce la historia, visión, y el equipo detrás de FG Constructores. Construimos más que edificios, construimos sueños." />
            {/* Hero */}
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
                        {language === 'es' ? 'Construimos más que edificios' : 'We build more than buildings'}
                    </h1>
                    <p className="text-3xl md:text-5xl font-serif text-brand-accent mb-8 italic">
                        {language === 'es' ? 'Construimos sueños' : 'We build dreams'}
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        {t.home.intro.nosotros} {t.home.intro.vision}
                    </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent"></div>
            </section>

            {/* Vision Section */}
            <section className="py-20 container mx-auto px-4">
                <div className="fade-up grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                    <div className="relative">
                        <div className="bg-brand-light h-[400px] rounded-lg overflow-hidden relative group shadow-2xl">
                            <img
                                src={visionImg}
                                alt="Visión FG Constructores"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white dark:bg-night rounded-lg shadow-xl flex items-center justify-center overflow-hidden p-4">
                            <img src={logoImg} alt="FG Logo" className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal" />
                        </div>
                    </div>
                    <div>
                        <span className="text-brand-accent font-bold uppercase tracking-[4px] text-sm mb-4 block">Visión</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-primary dark:text-white mb-8 leading-tight">Excelencia y Sostenibilidad</h2>
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">{t.home.intro.vision}</p>
                        <div className="w-20 h-1 bg-brand-accent"></div>
                    </div>
                </div>
            </section>

            {/* Client Focus */}
            <section className="bg-brand-primary py-12 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #BE961E 0, #BE961E 1px, transparent 0, transparent 50%)', backgroundSize: '30px 30px' }}></div>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <Users className="w-12 h-12 text-brand-accent mx-auto mb-4" />
                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 leading-tight">El Cliente es Nuestra Razón de Ser</h2>
                    <p className="text-xl text-gray-300 leading-relaxed">{t.home.intro.cliente}</p>
                </div>
            </section>


            {/* Team Section */}
            <section ref={teamRef} className="py-24 bg-white dark:bg-night">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 fade-up">
                        <span className="text-brand-accent font-bold uppercase tracking-[4px] text-sm mb-4 block">{t.home.team.title}</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-primary dark:text-white">{t.home.team.subtitle}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {team.members.map((member, i) => (
                            <div key={i} className="team-card group text-center">
                                <div className="relative overflow-hidden rounded-lg mb-6 aspect-[3/4] max-w-sm mx-auto">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 md:grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-transparent transition-colors duration-300"></div>
                                </div>
                                <h3 className="text-2xl font-serif text-brand-primary dark:text-white mb-2">{member.name}</h3>
                                <p className="text-brand-accent font-bold uppercase text-xs tracking-widest">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Curriculum Flipbook Section */}
            <section className="py-24 bg-brand-light dark:bg-night/50 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Text Block — always first */}
                        <div className="fade-up text-center lg:text-left order-1 lg:col-start-1 lg:row-start-1">
                            <span className="text-brand-accent font-bold uppercase tracking-[4px] text-sm mb-4 block">Trayectoria</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-brand-primary dark:text-white mb-8 leading-tight">
                                {t.about.curriculum.title}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-2xl lg:mx-0 mx-auto">
                                {t.about.curriculum.subtitle}
                            </p>
                        </div>

                        {/* Book Preview — right on desktop, middle on mobile */}
                        <div className="w-full fade-up relative group cursor-pointer flex justify-center lg:justify-end order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2" onClick={() => setIsModalOpen(true)}>
                            <div className="relative aspect-[3/4] w-full max-w-[280px] md:max-w-sm bg-brand-primary rounded-r-2xl shadow-[20px_20px_50px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-500 group-hover:shadow-[40px_40px_80px_rgba(0,0,0,0.5)]" style={{ perspective: '1000px' }}>
                                <div className="absolute left-0 top-0 bottom-0 w-6 md:w-8 bg-black/20 z-10"></div>
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12 text-center border-l-4 border-white/10 transition-transform duration-500 group-hover:[transform:rotateY(-12deg)]" style={{ transformOrigin: 'left' }}>
                                    <img src={logoImg} alt="FG" className="w-16 h-16 md:w-20 md:h-20 mb-6 md:mb-8 opacity-80 brightness-0 invert" />
                                    <div className="h-px w-16 md:w-20 bg-brand-accent mb-6 md:mb-8"></div>
                                    <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 uppercase tracking-wider leading-tight">
                                        Currículum<br />Empresarial
                                    </h3>
                                    <p className="text-brand-accent font-sans text-xs md:text-sm tracking-[4px] font-bold">2025</p>
                                    <div className="mt-auto text-white/40 text-[10px] md:text-xs tracking-widest uppercase">FG Ingenieros y Arquitectos</div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
                                <div className="absolute inset-0 bg-brand-accent/0 group-hover:bg-brand-accent/10 transition-colors duration-500 flex items-center justify-center">
                                    <div className="bg-white/95 text-brand-primary px-8 py-4 rounded-full font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-2xl">
                                        {language === 'es' ? 'Abrir Flipbook' : 'Open Flipbook'}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-4 left-1/2 lg:left-auto lg:right-0 -translate-x-[calc(50%-10px)] lg:translate-x-[10px] -z-10 w-full max-w-[280px] md:max-w-sm h-[95%] bg-white dark:bg-gray-800 rounded-r-2xl shadow-lg opacity-50"></div>
                            <div className="absolute top-2 left-1/2 lg:left-auto lg:right-0 -translate-x-[calc(50%-5px)] lg:translate-x-[5px] -z-10 w-full max-w-[280px] md:max-w-sm h-[98%] bg-white dark:bg-gray-700 rounded-r-2xl shadow-lg opacity-70"></div>
                        </div>

                        {/* Buttons — col 1, row 2 on desktop / bottom on mobile */}
                        <div className="fade-up w-full order-3 lg:col-start-1 lg:row-start-2 lg:self-start">
                            <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center w-full">
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="bg-brand-primary text-white py-4 px-8 rounded-lg font-bold uppercase tracking-wider text-sm hover:bg-brand-accent hover:text-brand-primary transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                                >
                                    <Maximize2 size={20} />
                                    {t.about.curriculum.viewButton}
                                </button>
                                <a
                                    href="/docs/Curriculum-Empresarial.pdf"
                                    download
                                    className="border-2 border-brand-primary dark:border-brand-accent text-brand-primary dark:text-brand-accent py-4 px-8 rounded-lg font-bold uppercase tracking-wider text-sm hover:bg-brand-primary hover:text-white dark:hover:bg-brand-accent dark:hover:text-brand-primary transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-1"
                                >
                                    <Download size={20} />
                                    {t.about.curriculum.downloadButton}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Flipbook Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10">
                    <div className="absolute top-6 right-6 flex gap-4 z-[110]">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <div className="w-full h-full max-w-6xl bg-white rounded-xl overflow-hidden shadow-2xl relative">
                        {/* The PDF Viewer (Simulating a Flipbook) */}
                        <iframe
                            src="/docs/Curriculum-Empresarial.pdf#view=FitH"
                            className="w-full h-full border-none"
                            title="Currículum FG"
                        ></iframe>

                        {/* Small instruction overlay for 1 second */}
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-none animate-fade-out">
                            <div className="bg-brand-primary/90 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest">
                                {language === 'es' ? 'Usa el visor para navegar' : 'Use the viewer to navigate'}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* CTA Section */}
            <section className="py-24 bg-brand-primary text-center relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 fade-up">
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">
                        {language === 'es' ? '¿Listo para comenzar?' : 'Ready to start?'}
                    </h2>
                    <a
                        href="https://wa.me/50660674833"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-brand-accent text-brand-primary px-12 py-5 text-sm font-bold uppercase tracking-[3px] hover:bg-white transition-all duration-300 shadow-2xl hover:shadow-lg transform hover:-translate-y-1"
                    >
                        {language === 'es' ? 'Contáctanos Ahora' : 'Contact Us Now'}
                    </a>
                </div>
            </section>
        </div>
    );
};

export default About;
