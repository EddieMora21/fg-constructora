import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logos/logo-principal.svg';
import logoNight from '../assets/logos/logo-principal-night.svg';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../i18n';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { language, toggleLanguage, t } = useLanguage();
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { title: t.nav.home, path: '/' },
        { title: t.nav.projects, path: '/proyectos' },
        { title: t.nav.services, path: '/servicios' },
        { title: t.nav.about, path: '/nosotros' },
    ];

    return (
        <nav className={`fixed w-full z-[90] transition-all duration-300 ${scrolled ? 'bg-white dark:bg-night shadow-lg py-2' : 'bg-white/95 dark:bg-night/95 backdrop-blur-sm py-4'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo SVG */}
                <Link to="/" className="flex items-center group flex-shrink-0">
                    <img
                        src={theme === 'dark' ? logoNight : logo}
                        alt="FG Ingenieros y Arquitectos"
                        className="h-16 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-6 items-center">
                    {navLinks.map((item) => (
                        <Link
                            key={item.title}
                            to={item.path}
                            className={`text-xs font-bold uppercase tracking-[2px] transition-all duration-300 relative group py-2
                ${location.pathname === item.path ? 'text-brand-primary dark:text-brand-accent' : 'text-gray-500 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-accent'}`}
                        >
                            {item.title}
                            <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-brand-accent transform origin-left transition-transform duration-300 ${location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                        </Link>
                    ))}

                    {/* Language Switcher */}
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-accent transition-colors px-3 py-2 border border-gray-200 dark:border-gray-700 rounded hover:border-brand-primary dark:hover:border-brand-accent"
                        title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
                    >
                        <Globe size={14} />
                        {language === 'es' ? 'EN' : 'ES'}
                    </button>

                    {/* Theme Toggle */}
                    <button
                        onClick={() => {
                            console.log('Desktop toggle clicked');
                            toggleTheme();
                        }}
                        className="p-2 text-gray-500 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-accent transition-colors border border-gray-200 dark:border-gray-700 rounded"
                        title={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
                    >
                        {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                    </button>

                    <a
                        href="https://wa.me/50660674833"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-brand-primary text-white text-xs font-bold uppercase tracking-widest px-6 py-3 hover:bg-brand-accent hover:text-brand-primary transition-colors duration-300 shadow-md"
                    >
                        {t.nav.quote}
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center gap-3">
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-1 text-xs font-bold text-brand-primary dark:text-brand-accent"
                    >
                        <Globe size={16} />
                        {language === 'es' ? 'EN' : 'ES'}
                    </button>
                    <button
                        onClick={() => {
                            console.log('Mobile toggle clicked');
                            toggleTheme();
                        }}
                        className="text-brand-primary dark:text-brand-accent"
                    >
                        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-brand-primary dark:text-brand-accent hover:text-brand-accent transition-colors"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-white dark:bg-night border-b border-gray-100 dark:border-gray-800 shadow-xl lg:hidden flex flex-col py-6 px-6 space-y-4">
                        {navLinks.map((item) => (
                            <Link
                                key={item.title}
                                to={item.path}
                                className={`text-sm font-bold uppercase tracking-widest border-l-2 pl-4 transition-all ${location.pathname === item.path ? 'border-brand-accent text-brand-primary dark:text-brand-accent' : 'border-transparent text-gray-500 dark:text-gray-400'}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.title}
                            </Link>
                        ))}
                        <a
                            href="https://wa.me/50660674833"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-brand-primary text-white text-center py-3 font-bold uppercase tracking-widest mt-4"
                            onClick={() => setIsOpen(false)}
                        >
                            {t.nav.quote}
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
