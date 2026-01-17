import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const Layout = () => {
    return (
        <div className="font-sans antialiased text-gray-900 bg-white dark:bg-night dark:text-night-text min-h-screen flex flex-col transition-colors duration-500">
            <Navbar />
            <main className="flex-grow pt-24"> {/* Added padding top to account for fixed navbar */}
                <Outlet />
            </main>
            <WhatsAppButton />
            <Footer />
        </div>
    );
};

export default Layout;
