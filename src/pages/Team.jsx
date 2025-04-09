// src/pages/Team.jsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import '../styles/team.css';

// Importación de imágenes
import imagenJoel from '../assets/imagen-joel.png';
import imagenSantiago from '../assets/imagen-santiago.png';
import imagenFederico from '../assets/imagen-federico.png';

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
              Abogado especializado en la creación y desarrollo de contenidos pedagógicos digitales en las áreas de Derecho Internacional Público, Derecho Laboral y Derecho Procesal Penal. Sus producciones destacan entre las más reconocidas en el ámbito online, gracias a su calidad académica y claridad expositiva. Cuenta, además, con experiencia docente en la Universidad Blas Pascal, donde integró el equipo académico de la cátedra de Lógica Jurídica con un enfoque orientado a facilitar una comprensión profunda del Derecho de manera sencilla y accesible.
            </p>
          </div>
          <div className="team-member">
            <img src={imagenFederico} alt="Dr. Federico Gentile" />
            <h3>Dr. Federico Gentile</h3>
            <p>
              Abogado especializado en Derecho Administrativo, con sólido conocimiento en procedimientos administrativos, contrataciones públicas y litigios contencioso-administrativos. Su experiencia abarca el asesoramiento integral en trámites ante organismos estatales, defensa en licitaciones y concursos públicos, así como representación eficaz en reclamos por responsabilidad estatal y procedimientos sancionatorios. Su enfoque estratégico garantiza soluciones concretas y la efectiva protección de los derechos e intereses de sus clientes frente a la administración pública.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Team;


