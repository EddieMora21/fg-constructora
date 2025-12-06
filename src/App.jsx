import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="proyectos" element={<Projects />} />
        <Route path="proyectos/:id" element={<ProjectDetail />} />
        <Route path="servicios" element={<Services />} />
        <Route path="nosotros" element={<About />} />
        <Route path="contacto" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
