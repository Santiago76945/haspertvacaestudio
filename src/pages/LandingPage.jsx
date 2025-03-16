// src/pages/LandingPage.jsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact'; // Importamos el componente flotante
import '../styles/landingPage.css';
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

      {/* Sección de Bienvenida */}
      <section className="welcome-section">
        <h2>Bienvenidos a Hasper y Vaca Estudio Jurídico</h2>
        <p>
          Un equipo de abogados con sede en Córdoba Capital, dedicado a ofrecer soluciones jurídicas eficaces y personalizadas. 
          Contamos con profesionales altamente capacitados en Derecho Civil, Laboral, Comercial, de Familia, Internacional y Tributario. 
          Nuestra misión es brindar asesoramiento integral con un enfoque cercano, transparente y orientado siempre a defender tus derechos y alcanzar los mejores resultados para cada caso.
        </p>
      </section>

      <Footer />
      {/* Se añade el componente flotante */}
      <FloatingContact />
    </div>
  );
};

export default LandingPage;
