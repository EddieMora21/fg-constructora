import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout = () => {
    return (
        <div className="font-sans antialiased text-gray-900 bg-white min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-24"> {/* Added padding top to account for fixed navbar */}
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
