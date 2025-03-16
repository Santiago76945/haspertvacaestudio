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

      {/* Sección principal con <h1> y alt detallado */}
      <section className="hero">
        <div className="hero-content">
          <img
            src={logo}
            alt="Logo Haspert Vaca Estudio Jurídico en Córdoba Capital"
            className="logo"
          />
          <h1>Haspert Vaca Estudio Jurídico</h1>
          <p>
            Especializados en Derecho de Familia, Laboral, Civil, Societario e Internacional Privado. Asesoría integral y personalizada en Córdoba Capital.
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="button">Ver Servicios</Link>
            <Link to="/contact" className="button">Contactar</Link>
          </div>
        </div>
      </section>

      {/* Sección de bienvenida con <h2> y texto conciso */}
      <section className="welcome-section">
        <h2>Bienvenido a <strong>Haspert Vaca Estudio Jurídico</strong></h2>
        <p>
          Un equipo de <strong>abogados</strong> con sede en <strong>Córdoba Capital</strong>, dedicado a ofrecer <strong>soluciones jurídicas</strong> eficaces y personalizadas.
          Contamos con profesionales altamente capacitados en <strong>Derecho Civil, Laboral, Comercial, de Familia, Internacional y Tributario</strong>.
          Nuestra misión es brindar <strong>asesoramiento integral</strong> con un enfoque <strong>cercano, transparente</strong> y orientado a <strong>defender tus derechos</strong> y alcanzar los <strong>mejores resultados</strong> para cada caso.
        </p>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default LandingPage;
