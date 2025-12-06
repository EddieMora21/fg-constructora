import React, { createContext, useContext, useState, useEffect } from 'react';
import es from './es';
import en from './en';

const translations = { es, en };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        // Check localStorage or default to Spanish
        if (typeof window !== 'undefined') {
            return localStorage.getItem('lang') || 'es';
        }
        return 'es';
    });

    useEffect(() => {
        localStorage.setItem('lang', language);
    }, [language]);

    const t = translations[language];

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'es' ? 'en' : 'es');
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
