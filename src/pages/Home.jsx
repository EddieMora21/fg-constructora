import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../i18n';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const { t } = useLanguage();

    useEffect(() => {
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
    }, []);

    return (
        <>
            <Hero />

            {/* Intro / Value Prop */}
            <section className="py-24 container mx-auto px-4 reveal-on-scroll">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-primary mb-6 leading-tight">{t.home.intro.title}</h2>
                        <div className="w-16 h-1 bg-brand-accent"></div>
                    </div>
                    <div>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">{t.home.intro.p1}</p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">{t.home.intro.p2}</p>
                        <ul className="space-y-3 text-gray-500">
                            {t.home.intro.list.map((item, i) => (
                                <li key={i} className="flex items-center">
                                    <span className="w-2 h-2 bg-brand-accent mr-3 rounded-full"></span>{item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-brand-primary text-white py-24 reveal-on-scroll">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div>
                        <h3 className="text-5xl md:text-6xl font-bold mb-4 text-brand-accent">150+</h3>
                        <p className="text-gray-400 uppercase tracking-[3px] text-sm">{t.home.stats.projects}</p>
                    </div>
                    <div>
                        <h3 className="text-5xl md:text-6xl font-bold mb-4 text-brand-accent">45</h3>
                        <p className="text-gray-400 uppercase tracking-[3px] text-sm">{t.home.stats.awards}</p>
                    </div>
                    <div>
                        <h3 className="text-5xl md:text-6xl font-bold mb-4 text-brand-accent">100%</h3>
                        <p className="text-gray-400 uppercase tracking-[3px] text-sm">{t.home.stats.clients}</p>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-24 container mx-auto px-4 reveal-on-scroll">
                <h2 className="text-4xl text-center font-serif mb-16 relative pb-6 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-px after:bg-brand-accent text-brand-primary">
                    {t.home.featured.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                    <div className="group cursor-pointer">
                        <div className="bg-gray-200 h-[500px] w-full mb-6 overflow-hidden relative">
                            <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                            <div className="w-full h-full bg-gray-300 transition-transform duration-700 group-hover:scale-110"></div>
                        </div>
                        <h3 className="text-2xl font-serif mb-2 group-hover:text-brand-primary transition-colors">Torre Sabana</h3>
                        <p className="text-gray-500 uppercase text-sm tracking-wider">Corporativo • San José</p>
                    </div>

                    <div className="group cursor-pointer">
                        <div className="bg-gray-200 h-[500px] w-full mb-6 overflow-hidden relative">
                            <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                            <div className="w-full h-full bg-gray-300 transition-transform duration-700 group-hover:scale-110"></div>
                        </div>
                        <h3 className="text-2xl font-serif mb-2 group-hover:text-brand-primary transition-colors">Puente Tempisque</h3>
                        <p className="text-gray-500 uppercase text-sm tracking-wider">Infraestructura • Guanacaste</p>
                    </div>
                </div>

                <div className="text-center">
                    <Link to="/proyectos" className="inline-block border border-brand-primary text-brand-primary px-10 py-4 text-xs font-bold uppercase tracking-[3px] hover:bg-brand-primary hover:text-white transition-all duration-300">
                        {t.home.featured.cta}
                    </Link>
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

            {/* Testimonials */}
            <section className="bg-brand-primary text-white py-32 text-center reveal-on-scroll">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-sm font-bold uppercase tracking-[4px] text-brand-accent mb-12">{t.home.testimonial.label}</h2>
                    <div className="text-3xl md:text-5xl font-serif italic mb-10 leading-snug text-gray-100">
                        {t.home.testimonial.quote}
                    </div>
                    <div className="text-gray-400 uppercase tracking-widest text-sm">{t.home.testimonial.author}</div>
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
