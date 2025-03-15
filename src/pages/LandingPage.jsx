// src/pages/LandingPage.jsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/landingPage.css'; // Asegúrate de la ruta correcta
import logo from '../assets/logo.png';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <section className="hero">
        <img src={logo} alt="Logo Haspert Vaca Estudio Jurídico" className="logo" />
        <h2>Haspert Vaca Estudio Jurídico</h2>
        <p>
          Ciudad Córdoba Capital – Derecho Familia, Derecho Laboral, Derecho Civil, Derecho Societario, Derecho Internacional Privado.
        </p>
        <div className="hero-buttons">
          <a href="/services" className="button">Nuestros Servicios</a>
          <a href="/contact" className="button">Contacto</a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;

