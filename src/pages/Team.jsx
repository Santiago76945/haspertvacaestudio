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
  // Detectamos el idioma del navegador (ej: "es", "en-US", etc.)
  const lang = navigator.language || navigator.userLanguage;
  const isSpanish = lang.toLowerCase().startsWith('es');

  // Definición del contenido en español e inglés
  const content = {
    es: {
      title: "Nuestro Equipo",
      teamMembers: [
        {
          name: "Dr. Joel Roger Vaca",
          image: imagenJoel,
          alt: "Dr. Joel Roger Vaca",
          description:
            "Abogado con extensa y consolidada experiencia en Derecho Civil, Laboral y Comercial. Su reconocida trayectoria profesional lo posiciona como una opción destacada dentro del ámbito jurídico, brindando asesoramiento riguroso, eficaz y orientado a resultados concretos. Su amplio dominio en diversas áreas del Derecho le permite ofrecer soluciones integrales, adaptadas a las necesidades específicas de cada cliente. La confianza y satisfacción de numerosos clientes reflejan claramente su compromiso con la calidad y la excelencia profesional."
        },
        {
          name: "Dr. Santiago Haspert Piaggio",
          image: imagenSantiago,
          alt: "Dr. Santiago Haspert Piaggio",
          description:
            "Abogado especializado en la creación y desarrollo de contenidos pedagógicos digitales en las áreas de Derecho Internacional Público, Derecho Laboral y Derecho Procesal Penal. Sus producciones destacan entre las más reconocidas en el ámbito online, gracias a su calidad académica y claridad expositiva. Cuenta, además, con experiencia docente en la Universidad Blas Pascal, donde integró el equipo académico de la cátedra de Lógica Jurídica con un enfoque orientado a facilitar una comprensión profunda del Derecho de manera sencilla y accesible."
        },
        {
          name: "Dr. Federico Gentile",
          image: imagenFederico,
          alt: "Dr. Federico Gentile",
          description:
            "Abogado especializado en Derecho Empresarial, Administrativo y Constitucional, con sólida formación en Filosofía del Derecho. Su enfoque combina asesoría estratégica y soluciones eficaces, respaldado por un profundo compromiso con la excelencia y la responsabilidad profesional. Su amplia experiencia y perspectiva filosófica aportan una comprensión integral de cada caso, brindando un servicio confiable y de alta calidad."
        }
      ]
    },
    en: {
      title: "Our Team",
      teamMembers: [
        {
          name: "Dr. Joel Roger Vaca",
          image: imagenJoel,
          alt: "Attorney Dr. Joel Roger Vaca",
          description:
            "Attorney with extensive and established experience in Civil, Labor, and Commercial Law. His recognized professional career positions him as a standout option in the legal field, providing rigorous, effective counsel oriented toward concrete results. His broad expertise in various areas of law enables him to offer comprehensive solutions tailored to each client's specific needs. The trust and satisfaction of numerous clients clearly reflect his commitment to quality and professional excellence."
        },
        {
          name: "Dr. Santiago Haspert Piaggio",
          image: imagenSantiago,
          alt: "Attorney Dr. Santiago Haspert Piaggio",
          description:
            "Attorney specialized in creating and developing digital educational content in the fields of Public International Law, Labor Law, and Criminal Procedural Law. His productions are among the most recognized online, thanks to their academic quality and clarity. He also has teaching experience at Blas Pascal University, where he was part of the academic team for the Legal Logic course, focused on facilitating a deep and accessible understanding of the law."
        },
        {
          name: "Dr. Federico Gentile",
          image: imagenFederico,
          alt: "Attorney Dr. Federico Gentile",
          description:
            "Attorney specialized in Business, Administrative, and Constitutional Law, with a solid background in Philosophy of Law. His approach combines strategic advice and effective solutions, backed by a strong commitment to excellence and professional responsibility. His extensive experience and philosophical perspective provide a comprehensive understanding of each case, delivering reliable, high-quality service."
        }
      ]
    }
  };

  // Seleccionamos el contenido según el idioma detectado
  const selectedContent = isSpanish ? content.es : content.en;

  return (
    <div>
      <Header />
      <FloatingContact />
      <section className="team">
        <h2>{selectedContent.title}</h2>
        <div className="team-grid">
          {selectedContent.teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.image} alt={member.alt} />
              <h3>{member.name}</h3>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Team;
