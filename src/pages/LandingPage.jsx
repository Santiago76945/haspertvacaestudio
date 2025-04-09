// src/pages/LandingPage.jsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import '../styles/landingPage.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />

      {/* Sección principal */}
      <section className="hero">
        <div className="hero-content">
          <img
            src={logo}
            alt="Logo VGH Estudio Jurídico en Córdoba Capital"
            className="logo"
          />

          {/* Ajuste de títulos en dos líneas */}
          <h1 className="haspert-vaca">VGH</h1>
          <h2 className="estudio-juridico">Estudio Jurídico</h2>

          <p>
            Especializados en Derecho Civil, Administrativo, Laboral, Comercial, Societario y Tributario.
            Asesoría integral y personalizada en Córdoba Capital.
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="button">Ver Servicios</Link>
            <Link to="/contact" className="button">Contactar</Link>
          </div>
        </div>
      </section>

      {/* Sección de bienvenida */}
      <section className="welcome-section">
        <h2>Bienvenido a <strong>VGH Estudio Jurídico</strong></h2>
        <p>
          Somos un equipo de <strong>abogados en Córdoba Capital</strong> comprometidos con brindar <strong>soluciones legales efectivas y personalizadas</strong>.
          Nos especializamos en <strong>Derecho Civil, Administrativo, Laboral, Comercial, Societario y Tributario</strong>,
          ofreciendo un acompañamiento cercano y profesional para defender tus derechos con <strong>transparencia, compromiso y excelencia</strong>.
        </p>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default LandingPage;

