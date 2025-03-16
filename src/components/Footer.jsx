// src/components/Footer.jsx

import React from 'react';
import '../styles/footer.css'; // Importa el archivo CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Haspert Vaca Estudio Jurídico</h3>
        <ul>
          <li>Dirección: Av. Lorem Ipsum 123, Barrio Centro, Córdoba</li>
          <li>Teléfono: +54 9 9999-9999</li>
          <li>Email: contacto@haspertvacajuridico.com</li>
          <li>Instagram: @haspertvacajuridico</li>
          <li>Horario de Atención: Lunes a Viernes de 9:00 a 18:00</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
