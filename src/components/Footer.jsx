import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n';
import logo from '../assets/logos/logo-redes.svg';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-brand-primary pt-20 pb-10 border-t-4 border-brand-accent text-white">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
                <div className="footer-col">
                    {/* Logo Image */}
                    <img
                        src={logo}
                        alt="FG Ingenieros y Arquitectos"
                        className="h-24 w-auto mb-4"
                    />
                    <p className="text-gray-400 max-w-xs">{t.footer.tagline}</p>
                </div>
                <div className="footer-col">
                    <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-6 text-brand-accent">{t.footer.company}</h4>
                    <ul>
                        <li className="mb-3"><Link to="/nosotros" className="text-gray-400 hover:text-white transition-colors">{t.footer.companyLinks[0]}</Link></li>
                        <li className="mb-3"><Link to="#" className="text-gray-400 hover:text-white transition-colors">{t.footer.companyLinks[1]}</Link></li>
                        <li className="mb-3"><Link to="#" className="text-gray-400 hover:text-white transition-colors">{t.footer.companyLinks[2]}</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-6 text-brand-accent">{t.footer.servicesTitle}</h4>
                    <ul>
                        <li className="mb-3"><Link to="/servicios" className="text-gray-400 hover:text-white transition-colors">{t.footer.servicesLinks[0]}</Link></li>
                        <li className="mb-3"><Link to="/servicios" className="text-gray-400 hover:text-white transition-colors">{t.footer.servicesLinks[1]}</Link></li>
                        <li className="mb-3"><Link to="/servicios" className="text-gray-400 hover:text-white transition-colors">{t.footer.servicesLinks[2]}</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-6 text-brand-accent">{t.footer.contactTitle}</h4>
                    <ul>
                        <li className="mb-3"><Link to="/contacto" className="text-gray-400 hover:text-white transition-colors">info@fgingenieros.cr</Link></li>
                        <li className="mb-3"><Link to="/contacto" className="text-gray-400 hover:text-white transition-colors">+506 2222 0000</Link></li>
                        <li className="mb-3"><Link to="/contacto" className="text-gray-400 hover:text-white transition-colors">San José, Costa Rica</Link></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} FG Ingenieros y Arquitectos. {t.footer.copyright}
            </div>
        </footer>
    );
};

export default Footer;
