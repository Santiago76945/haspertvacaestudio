// src/App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Services from './pages/Services';
import Civil from './pages/Civil';
import Comercial from './pages/Comercial';
import Societario from './pages/Societario';
import Tributario from './pages/Tributario';
import Administrativo from './pages/Administrativo';
import Contact from './pages/Contact';
import Team from './pages/Team';
import ReputacionDigital from './pages/ReputacionDigital';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/civil" element={<Civil />} />
        <Route path="/comercial" element={<Comercial />} />
        <Route path="/administrativo" element={<Administrativo />} />
        <Route path="/societario" element={<Societario />} />
        <Route path="/tributario" element={<Tributario />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/reputacion-digital" element={<ReputacionDigital />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

