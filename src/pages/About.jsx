import React, { useEffect, useRef } from 'react';
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
    CheckCircle2
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const { t, language } = useLanguage();
    const heroRef = useRef(null);
    const teamRef = useRef(null);

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
        });

        return () => ctx.revert();
    }, []);

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
