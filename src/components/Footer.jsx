// src/components/Footer.jsx

import React from 'react';
import '../styles/footer.css'; // Importa el archivo CSS

const Footer = () => {
  // Detectamos el idioma del navegador (por ejemplo, "es", "en-US", etc.)
  const lang = navigator.language || navigator.userLanguage;
  const isSpanish = lang.toLowerCase().startsWith('es');

  // Contenidos en español
  const spanishContent = {
    heading: "VGH Estudio Jurídico",
    address: "Dirección: Independencia 387, Ciudad de Córdoba, Argentina",
    phone: "Teléfono: +54 9 3437 55-6773",
    email: "Email: estudioVGH@yahoo.com",
    schedule: "Horario de Atención: Lunes a Viernes de 10:00 a 17:00",
    rights: "Todos los derechos reservados."
  };

  // Contenidos en inglés
  const englishContent = {
    heading: "VGH Legal Studio",
    address: "Address: Independencia 387, Córdoba City, Argentina",
    phone: "Phone: +54 9 3437 55-6773",
    email: "Email: estudioVGH@yahoo.com",
    schedule: "Office Hours: Monday to Friday from 10:00 to 17:00",
    rights: "All rights reserved."
  };

  // Seleccionamos el contenido según el idioma detectado
  const content = isSpanish ? spanishContent : englishContent;

  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>{content.heading}</h3>
        <ul>
          <li>{content.address}</li>
          <li>{content.phone}</li>
          <li>{content.email}</li>
          <li>{content.schedule}</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {content.rights}</p>
      </div>
    </footer>
  );
};

export default Footer;

