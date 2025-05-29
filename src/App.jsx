// src/App.jsx

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

import DerechoInternacionalPrivado from './pages/DerechoInternacionalPrivado';
import Penal from './pages/Penal';
import EnglishSpeakingLawyer from './pages/EnglishSpeakingLawyer';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home & Services */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<Services />} />

        {/* Practice Areas */}
        <Route path="/civil" element={<Civil />} />
        <Route path="/comercial" element={<Comercial />} />
        <Route path="/societario" element={<Societario />} />
        <Route path="/tributario" element={<Tributario />} />
        <Route path="/administrativo" element={<Administrativo />} />

        {/* New Practice Areas */}
        <Route
          path="/derecho-internacional-privado"
          element={<DerechoInternacionalPrivado />}
        />
        <Route path="/penal" element={<Penal />} />
        <Route
          path="/english-speaking-lawyer"
          element={<EnglishSpeakingLawyer />}
        />

        {/* Advanced Practice Areas */}
        <Route path="/reputacion-digital" element={<ReputacionDigital />} />

        {/* Other Pages */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
