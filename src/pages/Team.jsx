// src/pages/Team.jsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import '../styles/team.css';

// Importación de imágenes
import imagenJoel from '../assets/imagen-joel.png';
import imagenSantiago from '../assets/imagen-santiago.png';

const Team = () => {
  return (
    <div>
      <Header />
      <FloatingContact />
      <section className="team">
        <h2>Nuestro Equipo</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src={imagenJoel} alt="Dr. Joel Roger Vaca" />
            <h3>Dr. Joel Roger Vaca</h3>
            <p>
              Abogado con extensa y consolidada experiencia en Derecho Civil, Laboral y Comercial. Su reconocida trayectoria profesional lo posiciona como una opción destacada dentro del ámbito jurídico, brindando asesoramiento riguroso, eficaz y orientado a resultados concretos. Su amplio dominio en diversas áreas del Derecho le permite ofrecer soluciones integrales, adaptadas a las necesidades específicas de cada cliente. La confianza y satisfacción de numerosos clientes reflejan claramente su compromiso con la calidad y la excelencia profesional.
            </p>
          </div>
          <div className="team-member">
            <img src={imagenSantiago} alt="Dr. Oscar Santiago Haspert Piaggio" />
            <h3>Dr. Oscar Santiago Haspert Piaggio</h3>
            <p>
              Abogado especializado en la creación y desarrollo de contenidos pedagógicos digitales en las áreas de Derecho Internacional Público, Derecho Laboral y Derecho Procesal Penal. Sus producciones destacan entre las más reconocidas y difundidas en el ámbito online, gracias a su calidad académica y claridad expositiva. Cuenta, además, con experiencia docente en la Universidad Blas Pascal (UBP), donde integró el equipo académico de la cátedra de Lógica Jurídica, aportando conocimientos sólidos, rigor conceptual y un enfoque didáctico orientado a facilitar una comprensión profunda del Derecho.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Team;
