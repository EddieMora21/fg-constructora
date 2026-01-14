import React, { useEffect } from 'react';
import {
    Award,
    Clock,
    Handshake,
    Briefcase,
    FileText,
    Home,
    ClipboardCheck,
    HardHat,
    Calculator,
    Building2,
    CheckCircle2,
    ArrowRight
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../i18n';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const { t, language } = useLanguage();

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Animate each service row
            gsap.utils.toArray('.service-row').forEach((row, i) => {
                const isEven = i % 2 === 0;

                // Animate image container
                gsap.fromTo(row.querySelector('.image-container'),
                    { x: isEven ? -100 : 100, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1.2,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: row,
                            start: "top 75%"
                        }
                    }
                );

                // Animate text container
                gsap.fromTo(row.querySelector('.text-container'),
                    { x: isEven ? 100 : -100, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1.2,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: row,
                            start: "top 75%",
                            delay: 0.2
                        }
                    }
                );
            });

            // Generic section fade
            gsap.utils.toArray('.animate-section').forEach((section) => {
                gsap.fromTo(section,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: section,
                            start: "top 85%"
                        }
                    }
                );
            });
        });
        return () => ctx.revert();
    }, []);

    const iconMap = {
        'Briefcase': Briefcase,
        'FileText': FileText,
        'Home': Home,
        'ClipboardCheck': ClipboardCheck,
        'HardHat': HardHat,
        'Calculator': Calculator,
        'Building2': Building2,
        'Award': Award,
        'Clock': Clock,
        'Handshake': Handshake
    };

    const servicesList = t.services.list || [];

    return (
        <div className="min-h-screen bg-white">
            {/* Header - More Visual */}
            <section className="bg-brand-primary text-white pt-40 pb-32 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/80 to-transparent"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="text-brand-accent font-bold uppercase tracking-[4px] text-sm mb-4 block">Nuestras Capacidades</span>
                    <h1 className="text-5xl md:text-7xl font-serif mb-8 tracking-tight">{t.services.title}</h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                        {t.services.subtitle}
                    </p>
                </div>
            </section>

            {/* Alternating Services Rows - Large Format */}
            <section className="py-24 lg:py-40 space-y-32 lg:space-y-56 overflow-hidden">
                {servicesList.map((service, i) => {
                    const Icon = iconMap[service.icon] || CheckCircle2;
                    const isEven = i % 2 === 0;

                    return (
                        <div
                            key={i}
                            className={`service-row container mx-auto px-4 flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24`}
                        >
                            {/* Image Container */}
                            <div className="image-container w-full lg:w-1/2 relative group">
                                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[600px]">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                                {/* Decorative elements */}
                                <div className={`absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 w-40 h-40 border-8 border-brand-accent opacity-20 -z-10 rounded-2xl ${!isEven && 'right-auto -left-6 lg:-left-10'}`}></div>
                                <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? '-left-8' : '-right-8'} w-16 h-32 bg-brand-accent/10 rounded-full blur-2xl -z-10`}></div>
                            </div>

                            {/* Text Container */}
                            <div className="text-container w-full lg:w-1/2 space-y-8">
                                <span className="text-6xl lg:text-8xl text-gray-100 font-serif font-bold select-none leading-none">
                                    0{i + 1}
                                </span>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-brand-light flex items-center justify-center text-brand-primary">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h2 className="text-3xl lg:text-5xl font-serif text-brand-primary leading-tight">
                                            {service.title}
                                        </h2>
                                    </div>
                                    <div className="w-20 h-1.5 bg-brand-accent rounded-full"></div>
                                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-light">
                                        {service.desc}
                                    </p>
                                    <div className="pt-6">
                                        <a
                                            href={`https://wa.me/50660674833?text=Hola FG Constructores, me gustaría más información sobre el servicio de: ${service.title}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group inline-flex items-center gap-4 bg-brand-primary text-white border-2 border-brand-primary px-8 py-4 text-xs font-bold uppercase tracking-[3px] hover:bg-transparent hover:text-brand-primary transition-all duration-300 shadow-xl"
                                        >
                                            Consultar por WhatsApp
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </section>

            {/* Why Choose Us - Enhanced Visual Impact */}
            <section className="bg-brand-primary text-white py-32 relative overflow-hidden animate-section">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1517089591964-9997858a9f7c?q=80&w=2030&auto=format&fit=crop"
                        alt="Background Pattern"
                        className="w-full h-full object-cover grayscale"
                    />
                </div>
                <div className="absolute inset-0 bg-brand-primary/90"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-4xl lg:text-6xl font-serif mb-24 max-w-4xl mx-auto">
                        {t.services.whyChooseUs?.title}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
                        {t.services.whyChooseUs?.items.map((item, i) => {
                            const Icon = iconMap[item.icon] || Award;
                            return (
                                <div key={i} className="group relative">
                                    <div className="mb-10 mx-auto w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-primary transition-all duration-500 transform group-hover:-translate-y-2">
                                        <Icon className="w-10 h-10" />
                                    </div>
                                    <h4 className="text-2xl font-serif mb-6">{item.title}</h4>
                                    <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
                                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-0 h-1 bg-brand-accent group-hover:w-full transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Global CTA */}
            <section className="py-32 lg:py-48 bg-gray-50 text-center animate-section">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-4xl lg:text-6xl font-serif text-brand-primary mb-12 leading-tight">
                        {language === 'es' ? 'Construyamos juntos' : 'Let us build together'}
                    </h2>
                    <a
                        href="https://wa.me/50660674833"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-brand-accent text-brand-primary border-2 border-brand-accent px-16 py-6 text-sm font-bold uppercase tracking-[4px] hover:bg-transparent transition-all duration-300 shadow-2xl transform hover:-translate-y-2"
                    >
                        {language === 'es' ? 'Iniciar Conversación' : 'Start Conversation'}
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Services;
