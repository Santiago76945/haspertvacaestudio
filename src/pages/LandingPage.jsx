// src/pages/LandingPage.jsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import '../styles/landingPage.css';
import logo from '../assets/logo.png';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <section className="hero">
        <div className="hero-content">
          <img src={logo} alt="Logo Haspert Vaca Estudio Jurídico" className="logo" />
          <p>
            Estudio Jurídico en Córdoba Capital especializado en Derecho de Familia, Laboral, Civil, Societario e Internacional Privado. Asesoría integral y personalizada.
          </p>
          <div className="hero-buttons">
            <a href="/services" className="button">Nuestros Servicios</a>
            <a href="/contact" className="button">Contacto</a>
          </div>
        </div>
      </section>

      <section className="welcome-section">
        <h2>Bienvenido a Haspert Vaca Estudio Jurídico</h2>
        <p>
          Un equipo de abogados con sede en Córdoba Capital, dedicado a ofrecer soluciones jurídicas eficaces y personalizadas.
          Contamos con profesionales altamente capacitados en Derecho Civil, Laboral, Comercial, de Familia, Internacional y Tributario.
          Nuestra misión es brindar asesoramiento integral con un enfoque cercano, transparente y orientado siempre a defender tus derechos y alcanzar los mejores resultados para cada caso.
        </p>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default LandingPage;
