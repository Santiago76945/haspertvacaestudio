// src/pages/LandingPage.jsx

import React from 'react';
import Header from '../components/Header';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import '../styles/landingPage.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const LandingPage = () => {
  // Obtenemos el idioma del navegador (por ejemplo, "es", "en-US", etc.)
  const lang = navigator.language || navigator.userLanguage;
  const isSpanish = lang.toLowerCase().startsWith('es');

  // Textos en español
  const spanishContent = {
    logoAlt: "Logo VGH Estudio Jurídico en Córdoba Capital",
    h1: "VGH",
    h2: "Estudio Jurídico",
    description:
      "Especializados en Derecho Civil, Administrativo, Laboral, Comercial, Societario y Tributario. Asesoría integral y personalizada en Córdoba Capital.",
    heroButton1: "Ver Servicios",
    heroButton2: "Contactar",
    welcomeHeading: "Bienvenido a VGH Estudio Jurídico",
    welcomeText:
      "Somos un equipo de abogados en Córdoba Capital comprometidos con brindar soluciones legales efectivas y personalizadas. Nos especializamos en Derecho Civil, Administrativo, Laboral, Comercial, Societario y Tributario, ofreciendo un acompañamiento cercano y profesional para defender tus derechos con transparencia, compromiso y excelencia."
  };

  // Textos en inglés
  const englishContent = {
    logoAlt: "VGH Legal Studio Logo in Córdoba Capital",
    h1: "VGH",
    h2: "Legal Studio",
    description:
      "Specialized in Civil, Administrative, Labor, Commercial, Corporate, and Tax Law. Comprehensive and personalized legal advice in Córdoba Capital.",
    heroButton1: "View Services",
    heroButton2: "Contact",
    welcomeHeading: "Welcome to VGH Legal Studio",
    welcomeText:
      "We are a team of lawyers in Córdoba Capital committed to providing effective and personalized legal solutions. We specialize in Civil, Administrative, Labor, Commercial, Corporate, and Tax Law, offering close and professional support to defend your rights with transparency, commitment, and excellence."
  };

  // Seleccionamos el contenido según el idioma del navegador
  const content = isSpanish ? spanishContent : englishContent;

  return (
    <div className="landing-page">
      <Header />

      {/* Sección principal / Main Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <img src={logo} alt={content.logoAlt} className="logo" />

          {/* Títulos en dos líneas */}
          <h1 className="haspert-vaca">{content.h1}</h1>
          <h2 className="estudio-juridico">{content.h2}</h2>

          <p>{content.description}</p>
          <div className="hero-buttons">
            <Link to="/services" className="button">
              {content.heroButton1}
            </Link>
            <Link to="/contact" className="button">
              {content.heroButton2}
            </Link>
          </div>
        </div>
      </section>

      {/* Sección de bienvenida */}
      <section className="welcome-section">
        <h2>{content.welcomeHeading}</h2>
        <p>{content.welcomeText}</p>
      </section>

      {/* Carrusel de reseñas */}
      <Reviews />

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default LandingPage;
