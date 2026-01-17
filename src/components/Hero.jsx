import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { useLanguage } from '../i18n';

import imgBarva from '../assets/projects/residencia-barva/Fachadaexterior.webp';

const Hero = () => {
    const heroRef = useRef(null);
    const lineRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const ctaRef = useRef(null);
    const btn1Ref = useRef(null);
    const btn2Ref = useRef(null);
    const { t } = useLanguage();

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Reset initial states
        gsap.set([lineRef.current, titleRef.current, subtitleRef.current, btn1Ref.current, btn2Ref.current], {
            opacity: 0
        });

        tl
            // Fade in hero background
            .fromTo(heroRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.8 }
            )
            // Animate decorative line
            .fromTo(lineRef.current,
                { scaleX: 0, opacity: 0 },
                { scaleX: 1, opacity: 1, duration: 0.6 },
                "-=0.3"
            )
            // Title slides up with fade
            .fromTo(titleRef.current,
                { y: 60, opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
                { y: 0, opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 1 },
                "-=0.2"
            )
            // Subtitle appears with blur effect
            .fromTo(subtitleRef.current,
                { y: 30, opacity: 0, filter: "blur(10px)" },
                { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8 },
                "-=0.5"
            )
            // First button bounces in
            .fromTo(btn1Ref.current,
                { y: 20, opacity: 0, scale: 0.9 },
                { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
                "-=0.3"
            )
            // Second button bounces in with slight delay
            .fromTo(btn2Ref.current,
                { y: 20, opacity: 0, scale: 0.9 },
                { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
                "-=0.3"
            );

        // Add subtle floating animation to the line
        gsap.to(lineRef.current, {
            scaleX: 1.1,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

    }, []);

    return (
        <div
            ref={heroRef}
            className="relative h-screen flex items-center justify-center bg-brand-primary text-white overflow-hidden"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 10, 26, 0.4) 0%, rgba(0, 10, 26, 0.6) 50%, rgba(0, 10, 26, 0.9) 100%), url(${imgBarva})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="container mx-auto px-4 text-center z-10">
                {/* Decorative line */}
                <div
                    ref={lineRef}
                    className="w-20 h-1 bg-brand-accent mx-auto mb-8 origin-center"
                />

                <h1 ref={titleRef} className="text-3xl md:text-5xl lg:text-6xl font-serif font-normal mb-6 leading-tight">
                    {t.hero.title}
                </h1>

                <p ref={subtitleRef} className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                    {t.hero.subtitle}
                </p>

                <div ref={ctaRef} className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        ref={btn1Ref}
                        to="/proyectos"
                        className="inline-block border-2 border-brand-accent text-brand-accent font-bold text-xs uppercase tracking-[2px] py-4 px-10 hover:bg-brand-accent hover:text-brand-primary transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/20"
                    >
                        {t.hero.cta1}
                    </Link>
                    <Link
                        ref={btn2Ref}
                        to="/contacto"
                        className="inline-flex items-center gap-2 bg-brand-accent text-brand-primary font-bold text-xs uppercase tracking-[2px] py-4 px-10 hover:bg-white hover:text-brand-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-brand-accent/30"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        {t.hero.cta2}
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default Hero;
