import React, { useEffect } from 'react';
import { Award, Clock, Handshake } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../i18n';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const { t } = useLanguage();

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Stagger animations for service sections
            const sections = document.querySelectorAll('.service-section');
            sections.forEach((section, i) => {
                gsap.fromTo(section,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: section,
                            start: "top 80%"
                        }
                    }
                );
            });
        });
        return () => ctx.revert();
    }, []);

    const services = [
        {
            num: '01',
            title: 'Planificación Maestra',
            desc: 'Visualizamos el futuro de ciudades y complejos. Nuestra planificación urbana integra sostenibilidad, viabilidad económica y bienestar social.',
            image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop',
            items: ['Estudios de Factibilidad', 'Masterplans Urbanos', 'Desarrollo Turístico']
        },
        {
            num: '02',
            title: 'Diseño Arquitectónico',
            desc: 'Fusionamos arte y ciencia para crear espacios que inspiran. Cada línea y cada volumen responde a un propósito estética y funcional.',
            image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031&auto=format&fit=crop',
            items: ['Diseño Conceptual', 'Planos Ejecutivos', 'BIM & Modelado 3D']
        },
        {
            num: '03',
            title: 'Ingeniería & Construcción',
            desc: 'Ejecución impecable con estándares internacionales. Gestionamos obras complejas garantizando tiempos, costos y calidad superior.',
            image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop',
            items: ['Dirección de Obra', 'Ingeniería Estructural', 'Gestión Llave en Mano']
        },
        {
            num: '04',
            title: 'Consultoría Sostenible',
            desc: 'Comprometidos con el planeta. Asesoramos en certificaciones LEED y optimización energética para edificios de alto rendimiento.',
            image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=2069&auto=format&fit=crop',
            items: ['Certificación LEED/EDGE', 'Simulación Energética', 'Auditorías Ambientales']
        }
    ];

    return (
        <div className="min-h-screen bg-brand-light">
            {/* Header Section */}
            <section className="bg-brand-primary text-white py-32 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-accent via-brand-primary to-transparent"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-serif mb-8 tracking-tight">{t.services.title}</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                        {t.services.subtitle}
                    </p>
                </div>
            </section>

            {/* Services List - Large Format */}
            <div className="container mx-auto px-4 py-24 space-y-32">
                {services.map((service, i) => (
                    <div
                        key={i}
                        className={`service-section flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
                    >
                        {/* Image Side */}
                        <div className="w-full lg:w-1/2 relative group">
                            <div className="overflow-hidden rounded-lg shadow-2xl relative h-[500px]">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                            {/* Decorative Box */}
                            <div className={`hidden lg:block absolute -bottom-10 -right-10 w-40 h-40 border-4 border-brand-accent z-0 ${i % 2 !== 0 ? 'right-auto -left-10' : ''}`}></div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full lg:w-1/2">
                            <span className="text-6xl text-gray-200 font-serif font-bold absolute -translate-y-12 -z-10 select-none">
                                {service.num}
                            </span>
                            <h3 className="text-4xl font-serif text-brand-primary mb-6 relative">
                                {service.title}
                                <span className="block h-1 w-20 bg-brand-accent mt-4"></span>
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-10">
                                {service.desc}
                            </p>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {service.items.map((item, idx) => (
                                    <li key={idx} className="flex items-center text-gray-700 font-medium">
                                        <span className="w-2 h-2 rounded-full bg-brand-accent mr-3"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <button className="px-8 py-4 bg-transparent border-2 border-brand-primary text-brand-primary font-bold text-xs uppercase tracking-[2px] transition-all hover:bg-brand-primary hover:text-white">
                                Más Información
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Why Choose Us - Premium Dark Section */}
            <section className="bg-brand-primary text-white py-32 mt-20 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#BE961E 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <span className="text-brand-accent font-bold uppercase tracking-[4px] text-sm mb-4 block">Diferenciadores</span>
                    <h2 className="text-4xl md:text-5xl font-serif mb-16">{t.services.whyChooseUs?.title}</h2>

                    {t.services.whyChooseUs?.items && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {t.services.whyChooseUs.items.map((item, i) => {
                                const Icon = i === 0 ? Award : i === 1 ? Clock : Handshake;
                                return (
                                    <div key={i} className="group p-10 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 rounded-sm hover:-translate-y-2">
                                        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent/10 text-brand-accent group-hover:scale-110 transition-transform duration-500">
                                            <Icon className="w-8 h-8" />
                                        </div>
                                        <h4 className="text-2xl font-serif mb-4 text-white group-hover:text-brand-accent transition-colors">{item.title}</h4>
                                        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{item.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Services;
