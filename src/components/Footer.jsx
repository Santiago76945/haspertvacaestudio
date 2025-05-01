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
    address: "Dirección: Calle Chacabuco N° 150, Oficinas 11 y 12 “B”, Centro, Córdoba Capital",
    phone: "Teléfono: +54 9 351 743 2323",
    email: "Email: estudioVGH@yahoo.com",
    schedule: "Horario de Atención: Lunes a jueves de 9:00 a 18:00, Viernes de 9:00 a 14:00, Sábados y domingos cerrado",
    rights: "Todos los derechos reservados."
  };

  // Contenidos en inglés
  const englishContent = {
    heading: "VGH Legal Studio",
    address: "Address: Chacabuco Street 150, Offices 11 and 12 “B”, Downtown, Córdoba Capital, Argentina",
    phone: "Phone: +54 9 351 743 2323",
    email: "Email: estudioVGH@yahoo.com",
    schedule: "Office Hours: Monday to Thursday from 9:00 to 18:00, Friday from 9:00 to 14:00, Saturday and Sunday closed",
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
